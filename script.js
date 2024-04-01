document.addEventListener('DOMContentLoaded', function() {
    const dropdownBtn = document.querySelector('.dropdown-btn');
    const dropdownContent = document.querySelector('.dropdown-content');

    // Toggle dropdown menu when dropdown button is clicked
    dropdownBtn.addEventListener('click', function() {
        dropdownContent.classList.toggle('show');
    });

    // Close dropdown menu when clicking outside of it
    window.addEventListener('click', function(event) {
        if (!event.target.matches('.dropdown-btn')) {
            const dropdowns = document.querySelectorAll('.dropdown-content');
            dropdowns.forEach(function(dropdown) {
                if (dropdown.classList.contains('show')) {
                    dropdown.classList.remove('show');
                }
            });
        }
    });

    // Add smooth scrolling to navigation links
    const navLinksList = document.querySelectorAll('.dropdown-content a');
    navLinksList.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault(); // Prevent default link behavior
            const targetSectionId = link.getAttribute('href').substring(1); // Get target section ID
            const targetSection = document.getElementById(targetSectionId); // Get target section element
            if (targetSection) {
                // Scroll to the target section smoothly
                targetSection.scrollIntoView({
                    behavior: 'smooth'
                });
                // Close the dropdown menu after clicking on a link
                dropdownContent.classList.remove('show');
            }
        });
    });
});
