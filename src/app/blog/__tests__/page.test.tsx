import { render, screen } from '@testing-library/react'
import BlogPage from '../page'

describe('Blog Main Page', () => {
  beforeEach(() => {
    render(<BlogPage />)
  })

  it('renders the Blog heading', () => {
    expect(screen.getByText('Blog')).toBeInTheDocument()
  })

  it('renders all blog post cards', () => {
    expect(screen.getByText('Getting Started with DevOps')).toBeInTheDocument()
    expect(screen.getByText('Cloud Computing Trends in 2024')).toBeInTheDocument()
    expect(screen.getByText('Kubernetes Best Practices')).toBeInTheDocument()
    expect(screen.getByText('AWS vs Azure vs GCP: A Comprehensive Comparison')).toBeInTheDocument()
  })

  it('renders post excerpts', () => {
    expect(screen.getByText('Learn the fundamentals of DevOps and how to implement it in your organization.')).toBeInTheDocument()
    expect(screen.getByText('Explore the latest trends and innovations in cloud computing.')).toBeInTheDocument()
    expect(screen.getByText('Essential best practices for running Kubernetes in production.')).toBeInTheDocument()
    expect(screen.getByText('Detailed comparison of the three major cloud providers.')).toBeInTheDocument()
  })

  it('renders post metadata', () => {
    expect(screen.getByText('2024-03-15')).toBeInTheDocument()
    expect(screen.getAllByText('DevOps')).toHaveLength(2)
    expect(screen.getAllByText('By John Doe')).toHaveLength(1)
  })

  it('renders Read More links', () => {
    expect(screen.getAllByText('Read More →').length).toBe(4)
  })
}) 