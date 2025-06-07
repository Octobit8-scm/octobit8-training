import { render, screen } from '@testing-library/react'
import CoursePage from '../page'

// Mock the Navigation component
jest.mock('@/components/Navigation', () => {
  return function MockNavigation() {
    return <div data-testid="mock-navigation">Navigation</div>
  }
})

describe('Course Page', () => {
  const mockParams = {
    category: 'devops',
    course: 'kubernetes-mastery'
  }

  beforeEach(() => {
    render(<CoursePage params={mockParams} />)
  })

  it('renders the course title', () => {
    expect(screen.getAllByText(/Kubernetes Mastery/i)).toHaveLength(2)
  })

  it('renders the course description', () => {
    expect(screen.getByText(/Comprehensive training in kubernetes mastery/)).toBeInTheDocument()
  })

  it('renders training modes', () => {
    expect(screen.getByText('Live Training')).toBeInTheDocument()
    expect(screen.getByText('Self-Paced')).toBeInTheDocument()
  })

  it('renders training mode features', () => {
    expect(screen.getByText('Real-time doubt clearing')).toBeInTheDocument()
    expect(screen.getByText('Lifetime access to course content')).toBeInTheDocument()
  })

  it('renders course content sections', () => {
    expect(screen.getByText('Course Content')).toBeInTheDocument()
    expect(screen.getByText('Introduction and Setup')).toBeInTheDocument()
    expect(screen.getByText('Core Concepts')).toBeInTheDocument()
    expect(screen.getByText('Advanced Topics')).toBeInTheDocument()
  })

  it('renders course preview video', () => {
    expect(screen.getByText('Course Preview')).toBeInTheDocument()
    const iframe = screen.getByTitle('Course Preview')
    expect(iframe).toBeInTheDocument()
    expect(iframe).toHaveAttribute('src', 'https://www.youtube.com/embed/dQw4w9WgXcQ')
  })

  it('renders internship section', () => {
    expect(screen.getByText('Internship Opportunity')).toBeInTheDocument()
    expect(screen.getByText('Get hands-on experience through our internship program. Open for both freshers and professionals.')).toBeInTheDocument()
    expect(screen.getByText('Learn More About Internship')).toBeInTheDocument()
  })
}) 