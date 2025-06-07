import { render, screen } from '@testing-library/react'
import AICoursesPage from '../page'

describe('AI Courses Page', () => {
  beforeEach(() => {
    render(<AICoursesPage />)
  })

  it('renders the main heading', () => {
    expect(screen.getByText('Agentic AI Development Courses')).toBeInTheDocument()
  })

  it('renders all course cards', () => {
    expect(screen.getByText('AI Fundamentals')).toBeInTheDocument()
    expect(screen.getByText('Agentic AI Development')).toBeInTheDocument()
    expect(screen.getByText('AI Engineering')).toBeInTheDocument()
  })

  it('renders course descriptions', () => {
    expect(screen.getByText('Learn the basics of artificial intelligence, machine learning, and deep learning.')).toBeInTheDocument()
    expect(screen.getByText('Master the development of autonomous AI agents and intelligent systems.')).toBeInTheDocument()
    expect(screen.getByText('Learn to build and deploy production-ready AI systems.')).toBeInTheDocument()
  })

  it('renders key topics for each course', () => {
    expect(screen.getByText('Machine Learning Basics')).toBeInTheDocument()
    expect(screen.getByText('Reinforcement Learning')).toBeInTheDocument()
    expect(screen.getByText('MLOps')).toBeInTheDocument()
  })

  it('renders Learn More button for each course', () => {
    expect(screen.getAllByText('Learn More').length).toBe(3)
  })

  it('renders Why Learn AI Development section', () => {
    expect(screen.getByText('Why Learn AI Development?')).toBeInTheDocument()
    expect(screen.getByText('Industry Demand')).toBeInTheDocument()
    expect(screen.getByText('Hands-on Experience')).toBeInTheDocument()
    expect(screen.getByText('Expert Instructors')).toBeInTheDocument()
    expect(screen.getByText('Career Support')).toBeInTheDocument()
  })
}) 