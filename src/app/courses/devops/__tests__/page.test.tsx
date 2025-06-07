import { render, screen } from '@testing-library/react'
import DevOpsCourses from '../page'

// Mock the data import for courses
jest.mock('@/data/courses', () => ({
  getCoursesByCategory: () => [
    {
      id: 'devops-101',
      name: 'DevOps Foundations',
      description: 'Learn the basics of DevOps, CI/CD, and automation.',
      duration: '6 weeks',
      price: 4999
    },
    {
      id: 'devops-advanced',
      name: 'Advanced DevOps',
      description: 'Deep dive into Kubernetes, Docker, and cloud-native DevOps.',
      duration: '8 weeks',
      price: 7999
    }
  ]
}))

describe('DevOps Courses Page', () => {
  beforeEach(() => {
    render(<DevOpsCourses />)
  })

  it('renders the DevOps Courses heading', () => {
    expect(screen.getByText('DevOps Courses')).toBeInTheDocument()
  })

  it('renders all course cards', () => {
    expect(screen.getByText('DevOps Foundations')).toBeInTheDocument()
    expect(screen.getByText('Advanced DevOps')).toBeInTheDocument()
  })

  it('renders course descriptions', () => {
    expect(screen.getByText('Learn the basics of DevOps, CI/CD, and automation.')).toBeInTheDocument()
    expect(screen.getByText('Deep dive into Kubernetes, Docker, and cloud-native DevOps.')).toBeInTheDocument()
  })

  it('renders Learn More and Enroll Now links for each course', () => {
    expect(screen.getAllByText('Learn More').length).toBe(2)
    expect(screen.getAllByText('Enroll Now').length).toBe(2)
  })
}) 