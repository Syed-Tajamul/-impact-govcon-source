export const activeTabColor = (activeRoute: string, route: string) => {
	if (activeRoute === route) {
		return "text-red";
	} else {
		return "text-navy";
	}
};
