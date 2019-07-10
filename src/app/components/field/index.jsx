import React, { Component } from "react";

import TextField from "./TextField";
import EmailField from "./EmailField";
import PasswordField from "./PasswordField";
import { connect } from "react-redux";

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
      handleShowPassword: () => this.handleShowPassword()
    }
  };

  handleShowPassword = () => {
    this.setState({ meta: { showPassword: !this.state.meta.showPassword } });
  };

  render() {
    const attr = {
      ...this.props,
      ...this.state.meta,
      ...this.state.methods,
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

      case "textarea":
        return <TextField multiline {...attr} />;

      // usual text field by default
      default:
        return <TextField {...attr} />;
    }
  }
}

const mapStateToProps = ({ auth_user }) => ({ ...auth_user });

export default connect(
  mapStateToProps,
  null
)(Field);
