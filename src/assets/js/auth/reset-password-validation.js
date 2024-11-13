function passwordForm() {
    return {
        password: '',
        confirmPassword: '',
        errors: {},

        validateForm() {
            this.errors = {};

            if (!this.password) {
                this.errors.password = "Password is required.";
            } else if (this.password.length < 6) {
                this.errors.password = "Password must be at least 6 characters long.";
            }

            if (!this.confirmPassword) {
                this.errors.confirmPassword = "Confirm Password is required.";
            } else if (this.confirmPassword !== this.password) {
                this.errors.confirmPassword = "Passwords do not match.";
            }

            if (Object.keys(this.errors).length === 0) {
                this.submitForm();
            }
        },
        submitForm() {
            if (Object.keys(this.errors).length === 0) {
                const currentLocation = window.location.href;
                if (currentLocation.includes("auth-reset-password-basic.html"))
                    window.location.href = "auth-successful-password-basic.html";
                else if (currentLocation.includes("auth-reset-password-modern.html"))
                    window.location.href = "auth-successful-password-modern.html";
                else if (currentLocation.includes("auth-reset-password-creative.html"))
                    window.location.href = "auth-successful-password-creative.html";
            }
        }
    };
}

// Initialize Alpine.js component
document.addEventListener('alpine:init', () => {
    Alpine.data('passwordForm', passwordForm);
});
