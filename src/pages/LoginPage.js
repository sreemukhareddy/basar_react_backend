import React, { Component } from "react";

class LoginPage extends Component {
  state = {
    username: "",
    password: "",
    apiError: null,
  };

  usernameChangeHandler = (event) => {
    this.setState({
      username: event.target.value,
      apiError: null,
    });
  };

  passwordChangeHandler = (event) => {
    this.setState({
      password: event.target.value,
      apiError: null,
    });
  };

  loginButtonHandler = (event) => {
    event.preventDefault();
    const body = {
      username: this.state.username,
      password: this.state.password,
    };
    this.props.actions
      .login(body)
      .then((res) => {})
      .catch((error) => {
        if (error.response) {
          this.setState({
            apiError: error.response.data.message,
          });
        } else {
          this.setState({
            apiError: "Unexpected Error Has Occured",
          });
        }
      });
  };

  render() {
    let disabledButton = false;
    if (this.state.username === "" || this.state.password === "") {
      disabledButton = true;
    }
    return (
      <div>
        <div className="container">
          <h1 className="text-center">Login</h1>
          <div className="col-12 mb-3">
            <label>Username</label> <br />
            <input
              type="text"
              placeholder="Username"
              value={this.state.username}
              onChange={this.usernameChangeHandler}
            />
            <br />
            <label>Password</label>
            <br />
            <input
              type="password"
              placeholder="Password"
              value={this.state.password}
              onChange={this.passwordChangeHandler}
            />
            <div className="text-center">
              <button
                className="btn btn-primary"
                disabled={disabledButton}
                onClick={this.loginButtonHandler}
              >
                Login
              </button>
            </div>
            {this.state.apiError && (
              <div className="col-12 mb-3">
                <div className="alert alert-danger">{this.state.apiError}</div>
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default LoginPage;
