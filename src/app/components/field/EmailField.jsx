import React from "react";

import TextInput from "@material-ui/core/TextField";

const EmailField = props => {
  return (
    <div className="input">
      <TextInput
        fullWidth
        onBlur={props.handleBlur}
        label={props.name}
        type="email"
        name={props.name}
        autoComplete="email"
        variant="filled"
        helperText={<span className="error">{props.errors[props.name]}</span>}
      />
    </div>
  );
};

export default EmailField;
