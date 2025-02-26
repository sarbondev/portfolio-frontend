import Hero from "../modules/Hero";
import About from "../modules/About";
import Experience from "../modules/Experience";
import Skills from "../modules/Skills";
import Services from "../modules/Services";
import Education from "../modules/Education";
import Contact from "../modules/Contact";
import FloatingNav from "../modules/floating-nav";

export default function Home() {
  return (
    <main className="bg-gray-50 dark:bg-gray-900 min-h-screen">
      <FloatingNav />
      <Hero />
      <About />
      <Experience />
      <Skills />
      <Services />
      <Education />
      <Contact />
    </main>
  );
}
