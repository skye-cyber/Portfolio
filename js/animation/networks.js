const colors = ['#6C63FF', '#56B9FF', '#46E8B0', '#FFD700', '#FF6B6B'];

// Particle canvas animation
const canvas = document.getElementById('network-canvas');
const ctx = canvas.getContext('2d');
let particlesArray = [];

// Get DOM elements for stats
const particleCountEl = document.getElementById('particle-count');
const screenSizeEl = document.getElementById('screen-size');
const particleDensityEl = document.getElementById('particle-density');
const widthInfoEl = document.getElementById('width-info');
const heightInfoEl = document.getElementById('height-info');

// Calculate optimal particle count based on screen size
function calculateParticleCount() {
    const screenArea = window.innerWidth * window.innerHeight;
    const megaPixels = screenArea / 1000000; // Convert to megapixels

    // Adjust density based on screen size
    let density;
    if (window.innerWidth < 768) {
        // Mobile devices - lower density
        density = 30;
    } else if (window.innerWidth < 1024) {
        // Tablets - medium density
        density = 40;
    } else {
        // Desktops - higher density
        density = 100;
    }

    const count = Math.floor(megaPixels * density);

    // Update stats
    particleCountEl.textContent = count;
    screenSizeEl.textContent = `${window.innerWidth}×${window.innerHeight}`;
    particleDensityEl.textContent = density.toFixed(3);
    widthInfoEl.textContent = window.innerWidth;
    heightInfoEl.textContent = window.innerHeight;

    return Math.max(30, Math.min(150, count)); // Keep between 30 and 150
}

// Set canvas size
function setCanvasSize() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    // Reinitialize particles with new count
    initParticles();
}

// Create particles
class Particle {
    constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 3 + 1;
        this.speedX = Math.random() * 3 - 1.5;
        this.speedY = Math.random() * 3 - 1.5;
        this.color = colors[Math.floor(Math.random() * colors.length)];
    }

    update() {
        this.x += this.speedX;
        this.y += this.speedY;

        if (this.x > canvas.width || this.x < 0) {
            this.speedX = -this.speedX;
        }
        if (this.y > canvas.height || this.y < 0) {
            this.speedY = -this.speedY;
        }
    }

    draw() {
        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
    }
}

function initParticles() {
    const particleCount = calculateParticleCount();
    particlesArray = [];

    for (let i = 0; i < particleCount; i++) {
        particlesArray.push(new Particle());
    }
}

function animateParticles() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    for (let i = 0; i < particlesArray.length; i++) {
        particlesArray[i].update();
        particlesArray[i].draw();
    }

    // Connect particles with lines
    connectParticles();

    requestAnimationFrame(animateParticles);
}

function connectParticles() {
    const maxDistance = window.innerWidth < 768 ? 100 : 150;

    for (let a = 0; a < particlesArray.length; a++) {
        for (let b = a; b < particlesArray.length; b++) {
            const dx = particlesArray[a].x - particlesArray[b].x;
            const dy = particlesArray[a].y - particlesArray[b].y;
            const distance = Math.sqrt(dx * dx + dy * dy);

            if (distance < maxDistance) {
                ctx.strokeStyle = `rgba(108, 99, 255, ${1 - distance / maxDistance})`;
                ctx.lineWidth = 1;
                ctx.beginPath();
                ctx.moveTo(particlesArray[a].x, particlesArray[a].y);
                ctx.lineTo(particlesArray[b].x, particlesArray[b].y);
                ctx.stroke();
            }
        }
    }
}

// Initialize and animate particles
setCanvasSize();
animateParticles();

// Resize handling
window.addEventListener('resize', function() {
    setCanvasSize();
});

// Make particles interactive
canvas.addEventListener('mousemove', (event) => {
    //console.log("mouse move detected")
    // Add a few particles at mouse position on move
    for (let i = 0; i < 2; i++) {
        if (particlesArray.length < 100) { // Don't exceed max count
            const particle = new Particle();
            particle.x = event.x;
            particle.y = event.y;
            particlesArray.push(particle);
        }
    }
});
