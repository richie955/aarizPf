"use client"

import { useInView } from "@/hooks/use-in-view"
import { Calendar, MapPin, Briefcase, Award, Users, Zap } from "lucide-react"
import { useState } from "react"

const experiences = [
  {
    title: "Lead UI/UX Designer",
    company: "Tathva '24",
    location: "NIT Calicut, India",
    period: "Sep - Oct 2024",
    type: "Leadership Role",
    icon: Award,
    color: "bg-primary",
    highlights: [
      { icon: Users, text: "Led design team of 5 members" },
      { icon: Zap, text: "12-day accelerated delivery" },
      { icon: Briefcase, text: "Cross-functional collaboration" },
    ],
    description:
      "Spearheaded complete UI/UX design for the techno-management festival website, developing 'Timeless Gaming' brand identity and UI kit.",
  },
  {
    title: "ELV Engineer",
    company: "Falcon Eye Technology",
    location: "Abu Dhabi, UAE",
    period: "May - Jul 2025",
    type: "Internship",
    icon: Briefcase,
    color: "bg-accent",
    highlights: [
      { icon: MapPin, text: "Zayed National Museum project" },
      { icon: Zap, text: "200+ security assets managed" },
      { icon: Users, text: "Stakeholder coordination" },
    ],
    description:
      "Contributed to project delivery for landmark museum, managing inspections and reports for critical security systems.",
  },
]

export function Experience() {
  const { ref, isInView } = useInView({ threshold: 0.1 })
  const [activeIndex, setActiveIndex] = useState<number | null>(null)

  return (
    <section id="experience" className="py-16 md:py-24 px-4 md:px-6 lg:px-8" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <div className={`space-y-8 md:space-y-12 ${isInView ? "animate-fade-up" : "opacity-0"}`}>
          <div className="space-y-1.5 md:space-y-2">
            <p className="text-primary font-mono text-xs md:text-sm">03. Experience</p>
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-foreground">Where I've Worked</h2>
          </div>

          <div className="grid gap-4 md:gap-6">
            {experiences.map((exp, index) => {
              const Icon = exp.icon
              const isActive = activeIndex === index

              return (
                <div
                  key={exp.title + exp.company}
                  className={`group relative bg-card border-2 border-border transition-all duration-300 cursor-pointer
                    ${isActive ? "shadow-[8px_8px_0px_0px_var(--primary)]" : "shadow-[4px_4px_0px_0px_var(--border)] hover:shadow-[6px_6px_0px_0px_var(--primary)]"}
                    ${isInView ? "animate-fade-up" : "opacity-0"}`}
                  style={{ animationDelay: `${index * 0.15}s` }}
                  onClick={() => setActiveIndex(isActive ? null : index)}
                >
                  {/* Header */}
                  <div className="p-4 md:p-6">
                    <div className="flex flex-col sm:flex-row sm:items-start gap-4">
                      {/* Icon */}
                      <div className={`${exp.color} p-3 border-2 border-border shrink-0 w-fit`}>
                        <Icon size={20} className="text-foreground" />
                      </div>

                      {/* Info */}
                      <div className="flex-1 space-y-2">
                        <div className="flex flex-wrap items-center gap-2">
                          <span
                            className={`${exp.color} px-2 py-0.5 text-xs font-semibold uppercase tracking-wide border-2 border-border`}
                          >
                            {exp.type}
                          </span>
                        </div>

                        <div>
                          <h3 className="text-base md:text-lg font-bold text-foreground">{exp.title}</h3>
                          <p className="text-primary font-medium text-sm md:text-base">{exp.company}</p>
                        </div>

                        <div className="flex flex-wrap gap-3 text-xs md:text-sm text-muted-foreground">
                          <div className="flex items-center gap-1">
                            <Calendar size={12} />
                            <span>{exp.period}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <MapPin size={12} />
                            <span>{exp.location}</span>
                          </div>
                        </div>

                        {/* Highlight chips - always visible */}
                        <div className="flex flex-wrap gap-2 pt-2">
                          {exp.highlights.map((highlight, i) => {
                            const HIcon = highlight.icon
                            return (
                              <div
                                key={i}
                                className="flex items-center gap-1.5 px-2 py-1 bg-secondary/50 border border-border text-xs"
                              >
                                <HIcon size={12} className="text-primary" />
                                <span>{highlight.text}</span>
                              </div>
                            )
                          })}
                        </div>
                      </div>

                      {/* Expand indicator */}
                      <div
                        className={`text-muted-foreground transition-transform duration-300 ${isActive ? "rotate-180" : ""}`}
                      >
                        <svg
                          width="20"
                          height="20"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                        >
                          <path d="M6 9l6 6 6-6" />
                        </svg>
                      </div>
                    </div>
                  </div>

                  {/* Expandable content */}
                  <div
                    className={`overflow-hidden transition-all duration-300 ${
                      isActive ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
                    }`}
                  >
                    <div className="px-4 md:px-6 pb-4 md:pb-6 pt-0">
                      <div className="border-t-2 border-dashed border-border pt-4">
                        <p className="text-xs md:text-sm text-muted-foreground leading-relaxed">{exp.description}</p>
                      </div>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
