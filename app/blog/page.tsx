import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import Link from "next/link"
import { Card } from "@/components/ui/card"

export const metadata = {
  title: "Blog | Muhammad Hamza Jamshed - Full Stack Development Insights",
  description:
    "In-depth articles on full-stack development, cloud architecture, performance optimization, and B2B SaaS best practices.",
}

export default function BlogPage() {
  const articles = [
    {
      slug: "mastering-full-stack-development",
      title: "Mastering Full-Stack Development: A Comprehensive Guide for Modern Applications",
      excerpt:
        "An ultimate guide to building production-ready web applications with React, Node.js, and cloud infrastructure. Learn architecture patterns, best practices, and real-world optimization techniques.",
      category: "Full-Stack Development",
      readTime: "18 min read",
      date: "2024-01-15",
      image: "🚀",
    },
    {
      slug: "cloud-architecture-scalability",
      title: "Scaling Your SaaS: Cloud Architecture Patterns for High-Performance Systems",
      excerpt:
        "Deep dive into serverless architecture, microservices, and AWS best practices. Learn how to design systems that scale horizontally and maintain 99.9% uptime.",
      category: "Cloud Architecture",
      readTime: "20 min read",
      date: "2024-01-10",
      image: "☁️",
    },
    {
      slug: "web-performance-optimization",
      title: "The Complete Guide to Web Performance Optimization: Achieving 95+ Lighthouse Scores",
      excerpt:
        "Comprehensive strategies for optimizing frontend and backend performance. Cover Core Web Vitals, database optimization, caching strategies, and monitoring.",
      category: "Performance",
      readTime: "22 min read",
      date: "2024-01-05",
      image: "⚡",
    },
  ]

  return (
    <main className="w-full">
      <Navigation />
      <section className="px-4 py-16 bg-background md:ml-64 md:px-8 md:py-20">
        <div className="max-w-4xl mx-auto">
          <div className="mb-16">
            <h1 className="text-4xl font-bold text-foreground mb-4">Technical Blog</h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              In-depth articles on full-stack development, cloud architecture, and performance optimization. Learn from
              real-world experience and best practices in modern web development.
            </p>
          </div>

          <div className="space-y-8">
            {articles.map((article) => (
              <Link key={article.slug} href={`/blog/${article.slug}`}>
                <Card className="overflow-hidden hover:border-primary hover:shadow-lg transition-all cursor-pointer">
                  <div className="p-8">
                    <div className="flex items-start gap-6">
                      <div className="text-4xl">{article.image}</div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <span className="text-xs font-medium text-primary bg-primary/10 px-3 py-1 rounded-full">
                            {article.category}
                          </span>
                          <span className="text-xs text-muted-foreground">{article.readTime}</span>
                        </div>
                        <h3 className="text-2xl font-bold text-foreground mb-3 hover:text-primary transition-colors">
                          {article.title}
                        </h3>
                        <p className="text-muted-foreground leading-relaxed mb-4">{article.excerpt}</p>
                        <div className="flex items-center justify-between">
                          <span className="text-xs text-muted-foreground">{article.date}</span>
                          <span className="text-primary font-medium text-sm">Read article →</span>
                        </div>
                      </div>
                    </div>
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
