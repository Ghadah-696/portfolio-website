"use client"

import { useLanguage } from '@/lib/i18n'
import { Button } from '@/components/ui/button'
import { TechVisual } from './tech-visual'
import { ArrowRight, Mail } from 'lucide-react'
import { cn } from '@/lib/utils'

export function Hero() {
  const { t, isRTL } = useLanguage()

  return (
    <section className=" flex items-center  pt-18 lg:pt-16 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/5 via-background to-background" />
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        {/* <div className={cn(
          "grid lg:grid-cols-2 gap-12 lg:gap-16 items-center",
          isRTL && "lg:grid-flow-col-dense"
        )}> */}
          <div
              className={cn(
              "flex flex-col lg:flex-row items-center gap-12 lg:gap-16",
              isRTL && "lg:flex-row-reverse"
          )}>
          {/* Content */}
          {/* <div className={cn(
            "space-y-8",
            isRTL && "text-right lg:col-start-2"
          )}> */}
            <div className={cn(
                 "flex-1 space-y-8",
                  isRTL && "text-right"
                )} >
            <div className="space-y-4">
              <p className="text-muted-foreground text-sm tracking-wider uppercase">
                <span className="text-primary "> {t('hero.name')} </span> 
              </p>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground leading-tight text-balance">
                {t('hero.title')}
              </h1>
            </div>
            
            <p className="text-lg text-muted-foreground leading-relaxed max-w-lg text-pretty">
              {t('hero.description')}
            </p>
            
            <div className={cn(
              "flex flex-wrap gap-4",
              isRTL && "flex-row-reverse"
            )}>
              <Button asChild size="lg" className="gap-2">
                <a href="#projects">
                  {t('hero.cta.projects')}
                  <ArrowRight className="w-4 h-4" />
                </a>
              </Button>
              <Button asChild variant="outline" size="lg" className="gap-2">
                <a href="#contact">
                  <Mail className="w-4 h-4" />
                  {t('hero.cta.contact')}
                </a>
              </Button>
            </div>
            
            {/* Quick stats */}
            <div className={cn(
              "flex gap-8 pt-8 border-t border-border/50",
              isRTL && "flex-row-reverse"
            )}>
              <div className={isRTL ? "text-right" : ""}>
                <div className="text-2xl font-bold text-primary">5★</div>
                <div className="text-sm text-muted-foreground">Client Feedback</div>
              </div>
              <div className={isRTL ? "text-right" : ""}>
                <div className="text-2xl font-bold text-primary">90+</div>
                <div className="text-sm text-muted-foreground">Lighthouse Performance</div>
              </div>
              <div className={isRTL ? "text-right" : ""}>
                <div className="text-2xl font-bold text-primary">Scalable</div>
                <div className="text-sm text-muted-foreground">SaaS Systems</div>
              </div>
            </div>
          </div>
          
          {/* Tech Visual */}
          {/* <div className={cn(
            "hidden lg:flex justify-center lg:justify-end",
            isRTL && "lg:col-start-1 lg:justify-start"
            // isRTL && "text-right"
          )}> */}
          <div
            className="hidden lg:flex flex-1 justify-center"
              >
            <TechVisual />
          </div>
        </div>
      </div>
    </section>
  )
}
