import React from "react";

import { Link } from "react-router-dom";

import "./tip.scss";

const AuthTip = props => {
  return tip(props);
};

const tip = props => {
  if (props.signup) {
    return (
      <div className="tip">
        <p>
          already have an account{" "}
          <Link className="active link" to="/login">
            Login
          </Link>
        </p>
      </div>
    );
  } else {
    return (
      <div className="tip">
        <p>
          don't have account yet?{" "}
          <Link className="active link" to="/signup">
            Signup
          </Link>
        </p>
      </div>
    );
  }
};

export default AuthTip;
