"use client"
import Image from "next/image"
import { ArrowRight, Github, Linkedin, Mail } from "lucide-react"

export default function Hero({ setActiveSection }: any) {
  return (
    <section 
      className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 py-20 relative overflow-hidden"
      style={{
        backgroundImage: 'url(/coding-background.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-background/95 via-background/60 to-primary/10 pointer-events-none"></div>
      
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <div className="mb-8">
          <div className="w-24 h-24 rounded-full bg-primary/10 border-2 border-primary mx-auto flex items-center justify-center mb-6 overflow-hidden">
            <Image 
              src="/photo.jpg" 
              alt="Panithan Kunkaew" 
              width={96}
              height={96}
              className="object-cover w-full h-full"
            />
          </div>
        </div>

        <h1 className="text-5xl sm:text-7xl font-bold mb-6 text-balance text-black" style={{ textShadow: '0 2px 8px rgba(255,255,255,0.8)' }}>
          Panithan <span className="text-primary">Kunkaew</span>
        </h1>

        <p className="text-xl sm:text-2xl text-black mb-8 text-balance font-semibold" style={{ textShadow: '0 1px 6px rgba(255,255,255,0.7)' }}>
          Full-Stack Developer & Backend Engineer & DevOps Specialist
        </p>

        <p className="text-lg text-black mb-12 max-w-2xl mx-auto text-balance font-medium" style={{ textShadow: '0 1px 4px rgba(255,255,255,0.6)' }}>
          Crafting robust backend solutions, architecting cloud-native applications, and implementing intelligent systems.
          Passionate about clean code, system architecture, and building solutions that make a difference.
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
