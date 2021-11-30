<template>
	<v-app>
		<v-app-bar app>
			<SimulatorToolbar />
		</v-app-bar>
		<v-main>
			<v-container fluid>
				<router-view />
			</v-container>
		</v-main>
	</v-app>
</template>

<script lang="ts">
	import Vue from "vue";
	import Component from "vue-class-component";
	import SimulatorToolbar from "@/components/SimulatorToolbar.vue";

	@Component({
		components: {
			SimulatorToolbar,
		},
	})
	export default class App extends Vue {}
</script>

<style lang="scss" scoped></style>
