"use client"

import { useInView } from "@/hooks/use-in-view"
import { GraduationCap, Calendar, MapPin } from "lucide-react"

const education = [
  {
    degree: "B.Tech Electrical & Electronics",
    institution: "NIT Calicut",
    location: "Calicut, India",
    period: "2022 - Present",
    description: "Bachelor's degree with focus on electrical systems and engineering.",
  },
  {
    degree: "Data Science Program",
    institution: "IIT Guwahati - Masai",
    location: "Online",
    period: "2025 - 2026",
    description: "Intensive program covering ML, data science, and analytics.",
  },
]

export function Education() {
  const { ref, isInView } = useInView({ threshold: 0.2 })

  return (
    <section id="education" className="py-16 md:py-24 px-4 md:px-6 lg:px-8 bg-muted/30" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <div className={`space-y-8 md:space-y-12 ${isInView ? "animate-fade-up" : "opacity-0"}`}>
          <div className="space-y-1.5 md:space-y-2">
            <p className="text-primary font-mono text-xs md:text-sm">06. Education</p>
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-foreground">Academic Background</h2>
          </div>

          <div className="grid sm:grid-cols-2 gap-4 md:gap-6">
            {education.map((edu, index) => (
              <div
                key={edu.institution}
                className={`group bg-card border-2 border-border p-4 md:p-5 transition-all duration-300
                  shadow-[4px_4px_0px_0px_var(--border)] hover:shadow-[6px_6px_0px_0px_var(--primary)] hover:-translate-y-1
                  ${isInView ? "animate-fade-up" : "opacity-0"}`}
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <div className="space-y-3 md:space-y-4">
                  <div className="w-10 h-10 md:w-12 md:h-12 bg-primary/10 border-2 border-border flex items-center justify-center">
                    <GraduationCap className="text-primary" size={20} />
                  </div>

                  <div>
                    <h3 className="text-sm md:text-base font-bold text-foreground group-hover:text-primary transition-colors">
                      {edu.degree}
                    </h3>
                    <p className="text-primary font-medium text-xs md:text-sm">{edu.institution}</p>
                  </div>

                  <div className="flex flex-wrap gap-3 text-xs text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Calendar size={12} />
                      <span>{edu.period}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <MapPin size={12} />
                      <span>{edu.location}</span>
                    </div>
                  </div>

                  <p className="text-xs md:text-sm text-muted-foreground">{edu.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
