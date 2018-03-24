import React from "react";
import PropTypes from "prop-types";
import { Typography, withStyles } from "material-ui";
import Movie from "material-ui-icons/Movie";

const styles = {
  home: {
    backgroundColor: "cornflowerblue",
    textAlign: "center",
    padding: 50,
    color: "white"
  },
  home__title: {
    fontSize: 30
  },
  home__icon: {
    width: 48,
    height: 48
  }
};

const Home = props => {
  const { classes } = props;
  return (
    <div className={classes.home}>
      <Movie color="primary" className={classes.home__icon} />
      <Typography
        variant="title"
        color="inherit"
        className={classes.home__title}
      >
        Welcome to Movies App
      </Typography>
    </div>
  );
}

Home.propTypes = {
  classes: PropTypes.object
};

export default withStyles(styles)(Home);
