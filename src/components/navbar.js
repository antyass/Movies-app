import React from "react";
import PropTypes from "prop-types";
import { withRouter } from "react-router-dom";
import { AppBar, Toolbar, Button, Typography, withStyles } from "material-ui";

const styles = {
  navbar: {
    flexGrow: 1,
    marginBottom: 20
  },
  navbar__logo: {
    flex: 1
  }
};

class NavBar extends React.Component {
  constructor(props) {
    super(props);

    this.handleLoginClick = this.handleLoginClick.bind(this);
    this.handleLogoutClick = this.handleLogoutClick.bind(this);
    this.showHome = this.showHome.bind(this);
    this.showMovies = this.showMovies.bind(this);
  }

  showHome() {  
    this.props.history.push("/");
  }

  showMovies() {
    this.props.history.push("/movies");
  }

  handleLoginClick() {
    this.props.history.push("/login");
  }

  handleLogoutClick() {
    this.props.logout();
    this.props.history.push("/login");
  }

  render() {
    const { classes } = this.props;
    return (
      <AppBar position="static" className={classes.navbar}>
        <Toolbar>
          <Typography
            variant="title"
            color="inherit"
            className={classes.navbar__logo}
          >
            Movies App
          </Typography>
          <Button color="inherit" onClick={this.showHome}>
            Home
          </Button>
          <Button color="inherit" onClick={this.showMovies}>
            Movies
          </Button>
          {this.props.isAuth ? (
            <Button color="inherit" onClick={this.handleLogoutClick}>
              Logout
            </Button>
          ) : (
            <Button color="inherit" onClick={this.handleLoginClick}>
              Login
            </Button>
          )}
        </Toolbar>
      </AppBar>
    );
  }
}

NavBar.propTypes = {
  logout: PropTypes.func.isRequired,
  classes: PropTypes.object.isRequired,
  history: PropTypes.object,
  isAuth: PropTypes.bool
};

export default withStyles(styles)(withRouter(NavBar));
