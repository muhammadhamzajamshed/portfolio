import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { notFound } from "next/navigation"
import Link from "next/link"

const caseStudiesData = {
  "homepropest-control": {
    title: "HomePropest Control",
    subtitle: "Comprehensive Pest Control Management Platform",
    client: "HomePropest",
    duration: "6 months",
    teamSize: "3 developers",
    challenge: `HomePropest needed a modern platform to replace their legacy system. The challenge was building a system that could handle scheduling, customer communication, admin management, and webhook integrations for third-party services—all while maintaining high reliability for customer-facing operations.`,
    solution: `I architected and developed a three-tier application:

**Customer Panel** - Allows customers to:
- Book pest control appointments
- Track service history
- Receive notifications
- Manage account information

**Scheduler Portal** - Enables staff to:
- View and manage appointments
- Optimize route planning
- Track technician locations in real-time
- Update service status

**Admin Dashboard** - Provides management with:
- Business analytics and reporting
- Staff and customer management
- Service pricing and package configuration
- Integration management with third-party APIs

The backend was built with Node.js, using MySQL for data persistence and webhook integration for service coordination.`,
    results: [
      "500+ daily active users",
      "99.8% uptime in production",
      "Sub-2-second load times",
      "50% reduction in booking processing time",
      "3x increase in customer satisfaction scores",
    ],
    technologies: ["React", "Node.js", "MySQL", "Webhooks", "AWS", "Redis"],
    links: [
      { name: "Customer Panel", url: "https://pestdetect.homopropestcontrol.ca/" },
      { name: "Scheduler", url: "https://pestdetect.homopropestcontrol.ca/scheduler" },
      { name: "Admin Portal", url: "https://pestdetect.homopropestcontrol.ca/admin" },
    ],
    metrics: [
      { metric: "Daily Active Users", value: "500+" },
      { metric: "Uptime", value: "99.8%" },
      { metric: "Avg Load Time", value: "<2s" },
      { metric: "Processing Time Reduction", value: "50%" },
    ],
    learnings:
      "This project taught me the importance of designing systems for scalability from the ground up. Real-time updates via WebSockets and efficient webhook handling are critical for operational platforms. I also learned that user experience design for mobile is essential—most technicians access the system on the field.",
  },
  "reso-australia": {
    title: "RESO Australia",
    subtitle: "Advanced Real Estate Platform with Agent Ranking",
    client: "RESO Australia",
    duration: "8 months",
    teamSize: "4 developers",
    challenge: `RESO needed a platform to aggregate real estate listings, rank agents based on performance metrics, and provide interfaces for both agents and buyers. The complexity involved integrating multiple XML data feeds, calculating complex ranking algorithms, and handling 500+ listings daily with sub-second response times.`,
    solution: `I designed and built a sophisticated real estate platform with multiple components:

**Agent Portal** - Agents can:
- View their performance ranking
- Analyze listing statistics
- Access buyer inquiry management
- Track conversion metrics
- Export reports

**Buyer Portal** - Buyers can:
- Search properties with advanced filters
- Compare listings
- View agent ratings and reviews
- Save favorites and create alerts
- Contact agents directly

**Backend Architecture** - Built with:
- XML parser for daily listing data import
- Custom ranking algorithm based on sales volume, customer ratings, and response time
- PostgreSQL for relational data
- Redis for caching popular listings and rankings
- Message queue for async processing of rankings

The most complex component was the agent ranking system, which calculates scores based on multiple metrics updated in real-time.`,
    results: [
      "500+ daily listings processed",
      "1000+ registered agents",
      "95/100 Lighthouse performance score",
      "Sub-300ms API response times",
      "40% increase in buyer engagement",
      "Reduced listing processing time from 4 hours to 15 minutes",
    ],
    technologies: ["React", "Node.js", "PostgreSQL", "Redis", "XML", "AWS Lambda", "Message Queues"],
    links: [
      { name: "Agent Login", url: "https://app.reso.com.au/agent/sales" },
      { name: "Buyer Login", url: "https://app.reso.com.au/buyer/sales" },
    ],
    metrics: [
      { metric: "Daily Listings", value: "500+" },
      { metric: "Registered Agents", value: "1000+" },
      { metric: "Performance Score", value: "95/100" },
      { metric: "API Response Time", value: "<300ms" },
    ],
    learnings:
      "Building RESO taught me about the importance of optimizing data processing pipelines. Handling 500+ listings daily required careful database indexing and caching strategies. I also learned that ranking algorithms need to be transparent to users—agents want to understand why they rank where they do.",
  },
  "cambium-endeavors": {
    title: "Cambium Endeavors",
    subtitle: "Modern Document Management Platform",
    client: "Cambium Endeavors",
    duration: "3 months",
    teamSize: "2 developers",
    challenge: `Cambium was using expensive enterprise document management software with poor UX. They needed a custom replacement that could be built quickly, maintain compatibility with their existing workflows, and be more intuitive for their team.`,
    solution: `I built a document management platform from scratch using a component-driven approach:

**Document Management** - Features include:
- Hierarchical folder structure
- Drag-and-drop file upload
- Full-text search across documents
- Version history and rollback
- Access control and sharing

**Workflow Automation** - Enables:
- Document approval workflows
- Notification routing
- Custom metadata tagging
- Bulk operations

**UI/UX** - Leveraged:
- Material UI for consistent design
- Reusable React components (85% component reuse)
- Intuitive navigation patterns
- Mobile-responsive design

The key to rapid delivery was using reusable Material UI components and focusing on core functionality. This allowed delivery in 3 months instead of the typical 6-9 month enterprise software implementation.`,
    results: [
      "Delivered in 3 months (vs 6-9 months typical)",
      "85% component reuse achieved",
      "User satisfaction: 4.8/5",
      "60% reduction in software costs",
      "Increased team productivity by 40%",
      "100% feature parity with legacy system",
    ],
    technologies: ["React", "Material UI", "Node.js", "MongoDB", "Express"],
    links: [{ name: "Visit Site", url: "https://www.cambiumendeavors.com/" }],
    metrics: [
      { metric: "Delivery Time", value: "3 months" },
      { metric: "Component Reuse", value: "85%" },
      { metric: "User Satisfaction", value: "4.8/5" },
      { metric: "Cost Reduction", value: "60%" },
    ],
    learnings:
      "This project demonstrated the power of rapid, focused development. By constraining scope and leveraging existing component libraries, we delivered faster without sacrificing quality. I learned that sometimes 'good enough' delivered quickly beats 'perfect' delivered late.",
  },
}

export async function generateMetadata({ params }) {
  const study = caseStudiesData[params.id]
  if (!study) return

  return {
    title: `${study.title} - Case Study | Muhammad Hamza Jamshed`,
    description: study.subtitle,
  }
}

export function generateStaticParams() {
  return Object.keys(caseStudiesData).map((id) => ({
    id,
  }))
}

export default function CaseStudyPage({ params }) {
  const study = caseStudiesData[params.id]

  if (!study) {
    notFound()
  }

  return (
    <main className="w-full">
      <Navigation />
      <section className="px-4 py-16 bg-background md:ml-64 md:px-8 md:py-20">
        <div className="max-w-4xl mx-auto">
          {/* Back link */}
          <Link
            href="/case-studies"
            className="text-primary hover:text-primary/80 text-sm font-medium mb-8 inline-block"
          >
            ← Back to case studies
          </Link>

          {/* Header */}
          <div className="mb-12">
            <h1 className="text-4xl font-bold text-foreground mb-2">{study.title}</h1>
            <p className="text-lg text-muted-foreground mb-6">{study.subtitle}</p>

            <div className="grid grid-cols-4 gap-4 py-6 border-y border-border">
              <div>
                <p className="text-xs text-muted-foreground uppercase mb-1">Client</p>
                <p className="font-bold text-foreground">{study.client}</p>
              </div>
              <div>
                <p className="text-xs text-muted-foreground uppercase mb-1">Duration</p>
                <p className="font-bold text-foreground">{study.duration}</p>
              </div>
              <div>
                <p className="text-xs text-muted-foreground uppercase mb-1">Team Size</p>
                <p className="font-bold text-foreground">{study.teamSize}</p>
              </div>
              <div>
                <p className="text-xs text-muted-foreground uppercase mb-1">Status</p>
                <p className="font-bold text-primary">Completed</p>
              </div>
            </div>
          </div>

          {/* Metrics */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-foreground mb-6">Key Metrics</h2>
            <div className="grid grid-cols-2 gap-6">
              {study.metrics.map((item, i) => (
                <div key={i}>
                  <p className="text-3xl font-bold text-primary mb-1">{item.value}</p>
                  <p className="text-muted-foreground">{item.metric}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Challenge */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-foreground mb-4">Challenge</h2>
            <p className="text-muted-foreground leading-relaxed whitespace-pre-wrap">{study.challenge}</p>
          </div>

          {/* Solution */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-foreground mb-4">Solution</h2>
            <div className="text-muted-foreground leading-relaxed space-y-4">
              {study.solution.split("\n\n").map((paragraph, i) => {
                if (paragraph.includes("**")) {
                  return (
                    <div key={i}>
                      {paragraph.split("\n").map((line, j) => {
                        const parts = line.split(/\*\*(.*?)\*\*/g)
                        return (
                          <p key={j} className="mb-2">
                            {parts.map((part, k) => (k % 2 === 1 ? <strong key={k}>{part}</strong> : part))}
                          </p>
                        )
                      })}
                    </div>
                  )
                }
                return <p key={i}>{paragraph}</p>
              })}
            </div>
          </div>

          {/* Results */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-foreground mb-4">Results</h2>
            <ul className="space-y-3">
              {study.results.map((result, i) => (
                <li key={i} className="flex gap-3 text-muted-foreground">
                  <span className="text-primary mt-1">✓</span>
                  <span>{result}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Technologies */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-foreground mb-4">Technologies Used</h2>
            <div className="flex gap-2 flex-wrap">
              {study.technologies.map((tech, i) => (
                <span
                  key={i}
                  className="px-4 py-2 bg-card rounded-lg text-sm text-primary border border-primary/30 font-medium"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Key Learnings */}
          <div className="mb-12 p-6 bg-card rounded-lg border border-border">
            <h3 className="text-lg font-bold text-foreground mb-3">Key Learnings</h3>
            <p className="text-muted-foreground leading-relaxed">{study.learnings}</p>
          </div>

          {/* Links */}
          <div className="mb-12 py-6 border-t border-border">
            <h3 className="text-lg font-bold text-foreground mb-4">View Live Project</h3>
            <div className="flex gap-4 flex-wrap">
              {study.links.map((link, i) => (
                <a
                  key={i}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:opacity-90 transition-opacity font-medium"
                >
                  {link.name} →
                </a>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="mt-16 p-8 bg-card rounded-lg border border-border text-center">
            <h3 className="text-2xl font-bold text-foreground mb-3">Ready to Start Your Project?</h3>
            <p className="text-muted-foreground mb-6">
              Let's discuss how I can deliver similar results for your organization.
            </p>
            <Link
              href="/#contact"
              className="inline-block px-8 py-3 bg-primary text-primary-foreground rounded-lg hover:opacity-90 transition-opacity font-medium"
            >
              Get In Touch
            </Link>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  )
}
