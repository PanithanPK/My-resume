"use client"

import type React from "react"
import { useState } from "react"
import { Mail, Linkedin, Github } from "lucide-react"

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically send the form data to a server
    console.log("Form submitted:", formData)
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 3000)
    setFormData({ name: "", email: "", message: "" })
  }

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-balance">Get in Touch</h2>

        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-8">
            <p className="text-muted-foreground text-lg leading-relaxed">
              I'm always interested in hearing about new projects and opportunities. Feel free to reach out through any
              of these channels, and I'll get back to you as soon as possible.
            </p>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-primary/10 text-primary mt-1">
                  <Mail size={24} />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Email</h4>
                  <p className="text-muted-foreground">
                    <a href="mailto:panithankunkaewpd@gmail.com" className="hover:text-primary transition-colors">
                      panithankunkaewpd@gmail.com
                    </a>
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-primary/10 text-primary mt-1">
                  <Github size={24} />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">GitHub</h4>
                  <p className="text-muted-foreground">
                    <a
                      href="https://github.com/PanithanPK"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-primary transition-colors"
                    >
                      github.com/PanithanPK
                    </a>
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-primary/10 text-primary mt-1">
                  <Linkedin size={24} />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">LinkedIn</h4>
                  <p className="text-muted-foreground">
                    <a
                      href="https://www.linkedin.com/in/panithan-kunkaew-8283502a3"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-primary transition-colors"
                    >
                      linkedin.com/in/panithan-kunkaew-8283502a3
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="bg-card border border-border rounded-lg p-8 space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-semibold mb-2">
                Your Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 rounded-lg bg-background border border-border focus:border-primary focus:outline-none transition-colors"
                placeholder="John Doe"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-semibold mb-2">
                Your Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 rounded-lg bg-background border border-border focus:border-primary focus:outline-none transition-colors"
                placeholder="john@example.com"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-semibold mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={4}
                className="w-full px-4 py-2 rounded-lg bg-background border border-border focus:border-primary focus:outline-none transition-colors resize-none"
                placeholder="Tell me about your project..."
              />
            </div>

            <button
              type="submit"
              className="w-full px-6 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-colors"
            >
              {submitted ? "Message Sent! ✓" : "Send Message"}
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}
