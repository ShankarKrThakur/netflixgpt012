import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { addNowPlayingPopularMovies } from "../utils/movieSlice";
import { options } from "../utils/constants";

const useNowPlayingPopularMovie = () => {
    const dispatch = useDispatch();
  const getNowPlayingPopularMovies = async() =>{
    const data = await fetch('https://api.themoviedb.org/3/movie/popular?&page=1', options);
    const json = await data.json();
    
    dispatch(addNowPlayingPopularMovies(json.results));
  }

  useEffect(() => {
    getNowPlayingPopularMovies();
  },[] )
}
export default useNowPlayingPopularMovie;