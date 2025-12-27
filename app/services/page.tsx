import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import Link from "next/link"
import { Card } from "@/components/ui/card"

export const metadata = {
  title: "Services | Muhammad Hamza Jamshed - Full Stack Developer",
  description:
    "Professional services including full-stack development, cloud architecture, performance optimization, and B2B SaaS solutions.",
}

export default function ServicesPage() {
  const services = [
    {
      slug: "full-stack-development",
      title: "Full-Stack Development",
      subtitle: "End-to-end web application development",
      description:
        "Custom web applications built with modern technologies including React, Node.js, and cloud infrastructure.",
      icon: "🚀",
    },
    {
      slug: "cloud-architecture",
      title: "Cloud Architecture & Infrastructure",
      subtitle: "Scalable serverless solutions",
      description: "AWS Lambda, microservices, and serverless architecture design for high-performance applications.",
      icon: "☁️",
    },
    {
      slug: "performance-optimization",
      title: "Performance Optimization",
      subtitle: "Speed and reliability",
      description:
        "Database optimization, API performance tuning, and Lighthouse score improvements for production systems.",
      icon: "⚡",
    },
    {
      slug: "saas-solutions",
      title: "B2B SaaS Development",
      subtitle: "Enterprise-grade platforms",
      description: "Multi-tenant SaaS platforms, agent ranking systems, and complex business logic implementation.",
      icon: "📊",
    },
  ]

  return (
    <main className="w-full">
      <Navigation />
      <section className="ml-64 px-8 py-20 bg-background">
        <div className="max-w-4xl mx-auto">
          <div className="mb-16">
            <h1 className="text-4xl font-bold text-foreground mb-4">Services</h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Comprehensive full-stack development and cloud architecture services designed to help enterprises and
              startups scale their digital products.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service) => (
              <Link key={service.slug} href={`/services/${service.slug}`}>
                <Card className="h-full p-8 hover:border-primary hover:bg-card/50 transition-all cursor-pointer">
                  <div className="text-4xl mb-4">{service.icon}</div>
                  <h3 className="text-xl font-bold text-foreground mb-2">{service.title}</h3>
                  <p className="text-sm text-primary font-medium mb-3">{service.subtitle}</p>
                  <p className="text-muted-foreground leading-relaxed">{service.description}</p>
                  <div className="mt-4 text-primary font-medium text-sm">Learn more →</div>
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
