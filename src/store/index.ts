import Vue from "vue";
import Vuex, { mapGetters } from "vuex";
import Jobs from "@/components/trees";

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

function hasSkillLevel(skills: any, skill: any, level: number) {
	if (skill in skills && skills[skill] >= level) {
		return true;
	}
	return false;
}

export default new Vuex.Store({
	state: {
		jobs: [],
		skills: {},
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
		hasSkillLevel: (state: any) => (skill: any, level: number): boolean => {
			return hasSkillLevel(state, skill, level)
		},
		build: (state: any) => {
			return state.skills;
		},
		hasPreRequisites: (state: any) => (requisites: Array<{Name: string, leve: number}>): boolean => {
			return requisites.every((entry) => {
				return hasSkillLevel(state.skills, entry.Name, entry.leve);
			});
		}
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
			let skillNameCC = payload.skill.Name.split(" ").join("")
			let skillRef = {name: skillNameCC, level: payload.level};
			if (skillRef.level == 0) {
				if (Object.keys(state.skills).length > 0) {
					if (skillRef.name in state.skills) {
						delete state.skills[skillRef.name];
					}
				}
			} else if (skillRef.level > 0) {
				if (Object.keys(state.skills).length > 0) {
					if (skillRef.name in state.skills) {
						state.skills = {...state.skills, [skillRef.name]: skillRef.level}
					} else {
						state.skills = {...state.skills, [skillRef.name]: skillRef.level}
					}
				} else {
					state.skills = {...state.skills, [skillRef.name]: skillRef.level}
				}
			}
		},
	},
	actions: {
		updateJP({ commit }: any, payload: any) {
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
			console.log(this.state);
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
