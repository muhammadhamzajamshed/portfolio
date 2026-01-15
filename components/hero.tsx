import Link from "next/link"

export function Hero() {
  return (
    <section className="px-4 pt-20 pb-16 md:ml-64 md:min-h-screen md:flex md:items-center md:justify-center md:px-8 md:py-20">
      <div className="max-w-4xl w-full">
        <h2 className="text-5xl md:text-6xl font-bold text-foreground mb-6 leading-tight">Senior Full Stack Developer</h2>
        <p className="text-xl text-muted-foreground mb-8 leading-relaxed max-w-2xl">
          I build scalable web applications using JavaScript, React, Node.js, Python, and cloud technologies. With 5+
          years of experience, I specialize in optimizing performance, integrating APIs, and architecting microservices
          for B2B SaaS platforms.
        </p>
        <div className="flex gap-4 flex-wrap">
          <a
            href="#projects"
            className="px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:opacity-90 transition-opacity"
          >
            View My Work
          </a>
          <a
            href="#contact"
            className="px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:opacity-90 transition-opacity"
          >
            Get in Touch
          </a>
          <Link
            href="/cv.pdf"
            download
            className="px-6 py-3 bg-card text-foreground border border-border rounded-lg font-medium hover:bg-muted transition-colors"
          >
            Download CV
          </Link>
        </div>
      </div>
    </section>
  )
}
