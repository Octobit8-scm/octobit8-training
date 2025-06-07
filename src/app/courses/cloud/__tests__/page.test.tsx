import { render, screen } from '@testing-library/react'
import CloudCourses from '../page'

// Mock the data import for courses
jest.mock('@/data/courses', () => ({
  getCoursesByCategory: () => [
    {
      id: 'cloud-101',
      name: 'Cloud Foundations',
      description: 'Learn the basics of cloud computing and major cloud providers.',
      duration: '6 weeks',
      price: 4999
    },
    {
      id: 'cloud-advanced',
      name: 'Advanced Cloud Computing',
      description: 'Deep dive into AWS, Azure, and GCP services and architectures.',
      duration: '8 weeks',
      price: 7999
    }
  ]
}))

describe('Cloud Courses Page', () => {
  beforeEach(() => {
    render(<CloudCourses />)
  })

  it('renders the Cloud Computing Courses heading', () => {
    expect(screen.getByText('Cloud Computing Courses')).toBeInTheDocument()
  })

  it('renders all course cards', () => {
    expect(screen.getByText('Cloud Foundations')).toBeInTheDocument()
    expect(screen.getByText('Advanced Cloud Computing')).toBeInTheDocument()
  })

  it('renders course descriptions', () => {
    expect(screen.getByText('Learn the basics of cloud computing and major cloud providers.')).toBeInTheDocument()
    expect(screen.getByText('Deep dive into AWS, Azure, and GCP services and architectures.')).toBeInTheDocument()
  })

  it('renders Learn More and Enroll Now links for each course', () => {
    expect(screen.getAllByText('Learn More').length).toBe(2)
    expect(screen.getAllByText('Enroll Now').length).toBe(2)
  })
}) 