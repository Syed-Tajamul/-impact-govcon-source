export interface TeamMemberType {
	name: string;
	role: string;
	bio: string;
	img: string;
}

export const teamMembers: TeamMemberType[] = [
	{
		name: "Mudassar Malik",
		role: "Founder",
		bio: "Mudassar Malik is the Founder of Impact GovCon Solutions LLC, where he helps businesses pursue, compete, and grow in the U.S. government contracting market. His work focuses on federal opportunity research, capture strategy, proposal support, lead generation, teaming, and subcontracting support. With experience across finance, RFP support, cloud computing, Mudassar brings a practical, business-focused approach to helping contractors move forward with confidence.",
		img: "/team/mudassar.jpg",
	},
	{
		name: "Mudasir Hafiz",
		role: "Co-Founder",
		bio: "Mudasir Hafiz leads the technical execution teams, specializing in Cloud, ServiceNow, and Cybersecurity solutions. His focus on white-label delivery ensures partners maintain brand integrity while benefiting from scalable, high-rigor technical capacity.",
		img: "/team/mudasir.jpg",
	},
];
