"use client"

import { useLanguage } from '@/lib/i18n'
import { cn } from '@/lib/utils'

const techCategories = [
  {
    key: 'backend',
    
    items: ['Laravel', 'PHP 8', 'MySQL', 'RESTful APIs'],
  },
  {
    key: 'frontend',
    items: ['React', 'Tailwind CSS', 'TypeScript', 'Responsive Design'],
  },
  {
    key: 'SaaS',
    items: ['Stripe', 'Paddle', 'Cloudflare R2', 'Authentication Systems'],
  },
  {
    key: 'Workflow',
    items: ['Git / GitHub', 'Vercel', 'Figma', 'Postman', 'VS Code'],
  },
]

export function TechStack() {
  const { t, isRTL } = useLanguage()

  return (
    <section className="py-20 lg:py-32 bg-background/50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className={cn("text-center mb-16")}>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            {t('tech.title')}
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            {t('tech.subtitle')}
          </p>
        </div>

        {/* Tech Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {techCategories.map((category) => (
            <div
              key={category.key}
              className={cn(
                "group p-6 rounded-2xl bg-card border border-border/40 hover:border-primary/30 transition-all duration-300",
                isRTL && "text-right"
              )}
            >
              <h3 className="text-lg font-bold text-foreground mb-6 flex items-center gap-2">
                <span className="w-1.5 h-6 bg-primary rounded-full inline-block" />
                {t(`tech.${category.key}`)}
              </h3>
              
              <div className="flex flex-wrap gap-2">
                {category.items.map((tech) => (
                  <span 
                    key={tech}
                    className="px-3 py-1.5 text-sm font-medium rounded-xl bg-secondary/50 text-secondary-foreground border border-border/50 group-hover:border-primary/20 transition-colors"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}