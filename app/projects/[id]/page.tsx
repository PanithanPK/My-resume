"use client"
import Link from "next/link"
import { projectsData } from "@/lib/projects-data"
import { ArrowLeft, Github, ExternalLink } from "lucide-react"
import Image from "next/image"

export default function ProjectDetail({ params }: { params: { id: string } }) {
  const project = projectsData.find((p) => p.id === params.id)

  if (!project) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Project Not Found</h1>
          <Link href="/#projects" className="text-primary hover:underline">
            Back to Projects
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="border-b border-border bg-card/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <Link href="/#projects" className="inline-flex items-center gap-2 text-primary hover:gap-3 transition-all">
            <ArrowLeft size={20} />
            Back to Projects
          </Link>
        </div>
      </div>

      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-12">
          <div className="text-sm font-semibold text-primary mb-3 uppercase tracking-wide">{project.category}</div>
          <h1 className="text-5xl font-bold mb-6 text-balance">{project.title}</h1>

          <div className="relative w-full h-96 rounded-lg overflow-hidden border border-border mb-8">
            <Image
              src={project.image || "/placeholder.svg"}
              alt={project.title}
              fill
              className="object-cover"
              priority
            />
          </div>

          <p className="text-xl text-muted-foreground mb-6 leading-relaxed">{project.description}</p>
          <p className="text-lg text-foreground/80 leading-relaxed">{project.longDescription}</p>
        </div>

        <div className="flex gap-4 mb-12">
          <a
            href={project.links.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors font-semibold"
          >
            <Github size={20} />
            View on GitHub
          </a>
          <a
            href={project.links.demo}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 border border-primary text-primary rounded-lg hover:bg-primary/10 transition-colors font-semibold"
          >
            <ExternalLink size={20} />
            Open Project
          </a>
        </div>

        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Key Achievements</h2>
          <ul className="grid md:grid-cols-2 gap-4">
            {project.highlights.map((highlight, index) => (
              <li
                key={index}
                className="flex items-start gap-3 p-4 bg-card border border-border rounded-lg hover:border-primary/50 transition-colors"
              >
                <span className="text-primary mt-1 flex-shrink-0">✓</span>
                <span className="text-foreground/90">{highlight}</span>
              </li>
            ))}
          </ul>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Key Learnings & Experience</h2>
          <div className="space-y-3">
            {project.keyLearnings.map((learning, index) => (
              <div
                key={index}
                className="flex items-start gap-3 p-4 bg-secondary/30 border border-border rounded-lg hover:border-primary/30 transition-colors"
              >
                <span className="text-primary mt-1 flex-shrink-0 font-bold">{index + 1}.</span>
                <p className="text-foreground/80">{learning}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Technologies Used</h2>
          <div className="flex flex-wrap gap-3">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="px-4 py-2 bg-primary/10 text-primary rounded-full font-semibold border border-primary/20 hover:border-primary/50 transition-colors"
              >
                {tech}
              </span>
            ))}
          </div>
        </section>

        <section className="bg-primary/10 border border-primary/20 rounded-lg p-8 text-center">
          <h3 className="text-2xl font-bold mb-4">Interested in learning more?</h3>
          <p className="text-muted-foreground mb-6">
            Check out the GitHub repository to see the complete source code and documentation.
          </p>
          <a
            href={project.links.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors font-semibold"
          >
            <Github size={20} />
            Visit GitHub Repository
          </a>
        </section>
      </main>
    </div>
  )
}
