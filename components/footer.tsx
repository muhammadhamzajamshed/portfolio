export function Footer() {
  return (
    <footer className="ml-64 px-8 py-12 bg-card border-t border-border">
      <div className="max-w-4xl mx-auto flex justify-between items-center">
        <p className="text-muted-foreground text-sm">© 2025 Muhammad Hamza Jamshed. All rights reserved.</p>
        <div className="flex gap-6">
          <a
            href="https://github.com/hamzajamshed50"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition-colors text-sm"
          >
            GitHub
          </a>
          <a
            href="https://linkedin.com/in/muhammad-hamza-jamshed-bab574180"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition-colors text-sm"
          >
            LinkedIn
          </a>
          <a
            href="mailto:hamzajamshed50@gmail.com"
            className="text-muted-foreground hover:text-primary transition-colors text-sm"
          >
            Email
          </a>
        </div>
      </div>
    </footer>
  )
}
