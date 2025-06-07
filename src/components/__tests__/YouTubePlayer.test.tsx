import { render, screen } from '@testing-library/react'
import YouTubePlayer from '../YouTubePlayer'

// Mock the react-youtube component
jest.mock('react-youtube', () => {
  return function MockYouTube({ videoId }: { videoId: string }) {
    return <div data-testid="youtube-player" data-video-id={videoId}>YouTube Player</div>
  }
})

describe('YouTubePlayer', () => {
  it('renders the YouTube player with the correct videoId', () => {
    render(<YouTubePlayer videoId="dQw4w9WgXcQ" />)
    const player = screen.getByTestId('youtube-player')
    expect(player).toBeInTheDocument()
    expect(player).toHaveAttribute('data-video-id', 'dQw4w9WgXcQ')
  })
}) 