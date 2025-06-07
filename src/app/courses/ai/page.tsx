'use client'

import React from 'react'
import Link from 'next/link'

const courses = [
  {
    id: 'ai-fundamentals',
    title: 'AI Fundamentals',
    description: 'Learn the basics of artificial intelligence, machine learning, and deep learning.',
    duration: '8 weeks',
    level: 'Beginner',
    topics: ['Machine Learning Basics', 'Neural Networks', 'Deep Learning', 'AI Ethics']
  },
  {
    id: 'agentic-ai-development',
    title: 'Agentic AI Development',
    description: 'Master the development of autonomous AI agents and intelligent systems.',
    duration: '12 weeks',
    level: 'Advanced',
    topics: ['Reinforcement Learning', 'Multi-Agent Systems', 'Autonomous Decision Making', 'AI Safety']
  },
  {
    id: 'ai-engineering',
    title: 'AI Engineering',
    description: 'Learn to build and deploy production-ready AI systems.',
    duration: '10 weeks',
    level: 'Intermediate',
    topics: ['MLOps', 'Model Deployment', 'AI Infrastructure', 'Performance Optimization']
  }
]

export default function AICoursesPage() {
  return (
    <div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-[#1F2937] mb-4">Agentic AI Development Courses</h1>
          <p className="text-xl text-[#4B5563] max-w-3xl mx-auto">
            Master the art of building intelligent systems and autonomous AI agents. Learn from industry experts and get hands-on experience with cutting-edge technologies.
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
                  href={`/courses/ai/${course.id}`}
                  className="block w-full text-center bg-[#F59E0B] text-white px-6 py-2 rounded-md hover:bg-[#D97706] transition-colors"
                >
                  Learn More
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16">
          <h2 className="text-2xl font-bold text-[#1F2937] mb-4">Why Learn AI Development?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-semibold text-[#1F2937] mb-2">Industry Demand</h3>
              <p className="text-[#4B5563]">
                AI and machine learning skills are in high demand across industries. Our courses prepare you for exciting career opportunities in this rapidly growing field.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-[#1F2937] mb-2">Hands-on Experience</h3>
              <p className="text-[#4B5563]">
                Get practical experience with real-world projects and case studies. Learn to build and deploy AI systems that solve complex problems.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-[#1F2937] mb-2">Expert Instructors</h3>
              <p className="text-[#4B5563]">
                Learn from industry professionals with years of experience in AI development. Get insights into best practices and real-world applications.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-[#1F2937] mb-2">Career Support</h3>
              <p className="text-[#4B5563]">
                Access career resources, job placement assistance, and networking opportunities to help you launch your career in AI development.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 