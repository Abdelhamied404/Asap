import React, { Component } from "react";
import Aux from "./containers/hoc";
import { Switch, Route } from "react-router-dom";

// pages
import Dashboard from "./pages/dashboard";
import Login from "./pages/login";
import Signup from "./pages/signup";

class Layout extends Component {
  state = {};
  render() {
    return (
      <Aux>
        <Switch>
          <Route path="/" exact component={Dashboard} />
          <Route path="/login" exact component={Login} />
          <Route path="/signup" exact component={Signup} />
        </Switch>
      </Aux>
    );
  }
}

export default Layout;
