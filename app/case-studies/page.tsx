import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import Link from "next/link"
import { Card } from "@/components/ui/card"

export const metadata = {
  title: "Case Studies | Muhammad Hamza Jamshed - Full Stack Developer",
  description:
    "Detailed case studies of successful projects including HomePropest Control, RESO Australia, and Cambium Endeavors.",
}

export default function CaseStudiesPage() {
  const caseStudies = [
    {
      id: "homepropest-control",
      title: "HomePropest Control",
      category: "Pest Control Management Platform",
      summary:
        "Built a comprehensive pest control management system with customer portal, scheduler, and admin dashboard.",
      image: "🏘️",
      metrics: [
        { label: "Daily Active Users", value: "500+" },
        { label: "Uptime", value: "99.8%" },
        { label: "Load Time", value: "<2s" },
      ],
      technologies: ["React", "Node.js", "MySQL", "Webhooks"],
    },
    {
      id: "reso-australia",
      title: "RESO Australia",
      category: "Real Estate Platform",
      summary:
        "Developed a sophisticated real estate platform with agent ranking system, property listing aggregation, and dual user interfaces.",
      image: "🏢",
      metrics: [
        { label: "Daily Listings", value: "500+" },
        { label: "Agents", value: "1000+" },
        { label: "Performance", value: "95/100" },
      ],
      technologies: ["React", "Node.js", "PostgreSQL", "XML Integration"],
    },
    {
      id: "cambium-endeavors",
      title: "Cambium Endeavors",
      category: "Document Management",
      summary:
        "Replaced legacy enterprise software with a modern, scalable document management platform using reusable React components.",
      image: "📄",
      metrics: [
        { label: "Development Time", value: "3 months" },
        { label: "Component Reuse", value: "85%" },
        { label: "User Satisfaction", value: "4.8/5" },
      ],
      technologies: ["React", "Material UI", "Node.js", "MongoDB"],
    },
  ]

  return (
    <main className="w-full">
      <Navigation />
      <section className="px-4 py-16 bg-background md:ml-64 md:px-8 md:py-20">
        <div className="max-w-4xl mx-auto">
          <div className="mb-16">
            <h1 className="text-4xl font-bold text-foreground mb-4">Case Studies</h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Detailed breakdowns of successful projects demonstrating expertise in full-stack development, cloud
              architecture, and solving complex business problems.
            </p>
          </div>

          <div className="space-y-8">
            {caseStudies.map((study) => (
              <Link key={study.id} href={`/case-studies/${study.id}`}>
                <Card className="overflow-hidden hover:border-primary hover:shadow-lg transition-all cursor-pointer">
                  <div className="p-8">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <div className="text-4xl mb-2">{study.image}</div>
                        <h3 className="text-2xl font-bold text-foreground mb-1">{study.title}</h3>
                        <p className="text-sm text-primary font-medium">{study.category}</p>
                      </div>
                    </div>

                    <p className="text-muted-foreground mb-6 leading-relaxed">{study.summary}</p>

                    <div className="grid grid-cols-3 gap-4 mb-6 py-6 border-y border-border">
                      {study.metrics.map((metric, i) => (
                        <div key={i}>
                          <p className="text-2xl font-bold text-primary mb-1">{metric.value}</p>
                          <p className="text-xs text-muted-foreground">{metric.label}</p>
                        </div>
                      ))}
                    </div>

                    <div className="flex gap-2 flex-wrap">
                      {study.technologies.map((tech, i) => (
                        <span
                          key={i}
                          className="px-3 py-1 bg-card rounded-full text-xs text-primary border border-primary/30 font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <div className="mt-6 text-primary font-medium text-sm">Read full case study →</div>
                  </div>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </main>
  )
}
