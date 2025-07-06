"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { ExternalLink, Github } from "lucide-react"
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiFigma,
  SiSupabase,
  SiVercel,
  SiHtml5,
  SiCss3,
  SiJavascript,
} from "react-icons/si"
import Image from "next/image"

export default function Projects() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  // Definisi tipe data untuk Project
  interface Project {
    title: string;
    category: string;
    description: string;
    tech: { name: string; icon: any }[]; // 'any' untuk icon karena type dari SiReact dll.
    github?: string; // Properti opsional
    live: string;
    image: string;
    gradient: string;
    bgGradient: string;
  }

  const webProjects: Project[] = [ // Gunakan tipe Project
    {
      title: "E-Commerce Thinksale",
      category: "Web Application",
      description:
        "Website e-commerce yang dibangun dengan Next.js, Tailwind CSS, dan Supabase. Saya bertanggung jawab di sisi frontend, berkolaborasi dengan rekan saya yang mengerjakan backend. Website ini sudah digunakan untuk transaksi nyata dan berhasil menghasilkan beberapa closing.",
      tech: [
        { name: "React.js", icon: SiReact },
        { name: "Next.js", icon: SiNextdotjs },
        { name: "TypeScript", icon: SiTypescript },
        { name: "Tailwind CSS", icon: SiTailwindcss },
        { name: "Supabase", icon: SiSupabase },
        { name: "Vercel", icon: SiVercel },
      ],
      github: "https://github.com/RaflyFA/thinksale-5s",
      live: "https://thinksale.vercel.app/",
      image: "/webthinksale.jpg",
      gradient: "from-blue-500 to-purple-500",
      bgGradient: "from-blue-100 to-purple-100 dark:from-blue-900/20 dark:to-purple-900/20",
    },
    {
      title: "Landing-Page VictoryJoki",
      category: "Web Application",
      description:
        "Landing page untuk jasa joki game, dirancang untuk menampilkan layanan dengan tampilan profesional. Masih dalam tahap pengembangan sebagai prototype awal, fokusnya adalah membangun UI yang dapat dikembangkan menjadi sistem penuh di masa mendatang.",
      tech: [
        { name: "React.js", icon: SiReact },
        { name: "Next.js", icon: SiNextdotjs },
        { name: "TypeScript", icon: SiTypescript },
        { name: "Tailwind CSS", icon: SiTailwindcss },
        { name: "Vercel", icon: SiVercel },
      ],
      github: "https://github.com/RaflyFA/VictoryJoki",
      live: "https://victoryjoki.vercel.app/",
      image: "/WebsiteJoki.jpg",
      gradient: "from-green-500 to-teal-500",
      bgGradient: "from-green-100 to-teal-50 dark:from-green-900/20 dark:to-teal-900/20",
    },
    {
      title: "Landing-Page KedaiKopi",
      category: "Web Application",
      description:
        "Website sederhana untuk promosi kedai kopi lokal. Fokus pada tampilan yang bersih dan user-friendly, cocok untuk UMKM yang ingin membangun identitas digital.",
      tech: [
        { name: "HTML5", icon: SiHtml5 },
        { name: "CSS3", icon: SiCss3 },
        { name: "JavaScript", icon: SiJavascript },
      ],
      github: "https://github.com/RaflyFA/kedaiKopi", // Perbaiki typo "hhttps"
      live: "https://raflyfa.github.io/kedaiKopi/",
      image: "/kedaikopi.jpg",
      gradient: "from-gray-500 to-orange-500",
      bgGradient: "from-gray-100 to-orange-50 dark:from-gray-900/20 dark:to-orange-900/20",
    },
  ]

  // === PERUBAHAN UTAMA DI SINI ===
  const designProjects: Project[] = [ // Gunakan tipe Project
    {
      title: "E-Commerce Thinksale Design",
      category: "UI/UX Design",
      description:
        "Desain UI/UX untuk website e-commerce Thinksale. Fokus pada user experience yang intuitif dan desain yang modern untuk meningkatkan konversi penjualan.",
      tech: [{ name: "Figma", icon: SiFigma }],
      live: "https://www.figma.com/design/mkQ1SC3Ddi0MbiaYLgw3NF/Untitled?node-id=0-1&p=f&t=rQORAwHlU6qG0ZtM-0",
      image: "/desain1(1).jpg",
      gradient: "from-gray-500 to-blue-500",
      bgGradient: "from-gray-100 to-blue-100 dark:from-gray-900/20 dark:to-blue-900/20",
      // github: "...", // Hapus properti github agar tidak ditampilkan
    },
  ]

  const ProjectCard = ({ project, index }: { project: Project; index: number }) => ( // Gunakan tipe Project
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay: index * 0.2 }}
      whileHover={{ y: -10 }}
      className={`bg-gradient-to-br ${project.bgGradient} rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-800`}
    >
      <div className="p-6">
        {/* Category */}
        <div className="flex items-center justify-between mb-4">
          <span className="text-sm font-medium text-gray-600 dark:text-gray-400 bg-white/50 dark:bg-gray-800/50 px-3 py-1 rounded-full backdrop-blur-sm">
            {project.category}
          </span>
        </div>

        {/* Project Image */}
        <div className="relative w-full h-48 mb-4 rounded-lg overflow-hidden">
          {/* Perbaiki src Image agar tidak ada || "/placeholder.svg" jika Anda yakin gambar selalu ada */}
          <Image src={project.image} alt={project.title} fill className="object-cover" />
        </div>

        {/* Project Title */}
        <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">{project.title}</h3>

        {/* Description */}
        <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed text-sm">{project.description}</p>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-3 mb-6">
          {project.tech.map((tech) => ( // Tidak perlu type any lagi karena sudah diinfer dari Project interface
            <div
              key={tech.name}
              className="flex items-center space-x-1 bg-white/50 dark:bg-gray-800/50 px-2 py-1 rounded-full backdrop-blur-sm"
            >
              <tech.icon size={14} className="text-gray-700 dark:text-gray-300" />
              <span className="text-xs font-medium text-gray-700 dark:text-gray-300">{tech.name}</span>
            </div>
          ))}
        </div>

        {/* Links - Kondisional untuk GitHub */}
        <div className="flex space-x-4">
          {/* Tampilkan GitHub hanya jika project.github ada */}
          {project.github && (
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 text-gray-600 dark:text-gray-400 hover:text-purple-600 dark:hover:text-purple-400 transition-colors duration-200"
            >
              <Github size={18} />
              <span className="text-sm font-medium">GitHub</span>
            </motion.a>
          )}

          {/* Link Live selalu ada */}
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href={project.live}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-2 text-gray-600 dark:text-gray-400 hover:text-purple-600 dark:hover:text-purple-400 transition-colors duration-200"
          >
            <ExternalLink size={18} />
            <span className="text-sm font-medium">Live</span>
          </motion.a>
        </div>
      </div>
    </motion.div>
  )

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
            <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">Project</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-600 to-blue-600 mx-auto rounded-full"></div>
          <p className="text-gray-600 dark:text-gray-400 mt-4 max-w-2xl mx-auto">
            Beberapa proyek yang telah saya kerjakan untuk mengasah kemampuan dan eksplorasi lebih
          </p>
        </motion.div>

        {/* Web Projects */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold mb-8 text-gray-900 dark:text-white">Web Development</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {webProjects.map((project, index) => (
              <ProjectCard key={project.title} project={project} index={index} />
            ))}
          </div>
        </div>

        {/* Design Projects */}
        <div>
          <h3 className="text-2xl font-bold mb-8 text-gray-900 dark:text-white">UI/UX Design</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {designProjects.map((project, index) => (
              <ProjectCard key={project.title} project={project} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}