'use client'

import React from 'react'
import Link from 'next/link'

const forumCategories = [
  {
    id: 'devops',
    title: 'DevOps Discussions',
    description: 'Discuss DevOps tools, practices, and challenges',
    topics: 156,
    posts: 892
  },
  {
    id: 'cloud-computing',
    title: 'Cloud Computing',
    description: 'Cloud platforms, services, and architecture discussions',
    topics: 203,
    posts: 1245
  },
  {
    id: 'kubernetes',
    title: 'Kubernetes',
    description: 'Container orchestration and Kubernetes-related discussions',
    topics: 178,
    posts: 967
  },
  {
    id: 'aws',
    title: 'AWS',
    description: 'Amazon Web Services discussions and support',
    topics: 245,
    posts: 1567
  },
  {
    id: 'azure',
    title: 'Azure',
    description: 'Microsoft Azure discussions and support',
    topics: 189,
    posts: 1023
  },
  {
    id: 'gcp',
    title: 'Google Cloud Platform',
    description: 'GCP discussions and support',
    topics: 167,
    posts: 945
  }
]

const recentTopics = [
  {
    id: 'kubernetes-deployment-issues',
    title: 'Kubernetes Deployment Issues',
    category: 'Kubernetes',
    author: 'Alex Chen',
    replies: 12,
    views: 156,
    lastActivity: '2 hours ago'
  },
  {
    id: 'aws-lambda-best-practices',
    title: 'AWS Lambda Best Practices',
    category: 'AWS',
    author: 'Maria Garcia',
    replies: 8,
    views: 98,
    lastActivity: '4 hours ago'
  },
  {
    id: 'azure-devops-pipeline',
    title: 'Azure DevOps Pipeline Configuration',
    category: 'Azure',
    author: 'David Kim',
    replies: 15,
    views: 203,
    lastActivity: '6 hours ago'
  }
]

export default function ForumPage() {
  return (
    <div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900">Forum</h1>
          <Link
            href="/forum/new-topic"
            className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700"
          >
            New Topic
          </Link>
        </div>

        {/* Categories */}
        <div className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">Categories</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {forumCategories.map((category) => (
              <Link
                key={category.id}
                href={`/forum/category/${category.id}`}
                className="block bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300"
              >
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{category.title}</h3>
                <p className="text-gray-600 mb-4">{category.description}</p>
                <div className="flex items-center text-sm text-gray-500">
                  <span>{category.topics} topics</span>
                  <span className="mx-2">•</span>
                  <span>{category.posts} posts</span>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Recent Topics */}
        <div>
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">Recent Topics</h2>
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="divide-y divide-gray-200">
              {recentTopics.map((topic) => (
                <Link
                  key={topic.id}
                  href={`/forum/topic/${topic.id}`}
                  className="block hover:bg-gray-50"
                >
                  <div className="p-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="text-lg font-medium text-gray-900">{topic.title}</h3>
                        <div className="mt-1 flex items-center text-sm text-gray-500">
                          <span>Posted by {topic.author}</span>
                          <span className="mx-2">•</span>
                          <span>{topic.category}</span>
                        </div>
                      </div>
                      <div className="flex items-center space-x-4 text-sm text-gray-500">
                        <div>
                          <span className="font-medium">{topic.replies}</span>
                          <span className="ml-1">replies</span>
                        </div>
                        <div>
                          <span className="font-medium">{topic.views}</span>
                          <span className="ml-1">views</span>
                        </div>
                        <div>
                          <span>Last activity {topic.lastActivity}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 