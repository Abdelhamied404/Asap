import React from "react";
import AuthTip from "../../../components/auth-tip";
import Input from "../../../components/field";
import { Button } from "@material-ui/core";
import { Field, reduxForm } from "redux-form";

import "./login-form.scss";

const LoginForm = props => {
  return (
    <div className="login-form">
      <div className="login-vec">
        <img src={require("../../../../assets/images/login-vec.svg")} alt="" />
      </div>
      <form action="">
        <AuthTip login />
        <Field name="email" label="email" type="email" component={Input} />
        <Field
          name="password"
          label="password"
          type="password"
          component={Input}
        />
        <Field
          name="remember"
          label="remember"
          type="checkbox"
          component={Input}
        />
        <div className="input">
          <Button className="rounded main" onClick={props.action}>
            Login
          </Button>
        </div>
      </form>
    </div>
  );
};

export default reduxForm({
  form: "loginForm" // a unique identifier for this form
})(LoginForm);
