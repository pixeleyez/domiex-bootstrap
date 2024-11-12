function loginForm() {
    return {
        email: 'admin@pixeleyez.com',
        password: 'admin@123',
        showSuccess: false, 
        showError: false, 


        submitForm() {
          
            if (this.email === 'admin@pixeleyez.com' && this.password === 'admin@123') {
                this.showSuccess = true;
                this.showError = false;
                
             
                setTimeout(() => {
                    window.location.href = 'index.html';
                }, 1000); 
            } else {
                this.showError = true;
                this.showSuccess = false;
            }
        }
    }
}