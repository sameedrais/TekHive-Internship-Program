/* Add this to a new JavaScript file, or in a script tag in your HTML file */

// Get the hamburger icon and the navigation menu
var icon = document.querySelector('.navbar-icon');
var nav = document.querySelector('nav ul');

// Add a click event listener to the hamburger icon
icon.addEventListener('click', function() {
    // Toggle the display of the navigation menu
    if (nav.style.display === 'none') {
        nav.style.display = 'block';
    } else {
        nav.style.display = 'none';
    }
});