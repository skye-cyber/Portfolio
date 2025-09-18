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

function orbitingParticles(){
    const canvas = document.getElementById('sphere-canvas');
    const ctx = canvas.getContext('2d');

    // Set canvas size
    canvas.width = 240;
    canvas.height = 240;

    // Sphere properties
    let rotationX = 0;
    let rotationY = 0;
    let rotationZ = 0;
    let isRotating = true;
    let isDarkTheme = true;

    // Create particles
    const particles = [];
    const orbitingParticles = [];

    for (let i = 0; i < 40; i++) {
        particles.push({
            x: Math.random() * canvas.width,
                       y: Math.random() * canvas.height,
                       size: Math.random() * 3 + 1,
                       speedX: (Math.random() - 0.5) * 0.5,
                       speedY: (Math.random() - 0.5) * 0.5
        });
    }

    for (let i = 0; i < 12; i++) {
        const angle = (i / 12) * Math.PI * 2;
        const distance = 110;
        orbitingParticles.push({
            angle: angle,
            distance: distance,
            speed: 0.003 + Math.random() * 0.002,
                               size: Math.random() * 4 + 3
        });
    }

    // Draw sphere function
    function drawSphere() {
        const centerX = canvas.width / 2;
        const centerY = canvas.height / 2;
        const radius = 80;

        // Clear canvas
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        // Draw gradient background for sphere
        const gradient = ctx.createRadialGradient(
            centerX, centerY, 0,
            centerX, centerY, radius
        );

        if (isDarkTheme) {
            gradient.addColorStop(0, '#6366f1');
            gradient.addColorStop(0.7, '#4f46e5');
            gradient.addColorStop(1, '#4338ca');
        } else {
            gradient.addColorStop(0, '#818cf8');
            gradient.addColorStop(0.7, '#a5b4fc');
            gradient.addColorStop(1, '#c7d2fe');
        }

        ctx.save();

        // Rotate canvas for 3D effect
        ctx.translate(centerX, centerY);
        if (isRotating) {
            ctx.rotate(rotationX, rotationY);
            rotationX += 0.01;
            rotationY += 0.005;
        }
        ctx.translate(-centerX, -centerY);

        // Draw sphere
        ctx.beginPath();
        ctx.arc(centerX, centerY, radius, 0, Math.PI * 2);
        ctx.fillStyle = gradient;
        ctx.fill();

        // Add shading for 3D effect
        const lightGradient = ctx.createRadialGradient(
            centerX - 30, centerY - 30, 10,
            centerX, centerY, radius + 10
        );
        lightGradient.addColorStop(0, 'rgba(255, 255, 255, 0.4)');
        lightGradient.addColorStop(1, 'rgba(255, 255, 255, 0)');

        ctx.beginPath();
        ctx.arc(centerX, centerY, radius, 0, Math.PI * 2);
        ctx.fillStyle = lightGradient;
        ctx.fill();

        ctx.restore();

        // Draw particles
        ctx.save();
        for (let i = 0; i < particles.length; i++) {
            const p = particles[i];

            ctx.beginPath();
            ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
            ctx.fillStyle = isDarkTheme ? 'rgba(129, 140, 248, 0.7)' : 'rgba(79, 70, 229, 0.7)';
            ctx.fill();

            // Move particles
            p.x += p.speedX;
            p.y += p.speedY;

            // Bounce off edges
            if (p.x < 0 || p.x > canvas.width) p.speedX *= -1;
            if (p.y < 0 || p.y > canvas.height) p.speedY *= -1;
        }
        ctx.restore();

        // Draw orbiting particles
        ctx.save();
        for (let i = 0; i < orbitingParticles.length; i++) {
            const op = orbitingParticles[i];

            // Calculate position
            const x = centerX + Math.cos(op.angle) * op.distance;
            const y = centerY + Math.sin(op.angle) * op.distance;

            ctx.beginPath();
            ctx.arc(x, y, op.size, 0, Math.PI * 2);
            ctx.fillStyle = isDarkTheme ? 'rgba(56, 189, 248, 0.8)' : 'rgba(14, 165, 233, 0.8)';
            ctx.fill();

            // Move orbiting particles
            if (isRotating) {
                op.angle += op.speed;
            }
        }
        ctx.restore();

        requestAnimationFrame(drawSphere);
    }

    // Start animation
    drawSphere();

    // Add control functionality
    document.getElementById('rotate-toggle').addEventListener('click', function() {
        isRotating = !isRotating;
        this.textContent = isRotating ? 'Pause Rotation' : 'Start Rotation';
    });

    document.getElementById('theme-toggle').addEventListener('click', function() {
        isDarkTheme = !isDarkTheme;
        document.body.style.background = isDarkTheme
        ? 'linear-gradient(135deg, #0f172a 0%, #1e293b 100%)'
        : 'linear-gradient(135deg, #e2e8f0 0%, #cbd5e1 100%)';

        document.body.style.color = isDarkTheme ? '#e2e8f0' : '#1e293b';

        const subtitle = document.querySelector('.subtitle');
        subtitle.style.color = isDarkTheme ? '#94a3b8' : '#64748b';

        const controlBtns = document.querySelectorAll('.control-btn');
        controlBtns.forEach(btn => {
            btn.style.background = isDarkTheme
            ? 'rgba(30, 41, 59, 0.8)'
            : 'rgba(226, 232, 240, 0.8)';
            btn.style.color = isDarkTheme ? '#e2e8f0' : '#1e293b';
            btn.style.borderColor = isDarkTheme
            ? 'rgba(129, 140, 248, 0.3)'
            : 'rgba(79, 70, 229, 0.3)';
        });
    });
}
orbitingParticles()
