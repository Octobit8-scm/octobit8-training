'use client'

import React, { useState } from 'react'
import Link from 'next/link'

const categories = [
  { id: 'devops', name: 'DevOps Discussions' },
  { id: 'cloud-computing', name: 'Cloud Computing' },
  { id: 'kubernetes', name: 'Kubernetes' },
  { id: 'aws', name: 'AWS' },
  { id: 'azure', name: 'Azure' },
  { id: 'gcp', name: 'Google Cloud Platform' }
]

export default function NewTopicPage() {
  const [formData, setFormData] = useState({
    title: '',
    category: '',
    content: ''
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically send the data to your backend
    console.log('Form submitted:', formData)
    // Redirect to the forum page after successful submission
    window.location.href = '/forum'
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  return (
    <div>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Link href="/forum" className="text-blue-600 hover:text-blue-800 mb-8 inline-block">
          ← Back to Forum
        </Link>

        <div className="bg-white rounded-lg shadow-lg p-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-8">Create New Topic</h1>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="title" className="block text-sm font-medium text-gray-700 mb-2">
                Title
              </label>
              <input
                type="text"
                id="title"
                name="title"
                value={formData.title}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                placeholder="Enter your topic title"
              />
            </div>

            <div>
              <label htmlFor="category" className="block text-sm font-medium text-gray-700 mb-2">
                Category
              </label>
              <select
                id="category"
                name="category"
                value={formData.category}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
              >
                <option value="">Select a category</option>
                {categories.map(category => (
                  <option key={category.id} value={category.id}>
                    {category.name}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label htmlFor="content" className="block text-sm font-medium text-gray-700 mb-2">
                Content
              </label>
              <textarea
                id="content"
                name="content"
                value={formData.content}
                onChange={handleChange}
                required
                rows={10}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                placeholder="Write your topic content here..."
              />
            </div>

            <div className="flex justify-end space-x-4">
              <Link
                href="/forum"
                className="px-6 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50"
              >
                Cancel
              </Link>
              <button
                type="submit"
                className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
              >
                Create Topic
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
} 