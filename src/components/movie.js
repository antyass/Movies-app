import React from "react";
import PropTypes from "prop-types";
import { Typography, withStyles } from "material-ui";
import Table, { TableBody, TableCell, TableRow } from "material-ui/Table";

const styles = {
  movie: {
    margin: "0 auto",
    padding: 20,
    maxWidth: 800
  },
  movie__title: {
    fontSize: 30
  },
  movie__overview: {
    fontSize: 20,
    margin: "15px 0"
  },
  movie__poster: {
    display: "block",
    margin: "0 auto",
    transformOrigin: "top"
  },
  movie__table: {
    margin: "10px 0 30px"
  }
};

const convertTime = time => {
  const minutes = time % 60;
  const hours = (time - minutes) / 60;
  return `${hours}h ${minutes}m`;
};

const Movie = props => {
  const { classes } = props;
  return (
    <div className={classes.movie}>
      <Typography
        variant="title"
        color="inherit"
        className={classes.movie__title}
      >
        {props.original_title}
      </Typography>
      <Typography component="p" className={classes.movie__overview}>
        {props.overview}
      </Typography>
      <Table className={classes.movie__table}>
        <TableBody>
          <TableRow>
            <TableCell>Release Date</TableCell>
            <TableCell>User Score</TableCell>
            <TableCell>Budget</TableCell>
            <TableCell>Revenue</TableCell>
            <TableCell>Runtime</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>{props.release_date}</TableCell>
            <TableCell>{parseFloat(props.vote_average) * 10}%</TableCell>
            <TableCell>
              ${parseInt(props.budget).toLocaleString()}
            </TableCell>
            <TableCell>
              ${parseInt(props.revenue).toLocaleString()}
            </TableCell>
            <TableCell>
              {convertTime(parseInt(props.runtime))}
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
      <img
        className={classes.movie__poster}
        src={`https://image.tmdb.org/t/p/w500${props.poster_path}`}
        alt="Poster"
      />
    </div>
  );
};

Movie.defaultProps = {
  original_title: "",
  overview: "",
  poster_path: "",
  release_date: "",
  budget: 0,
  revenue: 0,
  runtime: 0,
  vote_average: 0
};

Movie.propTypes = {
  original_title: PropTypes.string,
  overview: PropTypes.string,
  poster_path: PropTypes.string,
  release_date: PropTypes.string,
  budget: PropTypes.number,
  revenue: PropTypes.number,
  runtime: PropTypes.number,
  vote_average: PropTypes.number,
  classes: PropTypes.object
};

export default withStyles(styles)(Movie);
