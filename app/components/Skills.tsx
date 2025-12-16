"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Palette, Code, Server, Users } from "lucide-react";
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiBootstrap,
  SiHtml5,
  SiCss3,
  SiFigma,
  SiCanva,
  SiNodedotjs,
  SiSupabase,
  SiVercel,
  SiGit,
  SiGithub,
  SiGitlab,
  SiSourcetree,
} from "react-icons/si";

export default function Skills() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  const skills = [
    {
      icon: <Code size={32} />,
      title: "Frontend",
      tools: [
        { name: "React.js", icon: <SiReact className="text-cyan-500" /> },
        {
          name: "Next.js",
          icon: <SiNextdotjs className="text-black dark:text-white" />,
        },
        {
          name: "Bootstrap",
          icon: <SiBootstrap className="text-sky-400" />,
        },
        { name: "CSS3", icon: <SiCss3 className="text-blue-600" /> },
        {
          name: "Tailwind CSS",
          icon: <SiTailwindcss className="text-sky-400" />,
        },
        {
          name: "TypeScript",
          icon: <SiTypescript className="text-blue-600" />,
        },
        { name: "HTML5", icon: <SiHtml5 className="text-orange-500" /> },
      ],
      gradient: "from-blue-500 to-gray-500",
      bgGradient:
        "from-blue-200 to-purple-100 dark:from-blue-900/20 dark:to-gray-900/20",
    },
    {
      icon: <Palette size={32} />,
      title: "Desain",
      tools: [
        { name: "Figma", icon: <SiFigma className="text-pink-500" /> },
        { name: "Canva", icon: <SiCanva className="text-blue-500" /> },
      ],
      gradient:
        "from-green-400 to-emerald-500 dark:from-lime-600 dark:to-green-700",
      bgGradient:
        "from-green-200 to-violet-50 dark:from-green-900/20 dark:to-gray-900/20",
    },
    {
      icon: <Server size={32} />,
      title: "Backend",
      tools: [
        { name: "Node.js", icon: <SiNodedotjs className="text-green-600" /> },
        {
          name: "Vercel",
          icon: <SiVercel className="text-black dark:text-white" />,
        },
        { name: "Supabase", icon: <SiSupabase className="text-emerald-500" /> },
      ],
      gradient: "from-gray-400 to-gray-600 dark:from-gray-800 dark:to-gray-700",
      bgGradient:
        "from-gray-100 to-gray-300 dark:from-gray-500/20 dark:to-gray-900/20",
    },
    {
      icon: <Users size={32} />,
      title: "Collaboration",
      tools: [
        { name: "Git", icon: <SiGit className="text-orange-600" /> },
        {
          name: "GitHub",
          icon: <SiGithub className="text-black dark:text-white" />,
        },
        { name: "GitLab", icon: <SiGitlab className="text-orange-500" /> },
        { name: "SourceTree", icon: <SiSourcetree className="text-sky-500" /> },
      ],
      gradient:
        "from-yellow-400 to-red-400 dark:from-yellow-700 dark:to-red-600",
      bgGradient:
        "from-yellow-100 to-gray-100 dark:from-yellow-900/20 dark:to-gray-900/20",
    },
  ];

  return (
    <section
      id="skills"
      className="pb-6 flex lex items-center justify-center bg-white dark:bg-gray-900/100"
    >
      <div className="relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-4 z-20">
          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          ></motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.title}
                initial={{ opacity: 0, y: 50 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                whileHover={{ y: -10, scale: 1.02 }}
                className={`bg-gradient-to-br ${skill.bgGradient} rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-800`}
              >
                <div
                  className={`w-16 h-16 bg-gradient-to-r ${skill.gradient} rounded-2xl flex items-center justify-center text-white mb-6`}
                >
                  {skill.icon}
                </div>
                <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">
                  {skill.title}
                </h3>

                <div className="flex flex-wrap gap-3 mt-4">
                  {skill.tools.map((tool, toolIndex) => (
                    <motion.div
                      key={tool.name}
                      initial={{ opacity: 0, y: 10 }}
                      animate={inView ? { opacity: 1, y: 0 } : {}}
                      transition={{
                        duration: 0.5,
                        delay: index * 0.1 + toolIndex * 0.05,
                      }}
                      className="flex items-center gap-2 bg-white/20 px-3 py-1 rounded-full text-sm font-medium"
                    >
                      {tool.icon}
                      {tool.name}
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
