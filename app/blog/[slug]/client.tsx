"use client"

import Link from "next/link"

export default function BlogPostContent({ post }) {
  if (!post) {
    return null
  }

  return (
    <article className="px-4 py-16 bg-background md:ml-64 md:px-8 md:py-20">
      <div className="max-w-4xl mx-auto">
        {/* Back link */}
        <Link href="/blog" className="text-primary hover:text-primary/80 text-sm font-medium mb-8 inline-block">
          ← Back to blog
        </Link>

        {/* Header */}
        <div className="mb-12">
          <div className="flex items-center gap-2 mb-4">
            <span className="text-xs font-medium text-primary bg-primary/10 px-3 py-1 rounded-full">
              {post.category}
            </span>
            <span className="text-xs text-muted-foreground">{post.readTime}</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4 leading-tight">{post.title}</h1>
          <p className="text-lg text-muted-foreground mb-6">{post.excerpt}</p>
          <div className="flex items-center gap-4 text-sm text-muted-foreground border-t border-border pt-6">
            <span>By {post.author}</span>
            <span>•</span>
            <span>{post.date}</span>
          </div>
        </div>

        {/* Content */}
        <div className="prose prose-invert max-w-none text-muted-foreground space-y-6">
          {post.content.split("\n\n").map((paragraph, i) => {
            if (paragraph.startsWith("##")) {
              const level = paragraph.match(/^#+/)[0].length
              const text = paragraph.replace(/^#+\s/, "")
              const headingClass =
                level === 2 ? "text-3xl" : level === 3 ? "text-2xl" : level === 4 ? "text-xl" : "text-lg"
              return (
                <div key={i} className={`${headingClass} font-bold text-foreground mt-12 mb-6`}>
                  {text}
                </div>
              )
            }

            if (paragraph.startsWith("```")) {
              const match = paragraph.match(/```(\w+)?\n([\s\S]*?)```/)
              if (match) {
                return (
                  <pre key={i} className="bg-card p-4 rounded-lg overflow-x-auto border border-border">
                    <code className="text-sm text-foreground font-mono">{match[2]}</code>
                  </pre>
                )
              }
            }

            if (paragraph.startsWith("-")) {
              const items = paragraph.split("\n").filter((l) => l.startsWith("-"))
              return (
                <ul key={i} className="space-y-3 ml-6 list-disc">
                  {items.map((item, j) => (
                    <li key={j}>{item.replace(/^-\s/, "")}</li>
                  ))}
                </ul>
              )
            }

            return (
              <p key={i} className="leading-relaxed">
                {paragraph}
              </p>
            )
          })}
        </div>

        {/* CTA */}
        <div className="mt-16 pt-12 border-t border-border">
          <h3 className="text-2xl font-bold text-foreground mb-4">Ready to implement these strategies?</h3>
          <p className="text-muted-foreground mb-6">
            Let's work together to optimize your application for performance and scale.
          </p>
          <Link
            href="/#contact"
            className="inline-block px-8 py-3 bg-primary text-primary-foreground rounded-lg hover:opacity-90 transition-opacity font-medium"
          >
            Get In Touch
          </Link>
        </div>
      </div>
    </article>
  )
}
