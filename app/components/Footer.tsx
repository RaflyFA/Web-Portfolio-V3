"use client"

import { motion } from "framer-motion"
import { Heart, Coffee, Code, Palette } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <div className="mb-8">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent mb-2">
              Rafly FA
            </h3>
            <p className="text-gray-600 dark:text-gray-400">Web Developer & UI/UX Designer</p>
          </div>

          <div className="flex justify-center space-x-8 mb-8">
            <motion.div
              whileHover={{ scale: 1.1, rotate: 10 }}
              className="w-12 h-12 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center text-white"
            >
              <Code size={24} />
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.1, rotate: -10 }}
              className="w-12 h-12 bg-gradient-to-r from-pink-500 to-orange-500 rounded-full flex items-center justify-center text-white"
            >
              <Palette size={24} />
            </motion.div>
          </div>

          <div className="flex items-center justify-center space-x-2 text-gray-600 dark:text-gray-400 mb-4">
            <span>© 2024 Portfolio Rafly FA. Dibuat dengan</span>
            <motion.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY, repeatDelay: 2 }}
            >
              <Heart size={16} className="text-red-500" />
            </motion.div>
            <span>dan banyak</span>
            <motion.div
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, repeatDelay: 1 }}
            >
              <Coffee size={16} className="text-amber-600" />
            </motion.div>
          </div>

          <div className="text-sm text-gray-500 dark:text-gray-500">
            <p>Siap mewujudkan keinginan Anda</p>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}
