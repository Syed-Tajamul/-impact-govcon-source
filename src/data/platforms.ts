export interface PlatformCategory {
	label: string;
	items: string[];
}

export const platformCategories: Record<string, PlatformCategory> = {
	federal: {
		label: "Federal Systems",
		items: [
			"SAM.gov",
			"GovWin IQ",
			"eBuy / GSA Advantage",
			"FPDS",
			"USASpending.gov",
			"FedConnect",
			"DIBBS",
			"PIEE",
		],
	},
	delivery: {
		label: "Delivery Tools",
		items: [
			"Deltek Costpoint",
			"Salesforce",
			"SharePoint",
			"Adobe Acrobat",
			"Microsoft Project",
			"Smartsheet",
			"Wrike",
			"Tableau",
		],
	},
};
