import React, { Component } from "react";
import Loading from "../../components/loading";

import "./splash.scss";

class Splash extends Component {
  state = { splashTime: 10 };
  render() {
    return (
      <div className="full-page">
        <div className="splash">
          <Loading />
        </div>
      </div>
    );
  }
}

export default Splash;
