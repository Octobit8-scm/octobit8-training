'use client'

import React, { useState } from 'react'
import Link from 'next/link'

// This would typically come from a database or API
const forumTopics = {
  'kubernetes-deployment-issues': {
    title: 'Kubernetes Deployment Issues',
    content: `I'm having trouble with my Kubernetes deployment. The pods are not starting properly, and I'm getting the following error:

    Error: ImagePullBackOff: Back-off pulling image "myapp:latest"

    I've checked my image repository and the image exists. Here's my deployment YAML:

    \`\`\`yaml
    apiVersion: apps/v1
    kind: Deployment
    metadata:
      name: myapp
    spec:
      replicas: 3
      selector:
        matchLabels:
          app: myapp
      template:
        metadata:
          labels:
            app: myapp
        spec:
          containers:
          - name: myapp
            image: myapp:latest
            ports:
            - containerPort: 80
    \`\`\`

    Any help would be greatly appreciated!`,
    author: 'Alex Chen',
    category: 'Kubernetes',
    date: '2024-03-15',
    replies: [
      {
        id: 1,
        author: 'Maria Garcia',
        content: 'Have you checked if your Kubernetes cluster has access to the image repository? You might need to configure image pull secrets.',
        date: '2024-03-15',
        likes: 3
      },
      {
        id: 2,
        author: 'David Kim',
        content: "Also, make sure your image tag is correct. If you're using a private registry, you need to include the full path to the image.",
        date: '2024-03-15',
        likes: 2
      }
    ]
  }
}

interface TopicPageProps {
  params: {
    id: string
  }
}

export default function TopicPage({ params }: TopicPageProps) {
  const topic = forumTopics[params.id as keyof typeof forumTopics]
  const [newReply, setNewReply] = useState('')
  const [replies, setReplies] = useState(topic?.replies || [])

  const handleReplySubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!newReply.trim()) return

    const reply = {
      id: replies.length + 1,
      author: 'Current User', // This would come from authentication
      content: newReply,
      date: new Date().toISOString().split('T')[0],
      likes: 0
    }

    setReplies([...replies, reply])
    setNewReply('')
  }

  if (!topic) {
    return (
      <div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <h1 className="text-4xl font-bold text-[#1F2937] mb-8">Topic Not Found</h1>
          <Link href="/forum" className="text-[#F59E0B] hover:text-[#D97706]">
            ← Back to Forum
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Link href="/forum" className="text-[#F59E0B] hover:text-[#D97706] mb-8 inline-block">
          ← Back to Forum
        </Link>

        {/* Topic */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8 border border-[#E5E7EB]">
          <div className="flex items-center text-sm text-[#6B7280] mb-4">
            <span>{topic.date}</span>
            <span className="mx-2">•</span>
            <span>{topic.category}</span>
          </div>
          <h1 className="text-3xl font-bold text-[#1F2937] mb-4">{topic.title}</h1>
          <div className="flex items-center mb-6">
            <span className="text-[#4B5563]">Posted by {topic.author}</span>
          </div>
          <div className="prose prose-lg max-w-none">
            {topic.content.split('\n\n').map((paragraph, index) => {
              if (paragraph.startsWith('```')) {
                return (
                  <pre key={index} className="bg-[#FEF3C7] p-4 rounded-md overflow-x-auto">
                    <code className="text-[#92400E]">{paragraph.replace(/```\w*\n/, '').replace('```', '')}</code>
                  </pre>
                )
              }
              return <p key={index} className="text-[#4B5563] mb-4">{paragraph}</p>
            })}
          </div>
        </div>

        {/* Replies */}
        <div className="bg-white rounded-lg shadow-lg p-8 border border-[#E5E7EB]">
          <h2 className="text-2xl font-bold text-[#1F2937] mb-6">Replies</h2>
          <div className="space-y-6">
            {topic.replies?.map((reply, index) => (
              <div key={index} className="border-b border-[#E5E7EB] pb-6 last:border-0">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 rounded-full bg-[#FEF3C7] flex items-center justify-center text-[#92400E] font-semibold">
                    {reply.author.charAt(0)}
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold text-[#1F2937]">{reply.author}</h3>
                    <p className="text-sm text-[#6B7280]">{reply.date}</p>
                  </div>
                </div>
                <p className="text-[#4B5563]">{reply.content}</p>
              </div>
            ))}
          </div>

          {/* Reply Form */}
          <form className="mt-8">
            <h3 className="text-lg font-semibold text-[#1F2937] mb-4">Post a Reply</h3>
            <div className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-[#4B5563] mb-1">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-2 border border-[#E5E7EB] rounded-md focus:outline-none focus:ring-2 focus:ring-[#F59E0B] focus:border-transparent"
                />
              </div>
              <div>
                <label htmlFor="reply" className="block text-sm font-medium text-[#4B5563] mb-1">
                  Reply
                </label>
                <textarea
                  id="reply"
                  rows={4}
                  className="w-full px-4 py-2 border border-[#E5E7EB] rounded-md focus:outline-none focus:ring-2 focus:ring-[#F59E0B] focus:border-transparent"
                ></textarea>
              </div>
              <button
                type="submit"
                className="bg-[#F59E0B] text-white px-6 py-2 rounded-md hover:bg-[#D97706] transition-colors"
              >
                Post Reply
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
} 