import Vue from "vue";
import Vuex from "vuex";

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

function retrieveJPValues(jobList: Array<any>, jpList: Array<number>) {
	for (let entry in jobList) {
		jpList[entry] = jobList[entry].totalJP;
	}
	return;
}

export default new Vuex.Store({
	state: {
		jobs: [],
		JPs: [],
	},
	getters: {
		getTotalJP: (state) => {
			return state.JPs;
		},

		getJobList: (state) => {
			return state.jobs;
		},
	},
	mutations: {
		refundJP(state: any, cost: number) {
			state.JP += cost;
		},

		spendJP(state: any, cost: number) {
			state.JP -= cost;
		},

		setJobJP(state: any, JPList: any) {
			state.JPs = JPList;
		},

		setJobList(state: any, jobList: any) {
			state.jobs = jobList;
		},
	},
	actions: {
		spendJP({ commit }: any, cost: any) {
			commit("spendJP", cost);
		},

		refundJP({ commit }: any, cost: any) {
			commit("refundJP", cost);
		},

		setJobs({ commit }: any, job: any) {
			let jobList: Array<any> = [];
			let jpList: Array<number> = [];
			retrieveJobList(job, jobList);
			commit("setJobList", jobList);

			retrieveJPValues(jobList, jpList);
			commit("setJobJP", jpList);
		},
	},
	modules: {},
	strict: process.env.NODE_ENV !== "production",
});
