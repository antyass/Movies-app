export const selectMovies = state => {
  if (state.movies.genreId !== 0) {
    return state.movies.moviesList.filter(movie => {
      return movie.genre_ids.includes(state.movies.genreId);
    });
  }

  return state.movies.moviesList;
};

export const selectMovie = state => state.movies.selectedMovie;

export const selectActiveGenre = state => state.movies.genreId;

export const selectGenres = state => {
  if (state.movies.genres.length && state.movies.moviesList.length) {
    const activeIds = new Set(
      state.movies.moviesList
        .map(item => item.genre_ids)
        .reduce((a, b) => a.concat(b))
    );

    return state.movies.genres.filter(genre => activeIds.has(genre.id));
  }

  return state.movies.genres;
};

export const selectError = state => state.movies.error;
