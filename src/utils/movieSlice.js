import { createSlice } from "@reduxjs/toolkit";


const movieSlice = createSlice(
    {
        name: "movies",
        initialState: {
            nowPlayingMovies: null,
            trailerVideo: null,
            nowPlayingPopularMovie: null,
        },
        reducers : {
            addNowPlayingMovies : (state, action) => {
                state.nowPlayingMovies = action.payload;
            },
            addTrailerVideo : (state, action) => {
                state.trailerVideo = action.payload;
            },
            addNowPlayingPopularMovies : (state, action) => {
                state.nowPlayingPopularMovie = action.payload;
            }
        }
    }
);
export const {addNowPlayingMovies, addTrailerVideo, addNowPlayingPopularMovies} = movieSlice.actions;
export default movieSlice.reducer;