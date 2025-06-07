import { render, screen } from '@testing-library/react'
import BlogPostPage from '../page'

// Mock the blogPosts data
jest.mock('../page', () => {
  const originalModule = jest.requireActual('../page')
  return {
    __esModule: true,
    default: originalModule.default,
    blogPosts: {
      'getting-started-with-devops': {
        title: 'Getting Started with DevOps',
        content: 'DevOps is a set of practices...',
        date: '2024-03-15',
        author: 'John Doe',
        category: 'DevOps',
        readTime: '10 min read',
        comments: [
          {
            id: 1,
            author: 'Alice Johnson',
            content: 'Great article!',
            date: '2024-03-15',
            likes: 5
          }
        ]
      }
    }
  }
})

describe('Blog Post Detail Page', () => {
  beforeEach(() => {
    render(<BlogPostPage params={{ id: 'getting-started-with-devops' }} />)
  })

  it('renders the post title', () => {
    expect(screen.getByText('Getting Started with DevOps')).toBeInTheDocument()
  })

  it('renders the post content', () => {
    expect(screen.getByText(/DevOps is a set of practices/)).toBeInTheDocument()
  })

  it('renders post metadata', () => {
    expect(screen.getAllByText('2024-03-15')).toHaveLength(2)
    expect(screen.getByText('DevOps')).toBeInTheDocument()
    expect(screen.getByText('10 min read')).toBeInTheDocument()
    expect(screen.getAllByText('By John Doe')).toHaveLength(1)
  })

  it('renders comments', () => {
    expect(screen.getByText('Comments')).toBeInTheDocument()
    expect(screen.getByText('Alice Johnson')).toBeInTheDocument()
    expect(screen.getByText('Great article! I especially liked the section about CI/CD tools.')).toBeInTheDocument()
  })

  it('renders the comment form', () => {
    expect(screen.getByText('Leave a Comment')).toBeInTheDocument()
    expect(screen.getByLabelText('Name')).toBeInTheDocument()
    expect(screen.getByLabelText('Comment')).toBeInTheDocument()
    expect(screen.getByText('Post Comment')).toBeInTheDocument()
  })

  it('renders Back to Blog link', () => {
    expect(screen.getByText('← Back to Blog')).toBeInTheDocument()
  })
}) 