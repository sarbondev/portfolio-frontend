"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  Mail,
  MapPin,
  Phone,
  Send,
  Loader2,
  Sparkles,
  MessageSquare,
  CheckCircle2,
} from "lucide-react";

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (formData.name.length < 2) {
      newErrors.name = "Имя должно содержать минимум 2 символа";
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Пожалуйста, введите действительный email";
    }
    if (formData.subject.length < 5) {
      newErrors.subject = "Тема должна содержать минимум 5 символов";
    }
    if (formData.message.length < 10) {
      newErrors.message = "Сообщение должно содержать минимум 10 символов";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
    if (errors[e.target.name]) {
      setErrors({
        ...errors,
        [e.target.name]: "",
      });
    }
  };

  const handleSubmit = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    try {
      await new Promise((resolve) => setTimeout(resolve, 1500));
      setSubmitSuccess(true);
      setFormData({ name: "", email: "", subject: "", message: "" });
      setTimeout(() => setSubmitSuccess(false), 5000);
    } catch (error) {
      console.error("Error submitting form:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "suhrobrahmatullayev973132@gmail.com",
      href: "mailto:suhrobrahmatullayev973132@gmail.com",
      color: "from-blue-500 to-cyan-500",
      bgColor: "bg-blue-500/10 dark:bg-blue-500/20",
    },
    {
      icon: Phone,
      label: "Телефон",
      value: "+998 90 002 14 62",
      href: "tel:+998900021462",
      color: "from-green-500 to-emerald-500",
      bgColor: "bg-green-500/10 dark:bg-green-500/20",
    },
    {
      icon: MapPin,
      label: "Локация",
      value: "Узбекистан, Наманган",
      href: null,
      color: "from-purple-500 to-pink-500",
      bgColor: "bg-purple-500/10 dark:bg-purple-500/20",
    },
  ];

  return (
    <section
      id="contact"
      className="py-24 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 dark:from-slate-950 dark:via-blue-950 dark:to-slate-950 transition-colors duration-500 overflow-hidden relative"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-20 w-96 h-96 bg-blue-400/10 dark:bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div
          className="absolute bottom-20 left-10 w-80 h-80 bg-purple-400/10 dark:bg-purple-500/10 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "1s" }}
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
            <MessageSquare className="w-4 h-4 text-blue-600 dark:text-blue-400" />
            <span className="text-sm font-medium text-blue-700 dark:text-blue-300">
              Связаться
            </span>
          </motion.div>

          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 dark:from-blue-400 dark:via-cyan-400 dark:to-purple-400">
            Давайте работать вместе
          </h2>

          <p className="text-lg text-slate-600 dark:text-gray-400 max-w-2xl mx-auto">
            Есть проект или идея? Свяжитесь со мной, и давайте создадим что-то
            удивительное
          </p>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Contact Info Cards */}
          <motion.div
            className="lg:w-1/3 space-y-6"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {contactInfo.map((info, index) => {
              const IconComponent = info.icon;
              const content = (
                <motion.div
                  className="group relative bg-white/80 dark:bg-white/5 backdrop-blur-sm p-6 rounded-3xl border border-gray-200 dark:border-white/10 shadow-lg hover:shadow-2xl dark:shadow-none transition-all duration-300 overflow-hidden"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + index * 0.1 }}
                  whileHover={{ scale: 1.02, y: -5 }}
                >
                  {/* Gradient overlay */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${info.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}
                  ></div>

                  <div className="relative flex items-start gap-4">
                    <div
                      className={`${info.bgColor} p-3 rounded-2xl group-hover:scale-110 transition-transform duration-300`}
                    >
                      <IconComponent
                        className={`w-6 h-6 text-blue-600 dark:text-blue-400`}
                      />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-sm font-semibold text-slate-600 dark:text-gray-400 mb-1">
                        {info.label}
                      </h3>
                      <p className="text-slate-800 dark:text-white font-medium break-all">
                        {info.value}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );

              return info.href ? (
                <a key={index} href={info.href} className="block">
                  {content}
                </a>
              ) : (
                <div key={index}>{content}</div>
              );
            })}

            {/* Additional Info Card */}
            <motion.div
              className="bg-gradient-to-br from-blue-600 to-purple-600 p-6 rounded-3xl text-white shadow-xl"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
            >
              <Sparkles className="w-8 h-8 mb-4" />
              <h3 className="text-lg font-bold mb-2">Готов к сотрудничеству</h3>
              <p className="text-sm text-white/90">
                Открыт для новых проектов, фриланса и постоянной работы. Давайте
                создадим что-то великолепное вместе!
              </p>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            className="lg:w-2/3"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="bg-white/80 dark:bg-white/5 backdrop-blur-sm p-8 rounded-3xl border border-gray-200 dark:border-white/10 shadow-xl dark:shadow-none">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-slate-700 dark:text-gray-300 mb-2">
                    Имя
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 rounded-2xl border ${
                      errors.name
                        ? "border-red-500 dark:border-red-500"
                        : "border-gray-300 dark:border-white/10"
                    } bg-white dark:bg-white/5 text-slate-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 transition-all duration-300`}
                    placeholder="Ваше имя"
                  />
                  {errors.name && (
                    <motion.p
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="mt-2 text-sm text-red-500 dark:text-red-400"
                    >
                      {errors.name}
                    </motion.p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-semibold text-slate-700 dark:text-gray-300 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 rounded-2xl border ${
                      errors.email
                        ? "border-red-500 dark:border-red-500"
                        : "border-gray-300 dark:border-white/10"
                    } bg-white dark:bg-white/5 text-slate-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 transition-all duration-300`}
                    placeholder="your@email.com"
                  />
                  {errors.email && (
                    <motion.p
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="mt-2 text-sm text-red-500 dark:text-red-400"
                    >
                      {errors.email}
                    </motion.p>
                  )}
                </div>
              </div>

              <div className="mt-6">
                <label className="block text-sm font-semibold text-slate-700 dark:text-gray-300 mb-2">
                  Тема
                </label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 rounded-2xl border ${
                    errors.subject
                      ? "border-red-500 dark:border-red-500"
                      : "border-gray-300 dark:border-white/10"
                  } bg-white dark:bg-white/5 text-slate-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 transition-all duration-300`}
                  placeholder="О чем вы хотите поговорить?"
                />
                {errors.subject && (
                  <motion.p
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mt-2 text-sm text-red-500 dark:text-red-400"
                  >
                    {errors.subject}
                  </motion.p>
                )}
              </div>

              <div className="mt-6">
                <label className="block text-sm font-semibold text-slate-700 dark:text-gray-300 mb-2">
                  Сообщение
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  className={`w-full px-4 py-3 rounded-2xl border ${
                    errors.message
                      ? "border-red-500 dark:border-red-500"
                      : "border-gray-300 dark:border-white/10"
                  } bg-white dark:bg-white/5 text-slate-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 transition-all duration-300 resize-none`}
                  placeholder="Расскажите о вашем проекте..."
                ></textarea>
                {errors.message && (
                  <motion.p
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mt-2 text-sm text-red-500 dark:text-red-400"
                  >
                    {errors.message}
                  </motion.p>
                )}
              </div>

              <div className="mt-8">
                <motion.button
                  onClick={handleSubmit}
                  disabled={isSubmitting}
                  className={`w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-4 px-6 rounded-2xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2 ${
                    isSubmitting ? "opacity-75 cursor-not-allowed" : ""
                  }`}
                  whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                  whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin" />
                      <span>Отправка...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      <span>Отправить сообщение</span>
                    </>
                  )}
                </motion.button>
              </div>

              {submitSuccess && (
                <motion.div
                  initial={{ opacity: 0, y: 20, scale: 0.9 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  className="mt-6 p-4 bg-gradient-to-r from-green-500 to-emerald-500 text-white rounded-2xl flex items-center gap-3"
                >
                  <CheckCircle2 className="w-6 h-6" />
                  <div>
                    <p className="font-semibold">
                      Сообщение отправлено успешно!
                    </p>
                    <p className="text-sm text-white/90">
                      Я свяжусь с вами в ближайшее время.
                    </p>
                  </div>
                </motion.div>
              )}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Decorative floating elements */}
      <motion.div
        className="absolute bottom-20 right-40 w-32 h-32 border-2 border-dashed border-blue-300/30 dark:border-blue-500/30 rounded-full"
        animate={{ rotate: 360 }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      />
      <motion.div
        className="absolute top-40 left-20 w-24 h-24 border-2 border-dashed border-purple-300/30 dark:border-purple-500/30 rounded-full"
        animate={{ rotate: -360 }}
        transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
      />
    </section>
  );
}
