'use client'

import React, { useState, useEffect } from 'react'
import Link from 'next/link'

const Navigation = () => {
  const [isCoursesOpen, setIsCoursesOpen] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement
      if (!target.closest('.courses-dropdown')) {
        setIsCoursesOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement
      if (!target.closest('.mobile-menu')) {
        setIsMobileMenuOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    // TODO: Implement search functionality
    console.log('Searching for:', searchQuery)
  }

  return (
    <nav className="bg-white shadow-sm border-b border-[#E5E7EB] sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <Link href="/" className="text-2xl font-bold text-[#1F2937] transition-colors">
                Octobit8
              </Link>
            </div>
            {/* Desktop Navigation */}
            <div className="hidden sm:ml-8 sm:flex sm:space-x-8">
              {/* Courses Dropdown */}
              <div className="relative courses-dropdown">
                <button
                  onClick={() => setIsCoursesOpen(!isCoursesOpen)}
                  className="text-[#4B5563] inline-flex items-center px-3 py-2 text-sm font-medium border-b-2 border-transparent transition-colors bg-transparent hover:bg-transparent"
                >
                  Courses
                  <svg
                    className={`ml-2 h-5 w-5 transform transition-transform ${isCoursesOpen ? 'rotate-180' : ''}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {isCoursesOpen && (
                  <div className="absolute left-0 mt-2 w-64 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-50">
                    <div className="py-1" role="menu" aria-orientation="vertical">
                      <Link
                        href="/courses/devops"
                        className="flex items-center px-4 py-3 text-sm text-[#4B5563] transition-colors hover:bg-transparent"
                        role="menuitem"
                      >
                        <svg className="w-5 h-5 mr-3 text-[#9CA3AF]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                        </svg>
                        DevOps
                      </Link>
                      <Link
                        href="/courses/cloud"
                        className="flex items-center px-4 py-3 text-sm text-[#4B5563] transition-colors hover:bg-transparent"
                        role="menuitem"
                      >
                        <svg className="w-5 h-5 mr-3 text-[#9CA3AF]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
                        </svg>
                        Cloud Computing
                      </Link>
                      <Link
                        href="/courses/ai"
                        className="flex items-center px-4 py-3 text-sm text-[#4B5563] transition-colors hover:bg-transparent"
                        role="menuitem"
                      >
                        <svg className="w-5 h-5 mr-3 text-[#9CA3AF]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                        Agentic AI Development
                      </Link>
                      <Link
                        href="/courses/web"
                        className="flex items-center px-4 py-3 text-sm text-[#4B5563] transition-colors hover:bg-transparent"
                        role="menuitem"
                      >
                        <svg className="w-5 h-5 mr-3 text-[#9CA3AF]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                        Web Development
                      </Link>
                    </div>
                  </div>
                )}
              </div>
              <Link 
                href="/blog" 
                className="text-[#4B5563] inline-flex items-center px-3 py-2 text-sm font-medium border-b-2 border-transparent transition-colors hover:bg-transparent"
              >
                Blog
              </Link>
              <Link 
                href="/forum" 
                className="text-[#4B5563] inline-flex items-center px-3 py-2 text-sm font-medium border-b-2 border-transparent transition-colors hover:bg-transparent"
              >
                Forum
              </Link>
              <Link 
                href="/internship" 
                className="text-[#4B5563] inline-flex items-center px-3 py-2 text-sm font-medium border-b-2 border-transparent transition-colors hover:bg-transparent"
              >
                Internship
              </Link>
            </div>
          </div>

          {/* Search Bar */}
          <div className="hidden md:flex items-center">
            <form onSubmit={handleSearch} className="relative">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search courses..."
                className="w-64 px-4 py-2 text-sm text-[#4B5563] bg-white rounded-lg border border-[#E5E7EB] focus:outline-none focus:ring-2 focus:ring-[#F59E0B] focus:border-transparent"
              />
              <button
                type="submit"
                className="absolute right-2 top-1/2 transform -translate-y-1/2 text-[#4B5563] bg-transparent hover:bg-transparent"
              >
                <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </button>
            </form>
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center sm:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-[#4B5563] focus:outline-none focus:ring-2 focus:ring-inset focus:ring-[#F59E0B] transition-colors hover:bg-transparent"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className={`${isMobileMenuOpen ? 'hidden' : 'block'} h-6 w-6`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
              <svg
                className={`${isMobileMenuOpen ? 'block' : 'hidden'} h-6 w-6`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <div className="sm:hidden">
          <div className="pt-2 pb-3 space-y-1">
            {/* Mobile Search */}
            <div className="px-4 py-2">
              <form onSubmit={handleSearch} className="relative">
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search courses..."
                  className="w-full px-4 py-2 text-sm text-[#4B5563] bg-white rounded-lg border border-[#E5E7EB] focus:outline-none focus:ring-2 focus:ring-[#F59E0B] focus:border-transparent"
                />
                <button
                  type="submit"
                  className="absolute right-2 top-1/2 transform -translate-y-1/2 text-[#4B5563] bg-transparent hover:bg-transparent"
                >
                  <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </button>
              </form>
            </div>

            <div className="mobile-menu">
              <button
                onClick={() => setIsCoursesOpen(!isCoursesOpen)}
                className="w-full flex items-center justify-between px-3 py-2 rounded-md text-base font-medium text-[#4B5563] transition-colors hover:bg-transparent"
              >
                <span>Courses</span>
                <svg
                  className={`ml-2 h-5 w-5 transform transition-transform ${isCoursesOpen ? 'rotate-180' : ''}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {isCoursesOpen && (
                <div className="mt-2 space-y-1">
                  <Link
                    href="/courses/devops"
                    className="flex items-center px-3 py-2 text-base font-medium text-[#4B5563] transition-colors hover:bg-transparent"
                  >
                    <svg className="w-5 h-5 mr-3 text-[#9CA3AF]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                    </svg>
                    DevOps
                  </Link>
                  <Link
                    href="/courses/cloud"
                    className="flex items-center px-3 py-2 text-base font-medium text-[#4B5563] transition-colors hover:bg-transparent"
                  >
                    <svg className="w-5 h-5 mr-3 text-[#9CA3AF]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
                    </svg>
                    Cloud Computing
                  </Link>
                  <Link
                    href="/courses/ai"
                    className="flex items-center px-3 py-2 text-base font-medium text-[#4B5563] transition-colors hover:bg-transparent"
                  >
                    <svg className="w-5 h-5 mr-3 text-[#9CA3AF]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    Agentic AI Development
                  </Link>
                  <Link
                    href="/courses/web"
                    className="flex items-center px-3 py-2 text-base font-medium text-[#4B5563] transition-colors hover:bg-transparent"
                  >
                    <svg className="w-5 h-5 mr-3 text-[#9CA3AF]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    Web Development
                  </Link>
                </div>
              )}
            </div>
            <Link
              href="/blog"
              className="block px-3 py-2 text-base font-medium text-[#4B5563] transition-colors hover:bg-transparent"
            >
              Blog
            </Link>
            <Link
              href="/forum"
              className="block px-3 py-2 text-base font-medium text-[#4B5563] transition-colors hover:bg-transparent"
            >
              Forum
            </Link>
            <Link
              href="/internship"
              className="block px-3 py-2 text-base font-medium text-[#4B5563] transition-colors hover:bg-transparent"
            >
              Internship
            </Link>
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navigation 