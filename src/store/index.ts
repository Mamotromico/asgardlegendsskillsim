import Vue from "vue";
import Vuex from "vuex";
import Jobs from "@/components/skill trees";
import { nextTick } from "vue/types/umd";

Vue.use(Vuex);

function retrieveJobList(job: any, jobList: Array<any>) {
	if (job.preRequisite != null) {
		retrieveJobList(job.preRequisite, jobList);
		jobList.push(job);
	} else {
		jobList.push(job);
	}
	return;
}

export default new Vuex.Store({
	state: {
		jobs: [],
		skills: [],
	},
	getters: {
		getJobList: (state: any) => {
			return state.jobs;
		},
		canLevelUp: (state: any) => (tier: number) => {
			let currentTier = tier - 1;
			if (state.jobs[currentTier].availableJP > 0) {
				return true;
			} else if (state.jobs.length > tier) {
				if (state.jobs[tier].availableJP > 0) {
					return true;
				} else {
					return false;
				}
			} else {
				return false;
			}
		},
		hasSkillLevel: (state: any) => (skill: any, level: number) => {
			console.log("Checking skill " + skill);
			console.log("Level to check " + level);
			if (state.skills.length > 0) {
				let skillInState = state.skills.find((sk: any) => {
					if (sk.Name.split(" ").join("") == skill) {
						return true;
					} else {
						return false;
					}
				});
				if (skillInState) {
					if (skillInState.Level >= level) {
						console.log("Returning true");
						return true;
					}
					console.log("Returning false 1");
					return false;
				}
				console.log("Returning false 2");
				return false;
			}
			console.log("Returning false 3");
			return false;
		},
	},
	mutations: {
		updateAvailableJP(state: any, payload: any) {
			let currentTier = payload.tier - 1;
			let nextTier = payload.tier;

			if (payload.cost > 0) {
				if (state.jobs[currentTier].availableJP > 0) {
					state.jobs[currentTier].availableJP -= payload.cost;
				} else {
					state.jobs[nextTier].availableJP -= payload.cost;
				}
			} else if (payload.cost < 0) {
				if (
					state.jobs[currentTier].allocatedJP >
					state.jobs[currentTier].totalJP
				) {
					state.jobs[nextTier].availableJP -= payload.cost;
				} else {
					state.jobs[currentTier].availableJP -= payload.cost;
				}
			}
		},

		updateAllocatedJP(state: any, payload: any) {
			let currentTier = payload.tier - 1;

			state.jobs[currentTier].allocatedJP += payload.cost;
		},

		setJobList(state: any, jobList: any) {
			state.jobs = jobList;
		},

		setAcquiredSkillsList(state: any, payload: any) {
			if (payload.level == 0) {
				if (state.skills.length > 0) {
					if (state.skills.includes(payload.skill)) {
						state.skills.splice(
							state.skills.indexOf(
								state.skills.find((sk: any) => {
									if (sk.Name == payload.skill.Name) {
										return true;
									} else {
										return false;
									}
								})
							),
							1
						);
					}
				}
			} else if (payload.level > 0) {
				if (state.skills.length > 0) {
					if (state.skills.includes(payload.skill)) {
						payload.skill.Level = payload.level;
						state.skills.splice(
							state.skills.indexOf(
								state.skills.find((sk: any) => {
									if (sk.name == payload.skill.Name) {
										return true;
									} else {
										return false;
									}
								})
							),
							1,
							payload.skill
						);
					} else {
						payload.skill.Level = payload.level;
						state.skills.push(payload.skill);
					}
				} else {
					payload.skill.Level = payload.level;
					state.skills.push(payload.skill);
				}
			}
		},
	},
	actions: {
		updateJP({ commit }: any, payload: any) {
			console.log(payload);
			commit("updateAvailableJP", {
				cost: payload.cost,
				tier: payload.tier,
			});
			commit("updateAllocatedJP", {
				cost: payload.cost,
				tier: payload.tier,
			});
			commit("setAcquiredSkillsList", {
				skill: payload.skill,
				level: payload.level,
			});
		},

		setJobs({ commit }: any, job: any) {
			let jobs: any = Jobs;
			let jobList: Array<any> = [];
			retrieveJobList(jobs[job], jobList);
			commit("setJobList", jobList);
		},
	},
	modules: {},
	strict: process.env.NODE_ENV !== "production",
});
