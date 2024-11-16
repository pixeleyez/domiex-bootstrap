
function chatApp() {
  return {
    messages: [
      { id: 1, text: 'Hello! How can I help you with your marketing strategy?', isSender: false },
      { id: 2, text: 'I need assistance in updating our marketing plan for the upcoming quarter.', isSender: true },
      { id: 3, text: 'Sure, let\'s review your current strategy first.', isSender: false },
      { id: 4, text: 'Here is the current plan...', isSender: true }
    ],
    newMessage: '',

    sendMessage() {
      if (this.newMessage.trim() !== '') {
        this.messages.push({
          id: this.messages.length + 1,
          text: this.newMessage,
          isSender: true
        });

        setTimeout(() => {
          this.messages.push({
            id: this.messages.length + 1,
            text: 'Let\'s discuss the plan in detail.',
            isSender: false
          });
        }, 1000);

        this.newMessage = '';
      }
    }
  };
}
