import React from "react";
import AuthTip from "../../../components/auth-tip";
import Input from "../../../components/field";
import { Button, MenuItem } from "@material-ui/core";
import { Field, reduxForm } from "redux-form";

import "./signup-form.scss";

const SignupForm = props => {
  return (
    <div className="signup-form">
      <div className="signup-vec">
        <img src={require("../../../../assets/images/signup-vec.svg")} alt="" />
      </div>
      <form action="">
        <AuthTip signup />
        <Field valid label="name" name="name" component={Input} />
        <Field valid label="email" name="email" type="email" component={Input} />
        <Field
          valid
          label="password"
          name="password"
          type="password"
          component={Input}
        />
        <Field valid label="gender" name="gender" type="dropdown" component={Input}>
          <MenuItem value={"male"}>Male</MenuItem>
          <MenuItem value={"female"}>Female</MenuItem>
        </Field>
        <Field
          label="remember"
          name="remember"
          type="checkbox"
          component={Input}
        />

        <div className="input">
          <Button className="rounded main" onClick={props.action}>
            Signup
          </Button>
        </div>
      </form>
    </div>
  );
};

export default reduxForm({
  form: "signupForm" // a unique identifier for this form
})(SignupForm);
