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
		isSubmitting: false,
		submitError: "",

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

		async submitContact() {
			const requiredFields: Array<"name" | "email" | "phone" | "message"> = [
				"name",
				"email",
				"phone",
				"message",
			];
			this.errors = {};
			this.submitError = "";
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
				this.isSubmitting = true;
				try {
					const accessKeys = [
						"6cddef15-7130-40c6-aaf5-6efc21c1a317",
						"87e211e0-a510-4b1e-9743-6e54b43afb04",
					];

					const payload = {
						name: this.name,
						email: this.email,
						phone: this.phone,
						company: this.company || "Not specified",
						message: this.message,
						from_name: "Impact GovCon Website Form",
						subject: "New Inquiry from " + this.name + " (" + (this.company || "Impact GovCon Website") + ")",
					};

					const requests = accessKeys.map((key) =>
						fetch("https://api.web3forms.com/submit", {
							method: "POST",
							headers: {
								"Content-Type": "application/json",
								Accept: "application/json",
							},
							body: JSON.stringify({
								access_key: key,
								...payload,
							}),
						}).then((res) => res.json())
					);

					const results = await Promise.all(requests);
					const hasSuccess = results.some((r) => r.success);

					if (hasSuccess) {
						this.submitted = true;
					} else {
						this.submitError =
							results[0]?.message || "Something went wrong. Please try again.";
					}
				} catch (error) {
					this.submitError = "Failed to send message. Please check your network and try again.";
				} finally {
					this.isSubmitting = false;
				}
			}
		},
	}));
});
