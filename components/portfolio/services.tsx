"use client"

import { useLanguage } from '@/lib/i18n'
import { cn } from '@/lib/utils'
import { 
  Code2, 
  Rocket, 
  CreditCard, 
  Zap, 
  Server, 
  Palette 
} from 'lucide-react'

const services = [
  { key: 'laravel', icon: Code2 },
  { key: 'performance', icon: Zap },
  { key: 'payment', icon: CreditCard },
  { key: 'saas', icon: Rocket },
  { key: 'frontend', icon: Palette },
  { key: 'api', icon: Server },
]

export function Services() {
  const { t, isRTL } = useLanguage()

  return (
    <section id="services" className="py-18 bg-card/30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className={cn(
          "text-center mb-16",
          
        )}>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            {t('services.title')}
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            {t('services.subtitle')}
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => {
            const Icon = service.icon
            return (
              <div
                key={service.key}
                className={cn(
                  "group p-6 rounded-xl bg-card border border-border/50",
                  "hover:border-primary/30 hover:bg-card/80 transition-all duration-300",
                  "hover:shadow-lg hover:shadow-primary/5",
                  isRTL && "text-right"
                )}
              >
                <div className={cn(
                  "w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4",
                  "group-hover:bg-primary/20 transition-colors",
                  isRTL && "ml-auto"
                )}>
                  <Icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {t(`services.${service.key}.title`)}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {t(`services.${service.key}.description`)}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
