function app() {
    return {
        charCount: 0,
        updateTextarea(textarea) {
            textarea.style.height = 'auto';
            textarea.style.height = (textarea.scrollHeight + 4) + 'px'; 
            this.charCount = textarea.value.length; 
        }
    };
}