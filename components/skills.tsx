"use client"

import { useInView } from "@/hooks/use-in-view"
import { useState } from "react"

const skills = [
  { name: "Figma", category: "Design", level: "Expert" },
  { name: "UI/UX Design", category: "Design", level: "Expert" },
  { name: "Design Systems", category: "Design", level: "Advanced" },
  { name: "Canva", category: "Design", level: "Advanced" },
  { name: "Python", category: "Dev", level: "Expert" },
  { name: "SQL", category: "Dev", level: "Advanced" },
  { name: "Machine Learning", category: "Dev", level: "Advanced" },
  { name: "TensorFlow", category: "Dev", level: "Intermediate" },
  { name: "Power BI", category: "Tools", level: "Advanced" },
  { name: "Pandas", category: "Tools", level: "Expert" },
  { name: "NumPy", category: "Tools", level: "Expert" },
  { name: "AWS", category: "Tools", level: "Intermediate" },
]

const categories = ["All", "Design", "Dev", "Tools"]

export function Skills() {
  const { ref, isInView } = useInView({ threshold: 0.1 })
  const [activeCategory, setActiveCategory] = useState("All")
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null)

  const filteredSkills = activeCategory === "All" ? skills : skills.filter((s) => s.category === activeCategory)

  const getLevelColor = (level: string) => {
    switch (level) {
      case "Expert":
        return "bg-primary"
      case "Advanced":
        return "bg-secondary-foreground"
      case "Intermediate":
        return "bg-secondary"
      default:
        return "bg-muted"
    }
  }

  return (
    <section id="skills" className="py-16 md:py-24 px-4 md:px-6 lg:px-8" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <div className={`space-y-8 md:space-y-12 ${isInView ? "animate-fade-up" : "opacity-0"}`}>
          <div className="space-y-1.5 md:space-y-2">
            <p className="text-primary font-mono text-xs md:text-sm">05. Skills</p>
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-foreground">Technical Toolkit</h2>
          </div>

          {/* Category filters */}
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-3 md:px-4 py-1.5 md:py-2 text-xs md:text-sm font-bold uppercase tracking-wide border-2 border-border transition-all duration-200
                  ${
                    activeCategory === cat
                      ? "bg-primary text-primary-foreground shadow-[4px_4px_0px_0px_var(--border)]"
                      : "bg-card hover:bg-secondary hover:-translate-y-0.5"
                  }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Skills grid */}
          <div className="flex flex-wrap gap-2 md:gap-3">
            {filteredSkills.map((skill, index) => (
              <div
                key={skill.name}
                className={`group relative cursor-pointer transition-all duration-300 ${
                  isInView ? "animate-fade-up" : "opacity-0"
                }`}
                style={{ animationDelay: `${index * 0.05}s` }}
                onMouseEnter={() => setHoveredSkill(skill.name)}
                onMouseLeave={() => setHoveredSkill(null)}
              >
                <div
                  className={`px-3 md:px-4 py-2 md:py-3 border-2 border-border bg-card font-medium text-sm md:text-base
                    transition-all duration-200 group-hover:-translate-y-1
                    ${
                      hoveredSkill === skill.name
                        ? "shadow-[4px_4px_0px_0px_var(--primary)]"
                        : "shadow-[2px_2px_0px_0px_var(--border)]"
                    }`}
                >
                  <div className="flex items-center gap-2">
                    <span className={`w-2 h-2 ${getLevelColor(skill.level)}`} />
                    <span>{skill.name}</span>
                  </div>
                </div>

                {/* Tooltip */}
                <div
                  className={`absolute -top-8 left-1/2 -translate-x-1/2 px-2 py-1 bg-foreground text-background text-xs font-mono whitespace-nowrap
                    transition-all duration-200 pointer-events-none
                    ${hoveredSkill === skill.name ? "opacity-100 -translate-y-1" : "opacity-0"}`}
                >
                  {skill.level}
                </div>
              </div>
            ))}
          </div>

          {/* Legend */}
          <div className="flex flex-wrap items-center gap-4 md:gap-6 pt-4 text-xs md:text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 bg-primary" />
              <span>Expert</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 bg-secondary-foreground" />
              <span>Advanced</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 bg-secondary" />
              <span>Intermediate</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
