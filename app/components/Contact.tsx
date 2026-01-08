"use client";

import React from "react";
import type { ChangeEvent, FormEvent } from "react";

import { useState, useRef } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  Mail,
  Linkedin,
  Github,
  Send,
  MessageCircle,
  User,
  Briefcase,
  Instagram,
} from "lucide-react";

export default function Contact() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    projectType: "",
    message: "",
  });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    const whatsappMessage = `Halo Rafly! 👋

Saya ${formData.name} ingin berdiskusi tentang project ${formData.projectType}.

📧 Email: ${formData.email}
💼 Jenis Project: ${formData.projectType}

📝 Detail Project:
${formData.message}

Terima kasih!`;

    const whatsappUrl = `https://wa.me/6281224086200?text=${encodeURIComponent(
      whatsappMessage
    )}`;
    window.open(whatsappUrl, "_blank");
  };

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const socialLinks = [
    {
      name: "Email",
      icon: <Mail size={24} />,
      href: "mailto:rfl.yfa@gmail.com",
      color: "hover:text-red-500",
      description: "rfl.yfa@gmail.com",
    },
    {
      name: "LinkedIn",
      icon: <Linkedin size={24} />,
      href: "https://www.linkedin.com/in/rafly-fahusnul-akbar/",
      color: "hover:text-blue-600",
      description: "linkedin.com/in/rafly-fahusnul-akbar/",
    },
    {
      name: "GitHub",
      icon: <Github size={24} />,
      href: "https://github.com/RaflyFA",
      color: "hover:text-gray-900 dark:hover:text-white",
      description: "github.com/RaflyFA",
    },
    {
      name: "Instagram",
      icon: <Instagram size={24} />,
      href: "https://instagram.com/rfl.yfa",
      color: "hover:text-pink-500",
      description: "instagram.com/rfl.yfa",
    },
  ];

  interface Comment {
    name: string;
    message: string;
    photo: string | null;
    createdAt: string;
    pinned: boolean;
    owner: string;
  }

  function timeAgo(date: string | Date) {
    const now = new Date();
    const seconds = Math.floor(
      (now.getTime() - new Date(date).getTime()) / 1000
    );
    if (seconds < 60) return `${seconds}s ago`;
    const minutes = Math.floor(seconds / 60);
    if (minutes < 60) return `${minutes}m ago`;
    const hours = Math.floor(minutes / 60);
    if (hours < 24) return `${hours}h ago`;
    return new Date(date).toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    });
  }

  function CommentSection() {
    const [comments, setComments] = useState(() => {
      if (typeof window !== "undefined") {
        const saved = localStorage.getItem("comments-v3");
        if (saved) return JSON.parse(saved);
      }
      return [
        {
          name: "Admin",
          message:
            "Selamat datang di halaman kontak! Silakan tinggalkan komentar atau pertanyaan di bawah.",
          photo: null,
          createdAt: new Date("2025-07-01T09:00:00").toISOString(),
          pinned: true,
          owner: "admin",
        },
      ];
    });
    const [input, setInput] = useState<{
      name: string;
      message: string;
      photo: File | null;
    }>({
      name: "",
      message: "",
      photo: null,
    });
    const [photoPreview, setPhotoPreview] = useState<string | null>(null);
    const fileInputRef = useRef<HTMLInputElement | null>(null);

    React.useEffect(() => {
      if (typeof window !== "undefined") {
        localStorage.setItem("comments-v3", JSON.stringify(comments));
      }
    }, [comments]);

    const handleInputChange = (
      e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
      setInput({ ...input, [e.target.name]: e.target.value });
    };

    const handlePhotoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const file = e.target.files?.[0];
      if (file && file.size <= 5 * 1024 * 1024) {
        setInput({ ...input, photo: file });
        setPhotoPreview(URL.createObjectURL(file));
      } else if (file) {
        alert("File terlalu besar! Maksimal 5MB.");
      }
    };

    const handleSubmit = (e: React.FormEvent) => {
      e.preventDefault();
      if (!input.name.trim() || !input.message.trim()) return;
      const newComment = {
        name: input.name,
        message: input.message,
        photo: photoPreview,
        createdAt: new Date().toISOString(),
        pinned: false,
        owner: input.name.trim().toLowerCase(),
      };
      setComments([comments[0], newComment, ...comments.slice(1)]); // pinned comment tetap di atas
      setInput({ name: "", message: "", photo: null });
      setPhotoPreview(null);
      if (fileInputRef.current) fileInputRef.current.value = "";
    };

    const handleDelete = (idx: number) => {
      setComments(comments.filter((_: unknown, i: number) => i !== idx));
    };

    const currentUser = input.name.trim().toLowerCase();

    return (
      <div>
        <h3 className="text-xl font-bold mb-6">Comments ({comments.length})</h3>
        <form onSubmit={handleSubmit} className="space-y-4 mb-8">
          <div>
            <label
              htmlFor="comment-name"
              className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
            >
              Name
            </label>
            <input
              id="comment-name"
              name="name"
              type="text"
              value={input.name}
              onChange={handleInputChange}
              placeholder="Enter your name"
              className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-xl bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-purple-500"
              required
            />
          </div>
          <div>
            <label
              htmlFor="comment-message"
              className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
            >
              Message
            </label>
            <textarea
              id="comment-message"
              name="message"
              value={input.message}
              onChange={handleInputChange}
              placeholder="Write your message here..."
              rows={3}
              className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-xl bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-purple-500 resize-none"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              Profile Photo (optional)
            </label>
            <input
              ref={fileInputRef}
              type="file"
              accept="image/*"
              onChange={handlePhotoChange}
              className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-xl file:border-0 file:text-sm file:font-semibold file:bg-purple-50 file:text-purple-700 hover:file:bg-purple-100"
            />
            <span className="text-xs text-gray-400">Max file size: 5MB</span>
            {photoPreview && (
              <img
                src={photoPreview}
                alt="Preview"
                className="mt-2 w-14 h-14 rounded-full object-cover border"
              />
            )}
          </div>
          <button
            type="submit"
            className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-6 py-2 rounded-xl font-semibold shadow hover:shadow-lg transition-all"
          >
            Post Comment
          </button>
        </form>
        <div className="space-y-6">
          {comments.map((c: Comment, i: number) => (
            <div
              key={i}
              className={`flex items-start gap-4 p-4 rounded-xl bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 relative ${
                c.pinned ? "ring-2 ring-purple-400" : ""
              }`}
            >
              <div>
                {c.photo ? (
                  <img
                    src={c.photo}
                    alt={c.name}
                    className="w-12 h-12 rounded-full object-cover border"
                  />
                ) : (
                  <div className="w-12 h-12 rounded-full bg-gray-300 dark:bg-gray-700 flex items-center justify-center text-xl font-bold text-white">
                    {c.name[0]}
                  </div>
                )}
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-2">
                  <span className="font-semibold text-gray-900 dark:text-white">
                    {c.name}
                  </span>
                  {c.pinned && (
                    <span className="text-xs bg-yellow-200 text-yellow-800 px-2 py-0.5 rounded-full ml-2">
                      Pinned
                    </span>
                  )}
                  <span className="text-xs text-gray-400 ml-2">
                    {timeAgo(c.createdAt)}
                  </span>
                  {/* Tombol hapus hanya untuk admin atau pemilik */}
                  {!c.pinned &&
                    (c.owner === currentUser || currentUser === "admin") && (
                      <button
                        onClick={() => handleDelete(i)}
                        className="ml-2 text-xs text-red-500 hover:underline"
                      >
                        Hapus Komentar
                      </button>
                    )}
                </div>
                <div className="text-gray-700 dark:text-gray-200 mt-1 whitespace-pre-line">
                  {c.message}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <section
      id="contact"
      className="py-20 bg-white dark:bg-gray-900 scroll-mt-24 lg:scroll-mt-32 relative overflow-hidden"
    >
      <div className="absolute inset-0 opacity-70 pointer-events-none">
        <motion.div
          animate={{ x: [0, -140, 0], y: [0, 80, 0] }}
          transition={{
            duration: 24,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
          }}
          className="absolute top-10 right-0 w-60 h-60 bg-gradient-to-r from-blue-500/30 to-purple-500/30 rounded-full blur-3xl"
        />
        <motion.div
          animate={{ x: [0, 90, 0], y: [0, -90, 0] }}
          transition={{
            duration: 28,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
          }}
          className="absolute -bottom-4 left-5 w-52 h-52 bg-gradient-to-r from-pink-500/30 to-orange-400/30 rounded-full blur-3xl"
        />
        <motion.div
          animate={{ y: [0, -20, 0], rotate: [0, 12, 0] }}
          transition={{
            duration: 5,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
          className="absolute top-6 left-1/4 text-purple-300 dark:text-purple-600 opacity-30"
        >
          <Mail size={42} />
        </motion.div>
        <motion.div
          animate={{ y: [0, 20, 0], rotate: [0, -12, 0] }}
          transition={{
            duration: 6,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
          className="absolute bottom-16 right-1/5 text-blue-300 dark:text-blue-600 opacity-30"
        >
          <Send size={38} />
        </motion.div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
              Kontak
            </span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-600 to-blue-600 mx-auto rounded-full"></div>
          <p className="text-gray-600 dark:text-gray-400 mt-4 max-w-2xl mx-auto">
            Tertarik bekerja sama dengan developer yang adaptif dan detail? Saya
            siap bantu wujudkan ide digital Anda.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Kolom kiri: Formulir + Connect With Me */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-gray-50 dark:bg-gray-800/50 rounded-2xl p-6 sm:p-8 shadow-lg flex flex-col h-fit"
          >
            <div className="mb-6 sm:mb-8">
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-2">
                Kirim Pesan
              </h3>
              <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400">
                Ceritakan tentang proyek Anda dan mari kita diskusikan lebih
                lanjut
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="relative">
                <label
                  htmlFor="name"
                  className="block text-xs sm:text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                >
                  Nama Lengkap
                </label>
                <div className="relative">
                  <User
                    size={18}
                    className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 sm:w-[20px] sm:h-[20px]"
                  />
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full pl-10 sm:pl-12 pr-4 py-2.5 sm:py-3 border border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent bg-white dark:bg-gray-800 text-gray-900 dark:text-white transition-colors duration-200 text-sm"
                    placeholder="Masukkan nama lengkap Anda"
                  />
                </div>
              </div>

              <div className="relative">
                <label
                  htmlFor="email"
                  className="block text-xs sm:text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                >
                  Email Address
                </label>
                <div className="relative">
                  <Mail
                    size={18}
                    className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 sm:w-[20px] sm:h-[20px]"
                  />
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full pl-10 sm:pl-12 pr-4 py-2.5 sm:py-3 border border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent bg-white dark:bg-gray-800 text-gray-900 dark:text-white transition-colors duration-200 text-sm"
                    placeholder="email@gmail.com"
                  />
                </div>
              </div>

              <div className="relative">
                <label
                  htmlFor="projectType"
                  className="block text-xs sm:text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                >
                  Jenis Proyek
                </label>
                <div className="relative">
                  <Briefcase
                    size={18}
                    className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 sm:w-[20px] sm:h-[20px]"
                  />
                  <select
                    id="projectType"
                    name="projectType"
                    value={formData.projectType}
                    onChange={handleChange}
                    required
                    className="w-full pl-10 sm:pl-12 pr-4 py-2.5 sm:py-3 border border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent bg-white dark:bg-gray-800 text-gray-900 dark:text-white transition-colors duration-200 text-sm"
                  >
                    <option value="">Pilih jenis proyek</option>
                    <option value="Website Development">
                      Website Development
                    </option>
                    <option value="UI/UX Design">UI/UX Design</option>
                    <option value="E-Commerce Solution">
                      E-Commerce Solution
                    </option>
                    <option value="Lainnya">Lainnya</option>
                  </select>
                </div>
              </div>

              <div className="relative">
                <label
                  htmlFor="message"
                  className="block text-xs sm:text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                >
                  Pesan
                </label>
                <div className="relative">
                  <MessageCircle
                    size={18}
                    className="absolute left-3 top-4 text-gray-400 sm:w-[20px] sm:h-[20px]"
                  />
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full pl-10 sm:pl-12 pr-4 py-2.5 sm:py-3 border border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent bg-white dark:bg-gray-800 text-gray-900 dark:text-white transition-colors duration-200 resize-none text-sm"
                    placeholder="Ceritakan detail proyek Anda, timeline, budget, dan ekspektasi..."
                  />
                </div>
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white py-3 sm:py-4 px-4 sm:px-6 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center space-x-2 text-sm sm:text-base"
              >
                <Send size={18} className="sm:w-[20px] sm:h-[20px]" />
                <span>Kirim Pesan</span>
              </motion.button>
            </form>

            {/* Connect With Me (sosial) */}
            <div className="mt-10">
              <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">
                Connect With Me
              </h3>
              <div className="space-y-4">
                {socialLinks.map((link) => (
                  <motion.a
                    key={link.name}
                    whileHover={{ x: 10 }}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center space-x-4 p-4 rounded-xl bg-white dark:bg-gray-900 text-gray-700 dark:text-gray-300 ${link.color} transition-all duration-200 group`}
                  >
                    <div className="group-hover:scale-110 transition-transform duration-200">
                      {link.icon}
                    </div>
                    <div>
                      <div className="font-medium">{link.name}</div>
                      <div className="text-sm text-gray-500 dark:text-gray-400">
                        {link.description}
                      </div>
                    </div>
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Kolom kanan: Comments */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="bg-gray-50 dark:bg-gray-800/50 rounded-2xl p-8 shadow-lg h-fit"
          >
            <CommentSection />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
