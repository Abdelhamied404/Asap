import React, { Component } from "react";
import Doctor from "../../components/doctor";
import history from "../../../actions/history";

import { NavLink } from "react-router-dom";

import "./doctors.scss";
import { CircularProgress } from "@material-ui/core";

class Doctors extends Component {
  state = {
    counter: 6
  };

  BackHome = () => {
    setTimeout(() => {
      history.push("/");
    }, 5000);
  };

  list_doctors = list =>
    list.map(doctor => <Doctor wide {...doctor} key={doctor.id} />);

  componentDidMount() {
    setInterval(() => {
      this.setState({ counter: this.state.counter - 1 });
    }, 1000);
  }

  render() {
    if (!this.props.isErr) {
      return (
        <div className="doctors">
          {this.props.doctors ? (
            this.list_doctors(this.props.doctors)
          ) : (
            <CircularProgress />
          )}
        </div>
      );
    } else {
      return (
        <div className="doctors">
          <div className="error">
            <div className="msg">
              <p>Wrong Section</p>
              <small>
                redirecting to home in {this.state.counter} seconds{" "}
                <NavLink className="default" to="/">
                  redirect now
                </NavLink>
              </small>
            </div>
            {this.BackHome()}
          </div>
        </div>
      );
    }
  }
}

export default Doctors;
