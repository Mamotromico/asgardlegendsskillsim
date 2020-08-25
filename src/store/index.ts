import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
	state: {
		totalJP: 0,
		skillTree: {},
	},
	getters: {
		getTotalJP: (state) => {
			return state.totalJP;
		},
	},
	mutations: {
		spendJP(state: { totalJP: number }, payload: { cost: number }) {
			state.totalJP -= payload.cost;
		},
		refundJP(state: { totalJP: number }, payload: { cost: number }) {
			state.totalJP += payload.cost;
		},
		setJP(state: { totalJP: number }, payload: { total: number }) {
			state.totalJP = payload.total;
		},
	},
	actions: {
		spendJP({ commit }: any, payload: any) {
			commit(payload);
		},
		refundJP({ commit }: any, payload: any) {
			commit(payload);
		},
		setJP({ commit }: any, payload: any) {
			commit(payload);
		},
	},
	modules: {},
	strict: process.env.NODE_ENV !== "production",
});
