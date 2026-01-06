"use client"

import { useInView } from "@/hooks/use-in-view"

export function About() {
  const { ref, isInView } = useInView({ threshold: 0.2 })

  return (
    <section id="about" className="py-16 md:py-24 px-4 md:px-6 lg:px-8" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <div className={`space-y-6 md:space-y-8 ${isInView ? "animate-fade-up" : "opacity-0"}`}>
          <div className="space-y-1.5 md:space-y-2">
            <p className="text-primary font-mono text-xs md:text-sm">01. About Me</p>
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-foreground">
              Data Scientist with Design Thinking
            </h2>
          </div>

          <div className="grid md:grid-cols-5 gap-6 md:gap-8">
            <div className="md:col-span-3 space-y-3 md:space-y-4 text-sm md:text-base text-muted-foreground leading-relaxed">
              <p>
                I'm Mohammad Aariz Imran, bridging the worlds of
                <span className="text-foreground font-medium"> Data Science</span> and
                <span className="text-foreground font-medium"> UI/UX Design</span> to create intelligent, user-centered
                solutions.
              </p>
              <p>
                Currently pursuing a Credit Linked Program in{" "}
                <span className="text-primary">Data Science from IIT Guwahati-Masai</span> alongside my B.Tech in
                Electrical Engineering at <span className="text-primary">NIT Calicut</span>.
              </p>
              <p>
                My unique combination of technical ML skills and design expertise allows me to build data products that
                are not just powerful, but also{" "}
                <span className="text-foreground font-medium">intuitive and accessible</span>.
              </p>
            </div>

            <div className="md:col-span-2 grid grid-cols-3 md:grid-cols-1 gap-3 md:gap-4">
              <div className="p-3 md:p-4 bg-card border-2 border-border shadow-[4px_4px_0px_0px_var(--primary)]">
                <p className="text-2xl md:text-3xl font-bold text-primary">ML</p>
                <p className="text-xs md:text-sm text-muted-foreground">Projects built</p>
              </div>
              <div className="p-3 md:p-4 bg-card border-2 border-border shadow-[4px_4px_0px_0px_var(--primary)]">
                <p className="text-2xl md:text-3xl font-bold text-primary">12</p>
                <p className="text-xs md:text-sm text-muted-foreground">Days to ship</p>
              </div>
              <div className="p-3 md:p-4 bg-card border-2 border-border shadow-[4px_4px_0px_0px_var(--primary)]">
                <p className="text-2xl md:text-3xl font-bold text-primary">200+</p>
                <p className="text-xs md:text-sm text-muted-foreground">Design assets</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
