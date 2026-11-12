export interface Service {
	title: string;
	description: string;
	servicePageTitle?: string;
	servicePageSubtitle?: string;
	servicePageDescription?: string;
	icon:
		| "target"
		| "briefcase"
		| "check"
		| "checkShield"
		| "dollar"
		| "document"
		| "compass"
		| "users"
		| "truck"
		| "globe"
		| "badgeCheck"
		| string;
}

export const services: Service[] = [
	{
		title: "Fed Ready: Government Contracting Readiness",
		description:
			"We get new and growing businesses registered, positioned and prepared to compete for federal opportunities, so you can start bidding with confidence.",
		servicePageTitle: "Fed Ready Program",
		servicePageSubtitle: "Everything you need before your first bid",
		servicePageDescription:
			"Many capable businesses lose out on government contracts before they ever submit a proposal. Their registrations are incomplete, their codes don't match what they sell, or their story isn't clear to the buyer. Fed Ready fixes that.",
		icon: "badgeCheck",
	},
	{
		title: "Opportunity Research & Business Development",
		description:
			"We identify and qualify relevant federal, state, local, and education contracting opportunities while using market intelligence to guide focused business development strategies.",
		icon: "target",
	},
	{
		title: "Capability Statement Development",
		description:
			"We help government contractors create professional, focused capability statements that clearly communicate their core competencies, differentiators, experience, and target markets.",
		icon: "document",
	},
	{
		title: "Capture Management",
		description:
			"We help organizations evaluate opportunities, understand customer requirements, identify competitors, develop win strategies, and position their capabilities before a solicitation is released.",
		icon: "compass",
	},
	{
		title: "Teaming & Subcontracting Support",
		description:
			"We facilitate strategic teaming conversations between companies with complementary capabilities, helping businesses explore subcontracting, joint pursuit, and partnership opportunities.",
		icon: "users",
	},
	{
		title: "Proposal Development",
		description:
			"From solicitation analysis to final submission, we support the development of clear, compliant, and compelling proposals aligned with agency requirements and evaluation criteria.",
		icon: "check",
	},
	{
		title: "Proposal Reviews",
		description:
			"Our proposal review services help identify gaps, strengthen key sections, improve responsiveness, and ensure your submission presents a consistent and persuasive solution.",
		icon: "checkShield",
	},
	{
		title: "Web Development for Contractors",
		description:
			"We provide hands-on web development services to help contractors strengthen their digital presence, communicate their capabilities, and support long-term business growth.",
		icon: "globe",
	},
];
