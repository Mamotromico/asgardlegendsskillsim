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
