"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Palette, Code, Smartphone, Server } from "lucide-react"

export default function Skills() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const skills = [
    {
      icon: <Palette size={32} />,
      title: "Desain",
      tools: ["Figma", "Adobe XD", "Photoshop", "Illustrator", "Canva", "Sketch"],
      gradient: "from-pink-500 to-rose-500",
      bgGradient: "from-pink-50 to-rose-50 dark:from-pink-900/20 dark:to-rose-900/20",
    },
    {
      icon: <Code size={32} />,
      title: "Frontend",
      tools: ["React.js", "Next.js", "TypeScript", "Tailwind CSS", "HTML5", "CSS3"],
      gradient: "from-blue-500 to-cyan-500",
      bgGradient: "from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20",
    },
    {
      icon: <Smartphone size={32} />,
      title: "Mobile",
      tools: ["React Native", "Flutter", "Expo", "Android Studio", "Xcode", "Firebase"],
      gradient: "from-green-500 to-emerald-500",
      bgGradient: "from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20",
    },
    {
      icon: <Server size={32} />,
      title: "Backend",
      tools: ["Node.js", "Express.js", "MongoDB", "PostgreSQL", "Supabase", "Vercel"],
      gradient: "from-purple-500 to-violet-500",
      bgGradient: "from-purple-50 to-violet-50 dark:from-purple-900/20 dark:to-violet-900/20",
    },
  ]

  return (
    <section id="skills" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">Keahlian</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-600 to-blue-600 mx-auto rounded-full"></div>
          <p className="text-gray-600 dark:text-gray-400 mt-4 max-w-2xl mx-auto">
            Teknologi dan tools yang saya kuasai untuk menciptakan solusi digital yang komprehensif
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.title}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className={`bg-gradient-to-br ${skill.bgGradient} rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-800`}
            >
              <div
                className={`w-16 h-16 bg-gradient-to-r ${skill.gradient} rounded-2xl flex items-center justify-center text-white mb-6`}
              >
                {skill.icon}
              </div>
              <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">{skill.title}</h3>
              <div className="space-y-2">
                {skill.tools.map((tool, toolIndex) => (
                  <motion.div
                    key={tool}
                    initial={{ opacity: 0, x: -20 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.5, delay: index * 0.1 + toolIndex * 0.05 }}
                    className="inline-block bg-white/50 dark:bg-gray-800/50 text-gray-700 dark:text-gray-300 px-3 py-1 rounded-full text-sm font-medium mr-2 mb-2 backdrop-blur-sm"
                  >
                    {tool}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
