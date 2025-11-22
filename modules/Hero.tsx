"use client";

import {
  Linkedin,
  Mail,
  Github,
  ArrowDown,
  Sparkles,
  Code2,
} from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Hero() {
  return (
    <section
      id="hero"
      className="min-h-screen relative overflow-hidden bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 dark:from-slate-950 dark:via-blue-950 dark:to-slate-950 transition-colors duration-500"
    >
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-400/20 dark:bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div
          className="absolute bottom-20 right-10 w-96 h-96 bg-purple-400/20 dark:bg-purple-500/10 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "700ms" }}
        ></div>
        <div
          className="absolute top-1/2 left-1/2 w-64 h-64 bg-pink-400/20 dark:bg-cyan-500/10 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "1000ms" }}
        ></div>
      </div>

      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,.03)_1px,transparent_1px)] dark:bg-[linear-gradient(rgba(255,255,255,.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.02)_1px,transparent_1px)] bg-[size:72px_72px]"></div>

      <div className="container mx-auto px-6 pt-32 pb-20 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-16">
          <motion.div
            className="lg:w-1/2 text-center lg:text-left"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <motion.div
              className="inline-flex items-center gap-2 px-4 py-2 mb-6 bg-white/80 dark:bg-gradient-to-r dark:from-blue-500/10 dark:to-purple-500/10 border border-blue-200 dark:border-blue-500/20 rounded-full backdrop-blur-sm shadow-md dark:shadow-none"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              <Sparkles className="w-4 h-4 text-blue-700 dark:text-blue-600" />
              <span className="text-sm font-medium text-blue-700 dark:text-blue-600">
                Доступен для новых возможностей
              </span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
            >
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-4 leading-tight">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 dark:from-blue-400 dark:via-cyan-400 dark:to-purple-400">
                  Сухроб
                </span>
                <br />
                <span className="text-slate-900 dark:text-white">
                  Рахматуллаев
                </span>
              </h1>
            </motion.div>

            <motion.div
              className="flex items-center justify-center lg:justify-start gap-3 mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              <Code2 className="w-6 h-6 text-cyan-600 dark:text-cyan-400" />
              <h2 className="text-xl md:text-2xl font-semibold text-slate-700 dark:text-gray-300">
                Fullstack разработчик
              </h2>
            </motion.div>

            <motion.p
              className="text-md md:text-lg text-slate-600 dark:text-gray-400 mb-10 max-w-2xl mx-auto lg:mx-0 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
            >
              Создаю исключительные цифровые решения с современными
              веб-технологиями. Специализируюсь на разработке масштабируемых
              full-stack приложений с использованием{" "}
              <span className="font-semibold text-green-600 dark:text-green-400">
                MongoDB
              </span>
              ,{" "}
              <span className="font-semibold text-red-600 dark:text-red-400">
                NestJS
              </span>
              ,{" "}
              <span className="font-semibold text-blue-600 dark:text-blue-400">
                Next.js
              </span>{" "}
              и других технологий.
            </motion.p>

            {/* Social Links */}
            <motion.div
              className="flex justify-center lg:justify-start gap-4 mb-10"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
            >
              {[
                {
                  icon: Github,
                  href: "https://github.com/Rakhsrb",
                  label: "GitHub",
                  color:
                    "from-gray-500 to-gray-700 dark:from-gray-600 dark:to-gray-800",
                },
                {
                  icon: Linkedin,
                  href: "https://www.linkedin.com/in/%D1%81%D1%83%D1%85%D1%80%D0%BE%D0%B1-%D1%80%D0%B0%D1%85%D0%BC%D0%B0%D1%82%D1%83%D0%BB%D0%BB%D0%B0%D0%B5%D0%B2-6a0469258/",
                  label: "LinkedIn",
                  color: "from-blue-600 to-blue-800",
                },
                {
                  icon: Mail,
                  href: "mailto:suhrobrahmatullayev973132@gmail.com",
                  label: "Email",
                  color: "from-purple-600 to-purple-800",
                },
              ].map((social, index) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  className="group relative p-4 rounded-2xl bg-white/80 dark:bg-white/5 backdrop-blur-sm border border-gray-200 dark:border-white/10 hover:border-gray-300 dark:hover:border-white/20 transition-all duration-300 shadow-md hover:shadow-lg dark:shadow-none"
                  aria-label={social.label}
                  whileHover={{ scale: 1.1, y: -5 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7 + index * 0.1 }}
                >
                  <div
                    className={`absolute inset-0 bg-gradient-to-r ${social.color} opacity-0 group-hover:opacity-20 rounded-2xl transition-opacity duration-300`}
                  ></div>
                  <social.icon className="w-6 h-6 text-slate-600 dark:text-gray-300 group-hover:text-slate-900 dark:group-hover:text-white transition-colors duration-300 relative z-10" />
                </motion.a>
              ))}
            </motion.div>

            {/* CTA Button */}
            <motion.button
              onClick={() =>
                document
                  .getElementById("about")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="group relative inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-2xl font-semibold overflow-hidden shadow-xl shadow-blue-500/30 hover:shadow-2xl hover:shadow-purple-500/40 dark:shadow-lg dark:shadow-blue-500/20 dark:hover:shadow-xl dark:hover:shadow-blue-500/40 transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="relative z-10">Посмотреть мои работы</span>
              <ArrowDown className="w-5 h-5 relative z-10 group-hover:translate-y-1 transition-transform duration-300" />
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </motion.button>
          </motion.div>

          {/* Right Content - Profile Image */}
          <motion.div
            className="lg:w-1/2 flex justify-center"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          >
            <div className="relative">
              {/* Animated rings */}
              <motion.div
                className="absolute inset-0 -m-4"
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              >
                <div className="w-full h-full border-2 border-dashed border-blue-400/40 dark:border-blue-500/30 rounded-full"></div>
              </motion.div>
              <motion.div
                className="absolute inset-0 -m-8"
                animate={{ rotate: -360 }}
                transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
              >
                <div className="w-full h-full border-2 border-dashed border-purple-400/40 dark:border-purple-500/30 rounded-full"></div>
              </motion.div>

              {/* Main image container */}
              <div className="relative w-80 h-80 md:w-96 md:h-96">
                {/* Gradient backgrounds */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-blue-400 to-cyan-400 dark:from-blue-500 dark:to-cyan-500 rounded-3xl blur-2xl opacity-50 dark:opacity-40"
                  animate={{
                    scale: [1, 1.1, 1],
                    rotate: [0, 5, 0],
                  }}
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                ></motion.div>
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-purple-400 to-pink-400 dark:from-purple-500 dark:to-pink-500 rounded-3xl blur-2xl opacity-50 dark:opacity-40"
                  animate={{
                    scale: [1, 1.15, 1],
                    rotate: [0, -5, 0],
                  }}
                  transition={{
                    duration: 7,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 0.5,
                  }}
                ></motion.div>

                {/* Image */}
                <motion.div
                  className="relative rounded-3xl overflow-hidden shadow-2xl w-full h-full border-4 border-white/50 dark:border-white/10 backdrop-blur-sm shadow-blue-200/50 dark:shadow-none"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                >
                  <Image
                    src="/me.JPG"
                    alt="Сухроб Рахматуллаев"
                    layout="fill"
                    objectFit="cover"
                    className="rounded-3xl"
                    priority
                  />
                  {/* Overlay gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-50/30 dark:from-slate-950/50 via-transparent to-transparent"></div>
                </motion.div>

                {/* Floating elements */}
                <motion.div
                  className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-blue-500 to-cyan-500 dark:from-blue-400 dark:to-cyan-400 rounded-2xl shadow-lg shadow-blue-300/50 dark:shadow-none flex items-center justify-center backdrop-blur-sm border border-white/40 dark:border-white/20"
                  animate={{
                    y: [0, -10, 0],
                    rotate: [0, 5, 0],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  <Code2 className="w-12 h-12 text-white" />
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Enhanced scroll indicator */}
      <motion.div
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-2"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.6 }}
      >
        <motion.div
          className="w-6 h-10 border-2 border-blue-500/70 dark:border-blue-400/50 rounded-full p-1 flex justify-center"
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <motion.div
            className="w-1.5 h-3 bg-gradient-to-b from-blue-500 to-purple-500 dark:from-blue-400 dark:to-purple-400 rounded-full"
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          ></motion.div>
        </motion.div>
        <span className="text-xs text-slate-500 dark:text-gray-400 uppercase tracking-wider">
          Прокрутить
        </span>
      </motion.div>
    </section>
  );
}
