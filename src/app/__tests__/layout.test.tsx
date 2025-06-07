import { render, screen } from '@testing-library/react'
import { AppLayout } from '../layout'

// Mock the Navigation and Footer components
jest.mock('@/components/Navigation', () => {
  return function MockNavigation() {
    return <div data-testid="mock-navigation">Navigation</div>
  }
})

jest.mock('@/components/Footer', () => {
  return function MockFooter() {
    return <div data-testid="mock-footer">Footer</div>
  }
})

// Mock next/font/google to always return { className: 'inter' }
jest.mock('next/font/google', () => ({
  Inter: () => ({ className: 'inter' })
}))

describe('App Layout', () => {
  it('renders the Navigation component', () => {
    render(
      <AppLayout>
        <div>Test Content</div>
      </AppLayout>
    )
    expect(screen.getByTestId('mock-navigation')).toBeInTheDocument()
  })

  it('renders the Footer component', () => {
    render(
      <AppLayout>
        <div>Test Content</div>
      </AppLayout>
    )
    expect(screen.getByTestId('mock-footer')).toBeInTheDocument()
  })

  it('renders children content', () => {
    render(
      <AppLayout>
        <div>Test Content</div>
      </AppLayout>
    )
    expect(screen.getByText('Test Content')).toBeInTheDocument()
  })

  it('applies the Inter font class', () => {
    const { container } = render(
      <AppLayout>
        <div>Test Content</div>
      </AppLayout>
    )
    expect(container.firstChild).toHaveClass('inter')
  })
}) 