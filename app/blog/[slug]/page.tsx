import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { notFound } from "next/navigation"
import BlogPostContent from "./client"

const blogPosts = {
  "mastering-full-stack-development": {
    title: "Mastering Full-Stack Development: A Comprehensive Guide for Modern Applications",
    excerpt:
      "An ultimate guide to building production-ready web applications with React, Node.js, and cloud infrastructure.",
    date: "January 15, 2024",
    readTime: "18 min read",
    category: "Full-Stack Development",
    author: "Muhammad Hamza Jamshed",
    content: `## Introduction

Full-stack development has become the cornerstone of modern web application development. As a Senior Full Stack Developer with 5+ years of experience, I've led enterprise-scale applications.

## Part 1: Architecture Foundations

At its core, full-stack development involves three distinct layers: Presentation (Frontend), Application (Backend), and Data (Database).

## Part 2: Frontend Excellence

React's component model is powerful. Focus on separation of concerns and reusability.

## Part 3: Backend Architecture

RESTful APIs with proper HTTP verbs, status codes, and consistent response formats.

## Conclusion

Full-stack excellence comes from understanding architecture, fundamentals, and operations deeply.`,
  },
  "cloud-architecture-scalability": {
    title: "Scaling Your SaaS: Cloud Architecture Patterns for High-Performance Systems",
    excerpt: "Deep dive into serverless architecture, microservices, and AWS best practices.",
    date: "January 10, 2024",
    readTime: "20 min read",
    category: "Cloud Architecture",
    author: "Muhammad Hamza Jamshed",
    content: `## Introduction

Building scalable cloud architecture is about handling growth without complexity increases. I've scaled platforms to 99.8% uptime handling 500+ operations daily.

## Part 1: Serverless Architecture

AWS Lambda eliminates infrastructure management. You pay only for execution time with automatic scaling.

## Part 2: API Architecture

API Gateway routes HTTP requests. Use proper throttling, rate limiting, and request validation.

## Part 3: Data Layer Architecture

Choose PostgreSQL for relational data, MongoDB for flexible schemas, DynamoDB for high-throughput access.

## Conclusion

Cloud architecture excellence requires understanding trade-offs and measuring everything.`,
  },
  "web-performance-optimization": {
    title: "The Complete Guide to Web Performance Optimization: Achieving 95+ Lighthouse Scores",
    excerpt: "Comprehensive strategies for optimizing frontend and backend performance.",
    date: "January 5, 2024",
    readTime: "22 min read",
    category: "Performance",
    author: "Muhammad Hamza Jamshed",
    content: `## Introduction

Web performance impacts user experience directly. Every 100ms delay causes 1% user loss. I've achieved 95+ Lighthouse scores on multiple projects.

## Part 1: Measuring Performance

Core Web Vitals: LCP (< 2.5s), FID (< 100ms), CLS (< 0.1). Monitor everything with Web Vitals library.

## Part 2: Frontend Optimization

Image optimization with WebP, responsive images, lazy loading. Code splitting, minification, compression.

## Part 3: Backend Optimization

Database query optimization, caching strategies, connection pooling. CDN for global distribution.

## Conclusion

Performance optimization is continuous discipline. Start measuring, optimize based on data, monitor production.`,
  },
}

export async function generateMetadata({ params }) {
  const { slug } = params
  const post = blogPosts[slug]
  if (!post) return

  return {
    title: `${post.title} | Blog`,
    description: post.excerpt,
    openGraph: {
      type: "article",
      publishedTime: post.date,
      authors: [post.author],
    },
  }
}

export function generateStaticParams() {
  return Object.keys(blogPosts).map((slug) => ({
    slug,
  }))
}

export default async function BlogPostPage({ params }) {
  const { slug } = params
  const post = blogPosts[slug]

  if (!post) {
    notFound()
  }

  return (
    <main className="w-full">
      <Navigation />
      <BlogPostContent post={post} />
      <Footer />
    </main>
  )
}
