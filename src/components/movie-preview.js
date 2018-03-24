import React from "react";
import PropTypes from "prop-types";
import { withRouter } from "react-router-dom";
import { Button, Typography, withStyles } from "material-ui";
import Card, { CardActions, CardContent } from 'material-ui/Card';

const styles = {
  movie: {
    display: 'flex',
    flexDirection: 'column'
  },
  movie__content: {
    display: 'flex',
    flexDirection: 'column',
    flexGrow: 1,
    alignItems: 'center',
    padding: '10px 0 0'
  },
  movie__button: {
    margin: '0 auto'
  },
  movie__title: {
    fontSize: 24,
    margin: "0 10px",
    textAlign: 'center'
  },
  movie__poster: {
    width: '100%',
    objectFit: 'contain',
    display: 'block',
    marginTop: 'auto' 
  },
  movie__overview: {
    margin: '10px 0'
  }
};

class MoviePreview extends React.Component {
  constructor(props) {
    super(props);

    this.showMovie = this.showMovie.bind(this);
  }

  showMovie() {
    this.props.history.push(`/movies/${this.props.id}`);
  }

  render() {
    const { classes } = this.props;
    return (
      <Card className={classes.movie}>
        <CardContent className={classes.movie__content}>
          <Typography variant="title" color="inherit" className={classes.movie__title}>
            {this.props.original_title}
          </Typography>
          <Typography component="p" className={classes.movie__overview} title={this.props.overview}>
            {this.props.overview.length < 20
              ? this.props.overview
              : `${this.props.overview.slice(0, 19)}...`}
          </Typography>
          <img className={classes.movie__poster} src={`https://image.tmdb.org/t/p/w500${this.props.poster_path}`} alt="Poster" />
        </CardContent>
        <CardActions>
          <Button className={classes.movie__button} color="inherit" onClick={this.showMovie}>Learn More</Button>
        </CardActions>
      </Card>
    );
  }
  
}

MoviePreview.defaultProps = {
  original_title: '',
  overview: '',
  poster_path: ''
}

MoviePreview.propTypes = {
  original_title: PropTypes.string,
  overview: PropTypes.string,
  poster_path: PropTypes.string,
  history: PropTypes.object,
  classes: PropTypes.object,
  id: PropTypes.number
};

export default withStyles(styles)(withRouter(MoviePreview));