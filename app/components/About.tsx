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
              Halo! Saya <span className="font-semibold text-purple-600 dark:text-purple-400">Rafly FA</span>, seorang
              Web Developer dan UI/UX Designer yang passionate dalam menciptakan pengalaman digital yang bermakna dan
              fungsional.
            </p>

            <p>
              Perjalanan saya dimulai dari ketertarikan mendalam terhadap teknologi dan desain. Saya percaya bahwa
              kombinasi antara kode yang bersih dan desain yang intuitif dapat menciptakan solusi digital yang tidak
              hanya indah dipandang, tetapi juga mudah digunakan.
            </p>

            <p>
              Dengan keahlian dalam pengembangan frontend modern dan pemahaman mendalam tentang prinsip-prinsip UI/UX,
              saya siap membantu mewujudkan visi digital Anda. Setiap proyek adalah kesempatan untuk belajar,
              berkembang, dan menciptakan sesuatu yang berdampak positif.
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
                  Mencintai setiap detail dalam proses kreatif dan pengembangan
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
                  Selalu mencari solusi kreatif dan teknologi terdepan
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
                  Berkomitmen memberikan hasil terbaik untuk setiap proyek
                </p>
              </motion.div>
            </div>

            <div className="bg-gradient-to-r from-purple-50 to-blue-50 dark:from-purple-900/20 dark:to-blue-900/20 rounded-xl p-6 mt-8">
              <h3 className="font-semibold text-xl mb-3 text-purple-700 dark:text-purple-300">Tujuan Saya</h3>
              <p className="text-gray-700 dark:text-gray-300">
                Menjadi partner terpercaya dalam transformasi digital dengan menghadirkan solusi yang inovatif,
                user-friendly, dan berkualitas tinggi. Saya berkomitmen untuk terus belajar dan mengikuti perkembangan
                teknologi terkini.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
