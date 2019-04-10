import React from "react";
import AuthTip from "../../components/auth-tip";
import Field from "../../components/field";
import { Button, MenuItem } from "@material-ui/core";

import { connect } from "react-redux";
import { signup } from "../../../actions/user";

import "./signup-form.scss";

const SignupForm = props => {
  return (
    <div className="signup-form">
      <div className="signup-vec">
        <img src={require("../../../assets/images/signup-vec.svg")} alt="" />
      </div>
      <form action="">
        <AuthTip signup />
        <Field name="name" />
        <Field name="email" type="email" />
        <Field name="password" type="password" />
        <Field name="gender" type="dropdown">
          <MenuItem value={"male"}>Male</MenuItem>
          <MenuItem value={"female"}>Female</MenuItem>
        </Field>
        <Field name="remember" type="checkbox" />

        <div className="input">
          <Button
            className="rounded main"
            onClick={() => props.signup({ ...props.auth_user })}
          >
            Signup
          </Button>
        </div>
      </form>
    </div>
  );
};

const mapStateToProps = ({ auth_user }) => ({ auth_user });
const mapDispatchToProps = dispatch => {
  return {
    signup: user => dispatch(signup(user))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SignupForm);
