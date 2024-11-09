function updateCounts() {
    const textArea = document.getElementById('words');
    const text = textArea.value;

    // Count words
    const wordCount = text.trim() ? text.trim().split(/\s+/).length : 0;

    // Count characters without spaces
    const charCount = text.replace(/\s/g, '').length;

    // Update counts in the DOM
    document.getElementById('wordCount').textContent = wordCount;
    document.getElementById('charCount').textContent = charCount;
}