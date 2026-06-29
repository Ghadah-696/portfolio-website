"use client"

import { useEffect, useState } from 'react'
import { cn } from '@/lib/utils'
import { 
  Database, Zap, Link, Palette, CreditCard, Code2, Cpu, Layers, Terminal 
} from "lucide-react"
import { LaravelLogo } from '@/components/icons/laravel-logo'
import { ReactLogo } from '@/components/icons/react-logo'

const techIcons = [
  // { name: 'Laravel', icon: Cpu, color: 'text-red-500' },
 { name: 'Laravel', icon: LaravelLogo, color: 'text-red-500' },
  { name: 'PHP', icon: Code2, color: 'text-indigo-500' },
  // { name: 'React', icon: Layers, color: 'text-cyan-400' },
  { name: 'React', icon: ReactLogo, color: 'text-cyan-400' },
  { name: 'MySQL', icon: Database, color: 'text-blue-500' },
  { name: 'API', icon: Link, color: 'text-emerald-500' },
  { name: 'Tailwind', icon: Palette, color: 'text-sky-400' },
  { name: 'Paddle', icon: CreditCard, color: 'text-emerald-400' },
  { name: 'Performance', icon: Zap, color: 'text-yellow-400' },
]

export function TechVisual() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <div className="relative w-56 h-56 sm:w-72 sm:h-72 lg:w-80 lg:h-80">
      {/* Central glow */}
      <div className="absolute inset-0 rounded-full bg-primary/10 blur-3xl" />
      
      {/* Main circle */}
      <div className="absolute inset-4 rounded-full border border-border/50 bg-card/50 backdrop-blur-sm" />
      
      {/* Inner ring */}
      <div className="absolute inset-12 rounded-full border border-primary/20" />
      
      {/* Center icon */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-20 h-20 rounded-full bg-primary/10 border border-primary/30 flex items-center justify-center">
          {/* <span className="text-3xl">{'</>'}</span> */}
          <Terminal className="w-10 h-10 text-primary" />
        </div>
      </div>
      
      {/* Floating tech icons */}
      {techIcons.map((tech, index) => {
        const angle = (index * 360) / techIcons.length
        const radius = 120
        const x = Math.cos((angle * Math.PI) / 180) * radius
        const y = Math.sin((angle * Math.PI) / 180) * radius
        const Icon = tech.icon

        return (
          <div
            key={tech.name}
            className={cn(
              "absolute w-12 h-12 rounded-xl bg-card border border-border/50 flex items-center justify-center",
              "transform transition-all duration-700 hover:scale-110 hover:border-primary/50",
              "shadow-lg shadow-black/10",
              mounted ? "opacity-100" : "opacity-0"
            )}
            style={{
              left: `calc(50% + ${x}px - 24px)`,
              top: `calc(50% + ${y}px - 24px)`,
              transitionDelay: `${index * 100}ms`,
              // animation: mounted ? `float-${index % 3} 3s ease-in-out infinite` : 'none',
              // animationDelay: `${index * 0.3}s`,
              animationName: mounted ? `float-${index % 3}` : 'none',
              animationDuration: '3s',
              animationTimingFunction: 'ease-in-out',
              animationIterationCount: 'infinite',
              animationDelay: `${index * 0.3}s`,
            }}
            title={tech.name}
          >
            <Icon className={cn("w-6 h-6 transition-colors", tech.color)} />
          </div>
        )
      })}
      
      <style jsx>{`
        @keyframes float-0 {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-8px); }
        }
        @keyframes float-1 {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-6px); }
        }
        @keyframes float-2 {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
      `}</style>
    </div>
  )
}
