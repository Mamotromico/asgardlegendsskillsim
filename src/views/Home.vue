<template>
	<div>
		<router-link to="/sim/Merchant">Merchant</router-link>
		<router-link to="/sim/Acolyte">Acolyte</router-link>
		<router-link to="/sim/Alchemist">Alchemist</router-link>
		<router-link to="/sim/Priest">Priest</router-link>
	</div>
</template>

<script>
	import Vue from "vue";
	import Component from "vue-class-component";

	@Component
	export default class Home extends Vue {}
</script>

<style lang="scss" scoped></style>
