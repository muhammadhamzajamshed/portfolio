export function Skills() {
  const skillCategories = [
    {
      category: "Frontend",
      skills: ["React.js", "Redux", "GraphQL", "Material UI", "Ant Design", "Tailwind CSS"],
    },
    {
      category: "Backend",
      skills: ["Node.js", "Express", "NestJS", "Python", "Serverless Functions"],
    },
    {
      category: "Databases",
      skills: ["PostgreSQL", "MySQL", "MongoDB"],
    },
    {
      category: "Cloud & DevOps",
      skills: ["AWS Lambda", "AWS SES", "AWS SNS", "CI/CD", "Docker"],
    },
    {
      category: "Methodologies",
      skills: ["Agile Development", "RESTful API Design", "Microservices Architecture", "Performance Optimization"],
    },
  ]

  return (
    <section id="skills" className="px-4 py-16 bg-background md:ml-64 md:px-8 md:py-20">
      <div className="max-w-4xl mx-auto">
        <h3 className="text-3xl font-bold text-foreground mb-12">Technical Skills</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((cat, index) => (
            <div key={index}>
              <h4 className="text-lg font-semibold text-foreground mb-4">{cat.category}</h4>
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill, i) => (
                  <span
                    key={i}
                    className="px-4 py-2 bg-card text-foreground rounded-lg text-sm border border-border hover:border-primary transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
