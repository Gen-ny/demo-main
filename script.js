document.addEventListener('DOMContentLoaded', () => {
    // Get the hamburger menu and the navigation bar elements by their IDs
    const hamburger = document.getElementById('hamburger-menu');
    const navBar = document.getElementById('nav-bar');

    // Check if both elements exist to avoid errors
    if (hamburger && navBar) {
        // Add a click event listener to the hamburger menu icon
        hamburger.addEventListener('click', () => {
            // Toggle the 'active' class on the navigation bar
            // This class will show/hide the menu based on the CSS
            navBar.classList.toggle('active');
        });
    }
});             