"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Target, Heart, Lightbulb } from "lucide-react"

export default function About() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-gray-800/50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
              Tentang Saya
            </span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-600 to-blue-600 mx-auto rounded-full"></div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="bg-white dark:bg-gray-900 rounded-2xl p-8 sm:p-12 shadow-xl"
        >
          <div className="space-y-6 text-lg leading-relaxed text-gray-700 dark:text-gray-300">
            <p>
              Halo! Saya <span className="font-semibold text-purple-600 dark:text-purple-400">Rafly Fahusnul Akbar</span>, Saya adalah mahasiswa S1 Sistem Informasi di Universitas Siliwangi, saat ini sedang menempuh semester ketiga. Ketertarikan saya terhadap dunia teknologi, khususnya pengembangan web, tumbuh seiring dengan pengalaman yang saya bangun melalui berbagai proyek pribadi. Sejauh ini, saya telah menyelesaikan banyak proyek web dengan pendekatan modern menggunakan React, Next.js, Tailwind CSS, dan Bootstrap.
            </p>

            <p>
              Saya juga memiliki minat yang cukup besar dalam bidang UI/UX karena saya percaya bahwa desain yang baik sama pentingnya dengan logika program. Kombinasi keduanya menciptakan produk digital yang tidak hanya berfungsi dengan baik, tapi juga menyenangkan digunakan. 
            </p>

            <p>
              Meski belum memiliki pengalaman profesional di organisasi atau freelance, saya terus mengembangkan kemampuan secara mandiri dan telah memperoleh sertifikat resmi Web Development dari Dicoding sebagai langkah awal membangun kredibilitas di industri. Ke depannya, saya ingin bekerja secara remote dan menjadi freelance developer yang bisa berkontribusi di berbagai proyek digital, baik lokal maupun internasional.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-center p-6 bg-gradient-to-br from-purple-50 to-blue-50 dark:from-purple-900/20 dark:to-blue-900/20 rounded-xl"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart size={24} className="text-white" />
                </div>
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Passion</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Antusias menciptakan pengalaman web yang bermakna dan berdampak.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="text-center p-6 bg-gradient-to-br from-orange-50 to-pink-50 dark:from-orange-900/20 dark:to-pink-900/20 rounded-xl"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Lightbulb size={24} className="text-white" />
                </div>
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Inovasi</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Selalu eksplorasi pendekatan baru dalam desain dan pengembangan web
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.8 }}
                className="text-center p-6 bg-gradient-to-br from-green-50 to-blue-50 dark:from-green-900/20 dark:to-blue-900/20 rounded-xl"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Target size={24} className="text-white" />
                </div>
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Fokus</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Konsisten mengutamakan kualitas, detail, dan kepuasan pengguna.
                </p>
              </motion.div>
            </div>

            <div className="bg-gradient-to-r from-purple-50 to-blue-50 dark:from-purple-900/20 dark:to-blue-900/20 rounded-xl p-6 mt-8">
              <h3 className="font-semibold text-xl mb-3 text-purple-700 dark:text-purple-300">Tujuan Saya</h3>
              <p className="text-gray-700 dark:text-gray-300">
                Menjadi web developer yang adaptif, kreatif, dan profesional dengan kontribusi nyata dalam membangun produk digital berkualitas tinggi. Siap bekerja secara fleksibel, remote, dan terus berkembang mengikuti teknologi terbaru.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
