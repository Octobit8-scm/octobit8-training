'use client'

import React from 'react'
import YouTube from 'react-youtube'

interface YouTubePlayerProps {
  videoId: string
}

const YouTubePlayer: React.FC<YouTubePlayerProps> = ({ videoId }) => {
  return (
    <div className="aspect-w-16 aspect-h-9">
      <YouTube
        videoId={videoId}
        opts={{
          width: '100%',
          height: '100%',
          playerVars: {
            modestbranding: 1,
            rel: 0
          }
        }}
      />
    </div>
  )
}

export default YouTubePlayer 