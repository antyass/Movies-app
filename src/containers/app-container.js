import React, { Fragment } from "react";
import PropTypes from 'prop-types';
import { Switch, Route, withRouter, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import NavBar from "../components/navbar";
import Home from "../components/home";
import MoviesContainer from "./movies-container";
import MovieContainer from "./movie-container";
import AuthContainer from "./auth-container";
import { logout } from "../ducks/auth-duck/Actions";
import { selectAuthStatus } from "../ducks/auth-duck/Selectors";

const PrivateRouter = () => {
  return (
    <Switch>
      <Route exact path="/movies" component={MoviesContainer} />
      <Route path="/movies/:id" component={MovieContainer} />
    </Switch>
  );
};

const AppContainer = props => {
  return (
    <Fragment>
      <NavBar logout={props.logout} isAuth={props.isAuth} />
      <Route exact path="/" component={Home} />
      <Route path="/login" component={AuthContainer} />
      <Route
        path="/movies"
        render={() => {
          return props.isAuth ? (
            <PrivateRouter />
          ) : (
            <Redirect
              to={{
                pathname: "/login"
              }}
            />
          )
        }}
      />
    </Fragment>
  );
};

const mapStateToProps = state => ({
  isAuth: selectAuthStatus(state)
});

const mapDispatchToProps = {
  logout
};

AppContainer.propTypes = {
  logout: PropTypes.func.isRequired,
  isAuth: PropTypes.bool
};

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(AppContainer)
);
