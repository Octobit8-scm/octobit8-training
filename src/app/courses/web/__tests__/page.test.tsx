import { render, screen } from '@testing-library/react'
import WebCoursesPage from '../page'

describe('Web Courses Page', () => {
  beforeEach(() => {
    render(<WebCoursesPage />)
  })

  it('renders the main heading', () => {
    expect(screen.getByText('Web Development Courses')).toBeInTheDocument()
  })

  it('renders all course cards', () => {
    expect(screen.getByText('Frontend Development')).toBeInTheDocument()
    expect(screen.getByText('Backend Development')).toBeInTheDocument()
    expect(screen.getByText('Full Stack Development')).toBeInTheDocument()
  })

  it('renders course descriptions', () => {
    expect(screen.getByText('Master modern frontend technologies and build responsive, interactive web applications.')).toBeInTheDocument()
    expect(screen.getByText('Learn to build robust and scalable backend systems using modern technologies.')).toBeInTheDocument()
    expect(screen.getByText('Become a full stack developer by mastering both frontend and backend technologies.')).toBeInTheDocument()
  })

  it('renders key topics for each course', () => {
    expect(screen.getByText('HTML5 & CSS3')).toBeInTheDocument()
    expect(screen.getByText('Node.js')).toBeInTheDocument()
    expect(screen.getByText('Full Stack Architecture')).toBeInTheDocument()
  })

  it('renders Learn More button for each course', () => {
    expect(screen.getAllByText('Learn More').length).toBe(3)
  })

  it('renders Why Learn Web Development section', () => {
    expect(screen.getByText('Why Learn Web Development?')).toBeInTheDocument()
    expect(screen.getByText('High Demand')).toBeInTheDocument()
    expect(screen.getByText('Practical Projects')).toBeInTheDocument()
    expect(screen.getByText('Modern Technologies')).toBeInTheDocument()
    expect(screen.getByText('Career Growth')).toBeInTheDocument()
  })
}) 