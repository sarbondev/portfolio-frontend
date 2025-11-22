"use client";

import { motion } from "framer-motion";
import {
  Code,
  Database,
  Server,
  Zap,
  Sparkles,
  Rocket,
  Globe,
} from "lucide-react";

export default function About() {
  const skills = [
    {
      icon: <Code className="w-8 h-8" />,
      title: "Frontend",
      description: "React, Next.js, Redux, TypeScript",
      color: "from-blue-500 to-cyan-500",
      bgColor: "bg-blue-500/10 dark:bg-blue-500/20",
      iconColor: "text-blue-600 dark:text-blue-400",
    },
    {
      icon: <Server className="w-8 h-8" />,
      title: "Backend",
      description: "Node.js, Express, NestJS, Fastify",
      color: "from-green-500 to-emerald-500",
      bgColor: "bg-green-500/10 dark:bg-green-500/20",
      iconColor: "text-green-600 dark:text-green-400",
    },
    {
      icon: <Database className="w-8 h-8" />,
      title: "База данных",
      description: "MongoDB, Mongoose, PostgreSQL",
      color: "from-purple-500 to-pink-500",
      bgColor: "bg-purple-500/10 dark:bg-purple-500/20",
      iconColor: "text-purple-600 dark:text-purple-400",
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Производительность",
      description: "Оптимизация, Кэширование, CDN",
      color: "from-yellow-500 to-orange-500",
      bgColor: "bg-yellow-500/10 dark:bg-yellow-500/20",
      iconColor: "text-yellow-600 dark:text-yellow-400",
    },
  ];

  const highlights = [
    {
      icon: <Rocket className="w-5 h-5" />,
      text: "5+ лет опыта",
      color: "text-blue-600 dark:text-blue-400",
    },
    {
      icon: <Globe className="w-5 h-5" />,
      text: "50+ проектов",
      color: "text-purple-600 dark:text-purple-400",
    },
    {
      icon: <Sparkles className="w-5 h-5" />,
      text: "Современный стек",
      color: "text-cyan-600 dark:text-cyan-400",
    },
  ];

  return (
    <section
      id="about"
      className="py-24 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 dark:from-slate-950 dark:via-blue-950 dark:to-slate-950 transition-colors duration-500 overflow-hidden relative"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-96 h-96 bg-blue-400/10 dark:bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div
          className="absolute bottom-20 right-10 w-80 h-80 bg-purple-400/10 dark:bg-purple-500/10 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "1s" }}
        ></div>
        <div
          className="absolute top-1/2 left-1/3 w-64 h-64 bg-pink-400/10 dark:bg-cyan-500/10 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "2s" }}
        ></div>
      </div>

      {/* Grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,.03)_1px,transparent_1px)] dark:bg-[linear-gradient(rgba(255,255,255,.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.02)_1px,transparent_1px)] bg-[size:64px_64px]"></div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.div
            className="inline-flex items-center gap-2 px-4 py-2 mb-4 bg-white/80 dark:bg-white/5 border border-blue-200 dark:border-blue-500/20 rounded-full backdrop-blur-sm"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <Sparkles className="w-4 h-4 text-blue-600 dark:text-blue-400" />
            <span className="text-sm font-medium text-blue-700 dark:text-blue-300">
              Обо мне
            </span>
          </motion.div>

          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 dark:from-blue-400 dark:via-blue-400 dark:to-blue-400">
            Немного о себе
          </h2>

          <p className="text-lg text-slate-600 dark:text-gray-400 max-w-2xl mx-auto">
            Превращаю идеи в мощные цифровые решения
          </p>
        </motion.div>

        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Left Content - Description */}
          <motion.div
            className="lg:w-1/2"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="bg-white/80 dark:bg-white/5 backdrop-blur-sm rounded-3xl p-8 border border-gray-200 dark:border-white/10 shadow-xl dark:shadow-none">
              <p className="text-lg text-slate-700 dark:text-gray-300 leading-relaxed mb-6">
                Как увлеченный{" "}
                <span className="font-semibold text-blue-600 dark:text-blue-400">
                  MERN Stack разработчик
                </span>
                , я специализируюсь на создании надежных и масштабируемых
                веб-приложений. С прочной базой знаний в MongoDB, Express.js,
                React и Node.js, я создаю бесшовные full-stack решения, которые
                обеспечивают исключительный пользовательский опыт.
              </p>
              <p className="text-lg text-slate-700 dark:text-gray-300 leading-relaxed mb-8">
                Мой опыт распространяется на современные фреймворки, такие как{" "}
                <span className="font-semibold text-purple-600 dark:text-purple-400">
                  Next.js
                </span>{" "}
                и инструменты управления состоянием, такие как{" "}
                <span className="font-semibold text-cyan-600 dark:text-cyan-400">
                  Redux
                </span>
                . Я стремлюсь писать чистый, эффективный код и всегда в курсе
                последних тенденций индустрии.
              </p>

              {/* Highlights */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {highlights.map((item, index) => (
                  <motion.div
                    key={index}
                    className="flex items-center gap-3 p-4 bg-gradient-to-br from-white/50 to-white/30 dark:from-white/5 dark:to-transparent rounded-2xl border border-gray-200 dark:border-white/10"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 + index * 0.1 }}
                    whileHover={{ scale: 1.05 }}
                  >
                    <div className={`${item.color}`}>{item.icon}</div>
                    <span className="text-sm font-semibold text-slate-700 dark:text-gray-300">
                      {item.text}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right Content - Skills Grid */}
          <motion.div
            className="lg:w-1/2"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {skills.map((skill, index) => (
                <motion.div
                  key={index}
                  className="group relative bg-white/80 dark:bg-white/5 backdrop-blur-sm p-8 rounded-3xl border border-gray-200 dark:border-white/10 shadow-lg hover:shadow-2xl dark:shadow-none transition-all duration-300 overflow-hidden"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + index * 0.1, duration: 0.5 }}
                  whileHover={{ scale: 1.05, y: -5 }}
                >
                  {/* Gradient background on hover */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${skill.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}
                  ></div>

                  {/* Icon container */}
                  <div
                    className={`${skill.bgColor} w-16 h-16 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <div className={skill.iconColor}>{skill.icon}</div>
                  </div>

                  <h3 className="text-xl font-bold mb-2 text-slate-800 dark:text-white">
                    {skill.title}
                  </h3>
                  <p className="text-slate-600 dark:text-gray-400 leading-relaxed">
                    {skill.description}
                  </p>

                  {/* Decorative corner */}
                  <div
                    className={`absolute top-0 right-0 w-20 h-20 bg-gradient-to-br ${skill.color} opacity-5 rounded-bl-3xl`}
                  ></div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Bottom CTA or Stats */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full font-semibold shadow-lg hover:shadow-xl transition-shadow duration-300">
            <Sparkles className="w-5 h-5" />
            <span>Готов к новым проектам</span>
          </div>
        </motion.div>
      </div>

      {/* Decorative floating elements */}
      <motion.div
        className="absolute bottom-10 right-10 w-32 h-32 border-2 border-dashed border-blue-300/30 dark:border-blue-500/30 rounded-full"
        animate={{ rotate: 360 }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      />
      <motion.div
        className="absolute top-20 right-1/4 w-24 h-24 border-2 border-dashed border-purple-300/30 dark:border-purple-500/30 rounded-full"
        animate={{ rotate: -360 }}
        transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
      />
    </section>
  );
}
