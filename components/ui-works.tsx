"use client"

import { useState } from "react"
import { useInView } from "@/hooks/use-in-view"
import { ExternalLink, Star, Clock, X, ChevronLeft, ChevronRight } from "lucide-react"
import Image from "next/image"

const works = [
  {
    id: "doha",
    title: "Doha Industrial Website",
    role: "Lead Designer",
    description:
      "Premium industrial services website featuring hydraulic systems, engine rebuilding, and metal forming. Complete design system with 3D visual elements and modern UI patterns.",
    tags: ["Figma", "Web Design", "3D Assets", "Industrial"],
    thumbnail: "/images/doha-hero.png",
    gallery: ["/images/doha-hero.png", "/images/doha-services.png", "/images/doha-blogs.png"],
    featured: true,
    status: "Coming Soon",
  },
  {
    id: "tathva",
    title: "Tathva '24",
    role: "Lead UI/UX",
    description:
      "Complete UI/UX for NIT Calicut's flagship techno-management festival. 'Timeless Gaming' brand identity delivered in 12 days with comprehensive design system.",
    tags: ["Figma", "UI Kit", "Brand Identity", "Festival"],
    thumbnail: "/tech-festival-gaming-theme-dark.jpg",
    gallery: ["/tech-festival-gaming-theme-dark.jpg"],
    featured: false,
  },
]

export function UIWorks() {
  const { ref, isInView } = useInView({ threshold: 0.1 })
  const [selectedProject, setSelectedProject] = useState<string | null>(null)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  const selectedWork = works.find((w) => w.id === selectedProject)

  const openGallery = (projectId: string) => {
    setSelectedProject(projectId)
    setCurrentImageIndex(0)
  }

  const closeGallery = () => {
    setSelectedProject(null)
    setCurrentImageIndex(0)
  }

  const nextImage = () => {
    if (selectedWork) {
      setCurrentImageIndex((prev) => (prev + 1) % selectedWork.gallery.length)
    }
  }

  const prevImage = () => {
    if (selectedWork) {
      setCurrentImageIndex((prev) => (prev - 1 + selectedWork.gallery.length) % selectedWork.gallery.length)
    }
  }

  return (
    <>
      <section id="works" className="py-16 md:py-24 px-4 md:px-8 lg:px-12 bg-muted/30" ref={ref}>
        <div className="max-w-7xl mx-auto">
          <div className={`space-y-8 md:space-y-12 ${isInView ? "animate-fade-up" : "opacity-0"}`}>
            <div className="space-y-1.5 md:space-y-2">
              <p className="text-primary font-mono text-xs md:text-sm">02. UI/UX Works</p>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-foreground">Design Projects</h2>
              <p className="text-sm md:text-base text-muted-foreground max-w-2xl">
                A showcase of my UI/UX design work blending aesthetics with user-centered principles.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
              {works.map((work, index) => (
                <div
                  key={work.id}
                  onClick={() => openGallery(work.id)}
                  className={`group relative bg-card border-2 ${
                    work.featured ? "border-primary" : "border-border hover:border-primary"
                  } overflow-hidden transition-all duration-300 hover:-translate-y-2 cursor-pointer ${
                    work.featured
                      ? "shadow-[6px_6px_0px_0px_var(--primary)]"
                      : "shadow-[4px_4px_0px_0px_var(--border)] hover:shadow-[6px_6px_0px_0px_var(--primary)]"
                  } ${isInView ? "animate-fade-up" : "opacity-0"}`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {/* Image */}
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <Image
                      src={work.thumbnail || "/placeholder.svg"}
                      alt={work.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent" />

                    {/* Badges */}
                    <div className="absolute top-3 left-3 flex gap-2">
                      {work.featured && (
                        <div className="flex items-center gap-1 bg-primary text-primary-foreground px-2 py-1 border-2 border-border">
                          <Star size={12} className="fill-current" />
                          <span className="text-xs font-bold uppercase">Featured</span>
                        </div>
                      )}
                      {work.status && (
                        <div className="flex items-center gap-1 bg-secondary px-2 py-1 border-2 border-border">
                          <Clock size={12} />
                          <span className="text-xs font-bold">{work.status}</span>
                        </div>
                      )}
                    </div>

                    {/* Gallery indicator */}
                    <div className="absolute bottom-3 right-3 bg-card/90 px-2 py-1 border border-border rounded-sm">
                      <span className="text-xs font-mono text-muted-foreground">
                        {work.gallery.length} {work.gallery.length === 1 ? "image" : "images"}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-4 md:p-5 space-y-3">
                    <div className="flex items-start justify-between gap-2">
                      <div>
                        <span className="text-xs font-mono text-primary uppercase tracking-wider">{work.role}</span>
                        <h3 className="text-base md:text-lg font-bold text-foreground mt-0.5 group-hover:text-primary transition-colors">
                          {work.title}
                        </h3>
                      </div>
                      <ExternalLink
                        size={16}
                        className="text-muted-foreground group-hover:text-primary transition-colors mt-1 flex-shrink-0"
                      />
                    </div>
                    <p className="text-xs md:text-sm text-muted-foreground leading-relaxed line-clamp-2">
                      {work.description}
                    </p>
                    <div className="flex flex-wrap gap-1.5">
                      {work.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2 py-0.5 text-[10px] md:text-xs font-mono bg-secondary border border-border"
                        >
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

      {selectedWork && (
        <div
          className="fixed inset-0 z-50 bg-background/95 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={closeGallery}
        >
          <div
            className="relative w-full max-w-5xl bg-card border-2 border-border shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="flex items-center justify-between p-4 border-b border-border">
              <div>
                <span className="text-xs font-mono text-primary uppercase tracking-wider">{selectedWork.role}</span>
                <h3 className="text-lg font-bold text-foreground">{selectedWork.title}</h3>
              </div>
              <button onClick={closeGallery} className="p-2 hover:bg-muted transition-colors border border-border">
                <X size={20} />
              </button>
            </div>

            {/* Image viewer */}
            <div className="relative aspect-video bg-muted">
              <Image
                src={selectedWork.gallery[currentImageIndex] || "/placeholder.svg"}
                alt={`${selectedWork.title} - Image ${currentImageIndex + 1}`}
                fill
                className="object-contain"
              />

              {/* Navigation arrows */}
              {selectedWork.gallery.length > 1 && (
                <>
                  <button
                    onClick={prevImage}
                    className="absolute left-3 top-1/2 -translate-y-1/2 p-2 bg-card/90 border border-border hover:bg-card transition-colors"
                  >
                    <ChevronLeft size={24} />
                  </button>
                  <button
                    onClick={nextImage}
                    className="absolute right-3 top-1/2 -translate-y-1/2 p-2 bg-card/90 border border-border hover:bg-card transition-colors"
                  >
                    <ChevronRight size={24} />
                  </button>
                </>
              )}
            </div>

            {/* Thumbnails */}
            {selectedWork.gallery.length > 1 && (
              <div className="flex gap-2 p-4 border-t border-border overflow-x-auto">
                {selectedWork.gallery.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentImageIndex(idx)}
                    className={`relative w-20 h-14 flex-shrink-0 border-2 overflow-hidden transition-all ${
                      idx === currentImageIndex ? "border-primary" : "border-border hover:border-primary/50"
                    }`}
                  >
                    <Image src={img || "/placeholder.svg"} alt={`Thumbnail ${idx + 1}`} fill className="object-cover" />
                  </button>
                ))}
              </div>
            )}

            {/* Description */}
            <div className="p-4 border-t border-border">
              <p className="text-sm text-muted-foreground mb-3">{selectedWork.description}</p>
              <div className="flex flex-wrap gap-2">
                {selectedWork.tags.map((tag) => (
                  <span key={tag} className="px-2 py-1 text-xs font-mono bg-secondary border border-border">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
