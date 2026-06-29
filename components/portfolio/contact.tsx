"use client"

import { useLanguage } from '@/lib/i18n'
import { cn } from '@/lib/utils'
import { Mail, Linkedin, Github, ExternalLink } from 'lucide-react'
import { UpworkLogo } from '../icons/upwork-logo'

const contactLinks = [
  {
    key: 'email',
    icon: Mail,
    href: 'mailto:ghadahalkam990@gmail.com',
    value: 'Send an Email',
  },
  {
    key: 'linkedin',
    icon: Linkedin,
    href: 'https://www.linkedin.com/in/ghadah-abdullah-82a3002a0',
    value: 'View LinkedIn Profile',
  },
  {
    key: 'github',
    icon: Github,
    href: 'https://github.com/Ghadah-696',
    value: 'GitHub Profile',
  },
  {
    key: 'upwork',
    icon: UpworkLogo,
    href: 'https://www.upwork.com/freelancers/~01260faffb74b24ac8?mp_source=share',
    value: 'Upwork Profile',
  },
]

export function Contact() {
  const { t, isRTL } = useLanguage()

  return (
    <section id="contact" className="py-18 lg:py-28">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className={cn(
          "text-center mb-16",
          // isRTL && "text-right"
        )}>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            {t('contact.title')}
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            {t('contact.subtitle')}
          </p>
        </div>

        {/* Contact Links */}
        <div className="grid sm:grid-cols-2 gap-4 max-w-2xl mx-auto">
          {contactLinks.map((link) => {
            const Icon = link.icon
            return (
              <a
                key={link.key}
                href={link.href}
                target={link.key !== 'email' ? '_blank' : undefined}
                rel={link.key !== 'email' ? 'noopener noreferrer' : undefined}
                className={cn(
                  "flex items-center gap-4 p-4 rounded-xl bg-card border border-border/50",
                  "hover:border-primary/30 hover:bg-card/80 transition-all duration-300",
                  "group",isRTL && "text-right"
                  // isRTL && "flex-row-reverse"
                )}
              >
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <Icon className="w-5 h-5 text-primary" />
                </div>
                <div className={isRTL ? "text-right" : ""}>
                  <p className="text-sm text-muted-foreground">
                    {t(`contact.${link.key}`)}
                  </p>
                  <p className="font-medium text-foreground">
                    {link.value}
                  </p>
                </div>
              </a>
            )
          })}
        </div>
      </div>
    </section>
  )
}
