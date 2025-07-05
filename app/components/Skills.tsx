"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Palette, Code, Server } from "lucide-react"
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiHtml5,
  SiCss3,
  SiFigma,
  SiCanva,
  SiNodedotjs,
  SiSupabase,
  SiVercel,
} from "react-icons/si"

export default function Skills() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const skills = [
    {
      icon: <Code size={32} />,
      title: "Frontend",
      tools: [
        { name: "React.js", icon: <SiReact className="text-cyan-500" /> },
        { name: "Next.js", icon: <SiNextdotjs className="text-black dark:text-white" /> },
        { name: "TypeScript", icon: <SiTypescript className="text-blue-600" /> },
        { name: "Tailwind CSS", icon: <SiTailwindcss className="text-sky-400" /> },
        { name: "HTML5", icon: <SiHtml5 className="text-orange-500" /> },
        { name: "CSS3", icon: <SiCss3 className="text-blue-600" /> },
      ],
      gradient: "from-cyan-700 to-blue-400",
      bgGradient: "from-blue-100 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20",
    },
    {
      icon: <Palette size={32} />,
      title: "Desain",
      tools: [
        { name: "Figma", icon: <SiFigma className="text-pink-500" /> },
        { name: "Canva", icon: <SiCanva className="text-blue-500" /> },
      ],
      gradient: "from-green-600 to-blue-400",
      bgGradient: "from-green-100 to-teal-50 dark:from-green-900/20 dark:to-teal-900/20",
    },
    {
      icon: <Server size={32} className="p-1" />,
      title: "Backend",
      tools: [
        { name: "Node.js", icon: <SiNodedotjs className="text-green-600" /> },
        { name: "Supabase", icon: <SiSupabase className="text-emerald-500" /> },
        { name: "Vercel", icon: <SiVercel className="text-black dark:text-white" /> },
      ],
      gradient: "from-black to-blue-400",
      bgGradient: "from-gray-100 to-blue-100 dark:from-pink-900/20 dark:to-orange-900/20",
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

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.title}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              whileHover={{ y: -8, scale: 1.01 }}
              className={`rounded-3xl p-8 overflow-hidden bg-gradient-to-br ${skill.bgGradient} border border-gray-100 dark:border-gray-800 shadow-lg hover:shadow-xl backdrop-blur-md transition-all duration-300`}

//bg-gradient-to-br rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-800
            >
              <div className="flex items-center mb-6">
                <div
                  className={`w-14 h-14 flex items-center justify-center rounded-full bg-gradient-to-br ${skill.gradient} text-white shadow-lg`}
                >
                  {skill.icon}
                </div>
                <h3 className="ml-4 text-2xl font-bold text-gray-900 dark:text-white">{skill.title}</h3>
              </div>

              <div className="flex flex-wrap gap-3 mt-4">
                {skill.tools.map((tool, toolIndex) => (
                  <motion.div
                    key={tool.name}
                    initial={{ opacity: 0, y: 10 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, delay: index * 0.1 + toolIndex * 0.05 }}
                    className="flex items-center gap-2 bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 px-3 py-1 rounded-full text-sm font-medium"
                  >
                    {tool.icon}
                    {tool.name}
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
