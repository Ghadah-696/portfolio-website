"use client"

import { useLanguage } from '@/lib/i18n'
import { cn } from '@/lib/utils'
import { Badge } from '@/components/ui/badge'
import { ArrowUpRight, CheckCircle2 } from 'lucide-react'
import Image from 'next/image'
import { useState } from 'react'


const projects = [
  {
    id: '1',
    image: '/projects/SaaS MVP Project.webp',
    tech: ['Laravel', 'Tailwind CSS', 'JavaScript', 'WASM Ready'],
    color: 'from-cyan-500/10 to-blue-500/10',
  },
  {
    id: '2',
    image: '/projects/rika.webp',
    tech: [
  'Laravel',
  'Paddle',
  'Cloudflare R2',
  'Payment Recovery',
  'Responsive Fixes'
],
    color: 'from-emerald-500/10 to-teal-500/10',
  },
  {
    id: '3',
    image: '/projects/Laravel SaaS Platform.webp',
    tech: [
  'Laravel',
  'Authentication',
  'reCAPTCHA',
  'Admin Panel',
  'Tailwind CSS'
],
    color: 'from-orange-500/10 to-amber-500/10',
  },
]

export function Projects() {
  const [selectedImage, setSelectedImage]=useState<string | null>(null)
  const { t, isRTL } = useLanguage()

  return (
    <section id="projects" className="py-18 lg:py-28">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className={cn(
          "text-center mb-16",
        )}>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            {t('projects.title')}
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            {t('projects.subtitle')}
          </p>
        </div>

        {/* Projects */}
        <div className="space-y-16">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className={cn(
                "grid lg:grid-cols-2 gap-8 lg:gap-12 items-center",
                index % 2 === 1 && "lg:grid-flow-col-dense",
                isRTL && "lg:grid-flow-col-dense"
              )}
            >
              
              <div  
                className={cn("relative group",
                  index % 2 === 1 && !isRTL && "lg:col-start-2",
                  index % 2 === 0 && isRTL && "lg:col-start-2"
                )}
                >
                  {/* Glow Background */}
                  <div
                    className={cn(
                      "absolute inset-0 bg-gradient-to-t from-background/30 to-transparent",
                     
                      "bg-gradint-to-br",
                      project.color
                    )}
                  />
                  {/* Laptop Frame */}
                  <div
                    className={cn(
                      "relative rounded-2xl overflow-hidden",
                      "border border-border/50",
                      "bg-card/40 backdrop-blur-sm",
                      "shadow-2xl",
                      "transition-all duration-500",
                      "group-hover:-translate-y-2",
                      "group-hover:border-primary/30",
                      
                    )}
                    >
                      {/* Browser Top Bar */}
                <div className="flex items-center gap-2 px-4 py-3 border-b border-border/50 bg-background/80">
                      <div className="w-3 h-3 rounded-full bg-red-500/70" />
                      <div className="w-3 h-3 rounded-full bg-yellow-500/70" />
                      <div className="w-3 h-3 rounded-full bg-green-500/70" />
              </div>
              {/* Project Screenshot */}
              <div className="relative  aspect-[16/12] overflow-hidden bg-black/40 rounded-b-2xl cursor-zoom-in"
              onClick={()=> setSelectedImage(project.image)}>
              {/* subtle overly */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent z-10" />
              {/* <div className="absolute top-4 right-4 z-20">
             <span className="px-3 py-1 rounded-full bg-primary text-primary-foreground text-xs font-semibold">
                        {project.id === '1' ? '98 Lighthouse' : project.id === '2' ? 'Payment Recovery' : 'SaaS Platform' }
                      </span> 
             </div> */}
             <div className="absolute top-4 right-4 z-20 opacity-0 group-hover:opacity-100 transition-opacity">
            <span className="bg-black/70 text-white text-xs px-3 py-1 rounded-full">
                Click to expand
           </span>
          </div>
                <Image 
                  src={project.image}
                  alt={t(`projects.${project.id}.title`)}
                  fill
                  className="object-cover object-center  transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              </div>
              </div>
              {/* Project Details */}
              <div className={cn(
                "space-y-6",
                isRTL && "text-right",
                index % 2 === 1 && !isRTL && "lg:col-start-1",
                index % 2 === 0 && isRTL && "lg:col-start-1"
              )}>
                <h3 className="text-2xl font-bold text-foreground">
                 <span className="text-3xl">
                        {project.id === '1' ? '🛒' : project.id === '2' ? '🛠️' : '📊' }
                      </span> {t(`projects.${project.id}.title`)}
                </h3>

                <div className="space-y-4">
                  <div className={cn("flex gap-3", isRTL && "flex-row-reverse")}>
                    <div className="w-1 bg-primary/50 rounded-full flex-shrink-0" />
                    <div>
                      <p className="text-xs text-primary uppercase tracking-wider mb-1">
                        {t('projects.problem')}
                      </p>
                      <p className="text-muted-foreground text-sm">
                        {t(`projects.${project.id}.problem`)}
                      </p>
                    </div>
                  </div>

                  <div className={cn("flex gap-3", isRTL && "flex-row-reverse")}>
                    <div className="w-1 bg-primary/50 rounded-full flex-shrink-0" />
                    <div>
                      <p className="text-xs text-primary uppercase tracking-wider mb-1">
                        {t('projects.solution')}
                      </p>
                      <p className="text-muted-foreground text-sm">
                        {t(`projects.${project.id}.solution`)}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Result */}
                <div className={cn(
                  "flex items-center gap-2 p-3 rounded-lg bg-primary/5 border border-primary/20",
                  isRTL && "flex-row-reverse"
                )}>
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                  {/* <span className="text-sm font-medium text-foreground">
                    {t(`projects.${project.id}.result`)}
                  </span> */}
                  <div className="flex flex-wrap gap-2">
                  {t(`projects.${project.id}.result`)
                  .split(' • ')
                  .map((item) => (
                  <span
                    key={item}
                    className="text-xs px-3 py-1 rounded-full bg-primary/10 text-primary border border-primary/20 font-medium"
                     >
                       {item}
                  </span>
                     ))}
            </div>
                </div>

                {/* Tech Tags */}
                <div className={cn(
                  "flex flex-wrap gap-2",
                  isRTL && "flex-row-reverse"
                )}>
                  {project.tech.map((tech) => (
                    <Badge key={tech} variant="secondary" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Add projector window */}
      {selectedImage && (
  <div
    className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
    onClick={() => setSelectedImage(null)}
  >
    <div className="relative max-w-7xl w-full h-[90vh]">
      <Image
        src={selectedImage}
        alt="Project Preview"
        fill
        className="object-contain"
      />

      <button
        className="absolute top-4 right-4 text-white text-3xl font-bold"
        onClick={() => setSelectedImage(null)}
      >
        ×
      </button>
    </div>
  </div>
)}
    </section>
  )
}
