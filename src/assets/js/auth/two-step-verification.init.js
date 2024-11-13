class OTPForm {
    constructor(formId) {
        this.form = document.getElementById(formId);
        this.inputs = [...this.form.querySelectorAll('.otp-input')];
        this.submitButton = this.form.querySelector('button[type=submit]');
        this.setupListeners();
    }

    handleKeyDown = (e) => {
        if (
            !/^[0-9]{1}$/.test(e.key)
            && e.key !== 'Backspace'
            && e.key !== 'Delete'
            && e.key !== 'Tab'
            && !e.metaKey
        ) {
            e.preventDefault();
        }

        // Backspace / Delete logic to move focus
        if (e.key === 'Backspace' || e.key === 'Delete') {
            const index = this.inputs.indexOf(e.target);
            if (index > 0) {
                this.inputs[index - 1].value = '';
                this.inputs[index - 1].focus();
            }
        }
    }

    handleInput = (e) => {
        const { target } = e;
        const index = this.inputs.indexOf(target);

        if (target.value && index < this.inputs.length - 1) {
            this.inputs[index + 1].focus();
        } else if (target.value && index === this.inputs.length - 1) {
            this.submitButton.focus();
        }
    }

    handleFocus = (e) => {
        e.target.select(); // Select the content on focus (optional)
    }

    handlePaste = (e) => {
        e.preventDefault();
        const text = e.clipboardData.getData('text');
        if (!/^\d{6}$/.test(text)) return;  // Only allow 6 digits
        const digits = text.split('');
        this.inputs.forEach((input, index) => input.value = digits[index]);
        this.submitButton.focus();
    }

    setupListeners() {
        this.inputs.forEach((input) => {
            input.addEventListener('input', this.handleInput);
            input.addEventListener('keydown', this.handleKeyDown);
            input.addEventListener('focus', this.handleFocus);
            input.addEventListener('paste', this.handlePaste);
        });
    }
}

// Create an instance of the OTPForm class for the OTP form
const otpForm1 = new OTPForm('otp-form1');