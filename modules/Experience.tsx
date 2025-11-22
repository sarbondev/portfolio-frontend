"use client";

import {
  Briefcase,
  Calendar,
  MapPin,
  Globe,
  Sparkles,
  TrendingUp,
  Award,
} from "lucide-react";
import { motion } from "framer-motion";

export default function Experience() {
  const experiences = [
    {
      company: "Fullstack разработчик",
      location: "Узбекистан, Наманган, UITC Academy",
      period: "2023 - 2025",
      role: "MERN Stack разработчик",
      responsibilities: [
        "Разработка кастомных веб-приложений для международных клиентов",
        "Создание адаптивных и масштабируемых интерфейсов с React",
        "Внедрение безопасных backend систем с Node.js и Express",
        "Создание RESTful API и управление базами данных MongoDB",
        "Сотрудничество с клиентами для обеспечения высококачественных решений",
      ],
      achievements: [
        { icon: <TrendingUp className="w-4 h-4" />, text: "5+ проектов" },
        {
          icon: <Award className="w-4 h-4" />,
          text: "100% довольных клиентов",
        },
      ],
    },
    {
      company: "Fullstack Mentor",
      location: "Узбекистан, Ташкент, CoddyCamp IT Academy",
      period: "2025 - Настоящее время",
      role: "MERN Stack разработчик",
      responsibilities: [
        "Разработка кастомных веб-приложений для международных клиентов",
        "Создание адаптивных и масштабируемых интерфейсов с React",
        "Внедрение безопасных backend систем с Node.js и Express",
        "Создание RESTful API и управление базами данных MongoDB",
        "Сотрудничество с клиентами для обеспечения высококачественных решений",
      ],
      achievements: [
        { icon: <TrendingUp className="w-4 h-4" />, text: "10+ проектов" },
        {
          icon: <Award className="w-4 h-4" />,
          text: "100% довольных клиентов",
        },
      ],
    },
  ];

  return (
    <section
      id="experience"
      className="py-24 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 dark:from-slate-950 dark:via-blue-950 dark:to-slate-950 transition-colors duration-500 overflow-hidden relative"
    >
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-40 right-20 w-96 h-96 bg-blue-400/10 dark:bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div
          className="absolute bottom-20 left-10 w-80 h-80 bg-purple-400/10 dark:bg-purple-500/10 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "1s" }}
        ></div>
      </div>

      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,.03)_1px,transparent_1px)] dark:bg-[linear-gradient(rgba(255,255,255,.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.02)_1px,transparent_1px)] bg-[size:64px_64px]"></div>

      <div className="container mx-auto px-6 relative z-10">
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
            <Briefcase className="w-4 h-4 text-blue-600 dark:text-blue-400" />
            <span className="text-sm font-medium text-blue-700 dark:text-blue-300">
              Опыт работы
            </span>
          </motion.div>

          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 dark:from-blue-400 dark:via-cyan-400 dark:to-purple-400">
            Профессиональный опыт
          </h2>

          <p className="text-lg text-slate-600 dark:text-gray-400 max-w-2xl mx-auto">
            Мой путь в разработке программного обеспечения
          </p>
        </motion.div>

        {/* Experience Timeline */}
        <div className="relative">
          {/* Vertical line */}

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="relative"
              >
                {/* Content Card */}

                <motion.div
                  className="group bg-white/80 dark:bg-white/5 backdrop-blur-sm rounded-3xl p-8 border border-gray-200 dark:border-white/10 shadow-xl hover:shadow-2xl dark:shadow-none transition-all duration-300 overflow-hidden"
                  whileHover={{ scale: 1.02, y: -5 }}
                >
                  {/* Gradient overlay on hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-purple-500/5 to-pink-500/5 dark:from-blue-500/10 dark:via-purple-500/10 dark:to-pink-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                  {/* Decorative corner */}
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-400 to-purple-400 dark:from-blue-500 dark:to-purple-500 opacity-10 rounded-bl-[4rem] transform group-hover:scale-110 transition-transform duration-300"></div>

                  <div className="relative z-10">
                    {/* Company Header */}
                    <div className="flex items-start justify-between mb-6">
                      <div>
                        <h3 className="text-2xl md:text-3xl font-bold mb-2 text-slate-800 dark:text-white">
                          {exp.company}
                        </h3>
                      </div>
                    </div>

                    {/* Info Pills */}
                    <div className="flex flex-wrap gap-3 mb-6">
                      <div className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-white/50 to-white/30 dark:from-white/5 dark:to-transparent rounded-full border border-gray-200 dark:border-white/10">
                        <MapPin className="w-4 h-4 text-purple-600 dark:text-purple-400" />
                        <span className="text-sm text-slate-700 dark:text-gray-300">
                          {exp.location}
                        </span>
                      </div>
                      <div className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-white/50 to-white/30 dark:from-white/5 dark:to-transparent rounded-full border border-gray-200 dark:border-white/10">
                        <Calendar className="w-4 h-4 text-cyan-600 dark:text-cyan-400" />
                        <span className="text-sm text-slate-700 dark:text-gray-300">
                          {exp.period}
                        </span>
                      </div>
                    </div>

                    {/* Role */}
                    <div className="mb-6 p-4 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-500/10 dark:to-purple-500/10 rounded-2xl border border-blue-200 dark:border-blue-500/20">
                      <div className="flex items-center gap-3">
                        <Briefcase className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                        <p className="text-lg font-semibold text-slate-800 dark:text-white">
                          {exp.role}
                        </p>
                      </div>
                    </div>

                    {/* Responsibilities */}
                    <div className="mb-6">
                      <h4 className="text-sm font-semibold text-slate-600 dark:text-gray-400 uppercase tracking-wider mb-3">
                        Обязанности
                      </h4>
                      <ul className="space-y-3">
                        {exp.responsibilities.map((resp, idx) => (
                          <motion.li
                            key={idx}
                            className="flex items-start gap-3 text-slate-700 dark:text-gray-300"
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.6 + idx * 0.1 }}
                          >
                            <span className="flex-shrink-0 w-2 h-2 mt-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></span>
                            <span>{resp}</span>
                          </motion.li>
                        ))}
                      </ul>
                    </div>

                    {/* Achievements */}
                    <div className="pt-6 border-t border-gray-200 dark:border-white/10">
                      <div className="flex flex-wrap gap-4">
                        {exp.achievements.map((achievement, idx) => (
                          <motion.div
                            key={idx}
                            className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-500/10 dark:to-emerald-500/10 rounded-xl border border-green-200 dark:border-green-500/20"
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.8 + idx * 0.1 }}
                            whileHover={{ scale: 1.05 }}
                          >
                            <div className="text-green-600 dark:text-green-400">
                              {achievement.icon}
                            </div>
                            <span className="text-sm font-medium text-green-700 dark:text-green-300">
                              {achievement.text}
                            </span>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8, duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full font-semibold shadow-lg hover:shadow-xl transition-shadow duration-300">
            <Sparkles className="w-5 h-5" />
            <span>Всегда открыт для новых возможностей</span>
          </div>
        </motion.div>
      </div>

      {/* Decorative floating elements */}
      <motion.div
        className="absolute bottom-20 left-20 w-32 h-32 border-2 border-dashed border-purple-300/30 dark:border-purple-500/30 rounded-full"
        animate={{ rotate: 360 }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      />
      <motion.div
        className="absolute top-40 right-40 w-24 h-24 border-2 border-dashed border-blue-300/30 dark:border-blue-500/30 rounded-full"
        animate={{ rotate: -360 }}
        transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
      />
    </section>
  );
}
