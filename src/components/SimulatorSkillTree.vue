<template>
	<v-row>
		<template v-for="jobEntry in jobList">
			<v-col cols="12" :key="jobEntry.tier">
				Total Skill Points: {{ jobEntry.availableJP }}
			</v-col>
			<v-col
				cols="auto"
				v-for="skill in jobEntry.skillTree"
				:key="skill.Name"
			>
				<SimulatorSkillBox
					:tier="jobEntry.tier"
					:skill="skill"
					:requisites="skill.PreRequisites"
				/>
			</v-col>
			<v-col cols="12" :key="jobEntry.tier + 5">
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

	@Component({
		components: {
			SimulatorSkillBox,
		},
	})
	export default class SimulatorSkillTree extends Vue {
		@Prop(String) readonly jobName!: string;

		get job() {
			return this.jobList.slice(-1).pop();
		}

		get jobList() {
			return this.$store.getters.getJobList;
		}

		mounted() {
			this.$store.dispatch("setJobs", this.jobName);
		}
	}
</script>

<style lang="scss" scoped></style>
