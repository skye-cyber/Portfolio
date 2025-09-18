const colors = ['#6C63FF', '#56B9FF', '#46E8B0', '#FFD700', '#FF6B6B'];
// Particle canvas animation
const canvas = document.getElementById('network-canvas');
const ctx = canvas.getContext('2d');
let networksArray = [];

// Set canvas size
function setCanvasSize() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}
// Resize handling
function resize() {
    //console.log(`Before:`, canvas.width, canvas.width)

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    cx = canvas.width / 2;
    cy = canvas.height / 2;
    //console.log(`After:`, canvas.width, canvas.width)
}

setCanvasSize();
window.addEventListener('resize', setCanvasSize);

// Create networks
class Particle {
    constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 5 + 1;
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
    networksArray = [];
    for (let i = 0; i < 100; i++) {
        networksArray.push(new Particle());
    }
}

function animateParticles() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    for (let i = 0; i < networksArray.length; i++) {
        networksArray[i].update();
        networksArray[i].draw();
    }

    // Connect networks with lines
    connectParticles();

    requestAnimationFrame(animateParticles);
}

function connectParticles() {
    for (let a = 0; a < networksArray.length; a++) {
        for (let b = a; b < networksArray.length; b++) {
            const dx = networksArray[a].x - networksArray[b].x;
            const dy = networksArray[a].y - networksArray[b].y;
            const distance = Math.sqrt(dx * dx + dy * dy);

            if (distance < 150) {
                ctx.strokeStyle = `rgba(108, 99, 255, ${1 - distance / 150})`;
                ctx.lineWidth = 1;
                ctx.beginPath();
                ctx.moveTo(networksArray[a].x, networksArray[a].y);
                ctx.lineTo(networksArray[b].x, networksArray[b].y);
                ctx.stroke();
            }
        }
    }
}


// Initialize and animate networks
initParticles();
animateParticles();
