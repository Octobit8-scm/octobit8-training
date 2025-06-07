'use client'

import React from 'react'
import Link from 'next/link'

const courses = {
  'ai-fundamentals': {
    title: 'AI Fundamentals',
    description: 'Learn the basics of artificial intelligence, machine learning, and deep learning.',
    duration: '8 weeks',
    level: 'Beginner',
    topics: ['Machine Learning Basics', 'Neural Networks', 'Deep Learning', 'AI Ethics'],
    instructor: {
      name: 'Dr. Sarah Chen',
      title: 'AI Research Scientist',
      bio: 'Dr. Chen has over 10 years of experience in AI research and development. She has published numerous papers in top AI conferences and led AI initiatives at major tech companies.',
      image: '/instructors/sarah-chen.jpg'
    },
    curriculum: [
      {
        week: 1,
        title: 'Introduction to AI and Machine Learning',
        topics: [
          'What is Artificial Intelligence?',
          'Types of Machine Learning',
          'Supervised vs Unsupervised Learning',
          'Basic Python for AI'
        ]
      },
      {
        week: 2,
        title: 'Neural Networks Fundamentals',
        topics: [
          'Perceptrons and Activation Functions',
          'Backpropagation',
          'Neural Network Architecture',
          'Training Neural Networks'
        ]
      },
      {
        week: 3,
        title: 'Deep Learning Basics',
        topics: [
          'Convolutional Neural Networks',
          'Recurrent Neural Networks',
          'Transfer Learning',
          'Model Evaluation'
        ]
      },
      {
        week: 4,
        title: 'AI Ethics and Responsible AI',
        topics: [
          'Bias in AI Systems',
          'Fairness and Transparency',
          'Privacy and Security',
          'AI Governance'
        ]
      }
    ],
    prerequisites: [
      'Basic programming knowledge (Python recommended)',
      'High school level mathematics',
      'No prior AI experience required'
    ],
    tools: [
      'Python',
      'TensorFlow',
      'PyTorch',
      'Jupyter Notebooks',
      'scikit-learn'
    ]
  },
  'agentic-ai-development': {
    title: 'Agentic AI Development',
    description: 'Master the development of autonomous AI agents and intelligent systems.',
    duration: '12 weeks',
    level: 'Advanced',
    topics: ['Reinforcement Learning', 'Multi-Agent Systems', 'Autonomous Decision Making', 'AI Safety'],
    instructor: {
      name: 'Dr. Michael Rodriguez',
      title: 'AI Systems Architect',
      bio: 'Dr. Rodriguez specializes in autonomous systems and has led the development of several successful AI agents in production environments.',
      image: '/instructors/michael-rodriguez.jpg'
    },
    curriculum: [
      {
        week: 1,
        title: 'Introduction to Agentic AI',
        topics: [
          'What are AI Agents?',
          'Types of AI Agents',
          'Agent Architecture',
          'Environment Interaction'
        ]
      },
      {
        week: 2,
        title: 'Reinforcement Learning',
        topics: [
          'Markov Decision Processes',
          'Q-Learning',
          'Policy Gradients',
          'Deep Reinforcement Learning'
        ]
      },
      {
        week: 3,
        title: 'Multi-Agent Systems',
        topics: [
          'Agent Communication',
          'Coordination Strategies',
          'Competitive vs Cooperative Agents',
          'Emergent Behavior'
        ]
      },
      {
        week: 4,
        title: 'AI Safety and Ethics',
        topics: [
          'Alignment Problem',
          'Value Learning',
          'Robustness and Reliability',
          'Safety Constraints'
        ]
      }
    ],
    prerequisites: [
      'Strong programming skills in Python',
      'Understanding of machine learning fundamentals',
      'Basic knowledge of reinforcement learning',
      'Familiarity with deep learning frameworks'
    ],
    tools: [
      'Python',
      'PyTorch',
      'OpenAI Gym',
      'Stable Baselines',
      'Unity ML-Agents'
    ]
  },
  'ai-engineering': {
    title: 'AI Engineering',
    description: 'Learn to build and deploy production-ready AI systems.',
    duration: '10 weeks',
    level: 'Intermediate',
    topics: ['MLOps', 'Model Deployment', 'AI Infrastructure', 'Performance Optimization'],
    instructor: {
      name: 'Alex Thompson',
      title: 'AI Engineering Lead',
      bio: 'Alex has extensive experience in deploying AI systems at scale and has worked with major tech companies to optimize their AI infrastructure.',
      image: '/instructors/alex-thompson.jpg'
    },
    curriculum: [
      {
        week: 1,
        title: 'MLOps Fundamentals',
        topics: [
          'MLOps Principles',
          'Version Control for ML',
          'Experiment Tracking',
          'Model Registry'
        ]
      },
      {
        week: 2,
        title: 'Model Deployment',
        topics: [
          'Deployment Strategies',
          'Containerization',
          'API Design',
          'Model Serving'
        ]
      },
      {
        week: 3,
        title: 'AI Infrastructure',
        topics: [
          'Cloud Platforms',
          'GPU Optimization',
          'Distributed Training',
          'Resource Management'
        ]
      },
      {
        week: 4,
        title: 'Performance Optimization',
        topics: [
          'Model Quantization',
          'Inference Optimization',
          'Monitoring and Logging',
          'Performance Testing'
        ]
      }
    ],
    prerequisites: [
      'Experience with machine learning',
      'Basic knowledge of cloud platforms',
      'Understanding of software engineering principles',
      'Familiarity with Docker and Kubernetes'
    ],
    tools: [
      'Docker',
      'Kubernetes',
      'MLflow',
      'TensorFlow Serving',
      'AWS SageMaker'
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
          <Link href="/courses/ai" className="text-blue-600 hover:text-blue-800">
            ← Back to AI Courses
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Link href="/courses/ai" className="text-blue-600 hover:text-blue-800 mb-8 inline-block">
          ← Back to AI Courses
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