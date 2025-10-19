document.addEventListener("DOMContentLoaded", () => {
    // Project data
    const projects = {
        quickai: {
            title: "QuickAI",
            description: "A versatile AI assistant with voice interaction capabilities, designed to assist with various tasks using advanced machine learning models including OpenAI's GPT.",
            longDescription: "QuickAI is a comprehensive AI assistant that combines multiple AI capabilities into a single application. It features voice interaction, text-based queries, and can perform a wide range of tasks from answering questions to generating creative content. The system is built with a modular architecture allowing for easy extension of functionality.",
            image: "https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80",
            technologies: ["Python", "OpenAI API", "SpeechRecognition", "PyAudio", "NLTK"],
            features: [
                "Voice-based interaction",
                "Text-to-speech responses",
                "Multi-turn conversations",
                "Context awareness",
                "Modular plugin system"
            ],
            githubUrl: "https://github.com/skye-cyber/QuickAi.git",
            demoUrl: null,
            category: "AI & CLI"
        },
        encryptionsuite: {
            title: "EncryptionSuite",
            description: "A comprehensive command-line encryption tool featuring multiple algorithms for securing files and folders.",
            longDescription: "EncryptionSuite provides a robust set of encryption tools for securing sensitive data. It supports multiple encryption algorithms including AES and RSA, allowing users to choose the appropriate security level for their needs. The tool features both symmetric and asymmetric encryption options, key management, and batch processing capabilities.",
            image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80",
            technologies: ["Python", "Cryptography", "AES", "RSA", "Argparse"],
            features: [
                "Multiple encryption algorithms",
                "File and folder encryption",
                "Key generation and management",
                "Batch processing",
                "Configurable security levels"
            ],
            githubUrl: "https://github.com/skye-cyber/Encryptionsuite.git",
            demoUrl: null,
            category: "Security & CLI"
        },
        filemac: {
            title: "FileMAC",
            description: "A comprehensive multimedia file operation toolkit with batch processing and format conversion capabilities.",
            longDescription: "FileMAC is a powerful command-line utility for managing multimedia files. It provides a wide range of operations including format conversion, metadata editing, batch processing, and file organization. The tool supports numerous file formats and includes intelligent features like duplicate detection and automated organization based on file properties.",
            image: "https://images.unsplash.com/photo-1592427159318-8e6ec5e1c8e0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80",
            technologies: ["Python", "Pillow", "MoviePy", "Mutagen", "Click"],
            features: [
                "Batch file conversion",
                "Metadata editing",
                "Duplicate file detection",
                "Automated organization",
                "Custom operation workflows"
            ],
            githubUrl: "https://github.com/skye-cyber/FileMAC.git",
            demoUrl: null,
            category: "CLI Tool"
        },
        districhat: {
            title: "DistriChat",
            description: "A distributed real-time chat application powered by Django and WebSockets.",
            longDescription: "DistriChat is a full-featured real-time chat application that supports multiple chat rooms, user authentication, and message history. Built with Django Channels for WebSocket support, it provides a seamless real-time messaging experience. The application features a clean, responsive interface and includes administrative controls for room management.",
            image: "https://images.unsplash.com/photo-1577563908411-5077b6dc7624?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80",
            technologies: ["Python", "Django", "WebSockets", "JavaScript", "SQLite"],
            features: [
                "Real-time messaging",
                "Multiple chat rooms",
                "User authentication",
                "Message history",
                "Responsive design"
            ],
            githubUrl: "https://github.com/skye-cyber/districhat.git",
            demoUrl: null,
            category: "Web Application"
        },
        graphpy: {
            title: "GraphPy",
            description: "A pure Python alternative to Graphviz for graph visualization, featuring multiple layout algorithms and output formats.",
            longDescription: "GraphPy is a comprehensive graph visualization library written entirely in Python. It provides multiple layout algorithms including force-directed, hierarchical, and circular layouts. The library supports various output formats including SVG, PNG (with Cairo), HTML, and JSON. It also includes DOT language parsing capabilities, making it compatible with Graphviz files.",
            image: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80",
            technologies: ["Python", "SVG", "Cairo", "DOT Language", "Layout Algorithms"],
            features: [
                "Pure Python implementation",
                "Multiple layout algorithms (force-directed, hierarchical, circular)",
                "Multiple output formats (SVG, PNG, HTML, JSON)",
                "DOT language parsing and rendering",
                "Extensible architecture for custom layouts and renderers"
            ],
            codeExample: `from graphpy import parse_dot, GraphLayout, render

                # Parse DOT text
                dot_text = """
                digraph G {
                    A [label="Start"];
                    B [label="Process"];
                    C [label="End"];
                    A -> B [label="begin"];
                    B -> C [label="complete"];
                }
                """

                graph = parse_dot(dot_text)

                # Apply layout
                layout = GraphLayout(graph)
                graph_with_layout = layout.apply_layout(width=800, height=600)

                # Render to SVG
                svg_output = render(graph_with_layout, 'svg')`,
            githubUrl: "https://github.com/skye-cyber/graphpy.git",
            demoUrl: null,
            category: "Data Visualization"
        },
        dotflow: {
            title: "DotFlow",
            description: "A workflow automation tool that helps manage and execute complex task sequences.",
            longDescription: "DotFlow is a powerful workflow automation system that enables users to define, manage, and execute complex task sequences. It features dependency resolution, parallel execution capabilities, and comprehensive logging. The tool supports both YAML and JSON configuration formats and includes a built-in scheduler for recurring workflows.",
            image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80",
            technologies: ["Python", "YAML", "JSON", "Parallel Processing", "DAG"],
            features: [
                "Dependency resolution",
                "Parallel task execution",
                "YAML and JSON configuration",
                "Built-in scheduler",
                "Comprehensive logging and monitoring"
            ],
            githubUrl: "https://github.com/skye-cyber/dotflow.git",
            demoUrl: null,
            category: "CLI Tool"
        },
        pymmdc: {
            title: "PyMMDC",
            description: "Python Multimedia Converter - A powerful tool for converting between various multimedia formats.",
            longDescription: "PyMMDC is a comprehensive multimedia conversion tool that supports a wide range of audio, video, and image formats. It features batch processing capabilities, custom preset configurations, and format-specific optimization options. The tool includes intelligent quality preservation algorithms and supports both lossless and lossy conversion methods.",
            image: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80",
            technologies: ["Python", "FFmpeg", "Pillow", "Audio Processing", "Video Processing"],
            features: [
                "Support for audio, video, and image formats",
                "Batch processing capabilities",
                "Custom preset configurations",
                "Quality preservation algorithms",
                "Lossless and lossy conversion options"
            ],
            githubUrl: "https://github.com/skye-cyber/pymmdc.git",
            demoUrl: null,
            category: "CLI Tool"
        },
        candisys: {
            title: "Candisys",
            description: "An AI-powered candlestick pattern recognition system for financial markets.",
            longDescription: "Candisys is an advanced financial analysis tool that uses machine learning to identify and classify candlestick patterns in market data. The system provides real-time analysis, predictive modeling, and backtesting capabilities. It supports multiple data sources and includes visualization tools for pattern analysis and strategy development.",
            image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80",
            technologies: ["Python", "Machine Learning", "Pandas", "NumPy", "Matplotlib"],
            features: [
                "AI-powered pattern recognition",
                "Real-time market analysis",
                "Predictive modeling",
                "Backtesting capabilities",
                "Multiple data source support"
            ],
            githubUrl: "https://github.com/skye-cyber/candisys.git",
            demoUrl: null,
            category: "AI & Finance"
        },
        sonicslicer: {
            title: "SonicSlicer",
            description: "An audio processing tool for slicing, editing, and analyzing audio files.",
            longDescription: "SonicSlicer is a comprehensive audio processing toolkit that provides capabilities for slicing, editing, and analyzing audio files. It supports various audio formats and includes features for batch processing, spectral analysis, and audio effects application. The tool is designed for both casual users and audio professionals with its intuitive interface and powerful processing capabilities.",
            image: "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80",
            technologies: ["Python", "Librosa", "NumPy", "Audio Processing", "Signal Processing"],
            features: [
                "Multiple audio format support",
                "Batch processing operations",
                "Spectral analysis capabilities",
                "Audio effects application",
                "Intuitive command-line interface"
            ],
            githubUrl: "https://github.com/skye-cyber/sonicslicer.git",
            demoUrl: null,
            category: "CLI Tool"
        }
    };

    // DOM elements
    const filterButtons = document.querySelectorAll('.filter-btn');
    const projectCards = document.querySelectorAll('.project-card');
    const modal = document.getElementById('project-modal');
    const modalContent = document.getElementById('modal-content');
    const closeModal = document.querySelector('.close-modal');
    const detailButtons = document.querySelectorAll('.project-detail-btn');

    // Filter projects
    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Update active button
            filterButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');

            const filter = button.getAttribute('data-filter');

            projectCards.forEach(card => {
                if (filter === 'all' || card.getAttribute('data-categories').includes(filter)) {
                    card.style.display = 'block';
                } else {
                    card.style.display = 'none';
                }
            });
        });
    });

    // Show project details
    detailButtons.forEach(button => {
        button.addEventListener('click', () => {
            const projectId = button.getAttribute('data-project');
            const project = projects[projectId];

            if (project) {
                modalContent.innerHTML = `
                    <div class="project-details">
                    <div>
                    <img src="${project.image}" alt="${project.title}" class="rounded-lg mb-4 w-full">
                    <div class="tech-stack">
                    ${project.technologies.map(tech =>
                    `<span class="project-tag bg-indigo-900 text-indigo-100">${tech}</span>`
                ).join('')}
                    </div>
                    </div>
                    <div>
                    <h3 class="text-2xl font-bold mb-4 gradient-text">${project.title}</h3>
                    <p class="mb-4 text-gray-300">${project.longDescription}</p>

                    <h4 class="text-xl font-bold mb-2 text-white">Key Features</h4>
                    <ul class="feature-list mb-6 text-gray-300">
                    ${project.features.map(feature => `<li>${feature}</li>`).join('')}
                    </ul>

                    ${project.codeExample ? `
                        <h4 class="text-xl font-bold mb-2 text-white">Code Example</h4>
                        <div class="code-block text-gray-300">
                        <pre>${project.codeExample}</pre>
                        </div>
                        ` : ''}

                        <div class="flex space-x-4 mt-6">
                        <a href="${project.githubUrl}" target="_blank" class="project-link bg-indigo-600 text-white hover:bg-indigo-700">
                        <i class="fab fa-github mr-2"></i> View Code
                        </a>
                        ${project.demoUrl ? `
                            <a href="${project.demoUrl}" target="_blank" class="project-link bg-green-600 text-white hover:bg-green-700">
                            <i class="fas fa-external-link-alt mr-2"></i> Live Demo
                            </a>
                            ` : ''}
                            </div>
                            </div>
                            </div>
                            `;

                modal.style.display = 'flex';
            }
        });
    });

    // Close modal
    closeModal.addEventListener('click', () => {
        modal.style.display = 'none';
    });

    // Close modal when clicking outside content
    window.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.style.display = 'none';
        }
    });
});
