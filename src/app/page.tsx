'use client'

import React from 'react'
import Link from 'next/link'

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <div className="relative bg-[#1F2937]">
        <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-extrabold text-white sm:text-5xl sm:tracking-tight lg:text-6xl">
              Master Modern Software Technologies
            </h1>
            <p className="mt-6 max-w-2xl mx-auto text-xl text-[#E5E7EB]">
              Professional training in DevOps and Cloud Computing. Choose between live interactive sessions or self-paced learning.
            </p>
            <div className="mt-10">
              <Link href="/courses" className="inline-block bg-[#F59E0B] py-3 px-8 border border-transparent rounded-md text-base font-medium text-white hover:bg-transparent">
                Explore Courses
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Course Categories */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {/* DevOps Section */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden border border-[#E5E7EB]">
            <div className="px-6 py-8">
              <h2 className="text-2xl font-bold text-[#1F2937] mb-4">DevOps Courses</h2>
              <p className="text-[#4B5563] mb-6">
                Master the tools and practices of modern DevOps including CI/CD, Infrastructure as Code, and containerization.
              </p>
              <Link href="/courses/devops" className="text-[#F59E0B]">
                View DevOps Courses →
              </Link>
            </div>
          </div>

          {/* Cloud Computing Section */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden border border-[#E5E7EB]">
            <div className="px-6 py-8">
              <h2 className="text-2xl font-bold text-[#1F2937] mb-4">Cloud Computing Courses</h2>
              <p className="text-[#4B5563] mb-6">
                Learn cloud platforms including AWS, Azure, and GCP. From developer to master level certifications.
              </p>
              <Link href="/courses/cloud" className="text-[#F59E0B]">
                View Cloud Courses →
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Internship Section */}
      <div className="bg-[#FEF3C7]">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-[#1F2937] sm:text-4xl">
              Launch Your Career with Our Internship Program
            </h2>
            <p className="mt-4 text-lg text-[#4B5563]">
              Gain real-world experience through our internship program. Open for both freshers and professionals.
            </p>
            <div className="mt-8">
              <Link href="/internship" className="inline-block bg-[#F59E0B] py-3 px-8 border border-transparent rounded-md text-base font-medium text-white hover:bg-transparent">
                Learn More About Internships
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 