'use client'

import React from 'react'
import Link from 'next/link'

const courses = [
  {
    id: 'frontend-development',
    title: 'Frontend Development',
    description: 'Master modern frontend technologies and build responsive, interactive web applications.',
    duration: '10 weeks',
    level: 'Beginner to Intermediate',
    topics: ['HTML5 & CSS3', 'JavaScript', 'React', 'Next.js', 'Tailwind CSS']
  },
  {
    id: 'backend-development',
    title: 'Backend Development',
    description: 'Learn to build robust and scalable backend systems using modern technologies.',
    duration: '12 weeks',
    level: 'Intermediate',
    topics: ['Node.js', 'Express', 'Databases', 'API Design', 'Authentication']
  },
  {
    id: 'fullstack-development',
    title: 'Full Stack Development',
    description: 'Become a full stack developer by mastering both frontend and backend technologies.',
    duration: '16 weeks',
    level: 'Advanced',
    topics: ['Full Stack Architecture', 'DevOps', 'Testing', 'Deployment', 'Performance Optimization']
  }
]

export default function WebCoursesPage() {
  return (
    <div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-[#1F2937] mb-4">Web Development Courses</h1>
          <p className="text-xl text-[#4B5563] max-w-3xl mx-auto">
            Learn to build modern, responsive, and scalable web applications. Master both frontend and backend technologies to become a full stack developer.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course) => (
            <div key={course.id} className="bg-white rounded-lg shadow-lg overflow-hidden border border-[#E5E7EB]">
              <div className="p-6">
                <h2 className="text-2xl font-bold text-[#1F2937] mb-2">{course.title}</h2>
                <p className="text-[#4B5563] mb-4">{course.description}</p>
                <div className="flex items-center text-sm text-[#6B7280] mb-4">
                  <span className="mr-4">{course.duration}</span>
                  <span>{course.level}</span>
                </div>
                <div className="mb-6">
                  <h3 className="text-sm font-semibold text-[#1F2937] mb-2">Key Topics:</h3>
                  <ul className="list-disc list-inside text-[#4B5563]">
                    {course.topics.map((topic, index) => (
                      <li key={index}>{topic}</li>
                    ))}
                  </ul>
                </div>
                <Link
                  href={`/courses/web/${course.id}`}
                  className="block w-full text-center bg-[#F59E0B] text-white px-6 py-2 rounded-md hover:bg-[#D97706] transition-colors"
                >
                  Learn More
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16">
          <h2 className="text-2xl font-bold text-[#1F2937] mb-4">Why Learn Web Development?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-semibold text-[#1F2937] mb-2">High Demand</h3>
              <p className="text-[#4B5563]">
                Web development skills are in constant demand. Our courses prepare you for a rewarding career in this dynamic field.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-[#1F2937] mb-2">Practical Projects</h3>
              <p className="text-[#4B5563]">
                Build real-world projects and create a portfolio that showcases your skills to potential employers.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-[#1F2937] mb-2">Modern Technologies</h3>
              <p className="text-[#4B5563]">
                Learn the latest web development technologies and frameworks used by industry leaders.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-[#1F2937] mb-2">Career Growth</h3>
              <p className="text-[#4B5563]">
                Access career resources, mentorship, and networking opportunities to accelerate your career in web development.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 