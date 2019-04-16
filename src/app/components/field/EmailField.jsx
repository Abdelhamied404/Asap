import React from "react";

import TextInput from "@material-ui/core/TextField";

const EmailField = props => {
  return (
    <div className="input">
      <TextInput
        {...props.input}
        className={props.naked ? "naked" : null}
        fullWidth
        onBlur={props.handleBlur}
        label={props.label}
        type="email"
        autoComplete="email"
        variant="filled"
        helperText={<span className="error">{props.errors[props.name]}</span>}
      />
    </div>
  );
};

export default EmailField;
