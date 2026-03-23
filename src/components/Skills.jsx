import { motion } from 'framer-motion'

export default function Skills() {
  const skillCategories = [
    {
      title: 'Languages',
      icon: 'fas fa-code',
      color: 'from-purple-600 to-blue-500',
      skills: [
        { name: 'Python', icon: 'fab fa-python', color: 'text-blue-400' },
        { name: 'JavaScript', icon: 'fab fa-js', color: 'text-yellow-400' },
        { name: 'Java', icon: 'fab fa-java', color: 'text-blue-600' },
        { name: 'Bash/Shell', icon: 'fas fa-terminal', color: 'text-gray-300' },
        { name: 'NPM', icon: 'fab fa-npm', color: 'text-red-500' },
        { name: 'HTML', icon: 'fab fa-html5', color: 'text-orange-500' }
      ]
    },
    {
      title: 'Web Dev',
      icon: 'fas fa-globe',
      color: 'from-blue-500 to-teal-400',
      skills: [
        { name: 'Node.js', icon: 'fab fa-node-js', color: 'text-green-500' },
        { name: 'React', icon: 'fab fa-react', color: 'text-blue-400' },
        { name: 'Vue.js', icon: 'fab fa-vuejs', color: 'text-green-500' },
        { name: 'CSS3', icon: 'fab fa-css3-alt', color: 'text-blue-500' },
        { name: 'Webpack', icon: 'fab fa-js-square', color: 'text-blue-400' },
        { name: 'TailwindCSS', icon: null, color: 'text-blue-400' }
      ]
    },
    {
      title: 'Backend & DB',
      icon: 'fas fa-server',
      color: 'from-green-500 to-emerald-400',
      skills: [
        { name: 'PostgreSQL', icon: 'fas fa-database', color: 'text-blue-700' },
        { name: 'MongoDB', icon: 'fas fa-database', color: 'text-green-500' },
        { name: 'Firebase', icon: 'fas fa-fire', color: 'text-orange-500' },
        { name: 'REST APIs', icon: 'fas fa-cloud', color: 'text-gray-300' }
      ]
    },
    {
      title: 'Frameworks',
      icon: 'fas fa-cubes',
      color: 'from-red-500 to-orange-400',
      skills: [
        { name: 'Django', icon: null, color: 'text-green-600' },
        { name: 'FastAPI', icon: 'fas fa-bolt', color: 'text-green-500' },
        { name: 'Electron', icon: 'fas fa-atom', color: 'text-blue-500' },
        { name: 'Bootstrap', icon: 'fab fa-bootstrap', color: 'text-purple-500' }
      ]
    },
    {
      title: 'Tools & Tech',
      icon: 'fas fa-tools',
      color: 'from-yellow-500 to-amber-400',
      skills: [
        { name: 'Docker', icon: 'fab fa-docker', color: 'text-blue-500' },
        { name: 'Git', icon: 'fab fa-git-alt', color: 'text-orange-500' },
        { name: 'AWS', icon: 'fab fa-aws', color: 'text-orange-500' },
        { name: 'DigitalOcean', icon: 'fab fa-digital-ocean', color: 'text-blue-400' }
      ]
    },
    {
      title: 'AI & Data Science',
      icon: 'fas fa-brain',
      color: 'from-purple-500 to-pink-500',
      skills: [
        { name: 'TensorFlow', icon: 'fas fa-robot', color: 'text-orange-500' },
        { name: 'Data Analysis', icon: 'fas fa-chart-line', color: 'text-blue-400' },
        { name: 'Neural Networks', icon: 'fas fa-project-diagram', color: 'text-yellow-400' },
        { name: 'ML Algorithms', icon: 'fas fa-cogs', color: 'text-red-400' }
      ]
    }
  ]

  return (
    <section id="skills-wrapper" className="relative py-20">
      <div className="floating-shape animate-float w-80 h-80 bg-purple-400 top-1/4 left-1/4"></div>
      <div className="floating-shape animate-pulse-soft w-64 h-64 bg-teal-400 top-1/2 right-1/4 animation-delay-1000"></div>
      <div className="floating-shape animate-float w-72 h-72 bg-[#ff007f] bottom-1/4 left-1/3 animation-delay-2000"></div>

      <section className="relative z-10 w-full max-w-6xl mx-auto py-12 px-4">
        <motion.h2
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-4 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent"
        >
          Skills & Expertise
        </motion.h2>

        <motion.p
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: true }}
          className="text-md md:text-xl text-center mb-12 text-gray-400 max-w-3xl mx-auto"
        >
          A comprehensive showcase of my technical abilities and tools I work with
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="skill-category bg-gray-800 bg-opacity-50 rounded-2xl p-6 backdrop-blur-md border border-gray-700"
            >
              <div className="flex items-center mb-5">
                <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${category.color} flex items-center justify-center mr-4`}>
                  <i className={`text-white text-xl ${category.icon}`}></i>
                </div>
                <h3 className="text-2xl font-bold text-white">{category.title}</h3>
              </div>

              <div className="grid grid-cols-2 gap-3">
                {category.skills.map((skill) => (
                  <div key={skill.name} className="skill-item bg-gray-950 bg-opacity-70 rounded-xl p-3 text-center">
                    <div className={`${skill.color} text-3xl mb-2`}>
                      {skill.icon ? <i className={skill.icon}></i> : <span>🔧</span>}
                    </div>
                    <p className="text-sm font-medium">{skill.name}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </section>
  )
}
