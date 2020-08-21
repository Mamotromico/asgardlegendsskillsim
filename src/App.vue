<template>
	<v-app>
		<v-app-bar app>
			<router-link to="/">Home</router-link>
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

@Component({})
export default class App extends Vue {}
</script>

<style lang="scss" scoped></style>
