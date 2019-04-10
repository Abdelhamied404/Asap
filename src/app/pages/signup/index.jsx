import React, { Component } from "react";
import Nav from "../../components/nav";
import SignupForm from "../../containers/signup-form";

import "./signup.scss";

class Signup extends Component {
  state = {};
  render() {
    return (
      <div className="page">
        <div className="signup">
          <Nav />
          <SignupForm />
        </div>
      </div>
    );
  }
}

export default Signup;
