export interface CaseStudyItem {
	tag: string;
	title: string;
	description: string;
	img?: string;
}

export const caseStudies: CaseStudyItem[] = [
	{
		tag: "Capture Management",
		title: "Federal Opportunity Research & Pipeline Development",
		description:
			"A small business needed to identify relevant federal opportunities. We implemented a systematic research framework, aligning their capabilities with upcoming solicitations and building a robust, qualified pipeline.",
		img: "/case/proposal-review.jpg",
	},
	{
		tag: "Compliance Review",
		title: "Red Team Proposal Review Before Submission",
		description:
			"A prime contractor faced a complex RFP. We conducted a rigorous red-team review, identifying compliance gaps and strengthening their technical responses, ensuring a polished, compliant submission.",
		img: "/case/redteam.png",
	},
	{
		tag: "Digital Presence",
		title: "GovCon Website & Digital Presence Improvement",
		description:
			"A growing subcontractor needed to enhance their online presence for federal clients. We optimized their website for compliance and capability showcasing, improving visibility and credibility.",
		img: "/case/digital.png",
	},
	{
		tag: "Financial Readiness",
		title: "Contract Financing Readiness Support",
		description:
			"A tech firm secured a large federal contract but required financing expertise. We guided them through readiness assessments and connected them with specialized resources, facilitating smoother contract execution.",
		img: "/case/financing.png",
	},
];
