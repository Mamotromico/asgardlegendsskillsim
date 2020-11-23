<template>
	<v-card width="250" :disabled="disabled">
		<v-container>
			<v-row>
				<v-col align-self="center" cols="auto">
					<v-img min-width="36" :src="getImgSrc(name)" />
				</v-col>
				<v-col cols="auto">
					<div class="text-center">{{ name }}</div>
					<div class="text-center">
						<v-btn
							:disabled="level > 0 ? false : true"
							@click="levelDown()"
							icon
							color="red"
						>
							<v-icon> mdi-minus </v-icon>
						</v-btn>
						{{ level }} / {{ maxLevel }}
						<v-btn
							:disabled="!canLevelUp"
							@click="levelUp()"
							icon
							color="green"
						>
							<v-icon> mdi-plus </v-icon>
						</v-btn>
					</div>
				</v-col>
			</v-row>
		</v-container>
	</v-card>
</template>

<script lang="ts">
	import Vue from "vue";
	import Component from "vue-class-component";
	import { Prop } from "vue-property-decorator";

	@Component({})
	export default class SimulatorSkillBox extends Vue {
		@Prop(String) readonly name!: string;
		@Prop(Number) readonly maxLevel!: number;
		@Prop(Number) readonly tier!: number;
		@Prop(Boolean) readonly disabled!: boolean;

		level = 0;

		get skillName(): string {
			return this.name;
		}

		get canLevelUp(): boolean {
			return (
				this.$store.getters.canLevelUp(this.tier) &&
				this.level < this.maxLevel
			);
		}

		getImgSrc(name: string) {
			return require("@/assets/" +
				this.skillName.split(" ").join("_") +
				".png");
		}

		levelUp() {
			this.$store
				.dispatch("updateJP", { cost: 1, tier: this.tier })
				.then(() => {
					this.level += 1;
				});
		}

		levelDown() {
			this.$store
				.dispatch("updateJP", { cost: -1, tier: this.tier })
				.then(() => {
					this.level -= 1;
				});
		}
	}
</script>

<style lang="scss" scoped></style>
