"use client";

import { motion } from "framer-motion";
import { ArrowRight, Sparkles, Code, Palette, Download } from "lucide-react";
import Image from "next/image";

export default function Hero() {
  const cvPath = "/CV%20Rafly%20Fahusnul%20Akbar.pdf";
  const profileVariants = {
    rest: { scale: 1 },
    hover: { scale: 1.08 },
  };
  const frameVariants = {
    rest: { rotate: 0 },
    hover: { rotate: 1.5 },
  };

  const smoothScrollTo = (targetY: number, duration = 650) => {
    if (typeof window === "undefined") return;

    const startY = window.scrollY;
    const distance = targetY - startY;
    let startTime: number | null = null;

    const easeInOutCubic = (t: number) =>
      t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;

    const step = (currentTime: number) => {
      if (startTime === null) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);
      const eased = easeInOutCubic(progress);
      window.scrollTo({ top: startY + distance * eased });

      if (progress < 1) requestAnimationFrame(step);
    };

    requestAnimationFrame(step);
  };

  const scrollToProjects = () => {
    if (typeof window === "undefined") return;
    const element = document.querySelector("#portfolio-showcase");
    if (element instanceof HTMLElement) {
      const navHeight =
        document.querySelector("nav")?.getBoundingClientRect().height || 72;
      const paddingOffset = 8;
      const targetPosition =
        element.getBoundingClientRect().top +
        window.scrollY -
        navHeight -
        paddingOffset;

      smoothScrollTo(targetPosition);
    }
  };

  const scrollToContact = () => {
    if (typeof window === "undefined") return;
    const element = document.querySelector("#contact");
    if (element instanceof HTMLElement) {
      const navHeight =
        document.querySelector("nav")?.getBoundingClientRect().height || 72;
      const paddingOffset = 8;
      const targetPosition =
        element.getBoundingClientRect().top +
        window.scrollY -
        navHeight -
        paddingOffset;

      smoothScrollTo(targetPosition);
    }
  };

  const handleDownloadCV = async () => {
    if (typeof window === "undefined") return;
    try {
      const res = await fetch(cvPath, { method: "HEAD" });
      if (!res.ok) {
        alert(
          "File CV belum tersedia. Tambahkan file ke folder public dengan path: " +
            cvPath
        );
        return;
      }
      const link = document.createElement("a");
      link.href = cvPath;
      link.download = "CV Rafly Fahusnul Akbar.pdf";
      link.target = "_blank";
      link.rel = "noopener";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } catch (e) {
      alert("Gagal mengunduh CV. Coba lagi nanti.");
    }
  };

  return (
    <section
      id="home"
      className="flex items-center justify-center relative overflow-hidden lg:min-h-screen pt-16 pb-8 px-4 sm:px-6 lg:px-8 scroll-mt-24 lg:scroll-mt-32"
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
          className="absolute bottom-1/4 right-1/3 text-pink-300 dark:text-pink-600 opacity-30"
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
                Rafly Fahusnul A
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
              Membangun Website yang efisien menggunakan React dan Next.js.
              Fokus pada performa dan struktur kode yang rapih dan bersih, Siap
              mengembangkan website yang keren dan kompleks sesuai kebutuhan.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1 }}
              className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start items-center pt-4 flex-wrap"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={scrollToProjects}
                className="group px-4 md:px-6 py-2 md:py-3.5 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-full font-semibold shadow-lg hover:shadow-2xl transition-all duration-200 flex items-center space-x-2"
              >
                <span>Lihat Karya Saya</span>
                <ArrowRight
                  size={20}
                  className="group-hover:translate-x-1 transition-transform duration-200"
                />
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleDownloadCV}
                className="relative px-4 md:px-6 py-2 md:py-3.5 border-2 border-purple-600 text-purple-600 dark:text-purple-300 dark:border-purple-400 rounded-full font-semibold transition-all duration-200 flex items-center space-x-2 overflow-hidden shadow-md hover:shadow-lg"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600  opacity-0 hover:opacity-100 transition-opacity duration-300"></span>
                <span className="relative z-10 flex items-center space-x-2">
                  <Download size={18} />
                  <span>Download CV</span>
                </span>
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
            <motion.div
              initial="rest"
              animate="rest"
              whileHover="hover"
              className="group relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 "
            >
              <motion.div
                className="absolute inset-6 rounded-full bg-gradient-to-r from-purple-500/40 via-blue-500/20 to-teal-400/40 blur-3xl"
                animate={{
                  opacity: [0.25, 0.45, 0.25],
                  scale: [0.95, 1.05, 0.95],
                }}
                transition={{
                  duration: 4,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                }}
              />
              <motion.div
                variants={frameVariants}
                transition={{ duration: 0.6, ease: "easeInOut" }}
                className="relative z-10 w-full h-full rounded-full bg-gradient-to-br from-white/70 via-gray-100 to-purple-100 dark:from-gray-900 dark:via-gray-800 dark:to-purple-900 shadow-[0_35px_60px_rgba(79,70,229,0.35)] p-1"
              >
                <motion.div
                  variants={profileVariants}
                  transition={{ duration: 0.75, ease: "easeOut" }}
                  className="relative w-full h-full rounded-full overflow-hidden ring-4 ring-purple-500/30"
                >
                  <Image
                    src="/profile.jpg"
                    alt="Foto Profil Rafly"
                    fill
                    className="object-cover"
                    priority
                  />
                  <motion.div
                    className="pointer-events-none absolute inset-0 bg-gradient-to-r from-transparent via-white/60 to-transparent opacity-0 group-hover:opacity-70 mix-blend-screen"
                    initial={{ x: "-150%" }}
                    animate={{ x: ["-150%", "150%"] }}
                    transition={{
                      duration: 4,
                      repeat: Number.POSITIVE_INFINITY,
                      repeatDelay: 1.2,
                    }}
                  />
                </motion.div>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
