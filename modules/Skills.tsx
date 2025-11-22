"use client";

import { motion } from "framer-motion";
import {
  Code,
  Database,
  Server,
  Layout,
  GitBranch,
  Terminal,
  Layers,
  Cpu,
  Globe,
  Workflow,
  Sparkles,
  Zap,
} from "lucide-react";

const skills = [
  {
    icon: Code,
    name: "Frontend разработка",
    tech: "React.js, Next.js",
    description:
      "Создание адаптивных и интерактивных пользовательских интерфейсов с современными возможностями React и Next.js для оптимальной производительности.",
    color: "text-blue-500",
    bgGradient: "from-blue-500 to-cyan-500",
    bgColor: "bg-blue-500/10 dark:bg-blue-500/20",
  },
  {
    icon: Server,
    name: "Backend разработка",
    tech: "Node.js, Express, Fastify",
    description:
      "Создание надежных серверных приложений с акцентом на масштабируемость и чистую архитектуру.",
    color: "text-green-500",
    bgGradient: "from-green-500 to-emerald-500",
    bgColor: "bg-green-500/10 dark:bg-green-500/20",
  },
  {
    icon: Database,
    name: "Управление БД",
    tech: "MongoDB, Mongoose",
    description:
      "Проектирование и реализация эффективных схем баз данных и запросов для оптимального управления данными.",
    color: "text-purple-500",
    bgGradient: "from-purple-500 to-pink-500",
    bgColor: "bg-purple-500/10 dark:bg-purple-500/20",
  },
  {
    icon: Layout,
    name: "UI/UX Дизайн",
    tech: "Tailwind CSS, Material UI",
    description:
      "Создание красивых и интуитивно понятных пользовательских интерфейсов с современными принципами дизайна.",
    color: "text-pink-500",
    bgGradient: "from-pink-500 to-rose-500",
    bgColor: "bg-pink-500/10 dark:bg-pink-500/20",
  },
  {
    icon: GitBranch,
    name: "Контроль версий",
    tech: "Git, GitHub",
    description:
      "Эффективное управление версиями кода с Git и эффективное сотрудничество через GitHub.",
    color: "text-orange-500",
    bgGradient: "from-orange-500 to-amber-500",
    bgColor: "bg-orange-500/10 dark:bg-orange-500/20",
  },
  {
    icon: Terminal,
    name: "TypeScript",
    tech: "TypeScript, JavaScript",
    description:
      "Написание типобезопасного кода для лучшей поддерживаемости и опыта разработки.",
    color: "text-yellow-500",
    bgGradient: "from-yellow-500 to-orange-500",
    bgColor: "bg-yellow-500/10 dark:bg-yellow-500/20",
  },
  {
    icon: Layers,
    name: "Управление состоянием",
    tech: "Redux, Context API",
    description:
      "Управление сложным состоянием приложения с современными решениями для управления состоянием.",
    color: "text-indigo-500",
    bgGradient: "from-indigo-500 to-purple-500",
    bgColor: "bg-indigo-500/10 dark:bg-indigo-500/20",
  },
  {
    icon: Cpu,
    name: "Разработка API",
    tech: "REST, GraphQL",
    description:
      "Проектирование и реализация эффективных API для бесшовного обмена данными.",
    color: "text-red-500",
    bgGradient: "from-red-500 to-rose-500",
    bgColor: "bg-red-500/10 dark:bg-red-500/20",
  },
  {
    icon: Globe,
    name: "Веб-производительность",
    tech: "Оптимизация, SEO",
    description:
      "Оптимизация веб-приложений для скорости, доступности и видимости в поисковых системах.",
    color: "text-teal-500",
    bgGradient: "from-teal-500 to-cyan-500",
    bgColor: "bg-teal-500/10 dark:bg-teal-500/20",
  },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="py-24 relative overflow-hidden bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 dark:from-slate-950 dark:via-blue-950 dark:to-slate-950 transition-colors duration-500"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-10 w-96 h-96 bg-blue-400/10 dark:bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div
          className="absolute bottom-1/4 right-10 w-80 h-80 bg-purple-400/10 dark:bg-purple-500/10 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "1s" }}
        ></div>
        <div
          className="absolute top-1/2 left-1/2 w-64 h-64 bg-pink-400/10 dark:bg-cyan-500/10 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "2s" }}
        ></div>
      </div>

      {/* Grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,.03)_1px,transparent_1px)] dark:bg-[linear-gradient(rgba(255,255,255,.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.02)_1px,transparent_1px)] bg-[size:64px_64px]"></div>

      {/* Decorative floating elements */}
      <motion.div
        className="absolute top-20 right-20 w-32 h-32 border-2 border-dashed border-blue-300/30 dark:border-blue-500/30 rounded-full"
        animate={{ rotate: 360 }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      />
      <motion.div
        className="absolute bottom-40 left-40 w-24 h-24 border-2 border-dashed border-purple-300/30 dark:border-purple-500/30 rounded-full"
        animate={{ rotate: -360 }}
        transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
      />

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
            <Zap className="w-4 h-4 text-blue-600 dark:text-blue-400" />
            <span className="text-sm font-medium text-blue-700 dark:text-blue-300">
              Навыки и экспертиза
            </span>
          </motion.div>

          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 dark:from-blue-400 dark:via-cyan-400 dark:to-purple-400">
            Технический стек
          </h2>

          <p className="text-lg text-slate-600 dark:text-gray-400 max-w-2xl mx-auto">
            Современные технологии для создания выдающихся решений
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="group relative"
            >
              <div className="relative bg-white/80 dark:bg-white/5 backdrop-blur-sm p-6 rounded-3xl border border-gray-200 dark:border-white/10 shadow-lg hover:shadow-2xl dark:shadow-none transition-all duration-300 overflow-hidden h-full">
                {/* Gradient overlay on hover */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${skill.bgGradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}
                ></div>

                {/* Icon Container */}
                <div className="relative flex items-start gap-4 mb-4">
                  <div
                    className={`${skill.bgColor} p-3 rounded-2xl group-hover:scale-110 transition-transform duration-300`}
                  >
                    <skill.icon className={`w-7 h-7 ${skill.color}`} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-slate-800 dark:text-white mb-1 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-purple-600 dark:group-hover:from-blue-400 dark:group-hover:to-purple-400 transition-all duration-300">
                      {skill.name}
                    </h3>
                    <div className="flex items-center gap-2">
                      <div
                        className={`w-1.5 h-1.5 ${skill.color} rounded-full animate-pulse`}
                      ></div>
                      <p className={`text-sm font-medium ${skill.color}`}>
                        {skill.tech}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Description */}
                <p className="text-sm text-slate-600 dark:text-gray-400 leading-relaxed relative">
                  {skill.description}
                </p>

                {/* Decorative corner */}
                <div
                  className={`absolute bottom-0 right-0 w-20 h-20 bg-gradient-to-tl ${skill.bgGradient} opacity-5 rounded-tl-3xl`}
                ></div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Stats/CTA */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 0.6 }}
        >
          <div className="inline-flex flex-wrap justify-center items-center gap-6 px-8 py-4 bg-white/80 dark:bg-white/5 backdrop-blur-sm rounded-2xl border border-gray-200 dark:border-white/10 shadow-lg">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full animate-pulse"></div>
              <span className="text-sm font-semibold text-slate-700 dark:text-gray-300">
                10+ технологий
              </span>
            </div>
            <div className="w-px h-6 bg-gray-300 dark:bg-gray-600"></div>
            <div className="flex items-center gap-2">
              <div
                className="w-3 h-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full animate-pulse"
                style={{ animationDelay: "0.5s" }}
              ></div>
              <span className="text-sm font-semibold text-slate-700 dark:text-gray-300">
                5+ лет опыта
              </span>
            </div>
            <div className="w-px h-6 bg-gray-300 dark:bg-gray-600"></div>
            <div className="flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-cyan-600 dark:text-cyan-400" />
              <span className="text-sm font-semibold text-slate-700 dark:text-gray-300">
                Постоянное обучение
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
