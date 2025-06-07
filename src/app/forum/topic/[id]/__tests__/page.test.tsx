import { render, screen } from '@testing-library/react'
import TopicPage from '../page'

// Mock the useParams hook to simulate a valid topic ID
jest.mock('next/navigation', () => ({
  useParams: () => ({ id: 'kubernetes-deployment-issues' })
}))

describe('Forum Topic Detail Page', () => {
  beforeEach(() => {
    render(<TopicPage params={{ id: 'kubernetes-deployment-issues' }} />)
  })

  it('renders the topic title', () => {
    expect(screen.getByText('Kubernetes Deployment Issues')).toBeInTheDocument()
  })

  it('renders the topic content', () => {
    expect(screen.getByText(/I'm having trouble with my Kubernetes deployment/)).toBeInTheDocument()
  })

  it('renders the topic author and date', () => {
    expect(screen.getByText('Posted by Alex Chen')).toBeInTheDocument()
  })

  it('renders replies', () => {
    expect(screen.getByText('Maria Garcia')).toBeInTheDocument()
    expect(screen.getByText('David Kim')).toBeInTheDocument()
  })

  it('renders the reply form', () => {
    expect(screen.getByText('Post a Reply')).toBeInTheDocument()
    expect(screen.getByLabelText('Name')).toBeInTheDocument()
    expect(screen.getByLabelText('Reply')).toBeInTheDocument()
    expect(screen.getByText('Post Reply')).toBeInTheDocument()
  })
}) 