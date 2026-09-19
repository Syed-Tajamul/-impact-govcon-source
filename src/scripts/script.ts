import Alpine from "alpinejs";
import { caseStudies } from "../data/caseStudies";

const isInputValid = (errors: { [key: string]: boolean }) => {
	return Object.entries(errors).filter((v) => v);
};

const isValidEmail = (email: string) => {
	const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
	return emailRegex.test(email);
};

document.addEventListener("alpine:init", () => {
	Alpine.data("initializeScript", () => ({
		activeIndex: 0,
		caseStudies: [] as typeof caseStudies,
		errors: {} as { [key: string]: boolean },
		submitted: false,

		// Contact form fields
		name: "",
		email: "",
		phone: "",
		company: "",
		message: "",

		initializeCaseStudies() {
			this.caseStudies = caseStudies;
		},
		nextCase() {
			this.activeIndex = (this.activeIndex + 1) % this.caseStudies.length;
		},
		prevCase() {
			this.activeIndex =
				(this.activeIndex - 1 + this.caseStudies.length) %
				this.caseStudies.length;
		},

		submitContact() {
			const requiredFields: Array<"name" | "email" | "phone" | "message"> = [
				"name",
				"email",
				"phone",
				"message",
			];
			this.errors = {};
			for (const field of requiredFields) {
				if (field === "email" && !isValidEmail(this.email)) {
					this.errors[field] = true;
					break;
				}
				if (!this[field]) {
					this.errors[field] = true;
					break;
				}
			}
			const filteredErrors = isInputValid(this.errors);
			if (!filteredErrors.length) {
				this.submitted = true;
			}
		},
	}));
});
