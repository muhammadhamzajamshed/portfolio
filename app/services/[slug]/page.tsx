import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { notFound } from "next/navigation"
import Link from "next/link"

const serviceContent = {
  "full-stack-development": {
    title: "Full-Stack Development Services",
    description: "Build custom web applications from the ground up with modern technologies and best practices.",
    content: `
      <h2>Expert Full-Stack Development</h2>
      <p>With over 5 years of experience in full-stack development, I deliver high-quality web applications that combine elegant frontend design with robust backend architecture.</p>
      
      <h3>Frontend Development</h3>
      <p>I specialize in React.js with expertise in:</p>
      <ul>
        <li>Component-based architecture and reusable components</li>
        <li>State management with Redux and Context API</li>
        <li>Performance optimization and code splitting</li>
        <li>Responsive design and accessibility (WCAG compliance)</li>
        <li>Modern tooling: Webpack, Vite, and Next.js</li>
      </ul>
      
      <h3>Backend Development</h3>
      <p>Node.js and serverless backend solutions including:</p>
      <ul>
        <li>RESTful API design and development</li>
        <li>Database design (PostgreSQL, MySQL, MongoDB)</li>
        <li>AWS Lambda and serverless functions</li>
        <li>Authentication and security implementation</li>
        <li>Real-time features with WebSockets</li>
      </ul>
      
      <h3>Why Choose Me?</h3>
      <ul>
        <li>Proven track record with 3 enterprise-level projects</li>
        <li>99% uptime in production environments</li>
        <li>Clean, maintainable code with comprehensive testing</li>
        <li>Agile development and rapid iteration</li>
        <li>Clear communication and project transparency</li>
      </ul>
      
      <h3>Technologies</h3>
      <p>React, Next.js, Node.js, TypeScript, PostgreSQL, MySQL, MongoDB, AWS, Docker, Git</p>
      
      <h3>Project Examples</h3>
      <p>See HomePropest Control and RESO Australia case studies for real-world applications of full-stack development expertise.</p>
    `,
    keywords:
      "full-stack development, React developer, Node.js developer, web application development, custom web development",
  },
  "cloud-architecture": {
    title: "Cloud Architecture & Infrastructure Services",
    description: "Design and implement scalable cloud solutions using AWS, serverless architecture, and microservices.",
    content: `
      <h2>Professional Cloud Architecture Design</h2>
      <p>I design and implement cloud infrastructure that scales with your business, from startups to enterprise-level platforms.</p>
      
      <h3>AWS Expertise</h3>
      <ul>
        <li>Lambda functions for serverless computing</li>
        <li>API Gateway for RESTful and WebSocket APIs</li>
        <li>RDS for managed databases</li>
        <li>S3 for file storage and CDN</li>
        <li>CloudFront for content distribution</li>
        <li>IAM for security and access control</li>
      </ul>
      
      <h3>Microservices Architecture</h3>
      <ul>
        <li>Service-oriented architecture design</li>
        <li>API gateway patterns and implementation</li>
        <li>Inter-service communication and orchestration</li>
        <li>Distributed system best practices</li>
        <li>Container orchestration with Docker</li>
      </ul>
      
      <h3>Performance & Scalability</h3>
      <ul>
        <li>Auto-scaling configuration</li>
        <li>Load balancing strategies</li>
        <li>Database optimization and caching</li>
        <li>CDN implementation</li>
        <li>Monitoring and alerting systems</li>
      </ul>
      
      <h3>Security Best Practices</h3>
      <ul>
        <li>VPC configuration and network isolation</li>
        <li>Encryption in transit and at rest</li>
        <li>API security and rate limiting</li>
        <li>Compliance standards implementation</li>
      </ul>
    `,
    keywords:
      "cloud architecture, AWS services, serverless architecture, microservices, cloud infrastructure, scalable systems",
  },
  "performance-optimization": {
    title: "Performance Optimization Services",
    description:
      "Improve your application's speed, reliability, and user experience with expert performance optimization.",
    content: `
      <h2>Performance Optimization & Speed Enhancement</h2>
      <p>Every millisecond matters. I optimize applications to achieve Lighthouse scores above 90 and deliver exceptional user experiences.</p>
      
      <h3>Frontend Performance</h3>
      <ul>
        <li>Code splitting and lazy loading</li>
        <li>Image optimization and modern formats</li>
        <li>CSS and JavaScript minification</li>
        <li>Bundle size analysis and reduction</li>
        <li>Core Web Vitals optimization</li>
        <li>React performance profiling</li>
      </ul>
      
      <h3>Backend Performance</h3>
      <ul>
        <li>Database query optimization</li>
        <li>Indexing strategies</li>
        <li>Caching implementation (Redis, CDN)</li>
        <li>API response time optimization</li>
        <li>Server-side rendering optimization</li>
      </ul>
      
      <h3>Infrastructure Optimization</h3>
      <ul>
        <li>Server configuration tuning</li>
        <li>CDN optimization</li>
        <li>DNS optimization</li>
        <li>Load balancing strategies</li>
        <li>Database connection pooling</li>
      </ul>
      
      <h3>Monitoring & Continuous Improvement</h3>
      <ul>
        <li>Performance metrics tracking</li>
        <li>Monitoring and alerting setup</li>
        <li>User experience metrics</li>
        <li>Ongoing optimization recommendations</li>
      </ul>
      
      <h3>Results</h3>
      <p>Average improvements: 60% faster load times, 95% Lighthouse score, 40% reduction in bounce rates.</p>
    `,
    keywords:
      "performance optimization, web speed optimization, Lighthouse optimization, Core Web Vitals, application performance",
  },
  "saas-solutions": {
    title: "B2B SaaS Development Services",
    description: "Build scalable, multi-tenant SaaS platforms with complex business logic and enterprise features.",
    content: `
      <h2>Enterprise-Grade B2B SaaS Solutions</h2>
      <p>I specialize in building sophisticated SaaS platforms that solve complex business problems at scale.</p>
      
      <h3>SaaS Architecture</h3>
      <ul>
        <li>Multi-tenant application design</li>
        <li>Tenant isolation and data security</li>
        <li>Subscription and billing integration</li>
        <li>Role-based access control (RBAC)</li>
        <li>API for third-party integrations</li>
      </ul>
      
      <h3>Complex Features</h3>
      <ul>
        <li>Agent ranking systems and analytics</li>
        <li>Workflow automation and scheduling</li>
        <li>Real-time collaboration features</li>
        <li>Data aggregation and reporting</li>
        <li>Webhook integration with external services</li>
      </ul>
      
      <h3>Business Logic Implementation</h3>
      <ul>
        <li>Custom algorithms and calculations</li>
        <li>Complex data transformations</li>
        <li>Business rule engine implementation</li>
        <li>Approval workflow systems</li>
      </ul>
      
      <h3>Integration Services</h3>
      <ul>
        <li>Third-party API integration</li>
        <li>Data synchronization</li>
        <li>Payment gateway integration</li>
        <li>Authentication provider setup (OAuth)</li>
      </ul>
      
      <h3>Case Studies</h3>
      <p>RESO Australia (500+ daily listings, agent ranking system) and HomePropest Control demonstrate my expertise in building production-grade SaaS platforms.</p>
    `,
    keywords:
      "SaaS development, B2B SaaS, multi-tenant applications, business logic implementation, enterprise software",
  },
}

export async function generateMetadata({ params }) {
  const { slug } = params
  const service = serviceContent[slug]
  if (!service) return

  return {
    title: `${service.title} | Muhammad Hamza Jamshed`,
    description: service.description,
  }
}

export function generateStaticParams() {
  return Object.keys(serviceContent).map((slug) => ({
    slug,
  }))
}

export default async function ServicePage({ params }) {
  const { slug } = params
  const service = serviceContent[slug]

  if (!service) {
    notFound()
  }

  return (
    <main className="w-full">
      <Navigation />
      <section className="ml-64 px-8 py-20 bg-background">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-foreground mb-4">{service.title}</h1>
          <p className="text-lg text-muted-foreground mb-12 leading-relaxed">{service.description}</p>

          <div className="prose prose-invert max-w-none space-y-6">
            <div
              className="text-muted-foreground leading-relaxed"
              dangerouslySetInnerHTML={{
                __html: service.content
                  .split("<h2>")
                  .map((section, i) => {
                    if (i === 0) return section
                    return (
                      "<h2 class='text-2xl font-bold text-foreground mt-8 mb-4'>" +
                      section
                        .replace(/<h3>/g, "<h3 class='text-xl font-bold text-foreground mt-6 mb-3'>")
                        .replace(/<\/(h3|h2)>/g, "</h3>")
                        .replace(/<p>/g, "<p class='mb-4 text-muted-foreground'>")
                        .replace(/<ul>/g, "<ul class='list-disc list-inside space-y-2 mb-4'>")
                        .replace(/<li>/g, "<li class='text-muted-foreground'>")
                    )
                  })
                  .join("<h2 class='text-2xl font-bold text-foreground mt-8 mb-4'>"),
              }}
            />
          </div>

          <div className="mt-16 pt-8 border-t border-border">
            <h3 className="text-xl font-bold text-foreground mb-4">Ready to Get Started?</h3>
            <p className="text-muted-foreground mb-6">
              Let's discuss how I can help with your {service.title.toLowerCase()}.
            </p>
            <Link
              href="/#contact"
              className="inline-block px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:opacity-90 transition-opacity"
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
