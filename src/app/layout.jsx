import React, { Component } from "react";
import Aux from "./containers/hoc";
import { Switch, Route, Router } from "react-router-dom";
import history from "../actions/history";

// pages
import Dashboard from "./pages/dashboard";
import Login from "./pages/login";
import Signup from "./pages/signup";
import Community from "./pages/community";
import Reserve from "./pages/reserve";

import "./layout.scss";

class Layout extends Component {
  state = {};
  render() {
    return (
      <Aux>
        <Router history={history}>
          <Switch>
            <Route path="/" exact component={Dashboard} />
            <Route path="/login" component={Login} />
            <Route path="/signup" component={Signup} />
            <Route path="/community" component={Community} />
            <Route path="/reserve" component={Reserve} />
          </Switch>
        </Router>
      </Aux>
    );
  }
}

export default Layout;
