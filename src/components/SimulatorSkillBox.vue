<template>
	<v-card width="250" :disabled="!meetRequisites">
		<v-container>
			<v-row justify="space-around">
				<v-col align-self="center" cols="auto">
					<v-img min-width="36" :src="getImgSrc()" />
				</v-col>
				<v-col cols="auto">
					<div class="text-center">{{ skill.Name }}</div>
					<div class="text-center">
						<v-btn
							:disabled="level > 0 ? false : true"
							@click="levelDown()"
							icon
							color="red"
						>
							<v-icon> mdi-minus </v-icon>
						</v-btn>
						{{ level }} / {{ skill.MaxLv }}
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
		@Prop(Object) readonly skill!: any;
		@Prop(Number) readonly tier!: number;
		@Prop(Array) readonly requisites!: any;

		level = 0;

		get canLevelUp(): boolean {
			return (
				this.$store.getters.canLevelUp(this.tier) &&
				this.level < this.skill.MaxLv
			);
		}

		get meetRequisites(): boolean {
			return this.requisites.every((entry: any, index: number) => {
				return this.$store.getters.hasSkillLevel(
					Object.keys(entry)[index],
					Object.values(entry)[index]
				);
			});
		}

		getImgSrc() {
			return require("@/assets/" +
				this.skill.Name.split(" ").join("_") +
				".png");
		}

		levelUp() {
			this.$store
				.dispatch("updateJP", {
					cost: 1,
					tier: this.tier,
					skill: this.skill,
					level: this.level + 1,
				})
				.then(() => {
					this.level += 1;
				});
		}

		levelDown() {
			this.$store
				.dispatch("updateJP", {
					cost: -1,
					tier: this.tier,
					skill: this.skill,
					level: this.level - 1,
				})
				.then(() => {
					this.level -= 1;
				});
		}
	}
</script>

<style lang="scss" scoped></style>
