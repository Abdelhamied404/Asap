import React, { Component } from "react";
import Nav from "../../components/nav";
import Form from "../../containers/form";

import "./signup.scss";

class Signup extends Component {
  state = {};
  render() {
    return (
      <div className="page">
        <div className="signup">
          <Nav />
          <Form register />
        </div>
      </div>
    );
  }
}

export default Signup;
