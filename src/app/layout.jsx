import React, { Component } from "react";
import Aux from "./containers/hoc";
import { Switch, Route } from "react-router-dom";
import Splash from "./pages/splash";

class Layout extends Component {
  state = {};
  render() {
    return (
      <Aux>
        <Switch>
          <Route path="/" exact component={Splash} />
        </Switch>
      </Aux>
    );
  }
}

export default Layout;
