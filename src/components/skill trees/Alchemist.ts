import { Merchant } from './Merchant';

export const Alchemist = {
	totalJP: 54,
	preRequisites: "Merchant",
	skillTree: {
		LearningPotion: {
			AdditionalInfo: "",
			Description: "",
			Form: "",
			FormulaInfo: "",
			MaxLv: 10,
			Name: "",
			PreRequisites: [],
		},
		Pharmacy: {
			AdditionalInfo: "",
			Description: "",
			Form: "",
			FormulaInfo: "",
			MaxLv: 10,
			Name: "",
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
			Name: "",
			PreRequisites: [],
		},
	},
};
