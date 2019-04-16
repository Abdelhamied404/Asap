import React, { Component } from "react";
import Form from "../../containers/form";
import Nav from "../../components/nav";

class Login extends Component {
  state = {};
  render() {
    return (
      <div className="page">
        <div className="signup">
          <Nav />
          <Form />
        </div>
      </div>
    );
  }
}

export default Login;
