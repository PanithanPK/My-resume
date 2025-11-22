"use client"

export default function Skills() {
  const skillCategories = [
    {
      title: "Backend Development",
      skills: ["Go (Golang)", "REST API Design", "Server Architecture", "Database Design"],
      proficiency: "Expert",
    },
    {
      title: "DevOps & Infrastructure",
      skills: ["Docker", "Docker Swarm", "Nginx", "CI/CD Pipelines", "GitHub Actions", "Server Configuration"],
      proficiency: "Expert",
    },
    {
      title: "Database Management",
      skills: ["MySQL", "Database Design", "Query Optimization", "Data Modeling"],
      proficiency: "Advanced",
    },
    {
      title: "AI & Machine Learning",
      skills: ["Computer Vision", "Python", "Real-time Processing", "Edge Computing", "Jetson Nano"],
      proficiency: "Advanced",
    },
    {
      title: "Tools & Platforms",
      skills: ["Git", "GitHub", "MinIO", "Telegram API", "API Documentation (Swagger)", "DrawDB"],
      proficiency: "Advanced",
    },
    {
      title: "System Design",
      skills: ["Scalability", "Load Balancing", "Security", "Logging", "Monitoring", "Cluster Management"],
      proficiency: "Advanced",
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
