import React, { Fragment } from "react";
import PropTypes from "prop-types";
import { Grid, withStyles, Button, Typography } from "material-ui";
import MoviePreview from "./movie-preview";

const styles = {
  movies: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, 294px)",
    justifyContent: "center",
    width: "100%",
    margin: 0,
    padding: "0 10px"
  },
  movies__item: {
    display: "flex"
  },
  movies__genres: {
    width: "auto",
    margin: "0 20px",
    justifyContent: "center"
  },
  movies__button: {
    margin: 3
  },
  movies__button_active: {
    backgroundColor: "black"
  }
};

const MovieList = props => {
  const { movies, classes, genreId } = props;
  const genres = [{ id: 0, name: "All" }, ...props.genres];
  return movies.length > 0 ? (
    <Fragment>
      <Grid container spacing={24} className={classes.movies__genres}>
        {genres.map(genre => (
          <Grid key={genre.id} className={classes.movies__genre}>
            <Button
              variant="raised"
              onClick={props.handleGenreButtonClick.bind(this, genre.id)}
              className={classes.movies__button}
              color={genreId === genre.id ? "primary" : "default"}
            >
              {genre.name}
            </Button>
          </Grid>
        ))}
      </Grid>
      <Grid container className={classes.movies} spacing={24}>
        {movies.map(movie => (
          <Grid key={movie.id} className={classes.movies__item} item>
            <MoviePreview {...movie} />
          </Grid>
        ))}
      </Grid>
    </Fragment>
  ) : (
    <Typography variant="title" align="center" color="inherit">
      Loading...
    </Typography>
  );
};

MovieList.propTypes = {
  movies: PropTypes.array,
  genres: PropTypes.array,
  handleGenreButtonClick: PropTypes.func.isRequired,
  classes: PropTypes.object,
  genreId: PropTypes.number,
};

export default withStyles(styles)(MovieList);
