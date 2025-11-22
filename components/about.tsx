"use client"

export default function About() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-card/50">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-balance">About Me</h2>

        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-6 text-muted-foreground leading-relaxed">
            <p>
              I'm a passionate Backend Engineer and DevOps specialist with expertise in designing and deploying
              enterprise-scale systems. I have a strong foundation in building robust REST APIs using Go, implementing
              comprehensive infrastructure solutions, and developing AI systems that solve real-world problems.
            </p>
            <p>
              My career has been defined by a commitment to learning cutting-edge technologies and applying them to
              create meaningful impact. Whether it's architecting microservices, automating CI/CD pipelines, or
              implementing machine learning solutions, I bring a systematic and thoughtful approach to every project.
            </p>
            <p>
              Beyond code, I'm driven by continuous improvement and sharing knowledge. I document my work meticulously
              and contribute to open-source communities to help others learn from my experience.
            </p>
          </div>

          <div className="space-y-8">
            <div className="bg-background rounded-lg p-6 border border-border">
              <h3 className="font-semibold text-primary mb-2">Expertise Areas</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>✓ Go (Golang) Development</li>
                <li>✓ REST API Design & Implementation</li>
                <li>✓ Database Design (MySQL)</li>
                <li>✓ DevOps & Infrastructure</li>
                <li>✓ Docker & Container Orchestration</li>
                <li>✓ CI/CD Pipelines</li>
                <li>✓ AI & Computer Vision</li>
              </ul>
            </div>

            <div className="bg-background rounded-lg p-6 border border-border">
              <h3 className="font-semibold text-primary mb-2">Tools & Technologies</h3>
              <div className="flex flex-wrap gap-2">
                {["Go", "Docker", "MySQL", "Nginx", "GitHub Actions", "MinIO", "Python", "AI/ML"].map((tech) => (
                  <span key={tech} className="text-xs bg-primary/10 text-primary px-3 py-1 rounded-full">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
