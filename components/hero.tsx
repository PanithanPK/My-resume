"use client"
import { ArrowRight, Github, Linkedin, Mail } from "lucide-react"

export default function Hero({ setActiveSection }: any) {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 py-20 bg-gradient-to-br from-background via-background to-primary/5">
      <div className="max-w-4xl mx-auto text-center">
        <div className="mb-8">
          <div className="w-24 h-24 rounded-full bg-primary/10 border-2 border-primary mx-auto flex items-center justify-center mb-6">
            <div className="text-5xl font-bold text-primary">PK</div>
          </div>
        </div>

        <h1 className="text-5xl sm:text-7xl font-bold mb-6 text-balance">
          Panithan <span className="text-primary">Kunkaew</span>
        </h1>

        <p className="text-xl sm:text-2xl text-muted-foreground mb-8 text-balance">
          Full-Stack Developer & Backend Engineer & DevOps Specialist
        </p>

        <p className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto text-balance">
          Building scalable REST APIs with Go, mastering cloud infrastructure, and developing intelligent AI systems.
          Passionate about system design, DevOps automation, and creating impactful solutions.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <button
            onClick={() => {
              const element = document.getElementById("projects")
              element?.scrollIntoView({ behavior: "smooth" })
            }}
            className="px-8 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-colors flex items-center justify-center gap-2"
          >
            View Projects <ArrowRight size={20} />
          </button>
          <a
            href="#contact"
            className="px-8 py-3 border border-primary text-primary rounded-lg font-semibold hover:bg-primary/10 transition-colors"
          >
            Get in Touch
          </a>
        </div>

        <div className="flex justify-center gap-6">
          <a
            href="https://github.com/PanithanPK"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full bg-secondary hover:bg-primary hover:text-primary-foreground transition-colors"
            aria-label="GitHub"
          >
            <Github size={24} />
          </a>
          <a
            href="https://www.linkedin.com/in/panithan-kunkaew-8283502a3/"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full bg-secondary hover:bg-primary hover:text-primary-foreground transition-colors"
            aria-label="LinkedIn"
          >
            <Linkedin size={24} />
          </a>
          <a
            href="mailto:panithankunkaewpd@gmail.com"
            className="p-3 rounded-full bg-secondary hover:bg-primary hover:text-primary-foreground transition-colors"
            aria-label="Email"
          >
            <Mail size={24} />
          </a>
        </div>
      </div>
    </section>
  )
}
