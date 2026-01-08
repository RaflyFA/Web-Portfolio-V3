"use client";

import { motion } from "framer-motion";
import { Heart, Coffee } from "lucide-react";
import {
  SiInstagram,
  SiLinkedin,
  SiGithub,
  SiX,
  SiFacebook,
} from "react-icons/si";

export default function Footer() {
  const navItems = [
    { name: "Beranda", href: "#home" },
    { name: "Tentang", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Project", href: "#projects" },
    { name: "Sertifikat", href: "#certificates" },
    { name: "Kontak", href: "#contact" },
  ];

  const socialLinks = [
    {
      name: "Instagram",
      icon: SiInstagram,
      href: "https://instagram.com/rfl.yfa",
      color: "hover:text-pink-500",
    },
    {
      name: "LinkedIn",
      icon: SiLinkedin,
      href: "https://www.linkedin.com/in/rafly-fahusnul-akbar/",
      color: "hover:text-blue-600",
    },
    {
      name: "GitHub",
      icon: SiGithub,
      href: "https://github.com/RaflyFA",
      color: "hover:text-gray-900 dark:hover:text-white",
    },
    {
      name: "X",
      icon: SiX,
      href: "https://x.com/rafly93550",
      color: "hover:text-gray-900 dark:hover:text-white",
    },
    {
      name: "Facebook",
      icon: SiFacebook,
      href: "https://facebook.com/rfl.yfa",
      color: "hover:text-blue-700",
    },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      const navbarHeight = document.querySelector("nav")?.offsetHeight || 64;
      const offsetPosition =
        element.getBoundingClientRect().top + window.scrollY - navbarHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  const sectionBackground = "bg-gray-50 dark:bg-gray-800/50";

  return (
    <footer
      className={`${sectionBackground} border-t border-gray-200 dark:border-gray-700 relative overflow-hidden`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* Main Footer Content */}
          <div className="flex flex-col lg:flex-row justify-between items-center lg:items-start space-y-8 lg:space-y-0 mb-8">
            {/* Left Section - Brand */}
            {/* Pada mobile, teks ini akan di tengah karena items-center pada parent div */}
            <div className="flex-1 text-center lg:text-left">
              <h3 className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent mb-2">
                Rafly FA
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Web Developer & UI/UX Designer
              </p>
            </div>

            {/* Center Section - Navigation */}
            {/* Pada mobile, ini akan stack ke bawah dan di tengah. Pada desktop, ini flex row dan di tengah*/}
            <div className="flex-1 flex flex-col items-center lg:flex-row lg:justify-center lg:space-x-8">
              {" "}
              {/* Mengubah flex-col dan items-center */}
              {navItems.map((item) => (
                <motion.button
                  key={item.name}
                  whileHover={{ x: 5 }}
                  onClick={() => scrollToSection(item.href)}
                  className="text-center lg:text-left text-gray-600 dark:text-gray-400 hover:text-purple-600 dark:hover:text-purple-400 transition-colors duration-200 py-1"
                >
                  {item.name}
                </motion.button>
              ))}
            </div>

            {/* Right Section - Social Media */}
            {/* Pada mobile, icon ini akan di tengah karena items-center pada parent div */}
            <div className="flex-1 flex justify-center lg:justify-end">
              {" "}
              {/* Menambahkan justify-center */}
              <div className="flex space-x-4">
                {socialLinks.map((social) => (
                  <motion.a
                    key={social.name}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-10 h-10 bg-gray-100 dark:bg-gray-800 rounded-full flex items-center justify-center text-gray-600 dark:text-gray-400 ${social.color} transition-all duration-200`}
                  >
                    <social.icon size={20} />
                  </motion.a>
                ))}
              </div>
            </div>
          </div>

          {/* Bottom Section - Copyright */}
          <div className="border-t border-gray-200 dark:border-gray-700 pt-8 text-center space-y-2">
            <div className="flex items-center justify-center space-x-2 text-gray-600 dark:text-gray-400 text-xs lg:text-sm">
              <span>© 2025 Portfolio Rafly FA. Dibuat dengan</span>
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{
                  duration: 1,
                  repeat: Number.POSITIVE_INFINITY,
                  repeatDelay: 2,
                }}
              >
                <Heart size={16} className="text-red-500 w-3" />
              </motion.div>
              <span>dan sedikit</span>
              <motion.div
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{
                  duration: 2,
                  repeat: Number.POSITIVE_INFINITY,
                  repeatDelay: 1,
                }}
              >
                <Coffee size={16} className="text-amber-600 w-3" />
              </motion.div>
            </div>
            <div className="text-sm lg:text-sm text-gray-500 dark:text-gray-500">
              <p>Siap mewujudkan website impian Anda</p>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
