<template>
	<v-row>
		<v-col cols="12">
			Total Skill Points: {{ this.$store.getters.getTotalJP }}
		</v-col>
		<v-col cols="auto" v-for="skill in skillTree" :key="skill.Name">
			<SimulatorSkillBox :name="skill.Name" :maxLevel="skill.MaxLv" />
		</v-col>
	</v-row>
</template>

<script lang="ts">
	import Vue from "vue";
	import Component from "vue-class-component";
	import { Acolyte } from "./skill trees/Acolyte";
	import SimulatorSkillBox from "./SimulatorSkillBox.vue";

	@Component({
		components: {
			SimulatorSkillBox,
		},
	})
	export default class SimulatorSkillTree extends Vue {
		skillTree = Acolyte.skillTree;

		mounted() {
			this.$store.dispatch({
				type: "setJP",
				total: Acolyte.totalJP,
			});
			console.log(this.$store.getters.getTotalJP)
		}
	}
</script>

<style lang="scss" scoped></style>
