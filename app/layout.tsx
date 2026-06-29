import type { Metadata, Viewport } from 'next'
import { Inter, Noto_Sans_Arabic } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const inter = Inter({ 
  subsets: ["latin"],
  variable: '--font-inter',
  display: 'swap',
});

const notoArabic = Noto_Sans_Arabic({ 
  subsets: ["arabic"],
  variable: '--font-arabic',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Laravel SaaS & Systems Developer | Portfolio',
  description: 'Professional Laravel developer specializing in SaaS applications, scalable systems, clean architecture, and performance optimization. Building production-ready web applications.',
  keywords: ['Laravel', 'PHP', 'SaaS', 'Web Developer', 'Backend Developer', 'API Development', 'Performance Optimization'],
  authors: [{ name: 'Laravel Developer' }],
  manifest: '/site.webmanifest',
  icons: {
    icon: [
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
  },
  creator: 'Laravel Developer',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    title: 'Laravel SaaS & Systems Developer | Portfolio',
    description: 'Professional Laravel developer specializing in SaaS applications, scalable systems, and clean architecture.',
    siteName: 'Developer Portfolio',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Laravel SaaS & Systems Developer | Portfolio',
    description: 'Professional Laravel developer specializing in SaaS applications, scalable systems, and clean architecture.',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export const viewport: Viewport = {
  themeColor: '#1a1a2e',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark bg-background scroll-smooth">
      <body className={`${inter.variable} ${notoArabic.variable} font-sans antialiased`}>
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
