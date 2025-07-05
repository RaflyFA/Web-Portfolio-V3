"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { ExternalLink, Github, Globe, Smartphone, Palette } from "lucide-react"

export default function Projects() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const projects = [
    {
      title: "E-Commerce ThinkSale",
      category: "Web Application",
      icon: <Globe size={24} />,
      description:
        "Website e-commerce kompleks yang saya kembangkan untuk mengelola toko online. Sudah digunakan dan menghasilkan penjualan.",
      tech: ["React.js", "Next.js", "Tailwind CSS", "Supabase", "Vercel", "Figma"],
      github: "#",
      live: "#",
      gradient: "from-blue-500 to-purple-500",
      bgGradient: "from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20",
    },
    {
      title: "Landing-Page Joki Game",
      category: "Web Application",
      icon: <Globe size={24} />,
      description:
        "Prototype landing page layanan joki game, fokus pada desain menarik dan struktur profesional.",
      tech: ["React.js", "Next.js", "Tailwind CSS", "Vercel", "Figma"],
      github: "#",
      live: "#",
      gradient: "from-green-500 to-teal-500",
      bgGradient: "from-green-50 to-teal-50 dark:from-green-900/20 dark:to-teal-900/20",
    },
    {
      title: "Landing-Page Kedai Kopi",
      category: "Web Application",
      icon: <Globe size={24} />,
      description:
        "Website promosi kedai kopi lokal, simpel, user-friendly, cocok untuk branding usaha kecil.",
      tech: ["HTML5", "CSS3", "JavaScript"],
      github: "#",
      live: "#",
      gradient: "from-pink-500 to-orange-500",
      bgGradient: "from-pink-50 to-orange-50 dark:from-pink-900/20 dark:to-orange-900/20",
    },
  ]

  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">Proyek</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-600 to-blue-600 mx-auto rounded-full"></div>
          <p className="text-gray-600 dark:text-gray-400 mt-4 max-w-2xl mx-auto">
            Beberapa proyek yang telah saya kerjakan untuk mengasah kemampuan dan eksplorasi teknologi
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              whileHover={{ y: -10 }}
              className={`bg-gradient-to-br ${project.bgGradient} rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-800`}
            >
              <div className="p-8">
                <div className="flex items-center justify-between mb-6">
                  <div
                    className={`w-12 h-12 bg-gradient-to-r ${project.gradient} rounded-xl flex items-center justify-center text-white`}
                  >
                    {project.icon}
                  </div>
                  <span className="text-sm font-medium text-gray-600 dark:text-gray-400 bg-white/50 dark:bg-gray-800/50 px-3 py-1 rounded-full backdrop-blur-sm">
                    {project.category}
                  </span>
                </div>

                <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">{project.title}</h3>

                <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs font-medium bg-white/50 dark:bg-gray-800/50 text-gray-700 dark:text-gray-300 px-2 py-1 rounded-full backdrop-blur-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex space-x-4">
                  <motion.a
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    href={project.github}
                    className="flex items-center space-x-2 text-gray-600 dark:text-gray-400 hover:text-purple-600 dark:hover:text-purple-400 transition-colors duration-200"
                  >
                    <Github size={18} />
                    <span className="text-sm font-medium">Code</span>
                  </motion.a>
                  <motion.a
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    href={project.live}
                    className="flex items-center space-x-2 text-gray-600 dark:text-gray-400 hover:text-purple-600 dark:hover:text-purple-400 transition-colors duration-200"
                  >
                    <ExternalLink size={18} />
                    <span className="text-sm font-medium">Live</span>
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
