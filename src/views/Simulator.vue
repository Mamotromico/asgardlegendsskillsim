<template>
	<div>
		<!-- <SimulatorToolbar></SimulatorToolbar> -->
		<simulator-skill-tree></simulator-skill-tree>
		<!-- <SimulatorInfo></SimulatorInfo> -->
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
