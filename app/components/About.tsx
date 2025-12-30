"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Target, Heart, Lightbulb } from "lucide-react";
import { Sparkles, Code, Palette } from "lucide-react";

export default function About() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section
      id="about"
      className="py-20 bg-gray-50 dark:bg-gray-800/50 scroll-mt-24 lg:scroll-mt-32"
    >
      {" "}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2">
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
          className="bg-white dark:bg-gray-900 rounded-2xl p-6 sm:p-8 md:p-12 shadow-xl "
        >
          <div className="space-y-4 sm:space-y-6 text-base sm:text-lg leading-relaxed text-gray-700 dark:text-gray-300 ">
            <p>
              Halo! Saya{" "}
              <span className="font-semibold text-purple-600 dark:text-purple-400">
                Rafly FA
              </span>
              . Sebagai mahasiswa Sistem Informasi di Universitas
              Siliwangi, saya menggabungkan pemikiran analitis dengan
              kreativitas digital. Fokus utama saya adalah pengembangan web
              modern menggunakan ekosistem <span className="font-semibold text-purple-600 dark:text-purple-400">React, Next.js, dan Tailwind CSS</span>,
              di mana saya terus menantang diri untuk membangun aplikasi yang
              skalabel dan responsif.
            </p>

            <p>
             Ketertarikan saya pada UI/UX bukan sekadar hobi, melainkan kompetensi
              inti yang terus saya asah. Filosofi desain saya—bahwa estetika harus
              berjalan beriringan dengan fungsi—telah terbukti melalui pencapaian
              saya meraih <span className="font-semibold text-purple-600 dark:text-purple-400">Juara 2 Kompetisi UI/UX Tingkat Nasional</span>.
              Prestasi ini memotivasi saya untuk selalu menghadirkan pengalaman
              pengguna (User Experience) terbaik dalam setiap baris kode yang
              saya tulis.
            </p>

            <p>
              Dedikasi saya terhadap pertumbuhan teknis dibuktikan dengan
              perolehan <span className="font-semibold text-purple-600 dark:text-purple-400">2 Sertifikasi Nasional</span> dan penyelesaian <span className="font-semibold text-purple-600 dark:text-purple-400">4 Bootcamp Intensif</span>.
              Selain itu, pengalaman magang saya di bidang Desain Grafis memberikan
              perspektif visual yang kuat, menjadi nilai tambah yang signifikan
              saat saya menerjemahkan desain ke dalam antarmuka web (Frontend)
              yang presisi.
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
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                  Passion
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Memiliki antusiasme tinggi dalam menciptakan solusi web yang
                  berdampak.
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
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                  Proven Skill
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Teruji melalui kompetisi Nasional dan sertifikasi teknis
                  terstandar.
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
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                  Goal Oriented
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Fokus pada kualitas kode, detail visual, dan kepuasan pengguna.
                </p>
              </motion.div>
            </div>

            <div className="bg-gradient-to-r from-purple-50 to-blue-50 dark:from-purple-900/20 dark:to-blue-900/20 rounded-xl p-6 mt-8">
              <h3 className="font-semibold text-xl mb-3 text-purple-700 dark:text-purple-300">
                Tujuan Karier
              </h3>
              <p className="text-gray-700 dark:text-gray-300">
                Siap berkontribusi secara profesional sebagai Freelance atau Remote
                Developer. Saya menawarkan kombinasi keahlian teknis (Frontend)
                dan kepekaan desain (UI/UX) untuk membantu tim atau klien
                membangun produk digital yang tidak hanya fungsional, tetapi juga
                estetis dan berprestasi.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
