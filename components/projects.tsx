export function Projects() {
  const projects = [
    {
      title: "HomePropest Control",
      description:
        "Comprehensive pest control management platform with customer portal, scheduler, and admin dashboard.",
      technologies: ["React", "Node.js", "MySQL", "Webhooks"],
      links: [
        { name: "Customer Panel", url: "https://pestdetect.homopropestcontrol.ca/" },
        { name: "Scheduler", url: "https://pestdetect.homopropestcontrol.ca/scheduler" },
        { name: "Admin Portal", url: "https://pestdetect.homopropestcontrol.ca/admin" },
      ],
    },
    {
      title: "RESO Australia",
      description:
        "Real estate platform featuring agent ranking system, property listing aggregation, and buyer/agent interfaces with 500+ daily listings.",
      technologies: ["React", "Node.js", "PostgreSQL", "XML Integration"],
      links: [
        { name: "Agent Login", url: "https://app.reso.com.au/agent/sales" },
        { name: "Buyer Login", url: "https://app.reso.com.au/buyer/sales" },
      ],
    },
    {
      title: "Cambium Endeavors",
      description:
        "Document management platform built with reusable React components, replacing enterprise software with a custom solution delivered in 3 months.",
      technologies: ["React", "Material UI", "Node.js", "MongoDB"],
      links: [{ name: "View Site", url: "https://www.cambiumendeavors.com/" }],
    },
  ]

  return (
    <section id="projects" className="px-4 py-16 bg-background md:ml-64 md:px-8 md:py-20">
      <div className="max-w-4xl mx-auto">
        <h3 className="text-3xl font-bold text-foreground mb-12">Featured Projects</h3>
        <div className="space-y-12">
          {projects.map((project, index) => (
            <div key={index} className="border-l-4 border-primary pl-8 pb-8">
              <h4 className="text-2xl font-bold text-foreground mb-3">{project.title}</h4>
              <p className="text-foreground mb-4 leading-relaxed">{project.description}</p>
              <div className="flex gap-2 flex-wrap mb-4">
                {project.technologies.map((tech, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 bg-card rounded-full text-xs text-primary border border-primary/30 font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex gap-3 flex-wrap">
                {project.links.map((link, i) => (
                  <a
                    key={i}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:text-primary/80 transition-colors text-sm font-medium underline underline-offset-2"
                  >
                    {link.name} →
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
