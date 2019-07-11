import React, { Component } from "react";
import Aux from "./containers/hoc";
import { Switch, Route, Router } from "react-router-dom";
import history from "../actions/history";

// pages
import Dashboard from "./pages/dashboard";
import Login from "./pages/login";
import Signup from "./pages/signup";
import Community from "./pages/community";
import SectionsPage from "./pages/sections";
import Speciality from "./pages/speciality";
import Profile from "./pages/profile";
import Reserve from "./pages/reserve";

import "./layout.scss";
import Search from "./pages/search";
import Code from "./pages/code";
import Check from "./pages/check";

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
            <Route path="/sections" exact component={SectionsPage} />
            <Route path="/section/:name" component={Speciality} />
            <Route path="/profile" exact component={Profile} />
            <Route path="/user/:name" component={Profile} />
            <Route path="/reserve/:name" component={Reserve} />
            <Route path="/search" component={Search} />
            <Route path="/code/:id" component={Code} />
            <Route path="/check" component={Check} />
          </Switch>
        </Router>
      </Aux>
    );
  }
}

export default Layout;
