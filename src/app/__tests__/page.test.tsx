import { render, screen } from '@testing-library/react'
import Home from '../page'

describe('Home Page', () => {
  beforeEach(() => {
    render(<Home />)
  })

  it('renders the hero section with main heading', () => {
    expect(screen.getByText('Master Modern Software Technologies')).toBeInTheDocument()
  })

  it('renders the hero section description', () => {
    expect(screen.getByText('Professional training in DevOps and Cloud Computing. Choose between live interactive sessions or self-paced learning.')).toBeInTheDocument()
  })

  it('renders the Explore Courses button', () => {
    expect(screen.getByText('Explore Courses')).toBeInTheDocument()
  })

  it('renders course categories section', () => {
    expect(screen.getByText('DevOps Courses')).toBeInTheDocument()
    expect(screen.getByText('Cloud Computing Courses')).toBeInTheDocument()
  })

  it('renders course category descriptions', () => {
    expect(screen.getByText('Master the tools and practices of modern DevOps including CI/CD, Infrastructure as Code, and containerization.')).toBeInTheDocument()
    expect(screen.getByText('Learn cloud platforms including AWS, Azure, and GCP. From developer to master level certifications.')).toBeInTheDocument()
  })

  it('renders course category links', () => {
    expect(screen.getByText('View DevOps Courses →')).toBeInTheDocument()
    expect(screen.getByText('View Cloud Courses →')).toBeInTheDocument()
  })

  it('renders the internship section', () => {
    expect(screen.getByText('Launch Your Career with Our Internship Program')).toBeInTheDocument()
    expect(screen.getByText('Gain real-world experience through our internship program. Open for both freshers and professionals.')).toBeInTheDocument()
    expect(screen.getByText('Learn More About Internships')).toBeInTheDocument()
  })
}) 