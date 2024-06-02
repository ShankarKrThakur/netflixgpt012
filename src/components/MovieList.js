import React from 'react'
import MovieCard from './MovieCard'

const MovieList = ({title, movies}) => {
   console.log("In Movies list");
    console.log(movies);
  return (
    <div className="px-6 ">
        <h1 className="text-xl py-4 font-bold text-white">{title}</h1>
        <div className="flex overflow-x-scroll">
            
            <div className="flex">
              {movies?.map((movies) => <MovieCard key={movies?.id} poster_path={movies?.poster_path}/>)}
                
            </div>
        </div>
      
    </div>
  )
}

export default MovieList
