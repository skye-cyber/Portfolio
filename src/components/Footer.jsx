import { motion } from 'framer-motion'

export default function Footer() {
  return (
    <motion.footer
      initial={{ y: 20, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="py-12 px-4 bg-gray-900 border-t border-gray-800"
    >
      <div className="container mx-auto text-center">
        <motion.h2
          initial={{ y: 10, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: true }}
          className="text-2xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent"
        >
          SKYE
        </motion.h2>

        <motion.p
          initial={{ y: 10, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="mb-6 text-gray-400"
        >
          Software Developer & AI Enthusiast
        </motion.p>

        <motion.div
          initial={{ y: 10, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
          className="flex justify-center space-x-6 mb-6"
        >
          <a href="https://github.com/skye-cyber" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition">
            <i className="fab fa-github text-xl"></i>
          </a>
          <a href="#" className="text-gray-400 hover:text-white transition">
            <i className="fab fa-linkedin-in text-xl"></i>
          </a>
          <a href="https://x.com/@SkyeSwskye17" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition">
            <i className="fab fa-twitter text-xl"></i>
          </a>
          <a href="https://huggingface.co/skye-waves" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition">
            <i className="fab fa-huggingface text-xl"></i>
          </a>
        </motion.div>

        <motion.p
          initial={{ y: 10, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-sm text-gray-500"
        >
          © {new Date().getFullYear()} Wambua. All rights reserved.
        </motion.p>
      </div>
    </motion.footer>
  )
}