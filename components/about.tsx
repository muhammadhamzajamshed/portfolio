"use client"

import { useState } from "react"
import { ExperienceEducation } from "@/components/experience-education"

function Chevron({ open }: { open: boolean }) {
  return (
    <svg
      className={`w-4 h-4 transition-transform ${open ? "rotate-180" : "rotate-0"}`}
      viewBox="0 0 20 20"
      fill="currentColor"
      aria-hidden="true"
    >
      <path
        fillRule="evenodd"
        d="M5.23 7.21a.75.75 0 0 1 1.06.02L10 10.94l3.71-3.71a.75.75 0 1 1 1.06 1.06l-4.24 4.24a.75.75 0 0 1-1.06 0L5.21 8.29a.75.75 0 0 1 .02-1.08Z"
        clipRule="evenodd"
      />
    </svg>
  )
}

export function About() {
  const [showDetails, setShowDetails] = useState(false)

  return (
    <>
      <section id="about" className="px-4 py-16 bg-background md:ml-64 md:px-8 md:py-20">
        <div className="max-w-4xl mx-auto">
          <h3 className="text-3xl font-bold text-foreground mb-8">About Me</h3>
          <div className="space-y-6 text-muted-foreground leading-relaxed">
            <p>
              I'm a Senior Full Stack Developer with 5+ years of experience building high-performance web applications.
              My expertise spans both frontend and backend technologies, with a strong focus on scalability, API design,
              and cloud architecture.
            </p>
            <p>
              Currently at xiQ Inc, I optimize B2B platforms and resolve production issues with 99% uptime. I've led
              teams in developing agent ranking systems, automating workflows, and integrating third-party services at
              scale.
            </p>
            <p>
              My specializations include React.js, Node.js, serverless architecture (AWS Lambda), and microservices.
              I'm passionate about writing clean, maintainable code and collaborating with cross-functional teams to
              deliver solutions that drive measurable business impact.
            </p>

            <div className="pt-2">
              <button
                type="button"
                onClick={() => setShowDetails((v) => !v)}
                className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors text-sm font-medium underline underline-offset-4"
                aria-expanded={showDetails}
                aria-controls="experience"
              >
                {showDetails ? "Hide details" : "View more details"}
                <Chevron open={showDetails} />
              </button>
            </div>
          </div>
        </div>
      </section>

      {showDetails ? <ExperienceEducation /> : null}
    </>
  )
}
