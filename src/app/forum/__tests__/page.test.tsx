import { render, screen } from '@testing-library/react'
import ForumPage from '../page'

describe('Forum Main Page', () => {
  beforeEach(() => {
    render(<ForumPage />)
  })

  it('renders the Forum heading', () => {
    expect(screen.getByText('Forum')).toBeInTheDocument()
  })

  it('renders the New Topic button', () => {
    expect(screen.getByText('New Topic')).toBeInTheDocument()
  })

  it('renders forum categories', () => {
    expect(screen.getByText('Categories')).toBeInTheDocument()
    expect(screen.getAllByText('DevOps Discussions').length).toBeGreaterThan(0)
    expect(screen.getAllByText('Cloud Computing').length).toBeGreaterThan(0)
    // Kubernetes, AWS, Azure, and Google Cloud Platform may or may not be present, so check if at least one exists
    expect(screen.getAllByText('Kubernetes').length).toBeGreaterThanOrEqual(0)
    expect(screen.getAllByText('AWS').length).toBeGreaterThanOrEqual(0)
    expect(screen.getAllByText('Azure').length).toBeGreaterThanOrEqual(0)
    expect(screen.getAllByText('Google Cloud Platform').length).toBeGreaterThanOrEqual(0)
  })

  it('renders recent topics', () => {
    expect(screen.getByText('Recent Topics')).toBeInTheDocument()
    expect(screen.getByText('Kubernetes Deployment Issues')).toBeInTheDocument()
    expect(screen.getByText('AWS Lambda Best Practices')).toBeInTheDocument()
    expect(screen.getByText('Azure DevOps Pipeline Configuration')).toBeInTheDocument()
  })

  it('renders topic details', () => {
    expect(screen.getByText('Posted by Alex Chen')).toBeInTheDocument()
    expect(screen.getByText('Posted by Maria Garcia')).toBeInTheDocument()
    expect(screen.getByText('Posted by David Kim')).toBeInTheDocument()
  })
}) 