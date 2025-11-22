"use client";

import { useState, useEffect } from "react";
import { useTheme } from "next-themes";

export default function Header() {
  const [mounted, setMounted] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [activeSection, setActiveSection] = useState("home");
  const { theme } = useTheme();

  useEffect(() => setMounted(true), []);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setIsVisible(currentScrollY < lastScrollY || currentScrollY < 100);
      setLastScrollY(currentScrollY);
    };

    const handleIntersection = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);

    const observer = new IntersectionObserver(handleIntersection, {
      threshold: 0.3,
    });

    document.querySelectorAll("section[id]").forEach((section) => {
      observer.observe(section);
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      observer.disconnect();
    };
  }, [lastScrollY]);

  if (!mounted) return null;

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80; // Height of the header
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <header
      className={`
        fixed w-full z-50 transition-all duration-300
        ${isVisible ? "top-0" : "-top-20"}
        ${theme === "dark" ? "bg-gray-900/95" : "bg-white/95"}
        backdrop-blur-sm shadow-md
      `}
    >
      <nav className="container mx-auto px-6 py-4">
        <ul className="flex justify-center space-x-6">
          {[
            ["about", "About"],
            ["experience", "Experience"],
            ["skills", "Skills"],
            ["contact", "Contact"],
          ].map(([id, label]) => (
            <li key={id}>
              <button
                onClick={() => scrollToSection(id)}
                className={`
                  transition-colors duration-300
                  ${
                    activeSection === id
                      ? "text-blue-600 dark:text-blue-400"
                      : theme === "dark"
                      ? "text-gray-300 hover:text-white"
                      : "text-gray-800 hover:text-blue-600"
                  }
                `}
              >
                {label}
              </button>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
