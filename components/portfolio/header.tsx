"use client"

import { useState } from 'react'
import { useLanguage } from '@/lib/i18n'
import { Button } from '@/components/ui/button'
import { Menu, X, Globe } from 'lucide-react'
import { cn } from '@/lib/utils'

const navItems = [
  { key: 'nav.services', href: '#services' },
  { key: 'nav.projects', href: '#projects' },
  { key: 'nav.testimonials', href: '#testimonials' },
  { key: 'nav.about', href: '#about' },
  { key: 'nav.contact', href: '#contact' },
]

export function Header() {
  const { t, language, setLanguage, isRTL } = useLanguage()
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'ar' : 'en')
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a 
            href="#" 
            className="text-lg font-semibold text-foreground hover:text-primary transition-colors"
          >
            <span className="text-primary">{'<'}</span>
           Ghada.Dev
            <span className="text-primary">{'/>'}</span>
          </a>

          {/* Desktop Navigation */}
          <nav className={cn(
            "hidden md:flex items-center gap-8",
            isRTL && "flex-row-reverse"
          )}>
            {navItems.map((item) => (
              <a
                key={item.key}
                href={item.href}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                {t(item.key)}
              </a>
            ))}
          </nav>

          {/* Language Toggle & Mobile Menu Button */}
          <div className="flex items-center gap-3">
            <Button
              variant="ghost"
              size="sm"
              onClick={toggleLanguage}
              className="text-muted-foreground hover:text-foreground"
            >
              <Globe className="w-4 h-4" />
              <span className="ml-2 text-xs uppercase">{language}</span>
            </Button>

            <button
              className="md:hidden p-2 text-muted-foreground hover:text-foreground"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className={cn(
            "md:hidden py-4 border-t border-border/50",
            isRTL && "text-right"
          )}>
            {navItems.map((item) => (
              <a
                key={item.key}
                href={item.href}
                className="block py-3 text-muted-foreground hover:text-foreground transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {t(item.key)}
              </a>
            ))}
          </nav>
        )}
      </div>
    </header>
  )
}
