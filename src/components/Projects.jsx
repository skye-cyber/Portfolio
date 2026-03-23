import { useState } from 'react'
import { motion } from 'framer-motion'

export default function Projects() {
    const [activeFilter, setActiveFilter] = useState('all')

    const projects = [
        {
            id: 'intellidesk',
            title: 'IntelliDesk',
            description: 'A versatile AI assistant with voice interaction capabilities, designed to assist with various tasks using advanced machine learning models including OpenAI\'s GPT.',
            image: 'https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80',
            github: 'https://github.com/skye-cyber/IntelliDesk.git',
            categories: ['ai', 'cli'],
            tags: [
                { name: 'Python', color: 'bg-indigo-900 text-indigo-100' },
                { name: 'AI', color: 'bg-purple-900 text-purple-100' },
                { name: 'ML', color: 'bg-blue-900 text-blue-100' },
                { name: 'OpenAI', color: 'bg-pink-900 text-pink-100' }
            ]
        },
        {
            id: 'pylock',
            title: 'PyLock',
            description: 'A comprehensive command-line encryption tool featuring multiple algorithms (AES, RSA) for securing files and folders with configurable security levels.',
            image: 'https://images.unsplash.com/photo-1555949963-aa79dcee981c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80',
            github: 'https://github.com/skye-cyber/PyLock.git',
            categories: ['security', 'cli'],
            tags: [
                { name: 'Python', color: 'bg-green-900 text-green-100' },
                { name: 'Security', color: 'bg-teal-900 text-teal-100' },
                { name: 'Cryptography', color: 'bg-emerald-900 text-emerald-100' },
                { name: 'CLI', color: 'bg-lime-900 text-lime-100' }
            ]
        },
        {
            id: 'filewarp',
            title: 'FileWarp',
            description: 'A comprehensive multimedia file operation toolkit with batch processing, format conversion, metadata editing, and AUDIO/VIDEO trimming.',
            image: 'https://images.unsplash.com/photo-1592427159318-8e6ec5e1c8e0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80',
            github: 'https://github.com/skye-cyber/FileWarp.git',
            categories: ['cli'],
            tags: [
                { name: 'Python', color: 'bg-blue-900 text-blue-100' },
                { name: 'CLI', color: 'bg-cyan-900 text-cyan-100' },
                { name: 'File Conversion', color: 'bg-sky-900 text-sky-100' },
                { name: 'File Manager', color: 'bg-indigo-900 text-indigo-100' }
            ]
        },
        {
            id: 'districhat',
            title: 'DistriChat',
            description: 'A distributed real-time chat application powered by Django and WebSockets with room-based messaging, user authentication, and message persistence.',
            image: 'https://images.unsplash.com/photo-1577563908411-5077b6dc7624?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80',
            github: 'https://github.com/skye-cyber/districhat.git',
            categories: ['web', 'ai'],
            tags: [
                { name: 'Python', color: 'bg-indigo-900 text-indigo-100' },
                { name: 'Django', color: 'bg-purple-900 text-purple-100' },
                { name: 'WebSockets', color: 'bg-blue-900 text-blue-100' },
                { name: 'Real-time', color: 'bg-pink-900 text-pink-100' }
            ]
        },
        {
            id: 'graphpy',
            title: 'GraphPy',
            description: 'A pure Python alternative to Graphviz for graph visualization, featuring multiple layout algorithms and output formats including SVG, PNG, and HTML.',
            image: 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80',
            github: 'https://github.com/skye-cyber/graphpy.git',
            categories: ['data', 'cli'],
            tags: [
                { name: 'Python', color: 'bg-purple-900 text-purple-100' },
                { name: 'Data Visualization', color: 'bg-indigo-900 text-indigo-100' },
                { name: 'Graph Theory', color: 'bg-blue-900 text-blue-100' },
                { name: 'SVG', color: 'bg-pink-900 text-pink-100' }
            ]
        },
        {
            id: 'dotflow',
            title: 'DotFlow',
            description: 'A workflow automation tool that helps manage and execute complex task sequences with dependency resolution and parallel execution capabilities.',
            image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80',
            github: 'https://github.com/skye-cyber/dotflow.git',
            categories: ['cli'],
            tags: [
                { name: 'Python', color: 'bg-blue-900 text-blue-100' },
                { name: 'CLI', color: 'bg-cyan-900 text-cyan-100' },
                { name: 'Automation', color: 'bg-sky-900 text-sky-100' },
                { name: 'Workflow', color: 'bg-indigo-900 text-indigo-100' }
            ]
        },
        {
            id: 'pymmdc',
            title: 'PyMMDC',
            description: 'Python Multimedia Converter - A powerful tool for converting between various multimedia formats with support for batch processing and custom presets.',
            image: 'https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80',
            github: 'https://github.com/skye-cyber/pymmdc.git',
            categories: ['cli'],
            tags: [
                { name: 'Python', color: 'bg-green-900 text-green-100' },
                { name: 'CLI', color: 'bg-teal-900 text-teal-100' },
                { name: 'Media', color: 'bg-emerald-900 text-emerald-100' },
                { name: 'Conversion', color: 'bg-lime-900 text-lime-100' }
            ]
        },
        {
            id: 'candisys',
            title: 'Candisys',
            description: 'An AI-powered candlestick pattern recognition system for financial markets with real-time analysis and predictive modeling capabilities.',
            image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80',
            github: 'https://github.com/skye-cyber/candisys.git',
            categories: ['ai', 'web'],
            tags: [
                { name: 'Python', color: 'bg-indigo-900 text-indigo-100' },
                { name: 'AI', color: 'bg-purple-900 text-purple-100' },
                { name: 'Candlestick', color: 'bg-blue-900 text-blue-100' },
                { name: 'Trading', color: 'bg-pink-900 text-pink-100' }
            ]
        },
        {
            id: 'sonicslicer',
            title: 'SonicSlicer',
            description: 'An audio processing tool for slicing, editing, and analyzing audio files with support for various formats and batch processing operations.',
            image: 'https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80',
            github: 'https://github.com/skye-cyber/sonicslicer.git',
            categories: ['cli'],
            tags: [
                { name: 'Python', color: 'bg-blue-900 text-blue-100' },
                { name: 'Audio', color: 'bg-cyan-900 text-cyan-100' },
                { name: 'CLI', color: 'bg-sky-900 text-sky-100' },
                { name: 'Processing', color: 'bg-indigo-900 text-indigo-100' }
            ]
        }
    ]

    const filteredProjects = activeFilter === 'all'
        ? projects
        : projects.filter(project => project.categories.includes(activeFilter))

    return (
        <section id="projects" className="relative z-10 py-20 px-4 bg-gray-900">
            <div className="container mx-auto">
                <motion.h2
                    initial={{ y: 20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-4 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent"
                >
                    Featured Projects
                </motion.h2>

                <motion.p
                    initial={{ y: 20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    viewport={{ once: true }}
                    className="text-center text-gray-300 mb-12 max-w-2xl mx-auto"
                >
                    A showcase of my technical projects spanning AI, security, file management, data visualization, and web applications.
                </motion.p>

                <div className="flex flex-wrap justify-center gap-4 mb-12">
                    {['all', 'ai', 'security', 'web', 'cli', 'data'].map(filter => (
                        <button
                            key={filter}
                            className={`filter-btn px-4 py-2 rounded-full transition ${activeFilter === filter ? 'bg-indigo-600 text-white' : 'bg-gray-700 text-gray-300 hover:bg-gray-600'}`}
                            onClick={() => setActiveFilter(filter)}
                            data-filter={filter}
                        >
                            {filter.charAt(0).toUpperCase() + filter.slice(1)} Projects
                        </button>
                    ))}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {filteredProjects.map((project, index) => (
                        <motion.div
                            key={project.id}
                            initial={{ y: 100, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            transition={{ duration: 0.6, delay: index * 0.08 }}
                            viewport={{ once: true, margin: "-50px" }}
                            whileHover={{ y: -10 }}
                            className="project-lcard group relative"
                            data-categories={project.categories.join(' ')}
                        >
                            {/* Glow effect on hover */}
                            <motion.div
                                className="absolute -inset-0.5 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-2xl opacity-0 group-hover:opacity-20 group-hover:shadow-xl group-hover:shadow-gray-400 transition-opacity duration-500 blur-xl"
                                style={{ zIndex: -1 }}
                            />

                            <div className="relative bg-gradient-to-br from-slate-900/90 to-slate-950/90 backdrop-blur-sm rounded-xl overflow-hidden border border-gray-800 hover:border-indigo-500/50 transition-all duration-300">

                                {/* Image Section with Enhanced Overlay */}
                                <div className="project-image relative overflow-hidden h-52">
                                    <motion.img
                                        src={project.image}
                                        alt={`${project.title} Project`}
                                        className="w-full h-full object-cover"
                                        whileHover={{ scale: 1.1 }}
                                        transition={{ duration: 0.4 }}
                                    />

                                    {/* Dark overlay that appears on hover */}
                                    <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-400" />

                                    {/* GitHub overlay that appears on hover */}
                                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-400 z-10">
                                        <motion.a
                                            href={project.github}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-white text-center flex flex-col items-center"
                                            initial={{ scale: 0.8, opacity: 0 }}
                                            whileHover={{ scale: 1.1 }}
                                            whileInView={{ scale: 1, opacity: 1 }}
                                            transition={{ duration: 0.2 }}
                                        >
                                            <i className="fab fa-github text-4xl mb-2 block hover:text-indigo-400 transition-colors"></i>
                                            <span className="font-semibold text-sm">View Repository</span>
                                        </motion.a>
                                    </div>

                                    {/* Category badge */}
                                    <div className="absolute top-3 right-3 z-20">
                                        <span className="px-3 py-1 text-xs font-semibold bg-black/60 backdrop-blur-sm text-white rounded-full border border-white/20">
                                            {project.categories[0]}
                                        </span>
                                    </div>
                                </div>

                                {/* Content Section */}
                                <div className="p-6">
                                    {/* Tags */}
                                    <div className="project-tags flex flex-wrap gap-2 mb-4">
                                        {project.tags.map(tag => (
                                            <motion.span
                                                key={tag.name}
                                                className={`project-tag text-xs px-3 py-1.5 rounded-full font-medium ${tag.color} shadow-sm`}
                                                whileHover={{ scale: 1.05, y: -1 }}
                                                transition={{ duration: 0.2 }}
                                            >
                                                {tag.name}
                                            </motion.span>
                                        ))}
                                    </div>

                                    {/* Title with gradient on hover */}
                                    <motion.h3
                                        className="text-xl font-bold mb-3 text-white group-hover:bg-gradient-to-r group-hover:from-indigo-400 group-hover:to-purple-400 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300"
                                    >
                                        {project.title}
                                    </motion.h3>

                                    {/* Description */}
                                    <p className="mb-5 text-gray-300 text-sm leading-relaxed">
                                        {project.description}
                                    </p>

                                    {/* Links Section */}
                                    <div className="flex items-center justify-between">
                                        <motion.a
                                            href={project.github}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="project-link inline-flex items-center px-5 py-2.5 bg-gradient-to-r from-indigo-600 to-indigo-700 hover:from-indigo-500 hover:to-indigo-600 text-white rounded-lg font-medium transition-all duration-300 shadow-lg hover:shadow-indigo-500/25"
                                            whileHover={{ scale: 1.05 }}
                                            whileTap={{ scale: 0.95 }}
                                        >
                                            View Project
                                            <i className="fas fa-arrow-right ml-2 text-sm group-hover:translate-x-1 transition-transform"></i>
                                        </motion.a>

                                        {/* Preview button if available */}
                                        {project.preview && (
                                            <motion.a
                                                href={project.preview}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="text-indigo-400 hover:text-indigo-300 font-medium text-sm flex items-center gap-1"
                                                whileHover={{ x: 3 }}
                                            >
                                                Live Preview
                                                <i className="fas fa-external-link-alt text-xs"></i>
                                            </motion.a>
                                        )}
                                    </div>
                                </div>
                                {/* Decorative corner accent */}
                                <div className="absolute bottom-3 right-3 w-12 h-12 border-r-2 border-b-2 border-indigo-500/30 rounded-br-xl pointer-events-none" />
                            </div>
                        </motion.div>
                    ))}
                </div>

                <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="text-center mt-16"
                >
                    <a
                        href="https://github.com/skye-cyber"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center px-8 py-3 bg-indigo-600 hover:bg-indigo-700 rounded-lg text-white font-semibold transition"
                    >
                        <i className="fab fa-github mr-2"></i> View All Projects on GitHub
                    </a>
                </motion.div>
            </div>
        </section>
    )
}
