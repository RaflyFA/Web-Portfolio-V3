"use client";

import { MouseEvent, useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Image from "next/image";
import {
  ArrowLeft,
  Calendar,
  ChevronLeft,
  ChevronRight,
  Code,
  Palette,
  RefreshCw,
  Sparkles,
  ZoomIn,
  ZoomOut,
} from "lucide-react";
import { IconType } from "react-icons";
import {
  SiFigma,
  SiCanva,
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiBootstrap,
  SiVercel,
  SiHtml5,
  SiCss3,
  SiGit,
  SiGithub,
  SiGitlab,
} from "react-icons/si";

type Certificate = {
  title: string;
  issuer: string;
  description: string;
  date: string;
  images: string[];
  gradient: string;
  bgGradient: string;
  tech: { name: string; icon: IconType; color?: string }[];
};

export default function Certificates() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [selectedCert, setSelectedCert] = useState<Certificate | null>(null);
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [zoom, setZoom] = useState(1);

  useEffect(() => {
    document.body.style.overflow = selectedCert ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [selectedCert]);

  const certificates: Certificate[] = [
    {
      title: "KMI Award XVI - P2MW 2025",
      issuer: "Kemdikbudristek & Universitas Tidar",
      description:
        "Dua sertifikat dari ajang KMI Award XVI 2025: KMI EXPO ini adalah ajang pameran untuk mahasiswa Wirausaha muda seindonesia yang diselenggarakan oleh Kemdikbudristek bekerjasama dengan Universitas Tidar. Saya dan tim berpartisipasi resmi di KMI Expo dan juga Alhamdulillah tim kami berhasil Juara Harapan 3 kategori Industri Kreatif untuk Tasik CraftCO Sustainable Fashion Etnis.",
      date: "21 November 2025",
      images: ["/sertif Juara kmi expo.jpg", "/sertif peserta KMI EXPO.jpg"],
      gradient: "from-purple-500 to-pink-500",
      bgGradient:
        "from-purple-100 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20",
      tech: [
        { name: "Figma", icon: SiFigma, color: "#F24E1E" },
        { name: "Canva", icon: SiCanva, color: "#00C4CC" },
      ],
    },
    
    {
      title: "IBM SkillsBuild AI Integration",
      issuer: "IBM SkillsBuild",
      description:
        "Diraih pada 17 Agustus 2025 melalui modul Code Generation and Optimization Using IBM Granite (MDL-566). Sertifikat ini menguatkan kemampuan saya memanfaatkan AI untuk menghasilkan, mengaudit, dan mengoptimalkan kode untuk menghasilkan hasil kode yang maksimal.",
      date: "17 Agustus 2025",
      images: ["/sertif IBM.jpg"],
      gradient: "from-indigo-500 to-sky-500",
      bgGradient:
        "from-indigo-50 to-sky-50 dark:from-indigo-900/20 dark:to-sky-900/20",
      tech: [
        { name: "HTML5", icon: SiHtml5, color: "#E34F26" },
        { name: "CSS3", icon: SiCss3, color: "#1572B6" },
        { name: "React.js", icon: SiReact, color: "#61DAFB" },
        { name: "Git", icon: SiGit, color: "#F05032" },
        { name: "GitHub", icon: SiGithub, color: "#000000" },
        { name: "GitLab", icon: SiGitlab, color: "#FC6D26" },
      ],
    },
    {
      title: "Sertifikat Juara Lomba UI/UX",
      issuer: "Himpunan Mahasiswa Informatika Universitas Siliwangi",
      description:
        "Didapatkan pada Juli 2025, saya dan tim berhasil  Juara 2 di lomba UI/UX yang diselenggarakan oleh Universitas Siliwangi dengan skala Nasional.",
      date: "Juli 2025",
      images: ["/sertif UIUX.jpg"],
      gradient: "from-orange-500 to-yellow-500",
      bgGradient:
        "from-purple-100 to-yellow-100 dark:from-purple-900/20 dark:to-yellow-900/20",
      tech: [{ name: "Figma", icon: SiFigma, color: "#F24E1E" }],
    },
    {
      title: "Belajar Front-End Web",
      issuer: "DiCoding",
      description:
        "Diselesaikan pada 8 Juli 2025, sertifikat ini menunjukkan pemahaman saya dalam pengembangan Front-End, khususnya terkait manipulasi DOM dan pemanfaatan BOM pada browser. Membantu memperkuat logika dan struktur dalam membangun antarmuka web yang interaktif.",
      date: "8 Juli 2025",
      images: ["/Sertifikat Front-End Web.jpg"],
      gradient: "from-yellow-500 to-orange-500",
      bgGradient:
        "from-purple-100 to-yellow-100 dark:from-purple-900/20 dark:to-yellow-900/20",
      tech: [
        { name: "React.js", icon: SiReact, color: "#61DAFB" },
        { name: "Vercel", icon: SiVercel, color: "#000000" },
        { name: "Git", icon: SiGit, color: "#F05032" },
        { name: "GitHub", icon: SiGithub, color: "#000000" },
        { name: "HTML5", icon: SiHtml5, color: "#E34F26" },
        { name: "CSS3", icon: SiCss3, color: "#1572B6" },
        { name: "Bootstrap", icon: SiBootstrap, color: "#7952B3" },
        { name: "Tailwind CSS", icon: SiTailwindcss, color: "#06B6D4" },
      ],
    },
    {
      title: "Belajar Pemrograman JavaScript",
      issuer: "DiCoding",
      description:
        "Diselesaikan pada 7 Juli 2025, sertifikat ini membuktikan penguasaan konsep dasar JavaScript, mulai dari variabel, fungsi, array, hingga pemrograman berbasis objek.",
      date: "7 Juli 2025",
      images: ["/Sertifikat Pemograman Javascript.jpg"],
      gradient: "from-yellow-500 to-orange-500",
      bgGradient:
        "from-blue-100 to-purple-100 dark:from-blue-900/20 dark:to-purple-900/20",
      tech: [
        { name: "React.js", icon: SiReact, color: "#61DAFB" },
        { name: "Next.js", icon: SiNextdotjs, color: "#000000" },
        { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
        { name: "Vercel", icon: SiVercel, color: "#000000" },
        { name: "Git", icon: SiGit, color: "#F05032" },
        { name: "GitHub", icon: SiGithub, color: "#000000" },
      ],
    },
    {
      title: "Belajar Dasar Pemrograman Web",
      issuer: "DiCoding",
      description:
        "Diselesaikan pada 14 Oktober 2024, sertifikat ini membuktikan penguasaan dasar HTML, CSS, dan JavaScript untuk membangun website statis dan dinamis secara efisien.",
      date: "14 Oktober 2024",
      images: ["/Sertifikat Dasar Pemograman.jpg"],
      gradient: "from-blue-500 to-cyan-500",
      bgGradient:
        "from-blue-100 to-cyan-100 dark:from-blue-900/20 dark:to-cyan-900/20",
      tech: [
        { name: "HTML5", icon: SiHtml5, color: "#E34F26" },
        { name: "CSS3", icon: SiCss3, color: "#1572B6" },
        { name: "Git", icon: SiGit, color: "#F05032" },
        { name: "GitHub", icon: SiGithub, color: "#000000" },
      ],
    },
    {
      title: "Magang Desain Grafis",
      issuer: "KOPMA Universitas Siliwangi",
      description:
        "Selama 3 bulan magang part-time, saya bertanggung jawab membuat desain konten media sosial yang mendukung branding organisasi koperasi mahasiswa.",
      date: "2024",
      images: ["/Asisten Desain Grafis.jpg"],
      gradient: "from-gray-500 to-pink-500",
      bgGradient:
        "from-gray-100 to-green-100 dark:from-green-900/20 dark:to-gray-900/20",
      tech: [
        { name: "Canva", icon: SiCanva, color: "#00C4CC" },
        { name: "Figma", icon: SiFigma, color: "#F24E1E" },
      ],
    },
  ];

  const openCertificate = (cert: Certificate) => {
    setSelectedCert(cert);
    setActiveImageIndex(0);
    setZoom(1);
  };

  const closeCertificate = () => {
    setSelectedCert(null);
    setZoom(1);
  };

  const handleOverlayClick = (event: MouseEvent<HTMLDivElement>) => {
    if (event.target === event.currentTarget) {
      closeCertificate();
    }
  };

  const showNextImage = () => {
    if (!selectedCert) return;
    setActiveImageIndex((prev) =>
      prev === selectedCert.images.length - 1 ? 0 : prev + 1
    );
    setZoom(1);
  };

  const showPrevImage = () => {
    if (!selectedCert) return;
    setActiveImageIndex((prev) =>
      prev === 0 ? selectedCert.images.length - 1 : prev - 1
    );
    setZoom(1);
  };

  const zoomIn = () => setZoom((prev) => Math.min(prev + 0.25, 2.5));
  const zoomOut = () => setZoom((prev) => Math.max(prev - 0.25, 0.75));
  const resetZoom = () => setZoom(1);

  const canZoomIn = zoom < 2.5;
  const canZoomOut = zoom > 0.75;

  return (
    <section
      id="certificates"
      className="py-0 items-center justify-center relative overflow-hidden"
    >
      

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-5 relative">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        ></motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certificates.map((cert, index) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              whileHover={{ y: -10 }}
              role="button"
              tabIndex={0}
              onClick={() => openCertificate(cert)}
              onKeyDown={(event) => {
                if (event.key === "Enter") {
                  openCertificate(cert);
                }
              }}
              className={`bg-gradient-to-br ${cert.bgGradient} rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-800 cursor-pointer`}
            >
              <div className="p-6">
                {/* Date */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-1 text-sm font-medium text-gray-600 dark:text-gray-400 bg-white/50 dark:bg-gray-800/50 px-3 py-1 rounded-full backdrop-blur-sm">
                    <Calendar size={14} />
                    <span>{cert.date}</span>
                  </div>
                </div>

                {/* Certificate Image */}
                <div className="relative w-full h-52 mb-4 rounded-lg overflow-hidden">
                  <Image
                    src={cert.images[0] || "/placeholder.jpg"}
                    alt={cert.title}
                    fill
                    className="object-cover"
                  />
                </div>

                {/* Certificate Title */}
                <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">
                  {cert.title}
                </h3>

                {/* Issuer */}
                <p className="text-purple-600 dark:text-purple-400 font-medium mb-4">
                  {cert.issuer}
                </p>

                {/* Description */}
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-sm">
                  {cert.description}
                </p>
                {cert.tech.length > 0 && (
                  <div className="flex flex-wrap gap-2 mt-4">
                    {cert.tech.map((tech) => (
                      <div
                        key={`${cert.title}-${tech.name}`}
                        className="flex items-center space-x-1 bg-white/60 dark:bg-gray-800/60 px-2 py-1 rounded-full backdrop-blur-sm border border-white/40 dark:border-gray-700/40"
                      >
                        <tech.icon size={14} style={{ color: tech.color }} />
                        <span className="text-xs font-medium text-gray-700 dark:text-gray-200">
                          {tech.name}
                        </span>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      <AnimatePresence>
        {selectedCert && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm px-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleOverlayClick}
          >
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 30 }}
              transition={{ duration: 0.3 }}
              onClick={(event) => event.stopPropagation()}
              className="relative w-full max-w-5xl bg-white dark:bg-gray-900 rounded-3xl shadow-2xl p-6 md:p-10 space-y-6"
            >
              <div className="flex flex-wrap items-center justify-between gap-4">
                <button
                  type="button"
                  onClick={closeCertificate}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-100 text-sm font-semibold hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                >
                  <ArrowLeft size={18} />
                  Kembali
                </button>
                <div className="flex items-center gap-2 text-sm font-medium text-gray-500 dark:text-gray-400">
                  <Calendar size={16} />
                  <span>{selectedCert.date}</span>
                </div>
              </div>

              <div className="relative w-full h-[60vh] min-h-[360px] rounded-2xl bg-gray-900/90">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={`${selectedCert.title}-${activeImageIndex}`}
                    initial={{ opacity: 0, scale: 0.97 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 1.02 }}
                    transition={{ duration: 0.3 }}
                    className="absolute inset-0 p-4 md:p-6 overflow-auto"
                  >
                    <div className="relative w-full h-full">
                      <Image
                        src={selectedCert.images[activeImageIndex]}
                        alt={`${selectedCert.title} ${activeImageIndex + 1}`}
                        fill
                        sizes="(max-width: 768px) 90vw, 60vw"
                        className="object-contain transition-transform duration-200 ease-out"
                        style={{ transform: `scale(${zoom})` }}
                      />
                    </div>
                  </motion.div>
                </AnimatePresence>

                {selectedCert.images.length > 1 && (
                  <>
                    <button
                      type="button"
                      onClick={showPrevImage}
                      className="absolute left-4 top-1/2 -translate-y-1/2 inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/80 dark:bg-gray-800/80 text-gray-900 dark:text-white shadow-lg hover:bg-white"
                    >
                      <ChevronLeft size={20} />
                    </button>
                    <button
                      type="button"
                      onClick={showNextImage}
                      className="absolute right-4 top-1/2 -translate-y-1/2 inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/80 dark:bg-gray-800/80 text-gray-900 dark:text-white shadow-lg hover:bg-white"
                    >
                      <ChevronRight size={20} />
                    </button>
                    <div className="absolute bottom-4 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-white/80 dark:bg-gray-800/80 text-xs font-semibold text-gray-800 dark:text-gray-100">
                      {activeImageIndex + 1} / {selectedCert.images.length}
                    </div>
                  </>
                )}

                <div className="absolute bottom-4 right-4 flex items-center gap-2">
                  <button
                    type="button"
                    onClick={zoomOut}
                    disabled={!canZoomOut}
                    className={`inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/80 dark:bg-gray-800/80 text-gray-900 dark:text-white shadow-lg ${
                      canZoomOut
                        ? "hover:bg-white"
                        : "opacity-50 cursor-not-allowed"
                    }`}
                  >
                    <ZoomOut size={18} />
                  </button>
                  <button
                    type="button"
                    onClick={resetZoom}
                    className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/80 dark:bg-gray-800/80 text-gray-900 dark:text-white shadow-lg hover:bg-white"
                  >
                    <RefreshCw size={18} />
                  </button>
                  <button
                    type="button"
                    onClick={zoomIn}
                    disabled={!canZoomIn}
                    className={`inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/80 dark:bg-gray-800/80 text-gray-900 dark:text-white shadow-lg ${
                      canZoomIn
                        ? "hover:bg-white"
                        : "opacity-50 cursor-not-allowed"
                    }`}
                  >
                    <ZoomIn size={18} />
                  </button>
                </div>
              </div>

              <div className="space-y-3">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                  {selectedCert.title}
                </h3>
                <p className="text-purple-600 dark:text-purple-400 font-semibold">
                  {selectedCert.issuer}
                </p>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  {selectedCert.description}
                </p>
                {selectedCert.tech.length > 0 && (
                  <div className="flex flex-wrap gap-3 pt-2">
                    {selectedCert.tech.map((tech) => (
                      <div
                        key={`modal-${selectedCert.title}-${tech.name}`}
                        className="flex items-center space-x-2 bg-gray-100 dark:bg-gray-800 px-3 py-1.5 rounded-full text-sm font-medium"
                      >
                        <tech.icon size={16} style={{ color: tech.color }} />
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
    </section>
  );
}
