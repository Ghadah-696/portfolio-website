"use client"

import { useLanguage } from '@/lib/i18n'
import { cn } from '@/lib/utils'
import { Target, Code2, Rocket } from 'lucide-react'

const highlights = [
  { icon: Target, label: 'Systems Thinking' },
  { icon: Code2, label: 'Clean Architecture' },
  { icon: Rocket, label: 'Performance Focused' },
]

export function About() {
  const { t, isRTL } = useLanguage()

  return (
    <section id="about" className="py-20 lg:py-28 bg-card/30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={cn(
          "grid lg:grid-cols-2 gap-12 items-center",
          isRTL && "lg:grid-flow-col-dense"
        )}>
          {/* Content */}
          <div className={cn(
            "space-y-6",
            isRTL && "text-right lg:col-start-2"
          )}>
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
              {t('about.title')}
            </h2>
            
            <div className="space-y-4 text-muted-foreground leading-relaxed ">
              <p>{t('about.p1')}</p>
              <p>{t('about.p2')}</p>
              <p>{t('about.p3')}</p>
            </div>

            {/* Highlights */}
            <div className={cn(
              "flex flex-wrap gap-4 pt-4",
              // isRTL && "flex-row-reverse"
              isRTL && "text-right"
            )}>
              {highlights.map((item) => {
                const Icon = item.icon
                return (
                  <div
                    key={item.label}
                    className={cn(
                      "flex items-center gap-2 px-4 py-2 rounded-lg bg-primary/5 border border-primary/20",
                      isRTL && "flex-row-reverse"
                    )}
                  >
                    <Icon className="w-4 h-4 text-primary" />
                    <span className="text-sm font-medium text-foreground">{item.label}</span>
                  </div>
                )
              })}
            </div>
          </div>

          {/* Visual */}
          <div className={cn(
            "hidden lg:flex justify-center",
            isRTL && "lg:col-start-1"
          )}>
            <div className="relative">
              {/* Code snippet visual */}
              <div className="w-full max-w-md p-6 rounded-xl bg-background border border-border/50 font-mono text-sm">
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-3 h-3 rounded-full bg-red-500/50" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
                  <div className="w-3 h-3 rounded-full bg-green-500/50" />
                </div>
                <pre className="text-muted-foreground overflow-x-auto">
                  <code>{`class LaravelSystemsDeveloper
{
    protected array $focus = [
        'Laravel',
        'Performance',
        'SaaS MVPs',
        'Clean Architecture',
    ];

    public function build(): array
    {
        return [
            'responsive_interfaces',
            'secure_payment_flows',
            'scalable_systems',
            'maintainable_code',
        ];
    }
}`}</code>
                </pre>
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-primary/10 rounded-full blur-xl" />
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-accent/10 rounded-full blur-xl" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
