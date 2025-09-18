// Create particles for background
function createParticles() {
    const container = document.getElementById('particle-container');
    const colors = ['#6C63FF', '#56B9FF', '#46E8B0', '#FFD700', '#FF6B6B'];

    for (let i = 0; i < 30; i++) {
        const particle = document.createElement('div');
        particle.classList.add('particle');

        const size = Math.random() * 20 + 5;
        const color = colors[Math.floor(Math.random() * colors.length)];
        const left = Math.random() * 100;
        const top = Math.random() * 100;
        const animationDuration = Math.random() * 20 + 10;
        const animationDelay = Math.random() * 5;

        particle.style.width = `${size}px`;
        particle.style.height = `${size}px`;
        particle.style.background = color;
        particle.style.left = `${left}%`;
        particle.style.top = `${top}%`;
        particle.style.animationDuration = `${animationDuration}s`;
        particle.style.animationDelay = `-${animationDelay}s`;

        container.appendChild(particle);
    }
}
