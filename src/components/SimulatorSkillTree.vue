<template>
	<v-row>
		<v-col cols="12">
			Total Skill Points: {{ this.$store.getters.getTotalJP }}
		</v-col>
		<v-col
			cols="auto"
			v-for="skill in jobList[jobName].skillTree"
			:key="skill.Name"
		>
			<SimulatorSkillBox :name="skill.Name" :maxLevel="skill.MaxLv" />
		</v-col>
	</v-row>
</template>

<script lang="ts">
	import Vue from "vue";
	import Component from "vue-class-component";
	import { Prop } from "vue-property-decorator";
	import SimulatorSkillBox from "./SimulatorSkillBox.vue";
	import Jobs from "@/components/skill trees";

	@Component({
		components: {
			SimulatorSkillBox,
		},
	})
	export default class SimulatorSkillTree extends Vue {
		@Prop(String) readonly jobName!: string;

		jobList: {[key:string]: {
			totalJP: number,
			preRequisites: string,
			skillTree: object
		}} = Jobs;

		get total() {
			return this.jobList[this.jobName].totalJP;
		}

		mounted() {
			this.$store.dispatch({
				type: "setJP",
				total: this.total,
			});
			console.log(this.$store.getters.getTotalJP);
		}
	}
</script>

<style lang="scss" scoped></style>
