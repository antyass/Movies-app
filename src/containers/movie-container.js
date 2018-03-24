import React from "react";
import PropTypes from "prop-types";
import { Typography } from "material-ui";
import { connect } from "react-redux";
import Movie from "../components/movie";
import * as actions from "../ducks/movies-duck/Actions";
import { selectError, selectMovie } from "../ducks/movies-duck/Selectors";

class MovieContainer extends React.Component {

  componentDidMount() {
    this.props.getMovie(this.props.match.params.id);
  }

  render() {
    return this.props.selectedMovie !== {} ? (
      <Movie
        {...this.props.selectedMovie}
      />
    ) : (
      <Typography
        variant="title"
        align="center"
        color="inherit"
      >
        Can&apos;t get info about the movie.
      </Typography>
    );
  }
}

const mapStateToProps = state => ({
  selectedMovie: selectMovie(state),
  error: selectError(state)
});

const mapDispatchToProps = {
  getMovie: actions.fetchMovieRequest
};

MovieContainer.propTypes = {
  getMovie: PropTypes.func.isRequired,
  selectedMovie: PropTypes.object,
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string
    })
  }).isRequired
};

export default connect(mapStateToProps, mapDispatchToProps)(MovieContainer);
