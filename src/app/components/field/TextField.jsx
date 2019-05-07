import React from "react";

import TextInput from "@material-ui/core/TextField";

const TextField = props => {
  return (
    <div className="input">
      {props.holder ? (
        <TextInput
          {...props.input}
          onKeyPress={props.onKeyPress}
          className={props.naled ? "naked" : null}
          placeholder={props.label}
          fullWidth
          InputProps={{ disableUnderline: true }}
        />
      ) : (
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
          InputProps={{ disableUnderline: true }}
        />
      )}
    </div>
  );
};

export default TextField;
