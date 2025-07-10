"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Code, Palette, FolderKanban, FileBadge } from "lucide-react";
import Skills from "./Skills";
import Projects from "./Projects";
import Certificates from "./Certificates";

export default function PortfolioShowcase() {
  const [activeSection, setActiveSection] = useState("projects");

  const sections = [
    {
      id: "projects",
      name: "Project",
      icon: <FolderKanban className="w-6 h-6" />,
    },
    {
      id: "certificates",
      name: "Sertifikat",
      icon: <FileBadge className="w-6 h-6" />,
    },
    {
      id: "skills",
      name: "Tech Stack",
      icon: <Code className="w-6 h-6" />,
    },
  ];

  return (
    <section id="portfolio-showcase" className="py-20 px-4 max-w-7xl mx-auto">
      {/* Intro */}
      <div className="text-center mb-10">
        <motion.div
          animate={{ y: [0, -20, 0], rotate: [0, 10, 0] }}
          transition={{
            duration: 4,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
          className="absolute bottom-1/4 right-1/4 text-purple-300 dark:text-purple-600 opacity-30"
        >
          <Code size={48} />
        </motion.div>
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl sm:text-4xl font-bold"
        >
          <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
            Portfolio Showcase
          </span>
        </motion.h2>
        <p className="mt-4 text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
          Kumpulan karya dan pencapaian yang mencerminkan proses belajar,
          eksplorasi, dan pengembangan keterampilan saya dalam dunia teknologi
          dan desain.
        </p>
      </div>

      {/* Sidebar */}
      <div className="flex justify-center mb-6">
        <div className="w-full max-w-2xl bg-white/80 dark:bg-gray-800/80 border border-gray-200 dark:border-gray-700 rounded-2xl shadow-sm px-2 py-1 backdrop-blur-md flex flex-row items-center justify-center">
          {sections.map((section) => (
            <button
              key={section.id}
              onClick={() => setActiveSection(section.id)}
              className={`flex flex-col items-center justify-center gap-1 flex-1 py-3 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-purple-400/50 text-sm font-medium rounded-xl
                ${
                  activeSection === section.id
                    ? "bg-gradient-to-r from-purple-600 to-blue-600 text-white shadow"
                    : "bg-transparent text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
                }
              `}
              style={{ border: "none" }}
            >
              {section.icon}
              <span className="text-xs font-medium">{section.name}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Section Content */}
      <div>
        {activeSection === "projects" && <Projects />}
        {activeSection === "certificates" && <Certificates />}
        {activeSection === "skills" && <Skills />}
      </div>
    </section>
  );
}
