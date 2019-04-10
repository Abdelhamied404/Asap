import React from "react";
import AuthTip from "../../components/auth-tip";
import Field from "../../components/field";
import { Button } from "@material-ui/core";
import { connect } from "react-redux";
import { login } from "../../../actions/user";

import "./login-form.scss";

const LoginForm = props => {
  return (
    <div className="login-form">
      <div className="login-vec">
        <img src={require("../../../assets/images/login-vec.svg")} alt="" />
      </div>
      <form action="">
        <AuthTip login />
        <Field name="email" type="email" />
        <Field name="password" type="password" />
        <Field name="remember" type="checkbox" />
        <div className="input">
          <Button
            className="rounded main"
            onClick={() =>
              props.login({ email: props.email, password: props.password })
            }
          >
            Login
          </Button>
        </div>
      </form>
    </div>
  );
};

const mapStateToProps = ({ auth_user }) => ({ ...auth_user });
const mapDispatchToProps = dispatch => {
  return {
    login: creds => dispatch(login(creds))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginForm);
