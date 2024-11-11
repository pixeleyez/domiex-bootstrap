function data() {
    return {
        search: "let's try this",
        wordCount: 0,
        charCount: 0,
        countWords() {
            this.wordCount = this.search.trim().split(/\s+/).length;
        },
        countChars() {
            this.charCount = this.search.split(/\s+/).join("").split("").length;
        }
    };
}

// Initialize Alpine.js
document.addEventListener('alpine:init', () => {
    Alpine.data('data', data);
});