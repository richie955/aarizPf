"use client"

import { useEffect, useState } from "react"
import { ArrowDown, Mail, MapPin, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Hero() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section className="min-h-screen flex items-center justify-center relative px-4 md:px-6 lg:px-8 pt-16 md:pt-20">
      <div className="max-w-6xl mx-auto text-center w-full">
        <div className={`space-y-4 md:space-y-6 ${isVisible ? "animate-fade-up" : "opacity-0"}`}>
          <div className="inline-flex items-center gap-2 px-3 py-1.5 md:px-4 md:py-2 rounded-full bg-primary/10 border border-primary/20">
            <span className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-primary animate-pulse" />
            <span className="text-xs md:text-sm text-primary font-medium">Available for opportunities</span>
          </div>

          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold font-heading text-balance">
            <span className="text-foreground">Hi, I'm </span>
            <span className="text-primary">Aariz</span>
          </h1>

          <p className="text-base sm:text-lg md:text-xl text-muted-foreground font-medium">
            Data Science Enthusiast & UI/UX Designer
          </p>

          <p className="text-sm md:text-base text-muted-foreground max-w-3xl mx-auto leading-relaxed text-pretty">
            Building intelligent solutions through data-driven insights while crafting intuitive digital experiences.
            Pursuing <span className="text-primary font-medium">Data Science at IIT Guwahati-Masai</span> alongside
            B.Tech at NIT Calicut.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 md:gap-8 text-xs md:text-sm text-muted-foreground">
            <div className="flex items-center gap-1.5 md:gap-2">
              <MapPin size={14} className="text-primary" />
              <span>Calicut / Abu Dhabi</span>
            </div>
            <div className="flex items-center gap-1.5 md:gap-2">
              <Mail size={14} className="text-primary" />
              <a href="mailto:aarizmallick27@gmail.com" className="hover:text-primary transition-colors">
                aarizmallick27@gmail.com
              </a>
            </div>
            <div className="flex items-center gap-1.5 md:gap-2">
              <Phone size={14} className="text-primary" />
              <a href="tel:+971547166008" className="hover:text-primary transition-colors">
                +971 54 716 6008 / +91 95088 79866
              </a>
            </div>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3 md:gap-4 pt-2 md:pt-4">
            <Button asChild size="default" className="text-sm md:text-base rounded-none">
              <a href="#projects">View My Projects</a>
            </Button>
            <Button asChild className="text-sm text-black bg-accent rounded-none ">
              <a href="#contact">Get in Touch</a>
            </Button>
          </div>
        </div> 
      </div>

      <a
        href="#about"
        className="absolute bottom-6 md:bottom-8 left-1/2 -translate-x-1/2 text-muted-foreground hover:text-primary transition-colors animate-bounce"
        aria-label="Scroll down"
      >
        <ArrowDown size={20} className="md:w-6 md:h-6" />
      </a>
    </section>
  )
}
