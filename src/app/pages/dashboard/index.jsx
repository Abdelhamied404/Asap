import React, { Component } from "react";
import Nav from "../../components/nav";

import "./dashboard.scss";
import Recommended from "../../containers/recommended";
import Sections from "../../containers/sections";

class Dashboard extends Component {
  state = {};
  render() {
    return (
      <div className="page">
        <div className="dashboard">
          <Nav
            profile
            user={{ name: "ahmed", avatar: "https://via.placeholder.com/150" }}
          />
          <Recommended />
          <Sections />
        </div>
      </div>
    );
  }
}

export default Dashboard;
