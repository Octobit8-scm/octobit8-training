'use client'

import React, { useState } from 'react'
import Link from 'next/link'

// This would typically come from a database or API
const blogPosts = {
  'getting-started-with-devops': {
    title: 'Getting Started with DevOps',
    content: `
      DevOps is a set of practices that combines software development (Dev) and IT operations (Ops) to shorten the development lifecycle and provide continuous delivery with high software quality.

      ## What is DevOps?

      DevOps is a culture, movement, or practice that emphasizes the collaboration and communication of both software developers and other information-technology (IT) professionals while automating the process of software delivery and infrastructure changes.

      ## Key Benefits of DevOps

      1. **Faster Delivery**: DevOps practices enable faster delivery of features and updates.
      2. **Improved Collaboration**: Breaks down silos between development and operations teams.
      3. **Better Quality**: Automated testing and continuous integration lead to higher quality software.
      4. **Increased Security**: Security is integrated into the development process from the start.

      ## Getting Started

      To implement DevOps in your organization, follow these steps:

      1. Assess your current development and operations processes
      2. Identify areas for improvement
      3. Implement automation tools
      4. Foster a culture of collaboration
      5. Monitor and measure results

      ## Common DevOps Tools

      - **Version Control**: Git, GitHub, GitLab
      - **CI/CD**: Jenkins, GitHub Actions, GitLab CI
      - **Containerization**: Docker, Kubernetes
      - **Infrastructure as Code**: Terraform, Ansible
      - **Monitoring**: Prometheus, Grafana

      ## Conclusion

      DevOps is not just about tools and automation; it's about creating a culture of collaboration and continuous improvement. Start small, learn from your experiences, and gradually expand your DevOps practices.
    `,
    date: '2024-03-15',
    author: 'John Doe',
    category: 'DevOps',
    readTime: '10 min read',
    comments: [
      {
        id: 1,
        author: 'Alice Johnson',
        content: 'Great article! I especially liked the section about CI/CD tools.',
        date: '2024-03-15',
        likes: 5
      },
      {
        id: 2,
        author: 'Bob Smith',
        content: 'Would love to see more content about monitoring tools.',
        date: '2024-03-16',
        likes: 3
      }
    ]
  },
  'cloud-computing-trends-2024': {
    title: 'Cloud Computing Trends in 2024',
    content: `
      The cloud computing landscape continues to evolve rapidly, with new technologies and practices emerging to meet the changing needs of businesses and developers.

      ## Top Cloud Computing Trends for 2024

      1. **Multi-Cloud Strategies**
      Organizations are increasingly adopting multi-cloud approaches to avoid vendor lock-in and optimize costs.

      2. **Serverless Computing**
      Serverless architectures continue to gain popularity, offering greater scalability and reduced operational overhead.

      3. **Edge Computing**
      Edge computing brings computation and data storage closer to the location where it's needed, reducing latency and bandwidth usage.

      4. **AI and Machine Learning in the Cloud**
      Cloud providers are making it easier to implement AI and ML solutions with pre-built services and tools.

      ## Impact on Businesses

      These trends are reshaping how businesses approach their IT infrastructure and application development. Companies that embrace these changes can gain significant competitive advantages.

      ## Future Outlook

      The future of cloud computing looks promising, with continued innovation in areas like quantum computing, sustainable cloud practices, and enhanced security measures.
    `,
    date: '2024-03-10',
    author: 'Jane Smith',
    category: 'Cloud Computing',
    readTime: '8 min read',
    comments: [
      {
        id: 1,
        author: 'Charlie Brown',
        content: 'The multi-cloud strategy section was very insightful.',
        date: '2024-03-10',
        likes: 7
      }
    ]
  }
}

interface BlogPostPageProps {
  params: {
    id: string
  }
}

export default function BlogPostPage({ params }: BlogPostPageProps) {
  const post = blogPosts[params.id as keyof typeof blogPosts]
  const [newComment, setNewComment] = useState('')
  const [comments, setComments] = useState(post?.comments || [])

  const handleCommentSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!newComment.trim()) return

    const comment = {
      id: comments.length + 1,
      author: 'Current User', // This would come from authentication
      content: newComment,
      date: new Date().toISOString().split('T')[0],
      likes: 0
    }

    setComments([...comments, comment])
    setNewComment('')
  }

  if (!post) {
    return (
      <div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <h1 className="text-4xl font-bold text-[#1F2937] mb-8">Post Not Found</h1>
          <Link href="/blog" className="text-[#F59E0B] hover:text-[#D97706]">
            ← Back to Blog
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Link href="/blog" className="text-[#F59E0B] hover:text-[#D97706] mb-8 inline-block">
          ← Back to Blog
        </Link>

        <article className="bg-white rounded-lg shadow-lg p-8 mb-8 border border-[#E5E7EB]">
          <header className="mb-8">
            <div className="flex items-center text-sm text-[#6B7280] mb-4">
              <span>{post.date}</span>
              <span className="mx-2">•</span>
              <span>{post.category}</span>
              <span className="mx-2">•</span>
              <span>{post.readTime}</span>
            </div>
            <h1 className="text-4xl font-bold text-[#1F2937] mb-4">{post.title}</h1>
            <div className="flex items-center">
              <span className="text-[#4B5563]">By {post.author}</span>
            </div>
          </header>

          <div className="prose prose-lg max-w-none">
            {post.content.split('\n\n').map((paragraph, index) => {
              if (paragraph.startsWith('## ')) {
                return (
                  <h2 key={index} className="text-2xl font-semibold text-[#1F2937] mt-8 mb-4">
                    {paragraph.replace('## ', '')}
                  </h2>
                )
              }
              if (paragraph.startsWith('1. ') || paragraph.startsWith('2. ') || paragraph.startsWith('3. ')) {
                return (
                  <ol key={index} className="list-decimal list-inside space-y-2 my-4">
                    {paragraph.split('\n').map((item, idx) => (
                      <li key={idx} className="text-[#4B5563]">{item.replace(/^\d+\.\s+/, '')}</li>
                    ))}
                  </ol>
                )
              }
              return <p key={index} className="text-[#4B5563] mb-4">{paragraph}</p>
            })}
          </div>
        </article>

        {/* Comments Section */}
        <div className="bg-white rounded-lg shadow-lg p-8 border border-[#E5E7EB]">
          <h2 className="text-2xl font-bold text-[#1F2937] mb-6">Comments</h2>
          <div className="space-y-6">
            {post.comments?.map((comment, index) => (
              <div key={index} className="border-b border-[#E5E7EB] pb-6 last:border-0">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 rounded-full bg-[#FEF3C7] flex items-center justify-center text-[#92400E] font-semibold">
                    {comment.author.charAt(0)}
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold text-[#1F2937]">{comment.author}</h3>
                    <p className="text-sm text-[#6B7280]">{comment.date}</p>
                  </div>
                </div>
                <p className="text-[#4B5563]">{comment.content}</p>
              </div>
            ))}
          </div>

          {/* Comment Form */}
          <form className="mt-8">
            <h3 className="text-lg font-semibold text-[#1F2937] mb-4">Leave a Comment</h3>
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
                <label htmlFor="comment" className="block text-sm font-medium text-[#4B5563] mb-1">
                  Comment
                </label>
                <textarea
                  id="comment"
                  rows={4}
                  className="w-full px-4 py-2 border border-[#E5E7EB] rounded-md focus:outline-none focus:ring-2 focus:ring-[#F59E0B] focus:border-transparent"
                ></textarea>
              </div>
              <button
                type="submit"
                className="bg-[#F59E0B] text-white px-6 py-2 rounded-md hover:bg-[#D97706] transition-colors"
              >
                Post Comment
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
} 