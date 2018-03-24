import React from "react";
import PropTypes from 'prop-types';
import { connect } from "react-redux";
import MovieList from "../components/movie-list";
import * as actions from "../ducks/movies-duck/Actions";
import { selectError, selectMovies, selectGenres, selectActiveGenre } from '../ducks/movies-duck/Selectors';

class MoviesContainer extends React.Component {
  constructor(props) {
    super(props);

    this.handleGenreButtonClick = this.handleGenreButtonClick.bind(this);
  }

  componentDidMount() {
    this.props.fetchMoviesRequest();
    this.props.fetchGenresRequest();
  }

  handleGenreButtonClick(id) {
    this.props.fetchGenreId(id);
  }

  render() {
    return (
      <MovieList
        movies={this.props.moviesList}
        genres={this.props.genres}
        genreId={this.props.genreId}
        handleGenreButtonClick={this.handleGenreButtonClick}
      />
    );
  }
}

const mapStateToProps = state => ({
  moviesList: selectMovies(state),
  genres: selectGenres(state),
  genreId: selectActiveGenre(state),
  error: selectError(state)
});

const mapDispatchToProps = {
  fetchMoviesRequest: actions.fetchMoviesRequest,
  fetchGenresRequest: actions.fetchGenresRequest,
  fetchGenreId: actions.fetchGenreId
};

MoviesContainer.propTypes = {
  fetchMoviesRequest: PropTypes.func.isRequired,
  fetchGenresRequest: PropTypes.func.isRequired,
  fetchGenreId: PropTypes.func.isRequired,
  moviesList: PropTypes.array,
  genres: PropTypes.array,
  genreId: PropTypes.number
};

export default connect(mapStateToProps, mapDispatchToProps)(MoviesContainer);
