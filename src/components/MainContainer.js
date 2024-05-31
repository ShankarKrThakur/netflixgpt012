import React from 'react'
import { useSelector } from 'react-redux'
import VideoBackground from './VideoBackground'
import VideoTitle from './VideoTitle'

const MainContainer = () => {
    const movies = useSelector(store => store.movie?.nowPlayingMovies)
  return ( 
    <div>
      <VideoBackground/>
      <VideoTitle/>
    </div>
  )
}

export default MainContainer
