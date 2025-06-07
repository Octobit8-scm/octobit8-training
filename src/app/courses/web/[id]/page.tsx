'use client'

import React from 'react'
import Link from 'next/link'

const courses = {
  'frontend-development': {
    title: 'Frontend Development',
    description: 'Master modern frontend technologies and build responsive, interactive web applications.',
    duration: '10 weeks',
    level: 'Beginner to Intermediate',
    topics: ['HTML5 & CSS3', 'JavaScript', 'React', 'Next.js', 'Tailwind CSS'],
    instructor: {
      name: 'Emily Chen',
      title: 'Senior Frontend Developer',
      bio: 'Emily has over 8 years of experience in frontend development and has worked with major tech companies to build scalable web applications.',
      image: '/instructors/emily-chen.jpg'
    },
    curriculum: [
      {
        week: 1,
        title: 'HTML5 & CSS3 Fundamentals',
        topics: [
          'Modern HTML5 Features',
          'CSS3 Layouts and Flexbox',
          'Responsive Design',
          'CSS Grid'
        ]
      },
      {
        week: 2,
        title: 'JavaScript Essentials',
        topics: [
          'ES6+ Features',
          'DOM Manipulation',
          'Async Programming',
          'Modern JavaScript Patterns'
        ]
      },
      {
        week: 3,
        title: 'React Development',
        topics: [
          'React Components',
          'Hooks and State Management',
          'React Router',
          'Performance Optimization'
        ]
      },
      {
        week: 4,
        title: 'Next.js and Modern Frameworks',
        topics: [
          'Server-Side Rendering',
          'Static Site Generation',
          'API Routes',
          'Deployment Strategies'
        ]
      }
    ],
    prerequisites: [
      'Basic computer skills',
      'No prior programming experience required',
      'Dedication to learn and practice'
    ],
    tools: [
      'VS Code',
      'Git',
      'Chrome DevTools',
      'npm',
      'Vercel'
    ]
  },
  'backend-development': {
    title: 'Backend Development',
    description: 'Learn to build robust and scalable backend systems using modern technologies.',
    duration: '12 weeks',
    level: 'Intermediate',
    topics: ['Node.js', 'Express', 'Databases', 'API Design', 'Authentication'],
    instructor: {
      name: 'David Kumar',
      title: 'Backend Architect',
      bio: 'David specializes in building scalable backend systems and has led the development of several high-traffic applications.',
      image: '/instructors/david-kumar.jpg'
    },
    curriculum: [
      {
        week: 1,
        title: 'Node.js Fundamentals',
        topics: [
          'Node.js Architecture',
          'Event Loop',
          'Streams and Buffers',
          'Error Handling'
        ]
      },
      {
        week: 2,
        title: 'Express.js and API Development',
        topics: [
          'RESTful API Design',
          'Middleware',
          'Routing',
          'API Documentation'
        ]
      },
      {
        week: 3,
        title: 'Database Management',
        topics: [
          'SQL and NoSQL Databases',
          'MongoDB',
          'PostgreSQL',
          'Database Optimization'
        ]
      },
      {
        week: 4,
        title: 'Security and Authentication',
        topics: [
          'JWT Authentication',
          'OAuth 2.0',
          'Security Best Practices',
          'API Security'
        ]
      }
    ],
    prerequisites: [
      'Basic JavaScript knowledge',
      'Understanding of web development concepts',
      'Familiarity with command line'
    ],
    tools: [
      'Node.js',
      'Express',
      'MongoDB',
      'PostgreSQL',
      'Postman'
    ]
  },
  'fullstack-development': {
    title: 'Full Stack Development',
    description: 'Become a full stack developer by mastering both frontend and backend technologies.',
    duration: '16 weeks',
    level: 'Advanced',
    topics: ['Full Stack Architecture', 'DevOps', 'Testing', 'Deployment', 'Performance Optimization'],
    instructor: {
      name: 'Sarah Johnson',
      title: 'Full Stack Lead',
      bio: 'Sarah has extensive experience in full stack development and has led multiple successful projects from concept to deployment.',
      image: '/instructors/sarah-johnson.jpg'
    },
    curriculum: [
      {
        week: 1,
        title: 'Full Stack Architecture',
        topics: [
          'System Design',
          'Microservices',
          'API Gateway',
          'Service Communication'
        ]
      },
      {
        week: 2,
        title: 'DevOps and Deployment',
        topics: [
          'CI/CD Pipelines',
          'Docker',
          'Kubernetes',
          'Cloud Platforms'
        ]
      },
      {
        week: 3,
        title: 'Testing and Quality Assurance',
        topics: [
          'Unit Testing',
          'Integration Testing',
          'E2E Testing',
          'Test Automation'
        ]
      },
      {
        week: 4,
        title: 'Performance and Optimization',
        topics: [
          'Performance Monitoring',
          'Caching Strategies',
          'Load Balancing',
          'Security Optimization'
        ]
      }
    ],
    prerequisites: [
      'Experience with frontend development',
      'Basic backend knowledge',
      'Understanding of databases',
      'Familiarity with Git'
    ],
    tools: [
      'React',
      'Node.js',
      'Docker',
      'AWS',
      'Jest'
    ]
  }
}

interface CoursePageProps {
  params: {
    id: string
  }
}

export default function CoursePage({ params }: CoursePageProps) {
  const course = courses[params.id as keyof typeof courses]

  if (!course) {
    return (
      <div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">Course Not Found</h1>
          <Link href="/courses/web" className="text-blue-600 hover:text-blue-800">
            ← Back to Web Development Courses
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Link href="/courses/web" className="text-blue-600 hover:text-blue-800 mb-8 inline-block">
          ← Back to Web Development Courses
        </Link>

        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="p-8">
            <h1 className="text-4xl font-bold text-[#1F2937] mb-4">{course.title}</h1>
            <p className="text-xl text-[#4B5563] mb-6">{course.description}</p>
            
            <div className="flex items-center text-sm text-[#6B7280] mb-8">
              <span className="mr-4">{course.duration}</span>
              <span>{course.level}</span>
            </div>

            {/* Instructor Section */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-[#1F2937] mb-4">Instructor</h2>
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 rounded-full bg-[#FEF3C7]"></div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-[#1F2937]">{course.instructor.name}</h3>
                  <p className="text-[#4B5563]">{course.instructor.title}</p>
                  <p className="text-[#4B5563] mt-2">{course.instructor.bio}</p>
                </div>
              </div>
            </div>

            {/* Curriculum Section */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-[#1F2937] mb-4">Curriculum</h2>
              <div className="space-y-6">
                {course.curriculum.map((week) => (
                  <div key={week.week} className="border-l-4 border-[#F59E0B] pl-4">
                    <h3 className="text-lg font-semibold text-[#1F2937] mb-2">
                      Week {week.week}: {week.title}
                    </h3>
                    <ul className="list-disc list-inside text-[#4B5563]">
                      {week.topics.map((topic, index) => (
                        <li key={index}>{topic}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            {/* Prerequisites Section */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-[#1F2937] mb-4">Prerequisites</h2>
              <ul className="list-disc list-inside text-[#4B5563]">
                {course.prerequisites.map((prerequisite, index) => (
                  <li key={index}>{prerequisite}</li>
                ))}
              </ul>
            </div>

            {/* Tools Section */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-[#1F2937] mb-4">Tools & Technologies</h2>
              <div className="flex flex-wrap gap-2">
                {course.tools.map((tool, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-[#FEF3C7] text-[#92400E] rounded-full text-sm"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>

            {/* Enrollment Button */}
            <div className="text-center">
              <button className="bg-[#F59E0B] text-white px-8 py-3 rounded-md text-lg font-semibold hover:bg-[#D97706] transition-colors">
                Enroll Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 