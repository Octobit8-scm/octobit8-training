import React from 'react'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Octobit8 - Learn Modern Technology',
  description: 'Learn DevOps, Cloud Computing, AI Development, and Web Development with hands-on projects and expert guidance.',
}

// Extracted inner layout component for testing
export function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className={`${inter.className} bg-[#F8FAFC]`}>
      <div className="min-h-screen flex flex-col">
        <Navigation />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </div>
    </div>
  )
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <AppLayout>{children}</AppLayout>
      </body>
    </html>
  )
} 