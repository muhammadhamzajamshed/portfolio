"use client"

import { useState, useEffect } from "react"
import { usePathname } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import { Menu } from "lucide-react"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

export function Navigation() {
  const [activeSection, setActiveSection] = useState("about")
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    // Update active section based on current page
    if (pathname === "/") {
      setActiveSection("about")
    } else if (pathname.startsWith("/services")) {
      setActiveSection("services")
    } else if (pathname.startsWith("/case-studies")) {
      setActiveSection("case-studies")
    } else if (pathname.startsWith("/blog")) {
      setActiveSection("blog")
    }
  }, [pathname])

  const scrollToSection = (id: string) => {
    // Only scroll if on home page
    if (pathname === "/") {
      setActiveSection(id)
      const element = document.getElementById(id)
      if (element) {
        element.scrollIntoView({ behavior: "smooth" })
      }
    }
    // Close mobile menu after navigation
    setMobileMenuOpen(false)
  }

  const handleLinkClick = () => {
    setMobileMenuOpen(false)
  }

  const navItemClass = (isActive: boolean) =>
    `block text-sm tracking-wider transition-colors cursor-pointer ${
      isActive ? "text-primary border-l-2 border-primary pl-4" : "text-muted-foreground hover:text-foreground pl-4"
    }`

  const NavigationContent = () => (
    <>
      <div>
        <h1 className="text-2xl font-bold text-foreground mb-2">Muhammad Hamza</h1>
        <p className="text-sm text-muted-foreground mb-12">Senior Full Stack Developer</p>

        <div className="space-y-4">
          {pathname === "/" ? (
            <button
              onClick={() => scrollToSection("about")}
              className={navItemClass(activeSection === "about")}
            >
              ABOUT
            </button>
          ) : (
            <Link
              href="/#about"
              onClick={() => {
                setActiveSection("about")
                handleLinkClick()
              }}
              className={navItemClass(activeSection === "about")}
            >
              ABOUT
            </Link>
          )}
          {pathname === "/" ? (
            <button
              onClick={() => scrollToSection("projects")}
              className={navItemClass(activeSection === "projects")}
            >
              PROJECTS
            </button>
          ) : (
            <Link
              href="/#projects"
              onClick={() => {
                setActiveSection("projects")
                handleLinkClick()
              }}
              className={navItemClass(activeSection === "projects")}
            >
              PROJECTS
            </Link>
          )}
          <Link
            href="/services"
            onClick={() => {
              setActiveSection("services")
              handleLinkClick()
            }}
            className={navItemClass(activeSection === "services")}
          >
            SERVICES
          </Link>
          <Link
            href="/case-studies"
            onClick={() => {
              setActiveSection("case-studies")
              handleLinkClick()
            }}
            className={navItemClass(activeSection === "case-studies")}
          >
            CASE STUDIES
          </Link>
          <Link
            href="/blog"
            onClick={() => {
              setActiveSection("blog")
              handleLinkClick()
            }}
            className={navItemClass(activeSection === "blog")}
          >
            BLOG
          </Link>
          {pathname === "/" ? (
            <button
              onClick={() => scrollToSection("contact")}
              className={navItemClass(activeSection === "contact")}
            >
              CONTACT
            </button>
          ) : (
            <Link
              href="/#contact"
              onClick={() => {
                setActiveSection("contact")
                handleLinkClick()
              }}
              className={navItemClass(activeSection === "contact")}
            >
              CONTACT
            </Link>
          )}
        </div>
      </div>

      <div className="flex flex-col gap-6">
        <div className="flex justify-center">
          <div className="relative w-20 h-20 rounded-full overflow-hidden border border-border bg-muted ring-2 ring-primary/20 shadow-sm">
            <Image
              src="/profile.jpeg"
              alt="Profile photo"
              fill
              sizes="80px"
              className="object-cover"
              priority
            />
          </div>
        </div>

        <Link
          href="/cv.pdf"
          download
          onClick={handleLinkClick}
          className="w-full px-4 py-2 bg-primary text-primary-foreground rounded-lg font-medium text-center text-sm hover:opacity-90 transition-opacity"
        >
          Download CV
        </Link>

        <div className="flex gap-4">
          <a
            href="https://github.com/hamzajamshed50"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition-colors"
          >
            <span className="sr-only">GitHub</span>
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
            </svg>
          </a>
          <a
            href="https://linkedin.com/in/muhammad-hamza-jamshed-bab574180"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition-colors"
          >
            <span className="sr-only">LinkedIn</span>
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z" />
            </svg>
          </a>
          <a
            href="mailto:hamzajamshed50@gmail.com"
            className="text-muted-foreground hover:text-primary transition-colors"
          >
            <span className="sr-only">Email</span>
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
            </svg>
          </a>
        </div>
      </div>
    </>
  )

  return (
    <>
      {/* Mobile: Hamburger button and menu */}
      <div className="md:hidden fixed top-0 left-0 right-0 z-50 bg-card border-b border-border px-4 py-4">
        <div className="flex items-center justify-between">
          <h1 className="text-xl font-bold text-foreground">Muhammad Hamza</h1>
          <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
            <SheetTrigger asChild>
              <button
                className="p-2 rounded-md hover:bg-muted transition-colors"
                aria-label="Toggle menu"
              >
                <Menu className="h-6 w-6 text-foreground" />
              </button>
            </SheetTrigger>
            <SheetContent side="left" className="w-80 p-0">
              <div className="flex flex-col justify-between h-full px-8 py-12">
                <NavigationContent />
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>

      {/* Desktop: Fixed sidebar */}
      <nav className="hidden md:flex fixed left-0 top-0 h-screen w-64 bg-card border-r border-border px-8 py-12 flex-col justify-between z-50">
        <NavigationContent />
      </nav>
    </>
  )
}
