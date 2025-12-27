"use client"

import Image from "next/image"
import { useMemo, useState } from "react"

type ExperienceItem = {
  company: string
  logoSrc: string
  logoAlt: string
  title: string
  employmentType?: string
  start: string
  end: string
  duration?: string
  location?: string
  workMode?: string
  highlights?: string[]
}

type EducationItem = {
  school: string
  logoSrc: string
  logoAlt: string
  degree: string
  field?: string
  start: string
  end: string
  location?: string
  highlights?: string[]
}

function Logo({ src, alt }: { src: string; alt: string }) {
  return (
    <div className="w-12 h-12 rounded-xl bg-muted border border-border flex items-center justify-center overflow-hidden">
      <Image src={src} alt={alt} width={48} height={48} className="object-contain w-full h-full" />
    </div>
  )
}

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

export function ExperienceEducation() {
  // Curated to mirror your LinkedIn data (can be edited anytime)
  const experience: ExperienceItem[] = [
    {
      company: "xiQ, Inc.",
      logoSrc: "/xiq logo.png",
      logoAlt: "xiQ logo",
      title: "Senior Full Stack Developer",
      employmentType: "Full-time",
      start: "Jun 2024",
      end: "Present",
      duration: "1 yr 7 mos",
      workMode: "Hybrid",
      highlights: [
        "Build and optimize B2B SaaS features across frontend and backend.",
        "Improve system reliability by resolving production issues and performance bottlenecks.",
        "Deliver scalable integrations and automation that drive measurable product impact.",
      ],
    },
    {
      company: "Powersoft19",
      logoSrc: "/powersoft19_logo.jpeg",
      logoAlt: "Powersoft19 logo",
      title: "Software Developer",
      employmentType: "Full-time",
      start: "Jan 2021",
      end: "May 2024",
      duration: "3 yrs 5 mos",
      location: "Lahore, Punjab, Pakistan",
      highlights: [
        "Developed application features end-to-end: requirement analysis, implementation, testing, and delivery.",
        "Collaborated with cross-functional teams to ship enhancements with quality and performance.",
        "Contributed to system improvements and reusable components to speed up delivery timelines.",
      ],
    },
  ]

  const education: EducationItem[] = [
    {
      school: "University of Engineering and Technology, Lahore",
      logoSrc: "/uet logo.png",
      logoAlt: "UET Lahore logo",
      degree: "Master's degree",
      field: "Computer Science",
      start: "Sep 2021",
      end: "Sep 2023",
    },
    {
      school: "COMSATS University Islamabad",
      logoSrc: "/comstas logo.jpeg",
      logoAlt: "COMSATS University logo",
      degree: "Bachelor of Science in Computer Science (BSCS)",
      field: "Computer Science",
      start: "2016",
      end: "2020",
    },
  ]

  const [openExperience, setOpenExperience] = useState<Record<string, boolean>>({})
  const [openEducation, setOpenEducation] = useState<Record<string, boolean>>({})

  const expKey = useMemo(
    () => (item: ExperienceItem) => `${item.company}__${item.title}__${item.start}`,
    []
  )
  const eduKey = useMemo(
    () => (item: EducationItem) => `${item.school}__${item.degree}__${item.start}`,
    []
  )

  return (
    <section id="experience" className="ml-64 px-8 py-20 bg-background">
      <div className="max-w-4xl mx-auto">
        <h3 className="text-3xl font-bold text-foreground mb-12">Experience</h3>

        <div className="space-y-4">
          {experience.map((item) => {
            const key = expKey(item)
            const open = !!openExperience[key]
            return (
              <div key={key} className="bg-card border border-border rounded-2xl overflow-hidden">
                {/* Summary row */}
                <div className="p-6">
                  <div className="flex gap-4">
                    <Logo src={item.logoSrc} alt={item.logoAlt} />

                    <div className="min-w-0 flex-1">
                      <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2">
                        <div className="min-w-0">
                          <h4 className="text-xl font-bold text-foreground leading-snug">{item.title}</h4>
                          <p className="text-muted-foreground">
                            <span className="font-medium text-foreground">{item.company}</span>
                            {item.employmentType ? ` · ${item.employmentType}` : ""}
                          </p>
                        </div>

                        <div className="text-sm text-muted-foreground md:text-right shrink-0">
                          <div>
                            {item.start} – {item.end}
                            {item.duration ? ` · ${item.duration}` : ""}
                          </div>
                          {item.workMode ? <div>{item.workMode}</div> : null}
                          {item.location ? <div>{item.location}</div> : null}
                        </div>
                      </div>

                      {/* More info */}
                      {item.highlights?.length ? (
                        <button
                          type="button"
                          onClick={() => setOpenExperience((prev) => ({ ...prev, [key]: !prev[key] }))}
                          className="mt-4 inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors text-sm font-medium"
                          aria-expanded={open}
                        >
                          {open ? "Hide" : "More info"}
                          <Chevron open={open} />
                        </button>
                      ) : null}
                    </div>
                  </div>
                </div>

                {/* Expanded */}
                {open && item.highlights?.length ? (
                  <div className="px-6 pb-6">
                    <div className="border-t border-border pt-4">
                      <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                        {item.highlights.map((h) => (
                          <li key={h}>{h}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ) : null}
              </div>
            )
          })}
        </div>

        <div className="mt-16">
          <h3 className="text-3xl font-bold text-foreground mb-12">Education</h3>

          <div className="space-y-4">
            {education.map((item) => {
              const key = eduKey(item)
              const open = !!openEducation[key]
              const hasMore = !!item.highlights?.length

              return (
                <div key={key} className="bg-card border border-border rounded-2xl overflow-hidden">
                  <div className="p-6">
                    <div className="flex gap-4">
                      <Logo src={item.logoSrc} alt={item.logoAlt} />

                      <div className="min-w-0 flex-1">
                        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2">
                          <div className="min-w-0">
                            <h4 className="text-xl font-bold text-foreground leading-snug">{item.school}</h4>
                            <p className="text-muted-foreground">
                              {item.degree}
                              {item.field ? `, ${item.field}` : ""}
                            </p>
                          </div>

                          <div className="text-sm text-muted-foreground md:text-right shrink-0">
                            <div>
                              {item.start} – {item.end}
                            </div>
                            {item.location ? <div>{item.location}</div> : null}
                          </div>
                        </div>

                        {hasMore ? (
                          <button
                            type="button"
                            onClick={() => setOpenEducation((prev) => ({ ...prev, [key]: !prev[key] }))}
                            className="mt-4 inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors text-sm font-medium"
                            aria-expanded={open}
                          >
                            {open ? "Hide" : "More info"}
                            <Chevron open={open} />
                          </button>
                        ) : null}
                      </div>
                    </div>
                  </div>

                  {open && item.highlights?.length ? (
                    <div className="px-6 pb-6">
                      <div className="border-t border-border pt-4">
                        <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                          {item.highlights.map((h) => (
                            <li key={h}>{h}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  ) : null}
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
