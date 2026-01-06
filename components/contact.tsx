"use client"

import { useInView } from "@/hooks/use-in-view"
import { Mail, Phone, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Contact() {
  const { ref, isInView } = useInView({ threshold: 0.2 })

  return (
    <section id="contact" className="py-16 md:py-24 px-4 md:px-6 lg:px-8" ref={ref}>
      <div className="max-w-5xl mx-auto">
        <div className={`space-y-8 md:space-y-12 text-center ${isInView ? "animate-fade-up" : "opacity-0"}`}>
          <div className="space-y-3 md:space-y-4">
            <p className="text-primary font-mono text-xs md:text-sm">07. What's Next?</p>
            <h2 className="text-xl sm:text-2xl md:text-4xl font-bold text-foreground">Let's Work Together</h2>
            <p className="text-sm md:text-base text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Looking for opportunities to apply my Data Science skills and design expertise to create impactful,
              intelligent solutions.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-3 md:gap-4">
            <Button asChild size="default" className="gap-2 group">
              <a href="mailto:aarizmallick27@gmail.com">
                <Mail size={16} />
                Say Hello
                <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </a>
            </Button>
          </div>

          <div className="pt-6 md:pt-8 flex flex-col sm:flex-row flex-wrap justify-center gap-4 md:gap-6 text-muted-foreground">
            <a
              href="mailto:aarizmallick27@gmail.com"
              className="flex items-center justify-center gap-2 hover:text-primary transition-colors text-xs md:text-sm"
            >
              <Mail size={14} />
              <span>aarizmallick27@gmail.com</span>
            </a>
            <a
              href="tel:+919508879866"
              className="flex items-center justify-center gap-2 hover:text-primary transition-colors text-xs md:text-sm"
            >
              <Phone size={14} />
              <span>+91 95088 79866</span>
            </a>
            <a
              href="tel:+971547166008"
              className="flex items-center justify-center gap-2 hover:text-primary transition-colors text-xs md:text-sm"
            >
              <Phone size={14} />
              <span>+971 54 716 6008</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
