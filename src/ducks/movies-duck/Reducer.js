import * as types from "./ActionTypes";

const initialState = {
  moviesList: [],
  selectedMovie: {},
  genres: [],
  genreId: 0,
  error: ""
};

const movies = (state = initialState, action) => {
  switch (action.type) {
    case types.FETCH_MOVIES_SUCCESS:
      return {
        ...state,
        moviesList: action.moviesList
      };
    case types.FETCH_GENRES_SUCCESS:
      return {
        ...state,
        genres: action.genres
      };
    case types.FETCH_GENRE_ID:
      return {
        ...state,
        genreId: action.genreId
      };
    case types.FETCH_MOVIE_SUCCESS:
      return {
        ...state,
        selectedMovie: action.selectedMovie
      };
    case types.FETCH_MOVIES_ERROR:
    case types.FETCH_MOVIE_ERROR:
    case types.FETCH_GENRES_ERROR:
      return {
        ...state,
        error: action.error
      };
    default:
      return state;
  }
};

export default movies;