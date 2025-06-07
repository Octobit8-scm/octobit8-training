'use client'

import React from 'react'
import Link from 'next/link'
import { getCoursesByCategory } from '../../../data/courses'

export default function CloudCourses() {
  const cloudCourses = getCoursesByCategory('cloud')

  return (
    <div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-4xl font-bold text-[#1F2937] mb-8">Cloud Computing Courses</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {cloudCourses.map((course) => (
            <div
              key={course.id}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 border border-[#E5E7EB]"
            >
              <div className="p-6">
                <h3 className="text-xl font-semibold text-[#1F2937] mb-2">{course.name}</h3>
                <p className="text-[#4B5563] mb-4">{course.description}</p>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-sm text-[#6B7280]">{course.duration}</span>
                  <span className="text-xl font-semibold text-[#F59E0B]">₹{course.price.toLocaleString()}</span>
                </div>
                <div className="flex items-center justify-between gap-4">
                  <Link
                    href={`/courses/cloud/${course.id}`}
                    className="text-[#F59E0B] hover:text-[#D97706] flex-1 text-center"
                  >
                    Learn More
                  </Link>
                  <Link
                    href={`/contact?course=${encodeURIComponent(course.name)}`}
                    className="bg-[#F59E0B] text-white px-6 py-2 rounded-md hover:bg-[#D97706] transition-colors flex-1 text-center"
                  >
                    Enroll Now
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
} 