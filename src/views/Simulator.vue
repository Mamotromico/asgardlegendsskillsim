<template>
	<div class="sim">
		<SimulatorToolbar></SimulatorToolbar>
		<SimulatorSkillTree></SimulatorSkillTree>
		<SimulatorInfo></SimulatorInfo>
	</div>
</template>

<script>
import Vue from "vue";
import Component from "vue-class-component";
import SimulatorToolbar from "@/components/SimulatorToolbar.vue";

@Component
export default class Simulator extends Vue {}
</script>

<style lang="scss" scoped></style>
