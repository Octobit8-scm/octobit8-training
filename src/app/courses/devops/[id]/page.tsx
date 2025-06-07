'use client'

import React from 'react'
import Link from 'next/link'
import { getCourseById } from '../../../../data/courses'

interface CoursePageProps {
  params: {
    id: string
  }
}

export default function CoursePage({ params }: CoursePageProps) {
  const course = getCourseById(params.id)

  if (!course) {
    return (
      <div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <h1 className="text-4xl font-bold text-[#1F2937] mb-8">Course Not Found</h1>
          <Link href="/courses/devops" className="text-[#F59E0B] hover:text-[#D97706]">
            ← Back to DevOps Courses
          </Link>
        </div>
      </div>
    )
  }

  const handleDownloadCurriculum = () => {
    // Create curriculum content
    const curriculum = {
      courseName: course.name,
      description: course.description,
      duration: course.duration,
      level: course.level,
      modules: course.modules,
      prerequisites: course.prerequisites,
      tools: course.tools,
      finalProject: course.finalProject
    }

    // Convert to JSON and create blob
    const blob = new Blob([JSON.stringify(curriculum, null, 2)], { type: 'application/json' })
    const url = URL.createObjectURL(blob)
    
    // Create download link and trigger click
    const link = document.createElement('a')
    link.href = url
    link.download = `${course.id}-curriculum.json`
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
    URL.revokeObjectURL(url)
  }

  // Sample testimonials - In a real app, these would come from a database
  const testimonials = [
    {
      name: "Rahul Sharma",
      role: "DevOps Engineer",
      company: "Tech Solutions Inc.",
      image: "https://ui-avatars.com/api/?name=Rahul+Sharma&background=0D8ABC&color=fff",
      quote: "The Jenkins CI course was comprehensive and practical. The hands-on labs helped me implement CI/CD pipelines at my workplace immediately."
    },
    {
      name: "Priya Patel",
      role: "Software Developer",
      company: "Innovate Tech",
      image: "https://ui-avatars.com/api/?name=Priya+Patel&background=0D8ABC&color=fff",
      quote: "Great course structure and expert instructors. The final project was challenging but helped me gain real-world experience."
    },
    {
      name: "Amit Kumar",
      role: "System Administrator",
      company: "Global Systems",
      image: "https://ui-avatars.com/api/?name=Amit+Kumar&background=0D8ABC&color=fff",
      quote: "The course covered everything from basics to advanced topics. The support team was always available to help with any issues."
    }
  ]

  // Trainer profile data
  const trainer = {
    name: "Abhishek Srivastava",
    role: "AWS Solutions Architect & Trainer",
    image: "https://ui-avatars.com/api/?name=Abhishek+Srivastava&background=0D8ABC&color=fff",
    experience: "10+ years",
    expertise: [
      "AWS",
      "Python",
      "Serverless Architecture",
      "DevOps",
      "Cloud Computing",
      "Boto3",
      "AWS Lambda",
      "Infrastructure as Code"
    ],
    projects: [
      "Led AWS cloud migration initiatives for enterprise clients",
      "Developed serverless applications using AWS Lambda and Python",
      "Created automated deployment pipelines using AWS services",
      "Implemented scalable cloud architectures using AWS best practices"
    ],
    bio: "Experienced AWS Solutions Architect and Python developer specializing in cloud architecture and serverless applications. AWS Certified Solutions Architect with expertise in building scalable cloud solutions. Passionate about teaching and helping others master AWS development with Python."
  }

  return (
    <div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Link href="/courses/devops" className="text-[#F59E0B] hover:text-[#D97706] mb-8 inline-block">
          ← Back to DevOps Courses
        </Link>

        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          {/* Course Header with Preview */}
          <div className="relative">
            <div className="h-48 bg-gradient-to-r from-[#F59E0B] to-[#D97706]">
              <div className="absolute inset-0 flex items-center justify-center">
                <svg className="w-24 h-24 text-white opacity-20" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                </svg>
              </div>
            </div>
            <div className="p-8">
              <div className="flex items-center justify-between mb-4">
                <h1 className="text-4xl font-bold text-[#1F2937]">{course.name}</h1>
                <button
                  onClick={handleDownloadCurriculum}
                  className="flex items-center px-4 py-2 bg-gray-100 text-gray-700 rounded-md hover:bg-gray-200 transition-colors"
                >
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                  </svg>
                  Download Curriculum
                </button>
              </div>
              <p className="text-xl text-[#4B5563] mb-6">{course.description}</p>
              
              <div className="flex items-center text-sm text-[#6B7280] mb-8">
                <div className="flex items-center mr-6">
                  <svg className="w-5 h-5 mr-2 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  {course.duration}
                </div>
                <div className="flex items-center mr-6">
                  <svg className="w-5 h-5 mr-2 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="capitalize">{course.level}</span>
                </div>
                <div className="flex items-center">
                  <svg className="w-5 h-5 mr-2 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="text-xl font-semibold text-blue-600">₹{course.price.toLocaleString()}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Trainer Profile */}
          <div className="border-t border-gray-200">
            <div className="p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Meet Your Trainer</h2>
              <div className="bg-gray-50 rounded-lg p-6">
                <div className="flex flex-col md:flex-row items-start gap-6">
                  <div className="flex-shrink-0">
                    <img
                      src={trainer.image}
                      alt={trainer.name}
                      className="w-32 h-32 rounded-full border-4 border-white shadow-lg"
                    />
                  </div>
                  <div className="flex-grow">
                    <div className="flex items-center justify-between mb-4">
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900">{trainer.name}</h3>
                        <p className="text-lg text-gray-600">{trainer.role}</p>
                      </div>
                      <div className="text-right">
                        <p className="text-sm text-gray-500">Experience</p>
                        <p className="text-lg font-semibold text-blue-600">{trainer.experience}</p>
                      </div>
                    </div>
                    <p className="text-gray-600 mb-6">{trainer.bio}</p>
                    
                    <div className="flex items-center mb-6">
                      <a
                        href="https://www.linkedin.com/in/abhishek-srivastava-devops-consultant/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-blue-600 hover:text-blue-800"
                      >
                        <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                        </svg>
                        View LinkedIn Profile
                      </a>
                    </div>
                    
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="text-sm font-semibold text-gray-700 mb-3">Expertise</h4>
                        <div className="flex flex-wrap gap-2">
                          {trainer.expertise.map((skill, index) => (
                            <span key={index} className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm">
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>
                      <div>
                        <h4 className="text-sm font-semibold text-gray-700 mb-3">Key Projects</h4>
                        <ul className="space-y-2">
                          {trainer.projects.map((project, index) => (
                            <li key={index} className="flex items-start text-gray-600">
                              <svg className="w-5 h-5 text-blue-600 mr-2 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                              </svg>
                              <span>{project}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Course Preview Video */}
          <div className="border-t border-gray-200">
            <div className="p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Course Preview</h2>
              <div className="aspect-w-16 aspect-h-9 mb-8">
                <iframe
                  className="w-full h-96 rounded-lg"
                  src="https://www.youtube.com/embed/your-video-id"
                  title="Jenkins CI Course Preview"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-gray-50 rounded-lg p-6">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                    <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Hands-on Labs</h3>
                  <p className="text-gray-600">Practical exercises and real-world scenarios to reinforce learning</p>
                </div>
                <div className="bg-gray-50 rounded-lg p-6">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                    <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Comprehensive Materials</h3>
                  <p className="text-gray-600">Detailed documentation, code samples, and reference materials</p>
                </div>
                <div className="bg-gray-50 rounded-lg p-6">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                    <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Expert Support</h3>
                  <p className="text-gray-600">Access to instructors and community support throughout the course</p>
                </div>
              </div>
            </div>
          </div>

          {/* Course Schedule */}
          <div className="border-t border-gray-200">
            <div className="p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Course Schedule</h2>
              <div className="relative">
                <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gray-200"></div>
                {course.modules?.map((module, index) => (
                  <div key={index} className="relative pl-12 pb-8">
                    <div className="absolute left-0 w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white font-semibold">
                      {index + 1}
                    </div>
                    <div className="bg-gray-50 rounded-lg p-6">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="text-lg font-semibold text-gray-900">{module.title}</h3>
                        <span className="text-sm text-gray-500">{module.duration}</span>
                      </div>
                      <p className="text-gray-600 mb-4">Week {index + 1}</p>
                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <h4 className="text-sm font-semibold text-gray-700 mb-2">Topics</h4>
                          <ul className="list-disc list-inside text-gray-600 space-y-1">
                            {module.topics.slice(0, 3).map((topic, idx) => (
                              <li key={idx}>{topic}</li>
                            ))}
                          </ul>
                        </div>
                        <div>
                          <h4 className="text-sm font-semibold text-gray-700 mb-2">Activities</h4>
                          <ul className="list-disc list-inside text-gray-600 space-y-1">
                            {module.activities.slice(0, 3).map((activity, idx) => (
                              <li key={idx}>{activity}</li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Course Modules */}
          {course.modules && (
            <div className="border-t border-gray-200">
              <div className="p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Course Modules</h2>
                <div className="space-y-6">
                  {course.modules.map((module, index) => (
                    <div key={index} className="border-l-4 border-blue-500 pl-4">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="text-lg font-semibold text-gray-900">{module.title}</h3>
                        <span className="text-sm text-gray-500">{module.duration}</span>
                      </div>
                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <h4 className="text-sm font-semibold text-gray-700 mb-2">Topics</h4>
                          <ul className="list-disc list-inside text-gray-600 space-y-1">
                            {module.topics.map((topic, idx) => (
                              <li key={idx}>{topic}</li>
                            ))}
                          </ul>
                        </div>
                        <div>
                          <h4 className="text-sm font-semibold text-gray-700 mb-2">Activities</h4>
                          <ul className="list-disc list-inside text-gray-600 space-y-1">
                            {module.activities.map((activity, idx) => (
                              <li key={idx}>{activity}</li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Prerequisites */}
          {course.prerequisites && (
            <div className="border-t border-gray-200">
              <div className="p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Prerequisites</h2>
                <ul className="list-disc list-inside text-gray-600 space-y-2">
                  {course.prerequisites.map((prerequisite, index) => (
                    <li key={index}>{prerequisite}</li>
                  ))}
                </ul>
              </div>
            </div>
          )}

          {/* Tools & Technologies */}
          {course.tools && (
            <div className="border-t border-gray-200">
              <div className="p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Tools & Technologies</h2>
                <div className="flex flex-wrap gap-2">
                  {course.tools.map((tool, index) => (
                    <span key={index} className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Final Project */}
          {course.finalProject && (
            <div className="border-t border-gray-200">
              <div className="p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Final Project</h2>
                <div className="bg-gray-50 rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">{course.finalProject.objective}</h3>
                  <div className="space-y-4">
                    <div>
                      <h4 className="text-lg font-medium text-gray-900 mb-2">Requirements</h4>
                      <ul className="list-disc list-inside text-gray-600 space-y-2">
                        {course.finalProject.requirements.map((req, index) => (
                          <li key={index}>{req}</li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="text-lg font-medium text-gray-900 mb-2">Evaluation Criteria</h4>
                      <ul className="list-disc list-inside text-gray-600 space-y-2">
                        {course.finalProject.evaluationCriteria.map((criteria, index) => (
                          <li key={index}>{criteria}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Enrollment Form */}
          <div className="border-t border-gray-200">
            <div className="p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Enroll in This Course</h2>
              <div className="bg-gray-50 rounded-lg p-6">
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                        Full Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                        Email Address
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="experience" className="block text-sm font-medium text-gray-700 mb-1">
                        Years of Experience
                      </label>
                      <select
                        id="experience"
                        name="experience"
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                        required
                      >
                        <option value="">Select experience</option>
                        <option value="0-1">0-1 years</option>
                        <option value="1-3">1-3 years</option>
                        <option value="3-5">3-5 years</option>
                        <option value="5+">5+ years</option>
                      </select>
                    </div>
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                      Additional Information
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                      placeholder="Tell us about your goals and expectations from this course..."
                    ></textarea>
                  </div>
                  <div className="flex items-center justify-between">
                    <button
                      type="submit"
                      className="bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition-colors"
                    >
                      Submit Enrollment
                    </button>
                    <Link
                      href={`/contact?course=${encodeURIComponent(course.name)}`}
                      className="text-blue-600 hover:text-blue-800 flex items-center"
                    >
                      <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                      Contact Us
                    </Link>
                  </div>
                </form>
              </div>
            </div>
          </div>

          {/* Testimonials */}
          <div className="border-t border-gray-200">
            <div className="p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Student Testimonials</h2>
              <div className="grid md:grid-cols-3 gap-6">
                {testimonials.map((testimonial, index) => (
                  <div key={index} className="bg-gray-50 rounded-lg p-6">
                    <div className="flex items-center mb-4">
                      <img
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="w-12 h-12 rounded-full mr-4"
                      />
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900">{testimonial.name}</h3>
                        <p className="text-sm text-gray-600">{testimonial.role} at {testimonial.company}</p>
                      </div>
                    </div>
                    <p className="text-gray-600 italic">"{testimonial.quote}"</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Enrollment Button */}
          <div className="border-t border-gray-200">
            <div className="p-8 text-center">
              <Link
                href={`/contact?course=${encodeURIComponent(course.name)}`}
                className="inline-block bg-blue-600 text-white px-8 py-3 rounded-md text-lg font-semibold hover:bg-blue-700 transition-colors"
              >
                Enroll Now
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 