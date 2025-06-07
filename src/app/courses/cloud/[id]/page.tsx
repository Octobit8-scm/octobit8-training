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
          <h1 className="text-4xl font-bold text-gray-900 mb-8">Course Not Found</h1>
          <Link href="/courses/cloud" className="text-blue-600 hover:text-blue-800">
            ← Back to Cloud Courses
          </Link>
        </div>
      </div>
    )
  }

  const getCloudProvider = (id: string) => {
    if (id.includes('aws')) return 'AWS'
    if (id.includes('azure')) return 'Azure'
    if (id.includes('gcp')) return 'GCP'
    return 'Cloud'
  }

  const cloudProvider = getCloudProvider(course.id)

  return (
    <div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Link href="/courses/cloud" className="text-blue-600 hover:text-blue-800 mb-8 inline-block">
          ← Back to Cloud Courses
        </Link>

        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          {/* Course Header with Preview */}
          <div className="relative">
            <div className="h-48 bg-gradient-to-r from-blue-600 to-blue-800">
              <div className="absolute inset-0 flex items-center justify-center">
                <svg className="w-24 h-24 text-white opacity-20" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                </svg>
              </div>
            </div>
          </div>

          <div className="p-8">
            <h1 className="text-4xl font-bold text-[#1F2937] mb-4">Azure DevOps Course</h1>
            <p className="text-xl text-[#4B5563] mb-6">
              A comprehensive course designed to equip participants with the knowledge and skills to leverage Azure DevOps for end-to-end software development lifecycle management. Learn to use Azure Boards, Repos, Pipelines, Test Plans, and Artifacts through hands-on labs, real-world scenarios, and project-based learning.
            </p>
            
            <div className="flex items-center text-sm text-[#6B7280] mb-8">
              <div className="flex items-center mr-6">
                <svg className="w-5 h-5 mr-2 text-[#F59E0B]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                40 hours (5 days or 8 weeks)
              </div>
              <div className="flex items-center mr-6">
                <svg className="w-5 h-5 mr-2 text-[#F59E0B]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className="capitalize">Intermediate</span>
              </div>
              <div className="flex items-center">
                <svg className="w-5 h-5 mr-2 text-[#F59E0B]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className="text-xl font-semibold text-[#F59E0B]">₹49,999</span>
              </div>
            </div>

            {/* Course Overview */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-[#1F2937] mb-4">Course Overview</h2>
              <div className="bg-white rounded-lg p-6 shadow-sm border border-[#E5E7EB]">
                <h3 className="text-lg font-semibold text-[#1F2937] mb-2">Target Audience</h3>
                <p className="text-[#4B5563] mb-4">Software developers, DevOps engineers, system administrators, project managers, QA engineers, and IT professionals transitioning to DevOps roles. Perfect for teams looking to implement or improve their DevOps practices using Azure DevOps.</p>
                
                <h3 className="text-lg font-semibold text-[#1F2937] mb-2">Learning Objectives</h3>
                <ul className="list-disc list-inside text-[#4B5563] space-y-2">
                  <li>Understand DevOps principles and Azure DevOps services</li>
                  <li>Master project management with Azure Boards</li>
                  <li>Implement source control using Azure Repos and Git</li>
                  <li>Build and deploy applications with Azure Pipelines</li>
                  <li>Manage quality assurance with Azure Test Plans</li>
                  <li>Handle package management using Azure Artifacts</li>
                </ul>
              </div>
            </div>

            {/* Course Structure */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-[#1F2937] mb-4">Course Structure</h2>
              <div className="space-y-6">
                <div className="border-l-4 border-[#F59E0B] pl-4">
                  <h3 className="text-lg font-semibold text-[#1F2937] mb-2">Module 1: Introduction to DevOps and Azure DevOps</h3>
                  <p className="text-[#4B5563] mb-2">Duration: 3 hours</p>
                  <ul className="list-disc list-inside text-[#4B5563]">
                    <li>DevOps principles and practices</li>
                    <li>Azure DevOps services overview</li>
                    <li>Setting up organization and project</li>
                    <li>Navigating Azure DevOps interface</li>
                    <li>Hands-on lab: Account setup and exploration</li>
                  </ul>
                </div>

                <div className="border-l-4 border-[#F59E0B] pl-4">
                  <h3 className="text-lg font-semibold text-[#1F2937] mb-2">Module 2: Azure Boards - Agile Project Management</h3>
                  <p className="text-[#4B5563] mb-2">Duration: 6 hours</p>
                  <ul className="list-disc list-inside text-[#4B5563]">
                    <li>Agile, Scrum, and Kanban methodologies</li>
                    <li>Work items and backlog management</li>
                    <li>Board configuration and customization</li>
                    <li>Dashboards and reporting</li>
                    <li>Hands-on lab: Project setup and tracking</li>
                  </ul>
                </div>

                <div className="border-l-4 border-[#F59E0B] pl-4">
                  <h3 className="text-lg font-semibold text-[#1F2937] mb-2">Module 3: Azure Repos - Source Control Management</h3>
                  <p className="text-[#4B5563] mb-2">Duration: 6 hours</p>
                  <ul className="list-disc list-inside text-[#4B5563]">
                    <li>Git and version control fundamentals</li>
                    <li>Repository setup and management</li>
                    <li>Branching and merging strategies</li>
                    <li>Pull requests and code reviews</li>
                    <li>Hands-on lab: Git workflow implementation</li>
                  </ul>
                </div>

                <div className="border-l-4 border-[#F59E0B] pl-4">
                  <h3 className="text-lg font-semibold text-[#1F2937] mb-2">Module 4: Azure Pipelines - CI/CD Implementation</h3>
                  <p className="text-[#4B5563] mb-2">Duration: 10 hours</p>
                  <ul className="list-disc list-inside text-[#4B5563]">
                    <li>CI/CD pipeline fundamentals</li>
                    <li>Build and release pipeline creation</li>
                    <li>YAML and classic editor usage</li>
                    <li>Multi-stage pipeline implementation</li>
                    <li>Hands-on lab: End-to-end pipeline setup</li>
                  </ul>
                </div>

                <div className="border-l-4 border-[#F59E0B] pl-4">
                  <h3 className="text-lg font-semibold text-[#1F2937] mb-2">Module 5: Azure Test Plans - Quality Assurance</h3>
                  <p className="text-[#4B5563] mb-2">Duration: 6 hours</p>
                  <ul className="list-disc list-inside text-[#4B5563]">
                    <li>Test planning and management</li>
                    <li>Manual and exploratory testing</li>
                    <li>Automated test integration</li>
                    <li>Test analytics and reporting</li>
                    <li>Hands-on lab: Test plan implementation</li>
                  </ul>
                </div>

                <div className="border-l-4 border-[#F59E0B] pl-4">
                  <h3 className="text-lg font-semibold text-[#1F2937] mb-2">Module 6: Azure Artifacts - Package Management</h3>
                  <p className="text-[#4B5563] mb-2">Duration: 4 hours</p>
                  <ul className="list-disc list-inside text-[#4B5563]">
                    <li>Package management fundamentals</li>
                    <li>Feed creation and management</li>
                    <li>Package publishing and consumption</li>
                    <li>Pipeline integration</li>
                    <li>Hands-on lab: Package management setup</li>
                  </ul>
                </div>

                <div className="border-l-4 border-[#F59E0B] pl-4">
                  <h3 className="text-lg font-semibold text-[#1F2937] mb-2">Module 7: Integrations and Extensions</h3>
                  <p className="text-[#4B5563] mb-2">Duration: 3 hours</p>
                  <ul className="list-disc list-inside text-[#4B5563]">
                    <li>External tool integration</li>
                    <li>Marketplace extensions</li>
                    <li>REST API automation</li>
                    <li>Workflow customization</li>
                    <li>Hands-on lab: Integration implementation</li>
                  </ul>
                </div>

                <div className="border-l-4 border-[#F59E0B] pl-4">
                  <h3 className="text-lg font-semibold text-[#1F2937] mb-2">Module 8: Best Practices and Real-World Scenarios</h3>
                  <p className="text-[#4B5563] mb-2">Duration: 4 hours</p>
                  <ul className="list-disc list-inside text-[#4B5563]">
                    <li>DevOps best practices</li>
                    <li>Security and compliance</li>
                    <li>Scaling strategies</li>
                    <li>Troubleshooting techniques</li>
                    <li>Hands-on lab: Case study implementation</li>
                  </ul>
                </div>

                <div className="border-l-4 border-[#F59E0B] pl-4">
                  <h3 className="text-lg font-semibold text-[#1F2937] mb-2">Module 9: Capstone Project</h3>
                  <p className="text-[#4B5563] mb-2">Duration: 8 hours</p>
                  <ul className="list-disc list-inside text-[#4B5563]">
                    <li>End-to-end project implementation</li>
                    <li>CI/CD pipeline setup</li>
                    <li>Testing and deployment</li>
                    <li>Project presentation</li>
                    <li>Hands-on lab: Complete project delivery</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Prerequisites */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-[#1F2937] mb-4">Prerequisites</h2>
              <ul className="list-disc list-inside text-[#4B5563] space-y-2">
                <li>Basic understanding of software development lifecycle (SDLC)</li>
                <li>Familiarity with version control (Git) and programming concepts</li>
                <li>Access to an Azure account (free tier or trial)</li>
              </ul>
            </div>

            {/* Tools & Technologies */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-[#1F2937] mb-4">Tools & Technologies</h2>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-[#FEF3C7] text-[#92400E] rounded-full text-sm border border-[#FCD34D]">Azure DevOps</span>
                <span className="px-3 py-1 bg-[#FEF3C7] text-[#92400E] rounded-full text-sm border border-[#FCD34D]">Git</span>
                <span className="px-3 py-1 bg-[#FEF3C7] text-[#92400E] rounded-full text-sm border border-[#FCD34D]">YAML</span>
                <span className="px-3 py-1 bg-[#FEF3C7] text-[#92400E] rounded-full text-sm border border-[#FCD34D]">Visual Studio</span>
                <span className="px-3 py-1 bg-[#FEF3C7] text-[#92400E] rounded-full text-sm border border-[#FCD34D]">Azure CLI</span>
                <span className="px-3 py-1 bg-[#FEF3C7] text-[#92400E] rounded-full text-sm border border-[#FCD34D]">PowerShell</span>
                <span className="px-3 py-1 bg-[#FEF3C7] text-[#92400E] rounded-full text-sm border border-[#FCD34D]">Docker</span>
                <span className="px-3 py-1 bg-[#FEF3C7] text-[#92400E] rounded-full text-sm border border-[#FCD34D]">Kubernetes</span>
              </div>
            </div>

            {/* Final Project */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-[#1F2937] mb-4">Final Project</h2>
              <div className="bg-white rounded-lg p-6 shadow-sm border border-[#E5E7EB]">
                <h3 className="text-xl font-semibold text-[#1F2937] mb-4">End-to-End DevOps Implementation</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="text-lg font-medium text-[#1F2937] mb-2">Project Components</h4>
                    <ul className="list-disc list-inside text-[#4B5563] space-y-2">
                      <li>Complete project planning with Azure Boards</li>
                      <li>Source control implementation with Azure Repos</li>
                      <li>CI/CD pipeline setup with Azure Pipelines</li>
                      <li>Quality assurance with Azure Test Plans</li>
                      <li>Package management using Azure Artifacts</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-lg font-medium text-[#1F2937] mb-2">Deliverables</h4>
                    <ul className="list-disc list-inside text-[#4B5563] space-y-2">
                      <li>Working application with complete DevOps pipeline</li>
                      <li>Project documentation and presentation</li>
                      <li>Test results and quality metrics</li>
                      <li>Deployment configuration and scripts</li>
                      <li>Best practices implementation report</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Course Preview */}
            <div className="border-t border-[#E5E7EB]">
              <div className="p-8">
                <h2 className="text-2xl font-bold text-[#1F2937] mb-6">Course Preview</h2>
                <div className="aspect-w-16 aspect-h-9 mb-8">
                  <iframe
                    className="w-full h-96 rounded-lg"
                    src="https://www.youtube.com/embed/your-video-id"
                    title="Azure DevOps Course Preview"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="bg-white rounded-lg p-6 shadow-sm border border-[#E5E7EB]">
                    <div className="w-12 h-12 bg-[#FEF3C7] rounded-lg flex items-center justify-center mb-4">
                      <svg className="w-6 h-6 text-[#92400E]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                      </svg>
                    </div>
                    <h3 className="text-lg font-semibold text-[#1F2937] mb-2">Hands-on Labs</h3>
                    <p className="text-[#4B5563]">Practical exercises and real-world scenarios to reinforce learning</p>
                  </div>
                  <div className="bg-white rounded-lg p-6 shadow-sm border border-[#E5E7EB]">
                    <div className="w-12 h-12 bg-[#FEF3C7] rounded-lg flex items-center justify-center mb-4">
                      <svg className="w-6 h-6 text-[#92400E]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                      </svg>
                    </div>
                    <h3 className="text-lg font-semibold text-[#1F2937] mb-2">Comprehensive Materials</h3>
                    <p className="text-[#4B5563]">Detailed documentation, code samples, and reference materials</p>
                  </div>
                  <div className="bg-white rounded-lg p-6 shadow-sm border border-[#E5E7EB]">
                    <div className="w-12 h-12 bg-[#FEF3C7] rounded-lg flex items-center justify-center mb-4">
                      <svg className="w-6 h-6 text-[#92400E]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                      </svg>
                    </div>
                    <h3 className="text-lg font-semibold text-[#1F2937] mb-2">Expert Support</h3>
                    <p className="text-[#4B5563]">Access to instructors and community support throughout the course</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Trainer Profile */}
            <div className="border-t border-[#E5E7EB]">
              <div className="p-8">
                <h2 className="text-2xl font-bold text-[#1F2937] mb-6">Meet Your Trainer</h2>
                <div className="bg-white rounded-lg p-6 shadow-sm border border-[#E5E7EB]">
                  <div className="flex flex-col md:flex-row items-start gap-6">
                    <div className="flex-shrink-0">
                      <img
                        src="https://ui-avatars.com/api/?name=Abhishek+Srivastava&background=F59E0B&color=fff"
                        alt="Abhishek Srivastava"
                        className="w-32 h-32 rounded-full border-4 border-white shadow-lg"
                      />
                    </div>
                    <div className="flex-grow">
                      <div className="flex items-center justify-between mb-4">
                        <div>
                          <h3 className="text-2xl font-bold text-[#1F2937]">Abhishek Srivastava</h3>
                          <p className="text-lg text-[#4B5563]">Azure DevOps Expert & Trainer</p>
                        </div>
                        <div className="text-right">
                          <p className="text-sm text-[#6B7280]">Experience</p>
                          <p className="text-lg font-semibold text-[#F59E0B]">10+ years</p>
                        </div>
                      </div>
                      <p className="text-[#4B5563] mb-6">Experienced Azure DevOps expert specializing in CI/CD, automation, and DevOps practices. Microsoft Certified DevOps Engineer with expertise in implementing end-to-end DevOps solutions. Passionate about teaching and helping others master Azure DevOps.</p>
                      
                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <h4 className="text-sm font-semibold text-[#6B7280] mb-3">Expertise</h4>
                          <div className="flex flex-wrap gap-2">
                            <span className="px-3 py-1 bg-[#FEF3C7] text-[#92400E] rounded-full text-sm border border-[#FCD34D]">Azure DevOps</span>
                            <span className="px-3 py-1 bg-[#FEF3C7] text-[#92400E] rounded-full text-sm border border-[#FCD34D]">CI/CD</span>
                            <span className="px-3 py-1 bg-[#FEF3C7] text-[#92400E] rounded-full text-sm border border-[#FCD34D]">DevOps</span>
                            <span className="px-3 py-1 bg-[#FEF3C7] text-[#92400E] rounded-full text-sm border border-[#FCD34D]">Automation</span>
                            <span className="px-3 py-1 bg-[#FEF3C7] text-[#92400E] rounded-full text-sm border border-[#FCD34D]">Azure</span>
                            <span className="px-3 py-1 bg-[#FEF3C7] text-[#92400E] rounded-full text-sm border border-[#FCD34D]">Git</span>
                          </div>
                        </div>
                        <div>
                          <h4 className="text-sm font-semibold text-[#6B7280] mb-3">Key Projects</h4>
                          <ul className="space-y-2">
                            <li className="flex items-start text-[#4B5563]">
                              <svg className="w-5 h-5 text-[#F59E0B] mr-2 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                              </svg>
                              <span>Led DevOps transformation for enterprise clients</span>
                            </li>
                            <li className="flex items-start text-[#4B5563]">
                              <svg className="w-5 h-5 text-[#F59E0B] mr-2 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                              </svg>
                              <span>Implemented automated CI/CD pipelines</span>
                            </li>
                            <li className="flex items-start text-[#4B5563]">
                              <svg className="w-5 h-5 text-[#F59E0B] mr-2 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                              </svg>
                              <span>Created automated deployment pipelines</span>
                            </li>
                            <li className="flex items-start text-[#4B5563]">
                              <svg className="w-5 h-5 text-[#F59E0B] mr-2 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                              </svg>
                              <span>Implemented DevOps best practices</span>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Testimonials */}
            <div className="border-t border-[#E5E7EB]">
              <div className="p-8">
                <h2 className="text-2xl font-bold text-[#1F2937] mb-6">What Our Students Say</h2>
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="bg-white rounded-lg p-6 shadow-sm border border-[#E5E7EB]">
                    <div className="flex items-center mb-4">
                      <img
                        src="https://ui-avatars.com/api/?name=Rahul+Sharma&background=F59E0B&color=fff"
                        alt="Rahul Sharma"
                        className="w-12 h-12 rounded-full"
                      />
                      <div className="ml-4">
                        <h3 className="text-lg font-semibold text-[#1F2937]">Rahul Sharma</h3>
                        <p className="text-[#4B5563]">"The Azure DevOps course was comprehensive and practical. The hands-on labs helped me implement DevOps practices at my workplace immediately."</p>
                      </div>
                    </div>
                  </div>
                  <div className="bg-white rounded-lg p-6 shadow-sm border border-[#E5E7EB]">
                    <div className="flex items-center mb-4">
                      <img
                        src="https://ui-avatars.com/api/?name=Priya+Patel&background=F59E0B&color=fff"
                        alt="Priya Patel"
                        className="w-12 h-12 rounded-full"
                      />
                      <div className="ml-4">
                        <h3 className="text-lg font-semibold text-[#1F2937]">Priya Patel</h3>
                        <p className="text-[#4B5563]">"Great course structure and expert instructors. The final project was challenging but helped me gain real-world Azure DevOps experience."</p>
                      </div>
                    </div>
                  </div>
                  <div className="bg-white rounded-lg p-6 shadow-sm border border-[#E5E7EB]">
                    <div className="flex items-center mb-4">
                      <img
                        src="https://ui-avatars.com/api/?name=Amit+Kumar&background=F59E0B&color=fff"
                        alt="Amit Kumar"
                        className="w-12 h-12 rounded-full"
                      />
                      <div className="ml-4">
                        <h3 className="text-lg font-semibold text-[#1F2937]">Amit Kumar</h3>
                        <p className="text-[#4B5563]">"The course covered everything from basics to advanced topics. The support team was always available to help with any Azure DevOps-related issues."</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Enrollment Form */}
            <div className="border-t border-[#E5E7EB]">
              <div className="p-8">
                <h2 className="text-2xl font-bold text-[#1F2937] mb-6">Enroll in This Course</h2>
                <div className="bg-white rounded-lg p-6 shadow-sm border border-[#E5E7EB]">
                  <form className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-[#6B7280] mb-1">
                          Full Name
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          className="w-full px-4 py-2 border border-[#E5E7EB] rounded-md focus:ring-[#F59E0B] focus:border-[#F59E0B]"
                          required
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-[#6B7280] mb-1">
                          Email Address
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          className="w-full px-4 py-2 border border-[#E5E7EB] rounded-md focus:ring-[#F59E0B] focus:border-[#F59E0B]"
                          required
                        />
                      </div>
                      <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-[#6B7280] mb-1">
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          className="w-full px-4 py-2 border border-[#E5E7EB] rounded-md focus:ring-[#F59E0B] focus:border-[#F59E0B]"
                          required
                        />
                      </div>
                      <div>
                        <label htmlFor="experience" className="block text-sm font-medium text-[#6B7280] mb-1">
                          Years of Experience
                        </label>
                        <select
                          id="experience"
                          name="experience"
                          className="w-full px-4 py-2 border border-[#E5E7EB] rounded-md focus:ring-[#F59E0B] focus:border-[#F59E0B]"
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
                      <label htmlFor="message" className="block text-sm font-medium text-[#6B7280] mb-1">
                        Additional Information
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        rows={4}
                        className="w-full px-4 py-2 border border-[#E5E7EB] rounded-md focus:ring-[#F59E0B] focus:border-[#F59E0B]"
                        placeholder="Tell us about your goals and expectations from this course..."
                      ></textarea>
                    </div>
                    <div className="flex items-center justify-between">
                      <button
                        type="submit"
                        className="bg-[#F59E0B] text-white px-6 py-3 rounded-md hover:bg-[#D97706] transition-colors"
                      >
                        Submit Enrollment
                      </button>
                      <Link
                        href={`/contact?course=${encodeURIComponent(course.name)}`}
                        className="text-[#F59E0B] hover:text-[#D97706] flex items-center"
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
          </div>
        </div>
      </div>
    </div>
  )
} 