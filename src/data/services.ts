export interface Service {
	title: string;
	description: string;
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
		| string;
}

export const services: Service[] = [
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
		title: "Vendor Sourcing",
		description:
			"We help identify qualified vendors, subcontractors, suppliers, and service providers that can support government contracting requirements and strengthen contract delivery capabilities.",
		icon: "truck",
	},
	{
		title: "Staffing & Federal Workforce Solutions",
		description:
			"We help government contractors identify and connect with qualified professionals to support contract requirements and business growth.",
		icon: "briefcase",
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
		title: "Contract Financing Readiness",
		description:
			"We help businesses prepare for contract financing by reviewing financial preparedness, documentation, operational planning, and other requirements that may support financing discussions.",
		icon: "dollar",
	},
	{
		title: "Web Development for Contractors",
		description:
			"We provide hands-on web development services to help contractors strengthen their digital presence, communicate their capabilities, and support long-term business growth.",
		icon: "globe",
	},
];

