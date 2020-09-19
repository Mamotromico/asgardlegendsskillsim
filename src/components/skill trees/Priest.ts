import { Acolyte } from "./Acolyte";

export const Priest = {
	name: "Priest",
	tier: 2,
	totalJP: 54,
	preRequisite: Acolyte,
	skillTree: {
		Aspersio: {
			AdditionalInfo: "",
			Description: "",
			Form: "",
			FormulaInfo: "",
			MaxLv: 5,
			Name: "Aspersio",
			PreRequisites: [
				{
					ImpositioManus: 3,
				},
				{
					AquaBenedicta: 1,
				},
			],
		},
		BSSacramenti: {
			AdditionalInfo: "",
			Description: "",
			Form: "",
			FormulaInfo: "",
			MaxLv: 5,
			Name: "B.S. Sacramenti",
			PreRequisites: [
				{
					Aspersio: 3,
				},
				{
					Gloria: 3,
				},
			],
		},
		Exorcismus: {
			AdditionalInfo: "",
			Description: "",
			Form: "",
			FormulaInfo: "",
			MaxLv: 5,
			Name: "Exorcismus",
			PreRequisites: [
				{
					Resurrection: 1,
				},
			],
		},
		Gloria: {
			AdditionalInfo: "",
			Description: "",
			Form: "",
			FormulaInfo: "",
			MaxLv: 5,
			Name: "Gloria",
			PreRequisites: [
				{
					Magnificat: 3,
				},
				{
					KyrieEleison: 4,
				},
			],
		},
		ImpositioManus: {
			AdditionalInfo: "",
			Description: "",
			Form: "",
			FormulaInfo: "",
			MaxLv: 5,
			Name: "Impositio Manus",
			PreRequisites: [],
		},
		KyrieEleison: {
			AdditionalInfo: "",
			Description: "",
			Form: "",
			FormulaInfo: "",
			MaxLv: 10,
			Name: "Kyrie Eleison",
			PreRequisites: [
				{
					Angelus: 2,
				},
			],
		},
		LexAeterna: {
			AdditionalInfo: "",
			Description: "",
			Form: "",
			FormulaInfo: "",
			MaxLv: 1,
			Name: "Lex Aeterna",
			PreRequisites: [
				{
					LexDivina: 5,
				},
			],
		},
		LexDivina: {
			AdditionalInfo: "",
			Description: "",
			Form: "",
			FormulaInfo: "",
			MaxLv: 5,
			Name: "Lex Divina",
			PreRequisites: [
				{
					Ruwach: 1,
				},
			],
		},
		Magnificat: {
			AdditionalInfo: "",
			Description: "",
			Form: "",
			FormulaInfo: "",
			MaxLv: 5,
			Name: "Magnificat",
			PreRequisites: [],
		},
		MagnusExorcismus: {
			AdditionalInfo: "",
			Description: "",
			Form: "",
			FormulaInfo: "",
			MaxLv: 1,
			Name: "Magnus Exorcismus",
			PreRequisites: [
				{
					Exorcismus: 1,
				},
			],
		},
		Resurrection: {
			AdditionalInfo: "",
			Description: "",
			Form: "",
			FormulaInfo: "",
			MaxLv: 4,
			Name: "Resurrection",
			PreRequisites: [
				{
					IncreaseSPRecovery: 4,
				},
				{
					StatusRecovery: 1,
				},
			],
		},
		SafetyWall: {
			AdditionalInfo: "",
			Description: "",
			Form: "",
			FormulaInfo: "",
			MaxLv: 10,
			Name: "Safety Wall",
			PreRequisites: [
				{
					Sanctuary: 3,
				},
				{
					Aspersio: 3,
				},
			],
		},
		Sanctuary: {
			AdditionalInfo: "",
			Description: "",
			Form: "",
			FormulaInfo: "",
			MaxLv: 10,
			Name: "Sanctuary",
			PreRequisites: [
				{
					Heal: 1,
				},
			],
		},
		StatusRecovery: {
			AdditionalInfo: "",
			Description: "",
			Form: "",
			FormulaInfo: "",
			MaxLv: 1,
			Name: "Status Recovery",
			PreRequisites: [],
		},
		Suffragium: {
			AdditionalInfo: "",
			Description: "",
			Form: "",
			FormulaInfo: "",
			MaxLv: 3,
			Name: "Suffragium",
			PreRequisites: [
				{
					ImpositioManus: 2,
				},
			],
		},
	},
};
