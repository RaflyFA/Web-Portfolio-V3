"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { ExternalLink, Github } from "lucide-react";
import { Code, Palette, Sparkles } from "lucide-react";
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
} from "react-icons/si";
import Image from "next/image";

export default function Projects() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  // Definisi tipe data untuk Project
  interface Project {
    title: string;
    category: string;
    description: string;
    tech: { name: string; icon: any; color?: string }[]; // tambahkan color
    github?: string;
    live: string;
    image: string;
    gradient: string;
    bgGradient: string;
  }

  const webProjects: Project[] = [
    {
      title: "Landing-Page SR MOTOR",
      category: "Web Application",
      description:
        "Landing Page ini adalah Website untuk bengkel motor yang ada di daerah Ciamis, Jawa Barat. Project ini merupakan project UAS saya di semester 3. Saya membuat landing page ini menggunakan React.js dan Tailwind CSS.",
      tech: [
        { name: "React.js", icon: SiReact, color: "#61DAFB" },
        { name: "Tailwind CSS", icon: SiTailwindcss, color: "#06B6D4" },
      ],
      github: "https://github.com/RaflyFA/SR-Motor",
      live: "https://sr-motor.vercel.app/",
      image: "/srmotor.jpg",
      gradient: "from-yellow-500 to-blue-500",
      bgGradient:
        "from-black-200 to-blue-100 dark:from-black-900/20 dark:to-blue-900/50",
    },
    {
      title: "Website Admin Rental PS",
      category: "Web Application",
      description:
        "Saya Bertanggung jawab di fitur Reservasi, Berkolaborasi dengan tema se tim saya yang mengerjakan firu-fitur yang lainnya. Website in dibuat menggunakan React.js dan sekarang Website ini sudah digunakan untuk Tempat Rental PSnya.",
      tech: [
        { name: "React.js", icon: SiReact, color: "#61DAFB" },
        { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
        { name: "Tailwind CSS", icon: SiTailwindcss, color: "#06B6D4" },
      ],
      github: "https://github.com/RaflyFA/rental_ps_fe",
      live: "https://rentalpsfe.vercel.app//",
      image: "/Project-RentalPS.jpg",
      gradient: "from-blue-500 to-purple-500",
      bgGradient:
        "from-black-200 to-blue-100 dark:from-black-900/20 dark:to-blue-900/50",
    },
    {
      title: "E-Commerce Thinksale",
      category: "Web Application",
      description:
        "Website e-commerce yang dibangun dengan Next.js, Tailwind CSS, dan Supabase. Saya bertanggung jawab di sisi frontend, berkolaborasi dengan rekan saya yang mengerjakan backend. Website ini sudah digunakan untuk transaksi nyata dan berhasil menghasilkan beberapa closing.",
      tech: [
        { name: "React.js", icon: SiReact, color: "#61DAFB" },
        { name: "Next.js", icon: SiNextdotjs, color: "#000000" },
        { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
        { name: "Tailwind CSS", icon: SiTailwindcss, color: "#06B6D4" },
        { name: "Supabase", icon: SiSupabase, color: "#3ECF8E" },
        { name: "Vercel", icon: SiVercel, color: "#000000" },
      ],
      github: "https://github.com/RaflyFA/thinksale-5s",
      live: "https://thinksale.vercel.app/",
      image: "/webthinksale.jpg",
      gradient: "from-blue-500 to-purple-500",
      bgGradient:
        "from-blue-100 to-purple-100 dark:from-blue-900/20 dark:to-purple-900/20",
    },
    {
      title: "Landing-Page VictoryJoki",
      category: "Web Application",
      description:
        "Landing page untuk jasa joki game, dirancang untuk menampilkan layanan dengan tampilan profesional. Masih dalam tahap pengembangan sebagai prototype awal, fokusnya adalah membangun UI yang dapat dikembangkan menjadi sistem penuh di masa mendatang.",
      tech: [
        { name: "React.js", icon: SiReact, color: "#61DAFB" },
        { name: "Next.js", icon: SiNextdotjs, color: "#000000" },
        { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
        { name: "Tailwind CSS", icon: SiTailwindcss, color: "#06B6D4" },
        { name: "Vercel", icon: SiVercel, color: "#000000" },
      ],
      github: "https://github.com/RaflyFA/VictoryJoki",
      live: "https://victoryjoki.vercel.app/",
      image: "/WebsiteJoki.jpg",
      gradient: "from-green-500 to-teal-500",
      bgGradient:
        "from-green-100 to-teal-50 dark:from-green-900/20 dark:to-teal-900/20",
    },
    {
      title: "Landing-Page KedaiKopi",
      category: "Web Application",
      description:
        "Website sederhana untuk promosi kedai kopi lokal. Fokus pada tampilan yang bersih dan user-friendly, cocok untuk UMKM yang ingin membangun identitas digital.",
      tech: [
        { name: "HTML5", icon: SiHtml5, color: "#E34F26" },
        { name: "CSS3", icon: SiCss3, color: "#1572B6" },
        { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
      ],
      github: "https://github.com/RaflyFA/kedaiKopi", // Perbaiki typo "hhttps"
      live: "https://raflyfa.github.io/kedaiKopi/",
      image: "/kedaikopi.jpg",
      gradient: "from-gray-500 to-orange-500",
      bgGradient:
        "from-gray-100 to-orange-50 dark:from-gray-900/20 dark:to-orange-900/20",
    },
  ];

  // === PERUBAHAN UTAMA DI SINI ===
  const designProjects: Project[] = [
    {
      title: "Temuloka Mobile App",
      category: "Mobile UI/UX",
      description:
        "Konsep aplikasi pemenang juara 2 lomba UI/UX tim kami. Temuloka membantu masyarakat menemukan informasi destinasi wisata Indonesia dengan fitur rekomendasi pintar, kurasi event lokal, dan komunitas traveler.",
      tech: [{ name: "Figma", icon: SiFigma, color: "#F24E1E" }],
      live: "https://www.figma.com/proto/ujXVOPSVw3qkp2LEhN37i8/UI-Iconic-IT?node-id=1059-3116&t=vi5gYIcNnluF7LMt-0&scaling=scale-down&content-scaling=fixed&page-id=754%3A626&starting-point-node-id=1059%3A4244",
      image: "/uiux.jpg",
      gradient: "from-teal-500 to-cyan-500",
      bgGradient:
        "from-teal-50 to-cyan-50 dark:from-teal-900/20 dark:to-cyan-900/20",
    },
    {
      title: "E-Commerce Thinksale Design",
      category: "UI/UX Design",
      description:
        "Desain UI/UX untuk website e-commerce Thinksale. Fokus pada user experience yang intuitif dan desain yang modern untuk meningkatkan konversi penjualan.",
      tech: [{ name: "Figma", icon: SiFigma, color: "#F24E1E" }],
      live: "https://www.figma.com/design/mkQ1SC3Ddi0MbiaYLgw3NF/Untitled?node-id=0-1&p=f&t=rQORAwHlU6qG0ZtM-0",
      image: "/desain1(1).jpg",
      gradient: "from-gray-500 to-blue-500",
      bgGradient:
        "from-gray-100 to-blue-100 dark:from-gray-900/20 dark:to-blue-900/20",
    },
  ];

  const ProjectCard = (
    { project, index }: { project: Project; index: number } // Gunakan tipe Project
  ) => (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay: index * 0.2 }}
      whileHover={{ y: -10 }}
      className={`bg-gradient-to-br ${project.bgGradient} rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-800`}
    >
      <div className="p-6 flex flex-col h-full">
        {/* Category */}
        <div className="flex items-center justify-between mb-4">
          <span className="text-sm font-medium text-gray-600 dark:text-gray-400 bg-white/50 dark:bg-gray-800/50 px-3 py-1 rounded-full backdrop-blur-sm">
            {project.category}
          </span>
        </div>

        {/* Project Image */}
        <div className="relative w-full h-48 mb-4 rounded-lg overflow-hidden">
          {/* Perbaiki src Image agar tidak ada || "/placeholder.svg" jika Anda yakin gambar selalu ada */}
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover"
          />
        </div>

        {/* Project Title */}
        <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">
          {project.title}
        </h3>

        {/* Description */}
        <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed text-sm">
          {project.description}
        </p>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-3 mb-6">
          {project.tech.map(
            (
              tech // Tidak perlu type any lagi karena sudah diinfer dari Project interface
            ) => (
              <div
                key={tech.name}
                className="flex items-center space-x-1 bg-white/50 dark:bg-gray-800/50 px-2 py-1 rounded-full backdrop-blur-sm"
              >
                <tech.icon size={14} style={{ color: tech.color }} />
                <span className="text-xs font-medium ">{tech.name}</span>
              </div>
            )
          )}
        </div>

        {/* Links - Kondisional untuk GitHub */}
        <div className="flex space-x-4 mt-auto">
          {project.github && (
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 px-3 py-1 rounded-md bg-white/60 dark:bg-gray-800/60  hover:bg-white hover:dark:bg-gray-700 transition-all duration-200 backdrop-blur"
            >
              <Github size={18} className="text-current" />
              <span className="text-sm font-medium">Github</span>
            </motion.a>
          )}

          {/* Link Live selalu ada */}
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href={project.live}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-2 px-3 py-1 rounded-md bg-white/60 dark:bg-gray-800/60  hover:bg-white hover:dark:bg-gray-700 transition-all duration-200 backdrop-blur"
          >
            <ExternalLink size={18} className="text-current" />
            <span className="text-sm font-medium">Live</span>
          </motion.a>
        </div>
      </div>
    </motion.div>
  );

  return (
    <section className="py-0 relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden pointer-events-none select-none z-0">
        <motion.div
          animate={{
            x: [0, -80, 0],
            y: [0, 120, 0],
          }}
          transition={{
            duration: 18,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
          }}
          className="absolute top-10 right-16 w-28 h-28 bg-gradient-to-r from-pink-400 to-yellow-400 rounded-full opacity-20 blur-xl"
        />
        <motion.div
          animate={{
            x: [0, 120, 0],
            y: [0, -100, 0],
          }}
          transition={{
            duration: 22,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
          }}
          className="absolute bottom-24 left-10 w-36 h-36 bg-gradient-to-r from-blue-400 to-green-400 rounded-full opacity-20 blur-xl"
        />
        <motion.div
          animate={{
            x: [0, -60, 0],
            y: [0, 60, 0],
          }}
          transition={{
            duration: 14,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
          }}
          className="absolute top-1/3 left-1/5 w-20 h-20 bg-gradient-to-r from-purple-400 to-blue-400 rounded-full opacity-15 blur-lg"
        />
        <motion.div
          animate={{
            y: [0, 18, 0],
            rotate: [0, 8, 0],
          }}
          transition={{
            duration: 5,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
          className="absolute bottom-1/4 left-1/3 text-yellow-300 dark:text-yellow-600 opacity-30"
        >
          <Code size={38} />
        </motion.div>
        <motion.div
          animate={{
            y: [0, -18, 0],
            rotate: [0, -8, 0],
          }}
          transition={{
            duration: 6,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
          className="absolute top-1/5 right-1/4 text-green-300 dark:text-green-600 opacity-30"
        >
          <Palette size={32} />
        </motion.div>
        <motion.div
          animate={{
            y: [0, 12, 0],
            x: [0, -12, 0],
          }}
          transition={{
            duration: 4,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
          className="absolute bottom-1/3 right-1/5 text-blue-300 dark:text-blue-600 opacity-30"
        >
          <Sparkles size={28} />
        </motion.div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        ></motion.div>

        {/* Web Projects */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold mb-8 ">Web Development</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {webProjects.map((project, index) => (
              <ProjectCard
                key={project.title}
                project={project}
                index={index}
              />
            ))}
          </div>
        </div>

        {/* Design Projects */}
        <div>
          <h3 className="text-2xl font-bold mb-8 text-gray-900 dark:text-white">
            UI/UX Design
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {designProjects.map((project, index) => (
              <ProjectCard
                key={project.title}
                project={project}
                index={index}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
