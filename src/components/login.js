import React from "react";
import PropTypes from "prop-types";
import { withStyles, TextField, Button, Typography } from "material-ui";

const styles = {
  form: {
    display: "flex",
    flexDirection: "column",
    padding: 50,
    backgroundColor: "rgba(76, 117, 163, 0.2)",
    maxWidth: 500,
    margin: "0 auto"
  },
  form__field: {
    marginBottom: 10,
    padding: "5px 0"
  },
  form__submit: {
    margin: "20px auto 0",
    maxWidth: 100
  },
  error: {
    fontSize: 18,
    margin: 10,
    color: "red"
  }
};

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: ""
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.handleError("");
    this.props.authWithLogin(
      this.state.username,
      this.state.password,
      this.props.token
    );
  }

  render() {
    const { classes } = this.props;
    return (
      <div>
        <form className={classes.form} onSubmit={this.handleSubmit}>
          <TextField
            className={classes.form__field}
            onChange={this.handleChange}
            type="text"
            label="Username"
            name="username"
          />
          <TextField
            className={classes.form__field}
            onChange={this.handleChange}
            type="password"
            label="Password"
            name="password"
          />
          <Button
            className={classes.form__submit}
            color="inherit"
            type="submit"
          >
            Log in
          </Button>
        </form>
        <Typography
          variant="caption"
          align="center"
          color="inherit"
          className={classes.error}
        >
          {this.props.error}
        </Typography>
      </div>
    );
  }
}

Login.propTypes = {
  authWithLogin: PropTypes.func.isRequired,
  handleError: PropTypes.func.isRequired,
  token: PropTypes.string,
  error: PropTypes.string,
  classes: PropTypes.object
};

export default withStyles(styles)(Login);
