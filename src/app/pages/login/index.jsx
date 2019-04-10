import React, { Component } from "react";
import LoginForm from "../../containers/login-form";
import Nav from "../../components/nav";

class Login extends Component {
  state = {};
  render() {
    return (
      <div className="page">
        <div className="signup">
          <Nav />
          <LoginForm />
        </div>
      </div>
    );
  }
}

export default Login;
