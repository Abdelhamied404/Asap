import React, { Component } from "react";
import Nav from "../../components/nav";

import "./dashboard.scss";

class Dashboard extends Component {
  state = {};
  render() {
    return (
      <div className="page">
        <div className="dashboard">
          <Nav
            user={{ name: "ahmed", avatar: "https://via.placeholder.com/150" }}
          />
        </div>
      </div>
    );
  }
}

export default Dashboard;
