import { render, screen } from '@testing-library/react'
import Footer from '../Footer'

describe('Footer', () => {
  beforeEach(() => {
    render(<Footer />)
  })

  it('renders the company name', () => {
    expect(screen.getByText('Octobit8')).toBeInTheDocument()
  })

  it('renders social media icons', () => {
    expect(screen.getByRole('link', { name: /twitter/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /linkedin/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /github/i })).toBeInTheDocument()
  })

  it('renders course links', () => {
    expect(screen.getByText('DevOps')).toBeInTheDocument()
    expect(screen.getByText('Cloud Computing')).toBeInTheDocument()
    expect(screen.getByText('AI Development')).toBeInTheDocument()
    expect(screen.getByText('Web Development')).toBeInTheDocument()
  })

  it('renders resource links', () => {
    expect(screen.getByText('Blog')).toBeInTheDocument()
    expect(screen.getByText('Forum')).toBeInTheDocument()
    expect(screen.getByText('Internship')).toBeInTheDocument()
    expect(screen.getByText('Contact')).toBeInTheDocument()
  })

  it('renders newsletter section', () => {
    expect(screen.getByText('Newsletter')).toBeInTheDocument()
    expect(screen.getByPlaceholderText('Enter your email')).toBeInTheDocument()
    expect(screen.getByText('Subscribe')).toBeInTheDocument()
  })

  it('renders copyright text', () => {
    expect(screen.getByText(/© \d{4} Octobit8/)).toBeInTheDocument()
  })
}) 