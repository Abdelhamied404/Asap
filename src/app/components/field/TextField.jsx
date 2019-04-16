import React from "react";

import TextInput from "@material-ui/core/TextField";

const TextField = props => {
  return (
    <div className="input">
      <TextInput
        {...props.input}
        value={props.val}
        onKeyPress={props.onKeyPress}
        className={props.naked ? "naked" : null}
        multiline={props.multiline}
        fullWidth
        onBlur={props.handleBlur}
        label={props.label}
        variant="filled"
        helperText={<span className="error">{props.errors[props.name]}</span>}
      />
    </div>
  );
};

export default TextField;
