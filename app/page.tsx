"use client"

import { useState } from "react"
import Header from "@/components/header"
import Hero from "@/components/hero"
import About from "@/components/about"
import Projects from "@/components/projects"
import Skills from "@/components/skills"
import Contact from "@/components/contact"
import Footer from "@/components/footer"

export default function Home() {
  const [activeSection, setActiveSection] = useState("about")

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header activeSection={activeSection} setActiveSection={setActiveSection} />
      <main>
        <Hero setActiveSection={setActiveSection} />
        <section id="about" className="scroll-mt-16">
          <About />
        </section>
        <section id="projects" className="scroll-mt-16">
          <Projects />
        </section>
        <section id="skills" className="scroll-mt-16">
          <Skills />
        </section>
        <section id="contact" className="scroll-mt-16">
          <Contact />
        </section>
      </main>
      <Footer />
    </div>
  )
}
