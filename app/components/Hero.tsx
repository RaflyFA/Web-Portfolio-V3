"use client"

import { motion } from "framer-motion"
import { ArrowRight, Sparkles, Code, Palette } from "lucide-react"
import Image from "next/image"

export default function Hero() {
  const scrollToProjects = () => {
    const element = document.querySelector("#projects")
    if (element) element.scrollIntoView({ behavior: "smooth" })
  }

  const scrollToContact = () => {
    const element = document.querySelector("#contact")
    if (element) element.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section
      id="home"
      className="flex items-center justify-center relative overflow-hidden lg:min-h-screen pt-16 pb-8 px-4 sm:px-6 lg:px-8"
    >
      {/* Background Decorations */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{ x: [0, 100, 0], y: [0, -100, 0] }}
          transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
          className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-r from-purple-400 to-blue-400 rounded-full opacity-20 blur-xl"
        />
        <motion.div
          animate={{ x: [0, -150, 0], y: [0, 100, 0] }}
          transition={{ duration: 25, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
          className="absolute bottom-20 right-10 w-40 h-40 bg-gradient-to-r from-orange-400 to-pink-400 rounded-full opacity-20 blur-xl"
        />
        <motion.div
          animate={{ x: [0, 80, 0], y: [0, -80, 0] }}
          transition={{ duration: 15, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
          className="absolute top-1/2 right-1/4 w-24 h-24 bg-gradient-to-r from-green-400 to-blue-400 rounded-full opacity-15 blur-lg"
        />
        <motion.div
          animate={{ y: [0, -20, 0], rotate: [0, 10, 0] }}
          transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
          className="absolute top-1/4 left-1/4 text-purple-300 dark:text-purple-600 opacity-30"
        >
          <Code size={48} />
        </motion.div>
        <motion.div
          animate={{ y: [0, 20, 0], rotate: [0, -10, 0] }}
          transition={{ duration: 5, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
          className="absolute bottom-1/4 right-1/3 text-pink-300 dark:text-pink-600 opacity-30"
        >
          <Palette size={40} />
        </motion.div>
        <motion.div
          animate={{ y: [0, -15, 0], x: [0, 10, 0] }}
          transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
          className="absolute top-1/3 right-1/4 text-blue-300 dark:text-blue-600 opacity-30"
        >
          <Sparkles size={36} />
        </motion.div>
      </div>

      {/* Hero Content */}
      <div className="max-w-7xl mx-auto relative z-10 py-8 md:py-16">
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex-1 text-center md:text-left space-y-6 md:space-y-8"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-purple-100 to-blue-100 dark:from-purple-900/30 dark:to-blue-900/30 rounded-full text-xs font-medium text-purple-700 dark:text-purple-300 border border-purple-200 dark:border-purple-700"
            >
              <span className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></span>
              Siap untuk proyek baru
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-4xl sm:text-4xl md:text-5xl lg:text-6xl font-bold"
            >
              <span className="bg-gradient-to-r from-purple-600 via-blue-600 to-purple-600 bg-clip-text text-transparent">
                Rafly FA
              </span>
            </motion.h1>

            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-lg sm:text-xl md:text-xl lg:text-2xl font-semibold text-gray-700 dark:text-gray-300 mt-0"
            >
              Web Developer & UI/UX Designer
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="text-base sm:text-lg md:text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto md:mx-0 leading-relaxed"
            >
              Membangun Website yang efisien menggunakan React dan Next.js. Fokus pada performa dan struktur kode yang
              rapih dan bersih, Siap mengembangkan website yang keren dan kompleks sesuai kebutuhan.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1 }}
              className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start items-center pt-4"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={scrollToProjects}
                className="group px-6 md:px-8 py-2 md:py-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300 flex items-center space-x-2"
              >
                <span>Lihat Karya Saya</span>
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform duration-200" />
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={scrollToContact}
                className="px-6 md:px-8 py-3 md:py-4 border-2 border-purple-600 text-purple-600 dark:text-purple-400 dark:border-purple-400 rounded-full font-semibold hover:bg-purple-600 hover:text-white dark:hover:bg-purple-400 dark:hover:text-gray-900 transition-all duration-300 flex items-center space-x-2"
              >
                <span>Hubungi Saya</span>
              </motion.button>
            </motion.div>
          </motion.div>

          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex-1 flex justify-center"
          >
            <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden shadow-xl ring-4 ring-purple-500/30">
              <Image src="/profile.jpg" alt="Foto Profil Rafly" fill className="object-cover" priority />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
