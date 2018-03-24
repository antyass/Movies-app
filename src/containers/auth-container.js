import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Login from "../components/login";
import * as actions from "../ducks/auth-duck/Actions";
import {
  selectError,
  selectToken,
  selectAuthStatus
} from "../ducks/auth-duck/Selectors";

class AuthContainer extends React.Component {

  componentWillReceiveProps(nextProps) {
    nextProps.isAuth && this.props.history.push("/movies");
  }

  componentDidMount() {
    this.props.fetchTokenRequest();
  }

  render() {
    return (
      <Login
        {...this.props}
        token={this.props.requestToken}
        authWithLogin={this.props.authWithLogin}
        handleError={this.props.handleError}
      />
    );
  }
}

const mapStateToProps = state => ({
  requestToken: selectToken(state),
  isAuth: selectAuthStatus(state),
  error: selectError(state)
});

const mapDispatchToProps = {
  fetchTokenRequest: actions.fetchTokenRequest,
  authWithLogin: actions.loginRequest,
  handleError: actions.handleLoginError,
};

AuthContainer.propTypes = {
  fetchTokenRequest: PropTypes.func.isRequired,
  authWithLogin: PropTypes.func.isRequired,
  handleError: PropTypes.func.isRequired,
  isAuth: PropTypes.bool,
  history: PropTypes.object,
  requestToken: PropTypes.string
};

export default connect(mapStateToProps, mapDispatchToProps)(AuthContainer);
