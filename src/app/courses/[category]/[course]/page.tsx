'use client'

import React from 'react'
import Link from 'next/link'
import Navigation from '@/components/Navigation'

interface CoursePageProps {
  params: {
    category: string
    course: string
  }
}

const CoursePage = ({ params }: CoursePageProps) => {
  const { category, course } = params

  // This would typically come from a database or API
  const courseData = {
    title: course.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' '),
    description: `Comprehensive training in ${course.split('-').join(' ')}. Learn from industry experts with hands-on experience.`,
    modes: [
      {
        type: 'Live Training',
        description: 'Interactive sessions with expert instructors',
        features: [
          'Real-time doubt clearing',
          'Hands-on practice sessions',
          'Group discussions',
          'Certificate of completion'
        ]
      },
      {
        type: 'Self-Paced',
        description: 'Learn at your own pace with recorded content',
        features: [
          'Lifetime access to course content',
          'Downloadable resources',
          'Practice exercises',
          'Certificate of completion'
        ]
      }
    ],
    content: [
      'Introduction and Setup',
      'Core Concepts',
      'Advanced Topics',
      'Best Practices',
      'Real-world Projects',
      'Certification Preparation'
    ],
    videoId: 'dQw4w9WgXcQ' // Replace with actual course video ID
  }

  return (
    <div>
      <Navigation />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-4xl font-bold text-[#1F2937] mb-8">{courseData.title}</h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Course Description */}
          <div>
            <p className="text-lg text-[#4B5563] mb-8">{courseData.description}</p>
            
            {/* Training Modes */}
            <div className="space-y-8">
              {courseData.modes.map((mode, index) => (
                <div key={index} className="bg-white rounded-lg shadow-lg p-6 border border-[#E5E7EB]">
                  <h3 className="text-xl font-semibold text-[#1F2937] mb-4">{mode.type}</h3>
                  <p className="text-[#4B5563] mb-4">{mode.description}</p>
                  <ul className="list-disc list-inside space-y-2">
                    {mode.features.map((feature, idx) => (
                      <li key={idx} className="text-[#4B5563]">{feature}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Course Content and Video */}
          <div className="space-y-8">
            {/* Course Content */}
            <div className="bg-white rounded-lg shadow-lg p-6 border border-[#E5E7EB]">
              <h3 className="text-xl font-semibold text-[#1F2937] mb-4">Course Content</h3>
              <ul className="space-y-3">
                {courseData.content.map((item, index) => (
                  <li key={index} className="flex items-center text-[#4B5563]">
                    <span className="mr-2">•</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Course Video */}
            <div className="bg-white rounded-lg shadow-lg p-6 border border-[#E5E7EB]">
              <h3 className="text-xl font-semibold text-[#1F2937] mb-4">Course Preview</h3>
              <div className="aspect-w-16 aspect-h-9">
                <iframe
                  className="w-full h-96 rounded-lg"
                  src={`https://www.youtube.com/embed/${courseData.videoId}`}
                  title="Course Preview"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          </div>
        </div>

        {/* Internship Section */}
        <div className="mt-12 bg-[#FEF3C7] rounded-lg p-8">
          <h3 className="text-2xl font-semibold text-[#1F2937] mb-4">Internship Opportunity</h3>
          <p className="text-[#4B5563] mb-6">
            Get hands-on experience through our internship program. Open for both freshers and professionals.
          </p>
          <Link
            href="/internship"
            className="inline-block bg-[#F59E0B] text-white px-6 py-3 rounded-md hover:bg-[#D97706] transition-colors"
          >
            Learn More About Internship
          </Link>
        </div>
      </div>
    </div>
  )
}

export default CoursePage 