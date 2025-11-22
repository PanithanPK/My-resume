"use client"
import { ExternalLink, Github, ArrowRight } from "lucide-react"
import Link from "next/link"

interface ProjectCardProps {
  project: {
    id: string
    title: string
    category: string
    description: string
    technologies: string[]
    links: {
      github: string
      demo: string
    }
  }
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div className="bg-card border border-border rounded-lg p-8 hover:border-primary/50 transition-all hover:shadow-lg group">
      <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-6 gap-4">
        <div className="flex-1">
          <div className="text-sm font-semibold text-primary mb-2 uppercase tracking-wide">{project.category}</div>
          <h3 className="text-3xl font-bold mb-2 group-hover:text-primary transition-colors">{project.title}</h3>
          <p className="text-muted-foreground text-lg">{project.description}</p>
        </div>
        <div className="flex gap-3 flex-shrink-0">
          <a
            href={project.links.github}
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-lg bg-secondary hover:bg-primary hover:text-primary-foreground transition-colors"
            aria-label="GitHub Repository"
          >
            <Github size={20} />
          </a>
          <a
            href={project.links.demo}
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-lg bg-secondary hover:bg-primary hover:text-primary-foreground transition-colors"
            aria-label="View Project"
          >
            <ExternalLink size={20} />
          </a>
        </div>
      </div>

      <div className="flex flex-wrap gap-2 mb-6">
        {project.technologies.map((tech) => (
          <span key={tech} className="text-xs bg-primary/10 text-primary px-3 py-1 rounded-full font-medium">
            {tech}
          </span>
        ))}
      </div>

      <Link
        href={`/projects/${project.id}`}
        className="inline-flex items-center gap-2 text-primary hover:gap-3 transition-all font-semibold group/link"
      >
        Learn More
        <ArrowRight size={18} className="group-hover/link:translate-x-1 transition-transform" />
      </Link>
    </div>
  )
}
