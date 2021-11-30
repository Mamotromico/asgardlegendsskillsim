<template>
	<v-container>
		<v-expansion-panels v-model="jobPanels" multiple>
			<v-expansion-panel v-for="jobEntry in jobList" :key="jobEntry.name">				
				<v-expansion-panel-header>
					<v-row justify="space-around">
						<v-col cols=auto>
							Total Skill Points: {{ jobEntry.availableJP }}
						</v-col>
						<v-col cols=auto>
							{{jobEntry.name}}
						</v-col>
					</v-row>
				</v-expansion-panel-header>
				<v-expansion-panel-content>
					<v-row justify="center">
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
					</v-row>
				</v-expansion-panel-content>
			</v-expansion-panel>
		</v-expansion-panels>
	</v-container>	
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

		jobPanels = [];

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
