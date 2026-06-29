"use client"

import { useLanguage } from '@/lib/i18n'
import { cn } from '@/lib/utils'

export function Footer() {
  const { t, isRTL } = useLanguage()
  const currentYear = new Date().getFullYear()

  return (
    <footer className="py-6 border-t border-border/50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={cn(
          "flex flex-col md:flex-row justify-between items-center gap-2",
          // isRTL && "md:flex-row-reverse"
          isRTL && "text-right"
        )}>
          <p className="text-sm text-muted-foreground text-center md:text-start">
            © {currentYear} <span className="text-primary">{'<'}Ghada.Dev{'/>'}</span>. {t('footer.rights')}
          </p>
          <p className="text-sm text-muted-foreground text-center  max-w-sm leading-relaxed">
            {t('footer.built')}
          </p>
        </div>
      </div>
    </footer>
  )
}
