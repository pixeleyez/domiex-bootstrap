// Function to show the mail section
function showMailBox(event) {
    event.preventDefault(); // Prevent default behavior if this is a link click
    
    // Show the mail section
    const mailSection = document.getElementById('mailSection');
    mailSection.style.display = 'block'; // Make mail section visible
    
    // Optionally scroll to the mail section
    mailSection.scrollIntoView({ behavior: 'smooth' });
}

// Function to hide the mail section (close mailbox)
function hideMailBox(event) {
    event.preventDefault(); // Prevent the default link behavior
    
    // Hide the mail section
    const mailSection = document.getElementById('mailSection');
    mailSection.style.display = 'none'; // Hide mail section
}