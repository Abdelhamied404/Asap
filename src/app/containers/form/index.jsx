import React from "react";

import { login, signup } from "../../../actions/user";

import SignupForm from "./signup-form";
import LoginForm from "./login-form";

import { connect } from "react-redux";

const Form = props => {
  console.log(props.register);
  return props.register ? (
    <SignupForm action={() => props.signup(props.signupForm.values)} />
  ) : (
    <LoginForm action={() => props.login(props.loginForm.values)} />
  );
};

// redux
const mapStateToProps = ({ form }) => ({ ...form });
const mapDispatchToProps = dispatch => {
  return {
    login: creds => dispatch(login(creds)),
    signup: user => dispatch(signup(user))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Form);
