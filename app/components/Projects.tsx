"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { ExternalLink, Github, ArrowLeft, ChevronLeft, ChevronRight } from "lucide-react";
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
    tech: { name: string; icon: any; color?: string }[];
    github?: string;
    live?: string;
    images: string[];
    gradient: string;
    bgGradient: string;
  }

  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [projectImageIndex, setProjectImageIndex] = useState(0);
  const [projectSlideDirection, setProjectSlideDirection] = useState<
    "next" | "prev" | "neutral"
  >("neutral");

  useEffect(() => {
    document.body.style.overflow = selectedProject ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [selectedProject]);
  
  const webProjects: Project[] = [
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
      images: ["/webthinksale.jpg", "/webthinksale2.jpg", "/webthinksale3.jpg", "/webthinksale4.jpg", "/webthinksale5.jpg", "/webthinksale6.jpg", "/webthinksale7.jpg", "/webthinksale8.jpg"],
      gradient: "from-blue-500 to-purple-500",
      bgGradient:
        "from-blue-100 to-purple-100 dark:from-blue-900/20 dark:to-purple-900/20",
    },
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
      images: ["/srmotor.png", "/srmotor2.png", "/srmotor3.png"],
      gradient: "from-yellow-500 to-blue-500",
      bgGradient:
        "from-gray-200 to-blue-100 dark:from-blue-200/20 dark:to-gray-900/50",
    },
    {
      title: "E-Commerce VictoryJoki",
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
      github: "https://github.com/RaflyFA/victory-jokii",
      live: "https://victory-jokii.vercel.app/",
      images: ["/WebsiteJoki.jpg", "/WebsiteJoki2.jpg", "/WebsiteJoki3.jpg", "/WebsiteJoki4.jpg", "/WebsiteJoki5.jpg", "/WebsiteJoki6.jpg", "/WebsiteJoki7.jpg"],
      gradient: "from-green-500 to-teal-500",
      bgGradient:
      "from-green-100 to-teal-50 dark:from-green-900/20 dark:to-teal-900/20",
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
      images: ["/Project-RentalPS.jpg"],
      gradient: "from-blue-500 to-purple-500",
      bgGradient:
        "from-black-200 to-blue-100 dark:from-black-900/20 dark:to-blue-900/50",
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
      images: ["/kedaikopi.jpg", "/kedaikopi2.jpg", "/kedaikopi3.jpg"],
      gradient: "from-gray-500 to-orange-500",
      bgGradient:
        "from-gray-100 to-orange-50 dark:from-gray-900/20 dark:to-orange-900/20",
    },
  ];

  const designProjects: Project[] = [
    {
      title: "Temuloka Mobile App",
      category: "Mobile UI/UX",
      description:
        "Konsep aplikasi pemenang juara 2 lomba UI/UX tim kami. Temuloka membantu masyarakat menemukan informasi destinasi wisata Indonesia dengan fitur rekomendasi pintar, kurasi event lokal, dan komunitas traveler.",
      tech: [{ name: "Figma", icon: SiFigma, color: "#F24E1E" }],
      live: "https://www.figma.com/proto/ujXVOPSVw3qkp2LEhN37i8/UI-Iconic-IT?node-id=1059-3116&t=vi5gYIcNnluF7LMt-0&scaling=scale-down&content-scaling=fixed&page-id=754%3A626&starting-point-node-id=1059%3A4244",
      images: ["/uiux.jpg", "/uiux2.jpg", "/uiux3.png", "/uiux4.png"],
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
      live: "https://www.figma.com/proto/S9SIKXHaozrVadMm9SxHQE/Untitled?node-id=1-9&p=f&t=Puhiws4Yyg2iindf-1&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=1%3A9",
      images: ["/desain1(1).png", "/desain2(2).png", "/desain4(4).png", "/desain3(3).png"],
      gradient: "from-gray-500 to-blue-500",
      bgGradient:
        "from-gray-100 to-blue-100 dark:from-gray-900/20 dark:to-blue-900/20",
    },
  ];

  const projectImageVariants = {
    initial: (direction: "next" | "prev" | "neutral") => ({
      x: direction === "next" ? 80 : direction === "prev" ? -80 : 0,
      opacity: 0,
    }),
    animate: { x: 0, opacity: 1 },
    exit: (direction: "next" | "prev" | "neutral") => ({
      x: direction === "next" ? -80 : direction === "prev" ? 80 : 0,
      opacity: 0,
    }),
  };

  const openProject = (project: Project) => {
    setSelectedProject(project);
    setProjectImageIndex(0);
    setProjectSlideDirection("neutral");
  };

  const closeProject = () => {
    setSelectedProject(null);
    setProjectImageIndex(0);
    setProjectSlideDirection("neutral");
  };

  const showNextProjectImage = () => {
    if (!selectedProject) return;
    const images = selectedProject.images;
    if (images.length <= 1) return;
    setProjectSlideDirection("next");
    setProjectImageIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const showPrevProjectImage = () => {
    if (!selectedProject) return;
    const images = selectedProject.images;
    if (images.length <= 1) return;
    setProjectSlideDirection("prev");
    setProjectImageIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const ProjectCard = (
    {
      project,
      index,
      onOpen,
    }: { project: Project; index: number; onOpen: (project: Project) => void }
  ) => (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay: index * 0.2 }}
      whileHover={{ y: -10 }}
      role="button"
      tabIndex={0}
      onClick={() => onOpen(project)}
      onKeyDown={(event) => {
        if (event.key === "Enter") {
          onOpen(project);
        }
      }}
      className={`bg-gradient-to-br ${project.bgGradient} rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-800 cursor-pointer`}
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
            src={project.images[0]}
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
              onClick={(event) => event.stopPropagation()}
              className="flex items-center space-x-2 px-3 py-1 rounded-md bg-white/60 dark:bg-gray-800/60  hover:bg-white hover:dark:bg-gray-700 transition-all duration-200 backdrop-blur"
            >
              <Github size={18} className="text-current" />
              <span className="text-sm font-medium">Github</span>
            </motion.a>
          )}

          {/* Link Live selalu ada */}
          {project.live && (
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(event) => event.stopPropagation()}
              className="flex items-center space-x-2 px-3 py-1 rounded-md bg-white/60 dark:bg-gray-800/60  hover:bg-white hover:dark:bg-gray-700 transition-all duration-200 backdrop-blur"
            >
              <ExternalLink size={18} className="text-current" />
              <span className="text-sm font-medium">Live</span>
            </motion.a>
          )}
        </div>
      </div>
    </motion.div>
  );

  return (
    <>
      <section className="py-0">
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
                  onOpen={openProject}
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
                  onOpen={openProject}
                />
              ))}
            </div>
          </div>
        </div>
      </section>
      <AnimatePresence>
      {selectedProject && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm px-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={closeProject}
        >
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 30 }}
            transition={{ duration: 0.3 }}
            onClick={(event) => event.stopPropagation()}
            className="relative w-full max-w-5xl bg-white dark:bg-gray-900 rounded-2xl sm:rounded-3xl shadow-2xl p-4 sm:p-6 md:p-8 lg:p-10 space-y-4 sm:space-y-6 max-h-[90vh] overflow-y-auto"
          >
            <div className="flex flex-wrap items-center justify-between gap-2 sm:gap-3">
              <button
                type="button"
                onClick={closeProject}
                className="inline-flex items-center gap-2 px-3 sm:px-4 py-2 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-100 text-xs sm:text-sm font-semibold hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
              >
                <ArrowLeft size={16} className="sm:w-[18px] sm:h-[18px]" />
                Kembali
              </button>

              <span className="px-2 sm:px-3 py-1 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100 border border-gray-200 dark:border-gray-700 text-xs sm:text-sm font-medium">
                {selectedProject.category}
              </span>
            </div>

            <div className={`relative w-full h-[40vh] sm:h-[50vh] md:h-[55vh] min-h-[280px] sm:min-h-[360px] rounded-2xl bg-white dark:bg-gray-800/50`}>
              <AnimatePresence mode="wait" custom={projectSlideDirection}>
                <motion.div
                  key={`${selectedProject.title}-${projectImageIndex}`}
                  custom={projectSlideDirection}
                  variants={projectImageVariants}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                  transition={{ duration: 0.28, ease: "easeInOut" }}
                  className="absolute inset-0 p-2 sm:p-4 md:p-6 overflow-auto"
                >
                  <div className="relative w-full h-full">
                    <Image
                      src={selectedProject.images[projectImageIndex]}
                      alt={`${selectedProject.title} ${projectImageIndex + 1}`}
                      fill
                      sizes="(max-width: 768px) 90vw, 60vw"
                      className="object-contain"
                    />
                  </div>
                </motion.div>
              </AnimatePresence>

              {selectedProject.images.length > 1 && (
                <>
                  <button
                    type="button"
                    onClick={showPrevProjectImage}
                    className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 inline-flex h-8 w-8 sm:h-10 sm:w-10 items-center justify-center rounded-full bg-white/80 dark:bg-gray-800/80 text-gray-900 dark:text-white shadow-lg hover:bg-white"
                  >
                    <ChevronLeft size={18} className="sm:w-[20px] sm:h-[20px]" />
                  </button>
                  <button
                    type="button"
                    onClick={showNextProjectImage}
                    className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 inline-flex h-8 w-8 sm:h-10 sm:w-10 items-center justify-center rounded-full bg-white/80 dark:bg-gray-800/80 text-gray-900 dark:text-white shadow-lg hover:bg-white"
                  >
                    <ChevronRight size={18} className="sm:w-[20px] sm:h-[20px]" />
                  </button>
                  <div className="absolute bottom-2 sm:bottom-4 left-1/2 -translate-x-1/2 px-2 sm:px-3 py-1 rounded-full bg-white/80 dark:bg-gray-800/80 text-xs font-semibold text-gray-800 dark:text-gray-100">
                    {projectImageIndex + 1} / {selectedProject.images.length}
                  </div>
                </>
              )}
            </div>

            <div className="flex flex-wrap gap-2 sm:gap-3">
              {selectedProject.github && (
                <motion.a
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  href={selectedProject.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-3 sm:px-4 py-2 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100 border border-gray-200 dark:border-gray-700 text-xs sm:text-sm font-medium hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                >
                  <Github size={14} className="sm:w-[16px] sm:h-[16px]" />
                  Github
                </motion.a>
              )}
              {selectedProject.live && (
                <motion.a
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  href={selectedProject.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-3 sm:px-4 py-2 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100 border border-gray-200 dark:border-gray-700 text-xs sm:text-sm font-medium hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                >
                  <ExternalLink size={14} className="sm:w-[16px] sm:h-[16px]" />
                  Live
                </motion.a>
              )}
            </div>

            <div className="space-y-2 sm:space-y-3">
              <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 dark:text-white">
                {selectedProject.title}
              </h3>
              <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 leading-relaxed">
                {selectedProject.description}
              </p>

              {selectedProject.tech.length > 0 && (
                <div className="flex flex-wrap gap-2 sm:gap-3 pt-2">
                  {selectedProject.tech.map((tech) => (
                    <div
                      key={`project-${selectedProject.title}-${tech.name}`}
                      className="flex items-center space-x-2 bg-gray-100 dark:bg-gray-800 px-2 sm:px-3 py-1.5 rounded-full text-xs sm:text-sm font-medium"
                    >
                      <tech.icon size={14} className="sm:w-[16px] sm:h-[16px]" style={{ color: tech.color }} />
                      <span className="text-gray-800 dark:text-gray-100">
                        {tech.name}
                      </span>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
    </>
  );
}



