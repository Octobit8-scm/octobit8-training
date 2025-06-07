import { render, screen } from '@testing-library/react'

// Mock the data import for courses
jest.mock('@/data/courses', () => ({
  courses: [
    {
      id: 'internship-devops',
      name: 'DevOps Internship',
      description: 'Hands-on DevOps internship experience.',
      duration: '8 weeks',
      price: 0
    },
    {
      id: 'internship-cloud',
      name: 'Cloud Internship',
      description: 'Cloud computing internship with real projects.',
      duration: '8 weeks',
      price: 0
    }
  ]
}))

import InternshipPage from '../page'

describe('Internship Page', () => {
  beforeEach(() => {
    render(<InternshipPage />)
  })

  it('renders the main heading', () => {
    expect(screen.getByText(/Internship Programs/i)).toBeInTheDocument()
  })

  it('renders both internship program cards', () => {
    expect(screen.getByText(/Fresher Internship Program/i)).toBeInTheDocument()
    expect(screen.getByText(/Professional Internship Program/i)).toBeInTheDocument()
  })

  it('renders features for Fresher Internship Program', () => {
    expect(screen.getByText(/Fresher Internship Program/i)).toBeInTheDocument()
    expect(screen.getByText('Perfect for recent graduates and those starting their career in tech.')).toBeInTheDocument()
    expect(screen.getByText('Hands-on project experience')).toBeInTheDocument()
    expect(screen.getByText('Mentorship from industry experts')).toBeInTheDocument()
    expect(screen.getByText('Real-world problem solving')).toBeInTheDocument()
    expect(screen.getAllByText('Certificate of completion')).toHaveLength(2)
    expect(screen.getByText('Potential job opportunities')).toBeInTheDocument()
  })

  it('renders features for Professional Internship Program', () => {
    expect(screen.getByText(/Professional Internship Program/i)).toBeInTheDocument()
    expect(screen.getByText('For experienced professionals looking to upskill or transition to new technologies.')).toBeInTheDocument()
    expect(screen.getByText('Advanced project work')).toBeInTheDocument()
    expect(screen.getByText('Industry best practices')).toBeInTheDocument()
    expect(screen.getByText('Networking opportunities')).toBeInTheDocument()
    expect(screen.getAllByText('Certificate of completion')).toHaveLength(2)
    expect(screen.getByText('Career advancement support')).toBeInTheDocument()
  })

  it('renders Available Internship Courses section', () => {
    expect(screen.getByText(/Available Internship Courses/i)).toBeInTheDocument()
    expect(screen.getByText('DevOps Internship')).toBeInTheDocument()
    expect(screen.getByText('Cloud Internship')).toBeInTheDocument()
  })

  it('renders call to action', () => {
    expect(screen.getByText(/Ready to Start Your Journey\?/i)).toBeInTheDocument()
    expect(screen.getByText('Apply Now')).toBeInTheDocument()
  })
}) 