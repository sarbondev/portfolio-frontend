"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"

const sections = [
  { id: "hero", label: "Home" },
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "skills", label: "Skills" },
  { id: "services", label: "Services" },
  { id: "education", label: "Education" },
  { id: "contact", label: "Contact" },
]

export default function FloatingNav() {
  const [activeSection, setActiveSection] = useState("hero")

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id)
          }
        })
      },
      { threshold: 0.5 },
    )

    sections.forEach(({ id }) => {
      const element = document.getElementById(id)
      if (element) observer.observe(element)
    })

    return () => observer.disconnect()
  }, [])

  return (
    <motion.div
      className="fixed right-4 top-1/2 transform -translate-y-1/2 z-50"
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 1 }}
    >
      <div className="flex flex-col gap-3">
        {sections.map(({ id, label }) => (
          <button
            key={id}
            onClick={() => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" })}
            className="group relative flex items-center"
            aria-label={`Scroll to ${label}`}
          >
            <span className="absolute right-8 px-2 py-1 rounded bg-gray-900 dark:bg-gray-100 text-white dark:text-gray-900 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              {label}
            </span>
            <div
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                activeSection === id
                  ? "bg-blue-600 dark:bg-blue-400 scale-125"
                  : "bg-gray-400 dark:bg-gray-600 hover:scale-110"
              }`}
            />
          </button>
        ))}
      </div>
    </motion.div>
  )
}

