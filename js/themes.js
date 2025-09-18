const rootElement = document.documentElement;

// Mobile menu toggle
document.getElementById('mobile-menu-button').addEventListener('click', function() {
    const menu = document.getElementById('mobile-menu');
    menu.classList.toggle('hidden');
});

// Theme toggle function
function setTheme() {
    const newTheme = rootElement.classList.contains("dark") ? "light" : "dark";

    const icon = document.getElementById('theme-icon');
    const mobileIcon = document.getElementById('theme-icon-mobile');
    //document.body.classList.contains('light-theme') &&

    if (newTheme === "light") {
        rootElement.classList.remove("dark");
        document.body.classList.add('light-theme');
        document.body.classList.remove('dark-theme');

        icon.classList.remove('fa-moon');
        icon.classList.add('fa-sun');
        mobileIcon.classList.remove('fa-moon');
        mobileIcon.classList.add('fa-sun');
    } else {
        rootElement.classList.add("dark");
        document.body.classList.add('dark-theme');
        document.body.classList.remove('light-theme');

        icon.classList.remove('fa-sun');
        icon.classList.add('fa-moon');
        mobileIcon.classList.remove('fa-sun');
        mobileIcon.classList.add('fa-moon');
    }
    localStorage.setItem("theme", newTheme);
}

// Initialize theme from localStorage
setTheme()

// Set up event listeners
document.getElementById('theme-toggle').addEventListener('click', setTheme);
document.getElementById('theme-toggle-mobile').addEventListener('click', setTheme);

// Scroll animations
function checkScroll() {
    const elements = document.querySelectorAll('.fade-in');

    elements.forEach(element => {
        const position = element.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.3;

        if (position < screenPosition) {
            element.classList.add('visible');
        }
    });
}

// Initialize
document.addEventListener('DOMContentLoaded', function() {
    createParticles();
    window.addEventListener('scroll', checkScroll);
    checkScroll(); // Check on initial load
});
