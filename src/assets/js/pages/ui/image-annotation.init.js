document.getElementById('comment-input').addEventListener('keydown', function (event) {
    if (event.key === 'Enter') {
        const commentText = this.value.trim();

        if (commentText) {
            const newComment = document.createElement('p');
            newComment.className = 'px-4 py-2';
            newComment.textContent = commentText;

            document.querySelector('.comment-box').insertBefore(newComment, this);
            this.value = '';
        }
    }
});
