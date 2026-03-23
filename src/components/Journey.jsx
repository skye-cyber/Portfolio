import { motion } from 'framer-motion'

export default function Journey() {
  const timelineItems = [
    {
      title: 'Started My Career',
      period: '2021 - 2022',
      description: 'Embarked on my learning journey in quest for proficiency in software engineering.',
      icon: 'fas fa-rocket',
      skills: [
        { name: 'Programming Basics', icon: 'fas fa-code' },
        { name: 'Web Technologies', icon: 'fas fa-globe' },
        { name: 'Database Systems', icon: 'fas fa-database' },
        { name: 'Networking', icon: 'fas fa-network-wired' }
      ]
    },
    {
      title: 'Web Developer Internship',
      period: '2022 - 2023',
      description: 'Completed an internship focusing on practical applications of web development.',
      icon: 'fas fa-laptop-code',
      skills: [
        { name: 'Python', icon: 'fab fa-python' },
        { name: 'JavaScript', icon: 'fab fa-js' },
        { name: 'Django', icon: 'fas fa-server' },
        { name: 'Testing', icon: 'fas fa-vial' }
      ]
    },
    {
      title: 'Advanced in Django & Python',
      period: '2023 - 2024',
      description: 'Achieved a higher level of expertise in Django and Python, working on complex backend projects.',
      icon: 'fas fa-chart-line',
      skills: [
        { name: 'AI/ML', icon: 'fas fa-brain' },
        { name: 'Node.js', icon: 'fab fa-node-js' },
        { name: 'Tailwind CSS', icon: 'fas fa-paint-brush' },
        { name: 'Security', icon: 'fas fa-shield-alt' }
      ]
    }
  ]

  return (
    <section id="journey" className="py-20 px-4">
      <div className="container mx-auto">
        <motion.h2
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent"
        >
          My Journey
        </motion.h2>

        <div className="max-w-4xl mx-auto space-y-12">
          {timelineItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="timeline-item relative pl-8"
            >
              <div className="absolute left-0 top-2 w-4 h-4 rounded-full bg-indigo-500 flex items-center justify-center">
                <i className={`text-xs text-white ${item.icon}`}></i>
              </div>

              <div className="timeline-content bg-gray-800 bg-opacity-50 rounded-lg p-6 backdrop-blur-md border border-gray-700">
                <h3 className="text-2xl font-semibold mb-2 text-white">
                  {item.title}
                </h3>

                <span className="text-indigo-400 text-sm font-medium">
                  {item.period}
                </span>

                <p className="mt-4 text-gray-300">
                  {item.description}
                </p>

                <div className="mt-4 grid grid-cols-2 gap-2">
                  {item.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="flex items-center text-sm text-gray-400">
                      <i className={`mr-2 ${skill.icon}`}></i>
                      {skill.name}
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}