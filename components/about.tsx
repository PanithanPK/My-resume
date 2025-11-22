"use client"

export default function About() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-card/50">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-balance">About Me</h2>

        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-6 text-muted-foreground leading-relaxed">
            <p>
              I am a recent Computer Science graduate with a strong academic foundation in backend development, DevOps practices, and system design. 
              Through my coursework and personal projects, I've developed a solid understanding of building scalable applications 
              and implementing modern infrastructure solutions.
            </p>
            <p>
              During my studies, I focused on backend system architecture, database design, and cloud-native development. 
              I've completed projects involving AI/ML integration and IoT solutions, which have given me hands-on experience 
              in bridging software and hardware components to create innovative applications.
            </p>
            <p>
              As an enthusiastic and quick learner, I'm eager to apply my academic knowledge to real-world challenges. 
              I'm particularly interested in opportunities that will allow me to grow my skills in backend development, 
              cloud infrastructure, and emerging technologies while contributing to meaningful projects.
            </p>
          </div>

          <div className="space-y-8">
            <div className="bg-background rounded-lg p-6 border border-border">
              <h3 className="font-semibold text-primary mb-2">Expertise Areas</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>✓ Backend Development</li>
                <li>✓ Cloud Technologies</li>
                <li>✓ Database Design</li>
                <li>✓ DevOps Fundamentals</li>
                <li>✓ Containerization</li>
                <li>✓ AI/ML Concepts</li>
                <li>✓ IoT Development</li>
              </ul>
            </div>

            <div className="bg-background rounded-lg p-6 border border-border">
              <h3 className="font-semibold text-primary mb-2">Tools & Technologies</h3>
              <div className="flex flex-wrap gap-2">
                {["Javascript","Go", "Docker", "MySQL", "Nginx", "GitHub Actions", "MinIO", "Python", "YOLO","AI/ML", "Node.js","Express.js", "Next.js"].map((tech) => (
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
