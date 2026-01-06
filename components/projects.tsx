"use client"

import { useInView } from "@/hooks/use-in-view"
import { Zap, TrendingUp, Target } from "lucide-react"

const projects = [
  {
    title: "EV Battery Health Prediction",
    description:
      "Engineered 4 ML models (LSTM, XGBoost, AdaBoost, SVR) to forecast State of Charge, Health, and RUL of Li-ion batteries.",
    tags: ["Python", "ML", "XGBoost", "LSTM", "TensorFlow"],
    metrics: [
      { label: "R² Score", value: "0.997", icon: Target },
      { label: "MAE", value: "0.0089", icon: TrendingUp },
    ],
  },
]

export function Projects() {
  const { ref, isInView } = useInView({ threshold: 0.1 })

  return (
    <section id="projects" className="py-16 md:py-24 px-4 md:px-6 lg:px-8 bg-muted/30" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <div className={`space-y-8 md:space-y-12 ${isInView ? "animate-fade-up" : "opacity-0"}`}>
          <div className="space-y-1.5 md:space-y-2">
            <p className="text-primary font-mono text-xs md:text-sm">04. Projects</p>
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-foreground">Technical Projects</h2>
            <p className="text-sm md:text-base text-muted-foreground max-w-xl">
              Data-driven solutions solving real-world problems.
            </p>
          </div>

          <div className="space-y-4 md:space-y-6">
            {projects.map((project, index) => (
              <div
                key={project.title}
                className={`group bg-card border-2 border-border p-4 md:p-6 transition-all duration-300 
                  shadow-[4px_4px_0px_0px_var(--border)] hover:shadow-[6px_6px_0px_0px_var(--primary)] hover:-translate-y-1
                  ${isInView ? "animate-fade-up" : "opacity-0"}`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="space-y-4 md:space-y-6">
                  <div className="flex items-start gap-3">
                    <div className="bg-primary p-2 md:p-3 border-2 border-border">
                      <Zap size={18} className="text-primary-foreground" />
                    </div>
                    <div>
                      <span className="text-xs text-primary font-mono">Machine Learning</span>
                      <h3 className="text-base md:text-lg font-bold text-foreground group-hover:text-primary transition-colors">
                        {project.title}
                      </h3>
                    </div>
                  </div>

                  <p className="text-xs md:text-sm text-muted-foreground leading-relaxed">{project.description}</p>

                  {/* Metrics */}
                  <div className="grid grid-cols-2 gap-3 md:gap-4">
                    {project.metrics.map((metric) => {
                      const Icon = metric.icon
                      return (
                        <div key={metric.label} className="p-3 bg-secondary/30 border-2 border-border">
                          <div className="flex items-center gap-2 mb-1">
                            <Icon size={14} className="text-primary" />
                            <span className="text-xs text-muted-foreground">{metric.label}</span>
                          </div>
                          <p className="text-xl md:text-2xl font-bold text-primary">{metric.value}</p>
                        </div>
                      )
                    })}
                  </div>

                  <div className="flex flex-wrap gap-1.5">
                    {project.tags.map((tag) => (
                      <span key={tag} className="px-2 py-0.5 text-xs font-mono bg-secondary border border-border">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
