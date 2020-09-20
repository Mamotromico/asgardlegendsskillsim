import { Merchant } from "./Merchant";

export const Alchemist = {
	name: "Alchemist",
	tier: 2,
	totalJP: 54,
	allocatedJP: 0,
	availableJP: 54,
	preRequisite: Merchant,
	skillTree: {
		LearningPotion: {
			AdditionalInfo: "",
			Description: "",
			Form: "",
			FormulaInfo: "",
			MaxLv: 10,
			Name: "Learning Potion",
			PreRequisites: [],
		},
		Pharmacy: {
			AdditionalInfo: "",
			Description: "",
			Form: "",
			FormulaInfo: "",
			MaxLv: 10,
			Name: "Pharmacy",
			PreRequisites: [
				{
					LearningPotion: 5,
				},
			],
		},
		SphereMine: {
			AdditionalInfo: "",
			Description: "",
			Form: "",
			FormulaInfo: "",
			MaxLv: 1,
			Name: "Sphere Mine",
			PreRequisites: [],
		},
	},
};
