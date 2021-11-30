<template>
	<div>
		<SimulatorSkillTree :jobName="$route.params.job"></SimulatorSkillTree>
	</div>
</template>

<script>
	import Vue from "vue";
	import Component from "vue-class-component";
	import SimulatorSkillTree from "@/components/SimulatorSkillTree";

	@Component({
		components: {
			SimulatorSkillTree,
		},
	})
	export default class Simulator extends Vue {}
</script>

<style lang="scss" scoped></style>
