import React, { Component } from "react";
import Aux from "./containers/hoc";
import { Switch, Route } from "react-router-dom";

// pages
import Dashboard from "./pages/dashboard";

class Layout extends Component {
  state = {};
  render() {
    return (
      <Aux>
        <Switch>
          <Route path="/" exact component={Dashboard} />
        </Switch>
      </Aux>
    );
  }
}

export default Layout;
