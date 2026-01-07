"use client";

import { useState } from "react";
import { useInView } from "@/hooks/use-in-view";
import {
  ExternalLink,
  Star,
  Clock,
  X,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import Image from "next/image";

const works = [
  {
    id: "doha",
    title: "Doha Industrial Website",
    role: "Lead Designer",
    description:
      "Premium industrial services website featuring hydraulic systems, engine rebuilding, and metal forming. Complete design system with 3D visual elements and modern UI patterns.",
    tags: ["Figma", "Web Design", "3D Assets", "Industrial"],
    thumbnail: "/Doha/specimen (7).png",
    gallery: [
      "/Doha/specimen (7).png",
      "/Doha/specimen (6).png",
      "/Doha/specimen (5).png",
      "/Doha/specimen (4).png",
      "/Doha/specimen (3).png",
      "/Doha/specimen (1).png",
    ],
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
    thumbnail: "/Tathva/specimen (2).png",
        gallery: [
      "/Tathva/specimen (1).png",
      "/Tathva/specimen (4).png",
      "/Tathva/specimen (3).png",
      "/Tathva/specimen (2).png",
    ],
    featured: false,
  },
  {
  id: "Roventage",
  title: "Roventage Corporate Website",
  role: "UI/UX Designer & Frontend",
  description:
    "Corporate website for an Indian startup focused on training, products, and industry collaborations. Designed a clean, professional interface with structured content layouts for MoUs, training programs, and downloadable resources, ensuring clarity, accessibility, and scalability.",
  tags: [
    "UI/UX Design",
    "Web Design",
    "Information Architecture",
    "Startup",
    "Corporate"
  ],
  thumbnail: "/Roventage/specimen (1).png",
  gallery: [
    "/Roventage/specimen (1).png",
    "/Roventage/specimen (6).png",
    "/Roventage/specimen (3).png",
    "/Roventage/specimen (4).png"
  ],
  featured: false,
}

];

export function UIWorks() {
  const { ref, isInView } = useInView({ threshold: 0.1 });
  const [selectedProject, setSelectedProject] = useState<string | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const selectedWork = works.find((w) => w.id === selectedProject);

  const openGallery = (id: string) => {
    setSelectedProject(id);
    setCurrentImageIndex(0);
  };

  const closeGallery = () => {
    setSelectedProject(null);
    setCurrentImageIndex(0);
  };

  const nextImage = () =>
    selectedWork &&
    setCurrentImageIndex(
      (i) => (i + 1) % selectedWork.gallery.length
    );

  const prevImage = () =>
    selectedWork &&
    setCurrentImageIndex(
      (i) =>
        (i - 1 + selectedWork.gallery.length) %
        selectedWork.gallery.length
    );

  return (
    <>
      {/* GRID SECTION */}
      <section
        id="works"
        ref={ref}
        className="py-16 md:py-24 px-4 md:px-8 lg:px-12 bg-muted/30"
      >
        <div className="max-w-7xl mx-auto space-y-10">
          <div>
            <p className="text-primary font-mono text-sm">02. UI/UX Works</p>
            <h2 className="text-3xl font-bold">Design Projects</h2>
            <p className="text-muted-foreground max-w-xl mt-1">
              A showcase of my UI/UX design work blending aesthetics with
              user-centered principles.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {works.map((work, i) => (
              <div
                key={work.id}
                onClick={() => openGallery(work.id)}
                className={`group cursor-pointer bg-card border-2 transition-all hover:-translate-y-2 ${
                  work.featured
                    ? "border-primary shadow-[6px_6px_0_var(--primary)]"
                    : "border-border hover:border-primary"
                } ${isInView ? "animate-fade-up" : "opacity-0"}`}
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                <div className="relative aspect-[16/9]  ">
                  <Image
                    src={work.thumbnail}
                    alt={work.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/40 to-transparent" />
                </div>

                <div className="p-4 space-y-2">
                  <span className="text-xs font-mono text-primary">
                    {work.role}
                  </span>
                  <h3 className="font-bold group-hover:text-primary">
                    {work.title}
                  </h3>
                  <p className="text-sm text-muted-foreground line-clamp-2">
                    {work.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>


{selectedWork && (
  <div
    className="fixed inset-0 z-50 bg-background/95 backdrop-blur-sm flex items-center justify-center p-4"
    onClick={closeGallery}
  >
    <div
      className="relative w-full max-w-6xl max-h-[90vh] bg-card border border-border shadow-2xl flex flex-col"
      onClick={(e) => e.stopPropagation()}
    >
      {/* HEADER */}
      <div className="flex items-center justify-between px-5 py-4 border-b border-border">
        <div>
          <span className="text-xs font-mono text-primary uppercase tracking-wider">
            {selectedWork.role}
          </span>
          <h3 className="text-lg font-bold text-foreground">
            {selectedWork.title}
          </h3>
        </div>

        <button
          onClick={closeGallery}
          className="p-2 border border-border hover:bg-muted transition-colors"
        >
          <X size={18} />
        </button>
      </div>

      {/* MAIN CONTENT */}
      <div className="flex flex-col md:grid md:grid-cols-[2.2fr_1fr] md:min-h-[440px]">
        {/* LEFT — IMAGE + CAROUSEL */}
        <div className="flex flex-col bg-muted">
          {/* IMAGE */}
          <div className="relative w-full h-[220px] sm:h-[320px] md:h-[380px] overflow-hidden">
            <Image
              src={selectedWork.gallery[currentImageIndex] || "/placeholder.svg"}
              alt={`${selectedWork.title} image ${currentImageIndex + 1}`}
              fill
              className="object-cover"
            />

            {/* Desktop arrows */}
            {selectedWork.gallery.length > 1 && (
              <div className="hidden sm:block">
                <button
                  onClick={prevImage}
                  className="absolute left-3 top-1/2 -translate-y-1/2 p-3 bg-background/90 border border-border hover:bg-background"
                >
                  <ChevronLeft size={20} />
                </button>
                <button
                  onClick={nextImage}
                  className="absolute right-3 top-1/2 -translate-y-1/2 p-3 bg-background/90 border border-border hover:bg-background"
                >
                  <ChevronRight size={20} />
                </button>
              </div>
            )}
          </div>

          {/* THUMBNAILS — KEPT */}
          {selectedWork.gallery.length > 1 && (
            <div className="flex gap-2 p-4 border-t border-border overflow-x-auto bg-card">
              {selectedWork.gallery.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentImageIndex(idx)}
                  className={`relative w-20 h-14 flex-shrink-0 border-2 transition-all overflow-hidden ${
                    idx === currentImageIndex
                      ? "border-primary"
                      : "border-border hover:border-primary/50"
                  }`}
                >
                  <Image
                    src={img}
                    alt={`Thumbnail ${idx + 1}`}
                    fill
                    className="object-cover"
                  />
                </button>
              ))}
            </div>
          )}
        </div>

        {/* RIGHT — DESKTOP DESCRIPTION */}
        <div className="hidden md:flex flex-col p-6 border-l border-border bg-card">
          <p className="text-sm text-muted-foreground leading-relaxed mb-6">
            {selectedWork.description}
          </p>

          <div className="mt-auto">
            <p className="text-xs font-mono text-primary uppercase mb-2">
              Skills / Tools
            </p>
            <div className="flex flex-wrap gap-2">
              {selectedWork.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-2 py-1 text-xs font-mono bg-secondary border border-border"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* MOBILE NAVIGATION */}
      {selectedWork.gallery.length > 1 && (
        <div className="flex sm:hidden border-t border-border">
          <button
            onClick={prevImage}
            className="flex-1 py-3 flex items-center justify-center gap-2 text-xs font-mono uppercase hover:text-primary"
          >
            <ChevronLeft size={14} />
            Prev
          </button>
          <div className="w-px bg-border" />
          <button
            onClick={nextImage}
            className="flex-1 py-3 flex items-center justify-center gap-2 text-xs font-mono uppercase hover:text-primary"
          >
            Next
            <ChevronRight size={14} />
          </button>
        </div>
      )}

      {/* MOBILE DESCRIPTION (UNCHANGED BEHAVIOR) */}
      <div className="md:hidden p-4 border-t border-border">
        <p className="text-sm text-muted-foreground mb-3">
          {selectedWork.description}
        </p>
        <div className="flex flex-wrap gap-2">
          {selectedWork.tags.map((tag) => (
            <span
              key={tag}
              className="px-2 py-1 text-xs font-mono bg-secondary border border-border"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  </div>
)}



    </>
  );
}
