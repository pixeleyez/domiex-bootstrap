//Gender select
VirtualSelect.init({
    ele: "#genderSelect",
    options: [
        { label: "Male", value: "Male" },
        { label: "Female", value: "Female" },
        { label: "Others", value: "Others" },
    ],
});

window.intCodesComponent = function () {
    return {
        intCodes: [],
        selectedDialCode: '',
        selectedFormat: '',
        maskInstance: null,

        initialize() {
            fetch('assets/json/country-code.js')
                .then(response => response.json())
                .then(data => {
                    this.intCodes = data;
                    if (this.intCodes.length > 0) {
                        this.selectedDialCode = this.intCodes[0].dial_code;
                        this.selectedFormat = this.intCodes[0].format;
                        this.applyMask();
                    }
                })
                .catch(error => {
                    console.error('Error loading country codes:', error);
                });
        },

        onSelectChangeHandler() {
            const selectedCountry = this.intCodes.find(country => country.dial_code === this.selectedDialCode);
            if (selectedCountry) {
                this.selectedFormat = selectedCountry.format;
                this.applyMask();
            }
        },

        applyMask() {
            if (this.maskInstance) {
                this.maskInstance.destroy();
            }
            if (this.$refs.phoneInput) {
                this.maskInstance = IMask(this.$refs.phoneInput, {
                    mask: this.selectedFormat
                        .replace(/0/g, '0')
                        .replace(/9/g, '0')
                        .replace(/A/g, 'A*') // Allow multiple alphabetic characters
                });
            }
        }
    }
}