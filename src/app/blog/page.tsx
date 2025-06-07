'use client'

import React from 'react'
import Link from 'next/link'

const blogPosts = [
  {
    id: 'getting-started-with-devops',
    title: 'Getting Started with DevOps',
    excerpt: 'Learn the fundamentals of DevOps and how to implement it in your organization.',
    date: '2024-03-15',
    author: 'John Doe',
    category: 'DevOps'
  },
  {
    id: 'cloud-computing-trends-2024',
    title: 'Cloud Computing Trends in 2024',
    excerpt: 'Explore the latest trends and innovations in cloud computing.',
    date: '2024-03-10',
    author: 'Jane Smith',
    category: 'Cloud Computing'
  },
  {
    id: 'kubernetes-best-practices',
    title: 'Kubernetes Best Practices',
    excerpt: 'Essential best practices for running Kubernetes in production.',
    date: '2024-03-05',
    author: 'Mike Johnson',
    category: 'DevOps'
  },
  {
    id: 'aws-vs-azure-vs-gcp',
    title: 'AWS vs Azure vs GCP: A Comprehensive Comparison',
    excerpt: 'Detailed comparison of the three major cloud providers.',
    date: '2024-03-01',
    author: 'Sarah Wilson',
    category: 'Cloud Computing'
  }
]

export default function BlogPage() {
  return (
    <div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-4xl font-bold text-[#1F2937] mb-8">Blog</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <Link
              key={post.id}
              href={`/blog/${post.id}`}
              className="block bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 border border-[#E5E7EB]"
            >
              <div className="p-6">
                <div className="flex items-center text-sm text-[#6B7280] mb-2">
                  <span>{post.date}</span>
                  <span className="mx-2">•</span>
                  <span>{post.category}</span>
                </div>
                <h2 className="text-xl font-semibold text-[#1F2937] mb-2">{post.title}</h2>
                <p className="text-[#4B5563] mb-4">{post.excerpt}</p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-[#6B7280]">By {post.author}</span>
                  <span className="text-[#F59E0B]">Read More →</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
} 