export interface Service {
	title: string;
	description: string;
	icon: "target" | "briefcase" | "check" | "checkShield" | "dollar";
}

export const services: Service[] = [
	{
		title: "Opportunity Research & BD",
		description:
			"Identify and qualify federal opportunities, leveraging market intelligence to inform business development strategies.",
		icon: "target",
	},
	{
		title: "Capture Management & Teaming",
		description:
			"Develop winning capture plans, build strategic partnerships, and navigate complex teaming agreements.",
		icon: "briefcase",
	},
	{
		title: "Professional Proposal Development",
		description:
			"We help U.S. government contractors develop clear, compliant, and competitive proposals from solicitation review through submission readiness.",
		icon: "check",
	},
	{
		title: "Proposal Red-Team Review",
		description:
			"Ensure compliance and strengthen proposal narratives with our rigorous, outcome-neutral red-team review process.",
		icon: "checkShield",
	},
	{
		title: "Contract Financing Readiness",
		description:
			"Prepare for contract financing, ensuring your business meets the necessary financial and compliance benchmarks.",
		icon: "dollar",
	},
];
