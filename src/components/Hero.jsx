import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'

// Move Particle class outside the component to avoid recreation on each render
class Particle {
    constructor(canvasWidth, canvasHeight) {
        this.x = Math.random() * canvasWidth
        this.y = Math.random() * canvasHeight
        this.size = Math.random() * 3 + 1
        this.speedX = Math.random() * 2 - 1
        this.speedY = Math.random() * 2 - 1
        this.color = `hsl(${Math.random() * 60 + 180}, 100%, 50%)`
    }

    update(canvasWidth, canvasHeight) {
        this.x += this.speedX
        this.y += this.speedY

        // Wrap around edges instead of letting particles disappear
        if (this.x < 0) this.x = canvasWidth
        if (this.x > canvasWidth) this.x = 0
        if (this.y < 0) this.y = canvasHeight
        if (this.y > canvasHeight) this.y = 0

        if (this.size > 0.2) this.size -= 0.01 // Slower decay
    }

    draw(ctx) {
        ctx.fillStyle = this.color
        ctx.beginPath()
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2)
        ctx.fill()
    }
}

export default function Hero() {
    const canvasRef = useRef(null)

    useEffect(() => {
        const canvas = canvasRef.current
        if (!canvas) return

        const ctx = canvas.getContext('2d')
        let animationFrameId
        let particles = []
        const particleCount = 100

        const resizeCanvas = () => {
            canvas.width = window.innerWidth
            canvas.height = window.innerHeight
        }

        resizeCanvas()

        function init() {
            particles = []
            for (let i = 0; i < particleCount; i++) {
                particles.push(new Particle(canvas.width, canvas.height))
            }
        }

        function animate() {
            if (!ctx || !canvas) return

            ctx.clearRect(0, 0, canvas.width, canvas.height)

            // Update and draw all particles
            for (let i = 0; i < particles.length; i++) {
                particles[i].update(canvas.width, canvas.height)
                particles[i].draw(ctx)

                // Draw connections between nearby particles
                for (let j = i + 1; j < particles.length; j++) {
                    const dx = particles[i].x - particles[j].x
                    const dy = particles[i].y - particles[j].y
                    const distance = Math.sqrt(dx * dx + dy * dy)

                    if (distance < 100) {
                        ctx.beginPath()
                        ctx.strokeStyle = particles[i].color
                        ctx.lineWidth = 0.5
                        ctx.moveTo(particles[i].x, particles[i].y)
                        ctx.lineTo(particles[j].x, particles[j].y)
                        ctx.stroke()
                    }
                }

                // Regenerate particles that become too small
                if (particles[i].size <= 0.3) {
                    particles[i] = new Particle(canvas.width, canvas.height)
                }
            }

            animationFrameId = requestAnimationFrame(animate)
        }

        init()
        animate()

        const handleResize = () => {
            resizeCanvas()
            init() // Reinitialize particles with new canvas dimensions
        }

        window.addEventListener('resize', handleResize)

        return () => {
            cancelAnimationFrame(animationFrameId)
            window.removeEventListener('resize', handleResize)
        }
    }, []) // Empty dependency array - effect runs once on mount

    return (
        <section id="about" className="min-h-screen flex items-center justify-center relative pt-20 pb-10 px-4">
            <canvas
                ref={canvasRef}
                className="fixed top-0 left-0 z-[8] w-screen h-full"
            />

            <div className="container mx-auto text-center z-10">
                <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.5 }}
                    className="relative w-24 h-24 sm:w-[150px] sm:h-[150px] md:w-[160px] md:h-[160px] m-auto mb-8"
                >
                    <div
                        className="absolute w-full h-full rounded-full shadow-[0_0_60px_rgba(129,140,248,0.4),_0_0_100px_rgba(129,140,248,0.2)] animate-pulse z-0"
                    ></div>

                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                        <div className="font-bold text-6xl bg-gradient-to-br from-[#818cf8] to-[#c084fc] bg-clip-text text-transparent [text-shadow:0_0_10px_rgba(129,140,248,0.6),_0_0_20px_rgba(129,140,248,0.3)]">
                            W
                        </div>
                    </div>
                </motion.div>

                <motion.h2
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.2 }}
                    className="text-3xl md:text-5xl font-bold mb-6"
                >
                    <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">Software Developer</span> &amp;
                    <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">AI Enthusiast</span>
                </motion.h2>

                <motion.p
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.4 }}
                    className="text-md md:text-xl max-w-3xl mx-auto mb-10 text-gray-300"
                >
                    I create innovative solutions that blend cutting-edge technology with elegant design.
                </motion.p>

                <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.6 }}
                    className="text-lg md:text-xl mb-12 text-gray-300"
                >
                    Passionate about Python, Django, and AI technologies.
                </motion.div>

                <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.8 }}
                    className="flex flex-wrap justify-center gap-6 mt-2"
                >
                    <a
                        href="#projects"
                        className="px-8 py-3 bg-indigo-600 hover:bg-indigo-700 rounded-lg text-white font-semibold transition transform hover:-translate-y-1"
                    >
                        View My Work
                    </a>
                    <a
                        href="#contact"
                        className="px-8 py-3 border-2 border-indigo-600 text-indigo-400 hover:bg-indigo-600 hover:text-white rounded-lg font-semibold transition transform hover:-translate-y-1"
                    >
                        Contact Me
                    </a>
                </motion.div>
            </div>
        </section>
    )
}
