import React, { Component } from "react";
import { connect } from "react-redux";

import { OnBlur } from "../../../actions/auth_user";

import TextField from "./TextField";
import EmailField from "./EmailField";
import PasswordField from "./PasswordField";

import CheckBox from "./CheckBox";
import DropDown from "./DropDown";

import "./field.scss";

// root
class Field extends Component {
  state = {
    meta: {
      showPassword: false
    },
    methods: {
      handleBlur: e => this.handleBlur(e),
      handleShowPassword: () => this.handleShowPassword()
    }
  };

  handleBlur = e => {
    let val = e.target.value;
    // check if it was checkbox
    if (e.target.type === "checkbox") val = e.target.checked;
    this.props.OnBlur({ [e.target.name]: val });
  };
  handleShowPassword = () => {
    this.setState({ meta: { showPassword: !this.state.meta.showPassword } });
  };

  render() {
    const attr = {
      ...this.props,
      ...this.state.meta,
      ...this.state.methods,
      errors: this.props.auth_user.errors
    };

    switch (this.props.type) {
      case "email":
        return <EmailField {...attr} />;
      case "password":
        return <PasswordField {...attr} />;

      case "checkbox":
        return <CheckBox {...attr} />;

      case "dropdown":
        return <DropDown {...attr} />;

      // usual text field by default
      default:
        return <TextField {...attr} />;
    }
  }
}

const mapStateToProps = ({ auth_user }) => ({ auth_user });
const mapDispatchToProps = dispatch => {
  return {
    OnBlur: data => dispatch(OnBlur(data))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Field);
