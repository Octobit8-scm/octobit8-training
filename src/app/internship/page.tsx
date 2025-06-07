'use client'

import React from 'react'
import Link from 'next/link'
import { courses } from '../../data/courses'

export default function InternshipPage() {
  const internshipPrograms = [
    {
      title: 'Fresher Internship Program',
      description: 'Perfect for recent graduates and those starting their career in tech.',
      features: [
        'Hands-on project experience',
        'Mentorship from industry experts',
        'Real-world problem solving',
        'Certificate of completion',
        'Potential job opportunities'
      ]
    },
    {
      title: 'Professional Internship Program',
      description: 'For experienced professionals looking to upskill or transition to new technologies.',
      features: [
        'Advanced project work',
        'Industry best practices',
        'Networking opportunities',
        'Certificate of completion',
        'Career advancement support'
      ]
    }
  ]

  return (
    <div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Internship Programs</h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {internshipPrograms.map((program, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">{program.title}</h2>
              <p className="text-gray-600 mb-6">{program.description}</p>
              <ul className="space-y-3">
                {program.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center text-gray-600">
                    <svg className="h-5 w-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="bg-blue-50 rounded-lg p-8 mb-16">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">Available Internship Courses</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {courses.map((course) => (
              <div key={course.id} className="bg-white rounded-lg p-6 shadow hover:shadow-md transition-shadow">
                <h3 className="text-lg font-medium text-gray-900 mb-2">{course.name}</h3>
                <p className="text-gray-600 text-sm mb-4">{course.description}</p>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-sm text-gray-500">{course.duration}</span>
                  <span className="text-xl font-semibold text-blue-600">₹{course.price.toLocaleString()}</span>
                </div>
                <Link
                  href={`/contact?course=${encodeURIComponent(course.name)}`}
                  className="block w-full text-center bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors"
                >
                  Enroll Now
                </Link>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">Ready to Start Your Journey?</h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Join our internship program and gain hands-on experience with industry experts. 
            Choose your preferred course and start your journey towards a successful career in tech.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-blue-600 text-white px-8 py-4 rounded-md text-lg font-medium hover:bg-blue-700"
          >
            Apply Now
          </Link>
        </div>
      </div>
    </div>
  )
} 