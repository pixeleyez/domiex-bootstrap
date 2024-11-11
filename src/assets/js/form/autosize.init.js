function app() {
    return {
        charCount: 0,
        updateTextarea: function (el) {
            this.resizeTextarea(el);
            this.updateCharCount(el);
        },
        resizeTextarea: function (el) {
            el.style.height = 'auto';  // Reset height
            el.style.height = el.scrollHeight + 4 + 'px';  // Adjust height based on scrollHeight
        },
        updateCharCount: function (el) {
            this.charCount = el.value.length;
        },
        resizeObserver: function (el, tx) {
            const self = this;
            const resizeObserver = new ResizeObserver(function () {
                self.resizeTextarea(tx);
            });
            resizeObserver.observe(el);
        }
    }
}

// Initialize Alpine.js
document.addEventListener('alpine:init', () => {
    Alpine.data('app', app);
});