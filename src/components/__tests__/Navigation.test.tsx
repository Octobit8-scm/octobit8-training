import { render, screen, fireEvent } from '@testing-library/react'
import Navigation from '../Navigation'

describe('Navigation', () => {
  beforeEach(() => {
    render(<Navigation />)
  })

  it('renders the Octobit8 heading and description', () => {
    expect(screen.getByText('Octobit8')).toBeInTheDocument()
  })

  it('renders the main navigation links', () => {
    expect(screen.getAllByText('Courses').length).toBeGreaterThan(0)
    expect(screen.getAllByText('Blog').length).toBeGreaterThan(0)
    expect(screen.getAllByText('Forum').length).toBeGreaterThan(0)
    expect(screen.getAllByText('Internship').length).toBeGreaterThan(0)
  })

  it('renders the search bar', () => {
    expect(screen.getAllByPlaceholderText('Search courses...').length).toBeGreaterThan(0)
  })

  it('renders the courses dropdown', () => {
    const coursesButtons = screen.getAllByText('Courses')
    fireEvent.click(coursesButtons[0])

    expect(screen.getAllByText('DevOps').length).toBeGreaterThan(0)
    expect(screen.getAllByText('Cloud Computing').length).toBeGreaterThan(0)
    expect(screen.getAllByText('Agentic AI Development').length).toBeGreaterThan(0)
    expect(screen.getAllByText('Web Development').length).toBeGreaterThan(0)
  })

  describe('Mobile Navigation', () => {
    it('shows mobile menu button', () => {
      expect(screen.getByRole('button', { name: /open main menu/i })).toBeInTheDocument()
    })

    it('opens mobile menu when menu button is clicked', () => {
      const menuButton = screen.getByRole('button', { name: /open main menu/i })
      fireEvent.click(menuButton)

      expect(screen.getAllByText('Courses').length).toBeGreaterThan(0)
      expect(screen.getAllByText('Blog').length).toBeGreaterThan(0)
      expect(screen.getAllByText('Forum').length).toBeGreaterThan(0)
      expect(screen.getAllByText('Internship').length).toBeGreaterThan(0)
    })

    it('shows mobile courses dropdown when clicked', () => {
      const menuButton = screen.getByRole('button', { name: /open main menu/i })
      fireEvent.click(menuButton)

      const mobileCoursesButton = screen.getAllByRole('button').find(btn => btn.textContent?.includes('Courses'))
      expect(mobileCoursesButton).toBeDefined()
      if (mobileCoursesButton) fireEvent.click(mobileCoursesButton)

      expect(screen.getAllByText('DevOps').length).toBeGreaterThan(0)
      expect(screen.getAllByText('Cloud Computing').length).toBeGreaterThan(0)
      expect(screen.getAllByText('Agentic AI Development').length).toBeGreaterThan(0)
      expect(screen.getAllByText('Web Development').length).toBeGreaterThan(0)
    })

    it('renders mobile search bar', () => {
      const menuButton = screen.getByRole('button', { name: /open main menu/i })
      fireEvent.click(menuButton)

      expect(screen.getAllByPlaceholderText('Search courses...').length).toBeGreaterThan(0)
    })
  })
}) 