"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Award, ExternalLink, Calendar } from "lucide-react"

export default function Certificates() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const certificates = [
    {
      title: "Sertifikat Belajar Dasar Pemrograman Web – Dicoding",
      issuer: "Meta (Facebook)",
      description:
        "Diselesaikan pada 14 Oktober 2024, sertifikat ini membuktikan penguasaan dasar HTML, CSS, dan JavaScript untuk membangun website statis dan dinamis secara efisien.",
      date: "2024",
      link: "#",
      gradient: "from-blue-500 to-cyan-500",
      bgGradient: "from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20",
    },
    {
      title: " Sertifikat Magang Desain Grafis – KOPMA Universitas Siliwangi",
      issuer: "Google",
      description:
        "Selama 3 bulan magang part-time, saya bertanggung jawab membuat desain konten media sosial yang mendukung branding organisasi koperasi mahasiswa.",
      date: "2024",
      link: "#",
      gradient: "from-purple-500 to-pink-500",
      bgGradient: "from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20",
    },
   
  ]

  return (
    <section id="certificates" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
              Sertifikat
            </span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-600 to-blue-600 mx-auto rounded-full"></div>
          <p className="text-gray-600 dark:text-gray-400 mt-4 max-w-2xl mx-auto">
            Sertifikasi dan pencapaian yang mendukung kompetensi profesional saya
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certificates.map((cert, index) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              whileHover={{ y: -10 }}
              className={`bg-gradient-to-br ${cert.bgGradient} rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-800`}
            >
              <div className="flex items-center justify-between mb-6">
                <div
                  className={`w-16 h-16 bg-gradient-to-r ${cert.gradient} rounded-2xl flex items-center justify-center`}
                >
                  <Award size={32} className="text-white" />
                </div>
                <div className="flex items-center space-x-1 text-sm font-medium text-gray-600 dark:text-gray-400 bg-white/50 dark:bg-gray-800/50 px-3 py-1 rounded-full backdrop-blur-sm">
                  <Calendar size={14} />
                  <span>{cert.date}</span>
                </div>
              </div>

              <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">{cert.title}</h3>

              <p className="text-purple-600 dark:text-purple-400 font-medium mb-4">{cert.issuer}</p>

              <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">{cert.description}</p>

              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href={cert.link}
                className="inline-flex items-center space-x-2 text-purple-600 dark:text-purple-400 hover:text-purple-700 dark:hover:text-purple-300 font-medium transition-colors duration-200"
              >
                <span>Lihat Sertifikat</span>
                <ExternalLink size={16} />
              </motion.a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
