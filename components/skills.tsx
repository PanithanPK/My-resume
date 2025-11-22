"use client"

export default function Skills() {
  const skillCategories = [
    {
      title: "Backend Development",
      skills: [
        "Go (Golang)", "Python", "REST API Design", "API Gateway", 
        "Authentication & Authorization"
      ],
      proficiency: "Experienced",
    },
    {
      title: "Frontend Development",
      skills: [
        "HTML5", "CSS3", "JavaScript", "TypeScript", "React", "Next.js", "Tailwind CSS"
      ],
      proficiency: "Beginner",
    },
    {
      title: "DevOps & Cloud",
      skills: [
        "Docker", "Docker Swarm",
        "CI/CD Pipelines", "GitHub Actions", "Jenkins", "GitLab CI", "Nginx"
      ],
      proficiency: "Experienced",
    },
    {
      title: "Database & Caching",
      skills: [
        "MySQL", "MongoDB", "Redis",
        "Database Design"
      ],
      proficiency: "Experienced",
    },
    {
      title: "AI & Machine Learning",
      skills: [
        "Python", "TensorFlow", "PyTorch",
        "Real-time Processing", "Jetson Nano"
      ],
      proficiency: "Beginner",
    },
    {
      title: "Tools & Platforms",
      skills: [
        "Git", "GitHub", "GitLab", "MinIO", "Swagger/OpenAPI",
        "Postman", "DrawDB"
      ],
      proficiency: "Beginner",
    },
    {
      title: "System Design",
      skills: ["Scalability", "Load Balancing", "Security", "Logging", "Monitoring", "Cluster Management"],
      proficiency: "Beginner",
    },
  ]

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-card/50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-balance">Skills & Expertise</h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div key={index} className="bg-background rounded-lg p-6 border border-border">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold">{category.title}</h3>
                <span className="text-xs font-bold text-primary bg-primary/10 px-2 py-1 rounded">
                  {category.proficiency}
                </span>
              </div>
              <ul className="space-y-2">
                {category.skills.map((skill, idx) => (
                  <li key={idx} className="text-muted-foreground flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-primary rounded-full"></span>
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
