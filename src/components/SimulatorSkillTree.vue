<template>
	<v-row>
		<template v-for="(jobEntry, index) in jobList">
			<v-col cols="12" :key="jobEntry.tier">
				Total Skill Points: {{ total[index] }}
			</v-col>
			<v-col
				cols="auto"
				v-for="skill in jobEntry.skillTree"
				:key="skill.Name"
			>
				<SimulatorSkillBox
					:tier="jobEntry.tier"
					:name="skill.Name"
					:maxLevel="skill.MaxLv"
				/>
			</v-col>
			<v-col cols="12" :key="jobEntry.tier">
				<v-divider />
			</v-col>
		</template>
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

		Jobs: any = Jobs;

		get job() {
			return this.Jobs[this.jobName];
		}

		get jobList() {
			return this.$store.getters.getJobList;
		}

		get total() {
			return this.$store.getters.getTotalJP;
		}

		mounted() {
			this.$store.dispatch("setJobs", this.job);
		}
	}
</script>

<style lang="scss" scoped></style>
