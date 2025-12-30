"use client";

import { useState, type ReactNode } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Award, Briefcase, Target, ChevronDown } from "lucide-react";

type ExperienceType = "Pencapaian" | "Organisasi" | "Kompetisi";

type Experience = {
  id: number;
  role: string;
  organization: string;
  period: string;
  description: string;
  achievements: string[];
  type: ExperienceType;
};

const experienceData: Experience[] = [
  {
    id: 1,
    role: "Desainer UI/UX (Juara 2)",
    organization: "National UI/UX Competition (HIMIF UNSIL)",
    period: "Juli 2025",
    description:
      "Meraih Juara 2 Tingkat Nasional dengan mengembangkan 'TEMULOKA', aplikasi pariwisata digital.",
    achievements: [
      "Inovasi Produk: Mengembangkan aplikasi TEMULOKA sebagai solusi mengangkat potensi wisata tersembunyi (Hidden Gems) agar lebih dikenal masyarakat luas.",
      "Pengembangan Fitur: Merancang alur pengguna (user flow) untuk fitur vital seperti info keramaian wisata, rating/ulasan, dan integrasi e-ticketing.",
      "UX dan Wireframing: Melakukan analisis pengalaman pengguna dan merancang arsitektur informasi dalam bentuk kerangka wireframe sebelum tahap visualisasi akhir.",
    ],
    type: "Pencapaian",
  },
  {
    id: 2,
    role: "Koordinator CSG SMCOM (Social Media Community)",
    organization: "KOPMA UNSIL (Divisi PSDA)",
    period: "September 2025 - Desember 2025",
    description:
      "Memimpin tim Cooperative Student Group (CSG) yang berfokus pada manajemen media sosial dan pengembangan kreatif (SMCOM).",
    achievements: [
      "Kepemimpinan Tim: Mengoordinasikan tim beranggotakan 4 orang (Divisi Media, Desain, dan Administrasi) untuk memastikan produktivitas konten dan pengelolaan kepengurusan.",
      "Perencanaan Strategis: Merancang dan mengeksekusi rencana konten (content plan) strategis selama periode kepengurusan untuk meningkatkan keterlibatan (engagement) anggota.",
      "Inisiatif Komersial: Mengelola proyek layanan jasa desain komersial berupa komisi berbayar (open paid commission) untuk mendukung pemasukan finansial Bidang Usaha KOPMA.",
    ],
    type: "Organisasi",
  },
  
];

const badgeStyles: Record<ExperienceType, string> = {
  Pencapaian:
    "bg-amber-100 text-amber-800 dark:bg-amber-500/20 dark:text-amber-200",
  Organisasi:
    "bg-blue-100 text-blue-800 dark:bg-blue-500/20 dark:text-blue-200",
  Kompetisi:
    "bg-emerald-100 text-emerald-800 dark:bg-emerald-500/20 dark:text-emerald-200",
};

const iconMap: Record<ExperienceType, ReactNode> = {
  Pencapaian: <Award size={16} />,
  Organisasi: <Briefcase size={16} />,
  Kompetisi: <Target size={16} />,
};

export default function Experience() {
  const [openId, setOpenId] = useState<number | null>(
    experienceData[0]?.id ?? null
  );

  const toggleExperience = (id: number) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <section
      id="experience"
      className="py-20 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto scroll-mt-24 lg:scroll-mt-32 relative overflow-hidden"
    >
      <div className="absolute inset-4 sm:inset-10 opacity-60 pointer-events-none">
        <motion.div
          animate={{ x: [0, 120, 0], y: [0, -90, 0] }}
          transition={{
            duration: 22,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
          }}
          className="absolute top-0 left-0 w-44 h-44 bg-gradient-to-r from-purple-500/40 to-blue-500/40 rounded-full blur-3xl"
        />
        <motion.div
          animate={{ x: [0, -100, 0], y: [0, 120, 0] }}
          transition={{
            duration: 26,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
          }}
          className="absolute bottom-0 right-0 w-52 h-52 bg-gradient-to-r from-pink-500/35 to-purple-500/40 rounded-full blur-3xl"
        />
        <motion.div
          animate={{ y: [0, -25, 0], rotate: [0, 15, 0] }}
          transition={{
            duration: 5,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
          className="absolute top-4 left-1/3 text-purple-300 dark:text-purple-600 opacity-30"
        >
          <Award size={40} />
        </motion.div>
        <motion.div
          animate={{ y: [0, 25, 0], rotate: [0, -15, 0] }}
          transition={{
            duration: 6,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
          className="absolute bottom-6 right-1/4 text-blue-300 dark:text-blue-600 opacity-30"
        >
          <Briefcase size={36} />
        </motion.div>
      </div>

      <div className="relative z-10">
        <div className="text-center mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent mb-3"
          >
            Pengalaman
          </motion.h2>
          <div className="w-20 h-1.5 bg-gradient-to-r from-purple-600 to-blue-600 mx-auto rounded-full" />
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-4 text-gray-600 dark:text-gray-400 max-w-3xl mx-auto"
          >
            Perjalanan profesional yang menyeimbangkan inovasi produk,
            <br />
            Desain, kepemimpinan organisasi, dan strategi bisnis.
          </motion.p>
        </div>

        <div className="space-y-4">
          {experienceData.map((experience, index) => {
            const isOpen = openId === experience.id;
            return (
              <motion.div
                key={experience.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6, delay: index * 0.05 }}
                className="rounded-2xl border border-gray-200/60 dark:border-gray-800/60 bg-white/70 dark:bg-gray-800/50 backdrop-blur-md shadow-lg"
              >
                <button
                  type="button"
                  onClick={() => toggleExperience(experience.id)}
                  className="w-full flex items-center justify-between gap-4 px-5 py-4 text-left"
                >
                  <div>
                    <p className="text-base font-semibold text-gray-900 dark:text-white">
                      {experience.role}
                    </p>
                    <p className="text-sm text-purple-600 dark:text-purple-300">
                      {experience.organization}
                    </p>
                  </div>
                  <ChevronDown
                    size={20}
                    className={`text-gray-500 dark:text-gray-400 transition-transform duration-300 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      key="content"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <div className="px-5 pb-6 pt-1">
                        <div className="flex flex-wrap items-center gap-3 mb-4">
                          <span
                            className={`inline-flex items-center gap-2 text-xs uppercase font-semibold tracking-wide px-3 py-1 rounded-full ${
                              badgeStyles[experience.type]
                            }`}
                          >
                            {iconMap[experience.type]}
                            {experience.type}
                          </span>
                          <span className="text-sm text-gray-500 dark:text-gray-400 font-medium">
                            {experience.period}
                          </span>
                        </div>

                        <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                          {experience.description}
                        </p>

                        <ul className="mt-5 space-y-3 text-gray-600 dark:text-gray-300">
                          {experience.achievements.map((achievement) => (
                            <li
                              key={achievement}
                              className="flex items-start gap-3 text-sm sm:text-base"
                            >
                              <span className="mt-2 h-1.5 w-1.5 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 shrink-0" />
                              <span>
                                {achievement.includes("Inisiatif Komersial") ? (
                                  <span className="font-semibold text-emerald-600 dark:text-emerald-300 flex items-center gap-2">
                                    <Award
                                      size={16}
                                      className="text-emerald-500"
                                    />
                                    {achievement}
                                  </span>
                                ) : (
                                  achievement
                                )}
                              </span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
