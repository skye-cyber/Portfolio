const rootElement = document.documentElement;

// Mobile menu toggle
const mobileMenu = document.getElementById('mobile-menu-button')
mobileMenu?.addEventListener('click', function() {
    const menu = document.getElementById('mobile-menu');
    menu.classList.toggle('hidden');
});

// Theme toggle function
function setTheme() {
    const newTheme = rootElement.classList.contains("dark") ? "light" : "dark";


    //document.body.classList.contains('light-theme') &&

    if (newTheme === "light") {
        rootElement.classList.remove("dark");
        document.body.classList.add('light-theme');
        document.body.classList.remove('dark-theme');


    } else {
        rootElement.classList.add("dark");
        document.body.classList.add('dark-theme');
        document.body.classList.remove('light-theme');
    }
    localStorage.setItem("theme", newTheme);
}

function changeToggleBt(mode) {
    const icon = document.getElementById('theme-icon');
    const mobileIcon = document.getElementById('theme-icon-mobile');

    if (mode === "light") {
        icon?.classList.remove('fa-moon');
        icon?.classList.add('fa-sun');
        mobileIcon?.classList.remove('fa-moon');
        mobileIcon?.classList.add('fa-sun');
    }else{
        icon.classList?.remove('fa-sun');
        icon.classList?.add('fa-moon');
        mobileIcon?.classList.remove('fa-sun');
        mobileIcon?.classList.add('fa-moon');
    }
}

// Toggle switch styling
const toggleCmodel = document.getElementById('CModel');
toggleCmodel?.addEventListener('change', function() {
    const dot = document.querySelector('.dot');
    if (this.checked) {
        dot.style.transform = 'translateX(16px)';
        dot.style.backgroundColor = '#a855f7';
    } else {
        dot.style.transform = 'translateX(0)';
        dot.style.backgroundColor = '#0ea5e9';
    }
});
// Initialize theme from localStorage
setTheme()

// Set up event listeners
document.getElementById('theme-toggle')?.addEventListener('click', setTheme);
document.getElementById('theme-toggle-aichat')?.addEventListener('click', setTheme);
document.getElementById('theme-toggle-mobile')?.addEventListener('click', setTheme);

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
    //createParticles();
    window.addEventListener('scroll', checkScroll);
    checkScroll(); // Check on initial load
});
