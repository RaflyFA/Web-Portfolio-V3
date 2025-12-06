"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Calendar } from "lucide-react";
import Image from "next/image";
import { Sparkles, Code, Palette } from "lucide-react";

export default function Certificates() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const certificates = [
    {
      title: "Sertifikat Juara Lomba UI/UX",
      issuer: "Himpunan Mahasiswa Informatika Universitas Siliwangi",
      description:
        "Didapatkan pada pada Juli 2025, saya dan tim berhasil menjuarai lomba UI/UX yang diselenggarakan oleh Universitas Siliwangi dengan skla Nasional.",
      date: "2025",
      image: "/sertif UIUX.jpg",
      gradient: "from-orange-500 to-yellow-500",
      bgGradient:
        "from-purple-100 to-yellow-100 dark:from-purple-900/20 dark:to-yellow-900/20",
    },
    {
      title: "Belajar Front-End Web",
      issuer: "DiCoding",
      description:
        "Diselesaikan pada 8 Juli 2025, sertifikat ini menunjukkan pemahaman saya dalam pengembangan Front-End, khususnya terkait manipulasi DOM dan pemanfaatan BOM pada browser. Membantu memperkuat logika dan struktur dalam membangun antarmuka web yang interaktif.",
      date: "2025",
      image: "/Sertifikat Front-End Web.jpg",
      gradient: "from-yellow-500 to-orange-500",
      bgGradient:
        "from-purple-100 to-yellow-100 dark:from-purple-900/20 dark:to-yellow-900/20",
    },

    {
      title: "Belajar Pemrograman JavaScript",
      issuer: "DiCoding",
      description:
        "Diselesaikan pada 7 Juli 2025, sertifikat ini membuktikan penguasaan konsep dasar JavaScript, mulai dari variabel, fungsi, array, hingga pemrograman berbasis objek.",
      date: "2025",
      image: "/Sertifikat Pemograman Javascript.jpg",
      gradient: "from-yellow-500 to-orange-500",
      bgGradient:
        "from-blue-100 to-purple-100 dark:from-blue-900/20 dark:to-purple-900/20",
    },

    {
      title: "Belajar Dasar Pemrograman Web",
      issuer: "DiCoding",
      description:
        "Diselesaikan pada 14 Oktober 2024, sertifikat ini membuktikan penguasaan dasar HTML, CSS, dan JavaScript untuk membangun website statis dan dinamis secara efisien.",
      date: "2024",
      image: "/Sertifikat Dasar Pemograman.jpg",
      gradient: "from-blue-500 to-cyan-500",
      bgGradient:
        "from-blue-100 to-cyan-100 dark:from-blue-900/20 dark:to-cyan-900/20",
    },
    {
      title: "Magang Desain Grafis",
      issuer: "KOPMA Universitas Siliwangi",
      description:
        "Selama 3 bulan magang part-time, saya bertanggung jawab membuat desain konten media sosial yang mendukung branding organisasi koperasi mahasiswa.",
      date: "2024",
      image: "/Asisten Desain Grafis.jpg",
      gradient: "from-gray-500 to-pink-500",
      bgGradient:
        "from-gray-100 to-green-100 dark:from-green-900/20 dark:to-gray-900/20",
    },
  ];

  return (
    <section
      id="certificates"
      className="py-0 items-center justify-center relative overflow-hidden"
    >
      {/* Background Decorations */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{ x: [0, 100, 0], y: [0, -100, 0] }}
          transition={{
            duration: 20,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
          }}
          className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-r from-purple-400 to-blue-400 rounded-full opacity-20 blur-xl"
        />
        <motion.div
          animate={{ x: [0, -150, 0], y: [0, 100, 0] }}
          transition={{
            duration: 25,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
          }}
          className="absolute bottom-20 right-10 w-40 h-40 bg-gradient-to-r from-orange-400 to-pink-400 rounded-full opacity-20 blur-xl"
        />
        <motion.div
          animate={{ x: [0, 80, 0], y: [0, -80, 0] }}
          transition={{
            duration: 15,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
          }}
          className="absolute top-1/2 right-1/4 w-24 h-24 bg-gradient-to-r from-green-400 to-blue-400 rounded-full opacity-15 blur-lg"
        />
        <motion.div
          animate={{ y: [0, -20, 0], rotate: [0, 10, 0] }}
          transition={{
            duration: 4,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
          className="absolute top-1/4 left-1/4 text-purple-300 dark:text-purple-600 opacity-30"
        >
          <Code size={48} />
        </motion.div>
        <motion.div
          animate={{ y: [0, 20, 0], rotate: [0, -10, 0] }}
          transition={{
            duration: 5,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
          className="absolute bottom-1/2 right-60 text-pink-300 dark:text-pink-600 opacity-30"
        >
          <Palette size={40} />
        </motion.div>
        <motion.div
          animate={{ y: [0, -15, 0], x: [0, 10, 0] }}
          transition={{
            duration: 3,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
          className="absolute top-1/3 right-1/4 text-blue-300 dark:text-blue-600 opacity-30"
        >
          <Sparkles size={36} />
        </motion.div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-5 relative">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certificates.map((cert, index) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              whileHover={{ y: -10 }}
              className={`bg-gradient-to-br ${cert.bgGradient} rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-800`}
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
                    src={cert.image || "/placeholder.svg"}
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
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
