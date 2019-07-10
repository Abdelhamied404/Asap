import React from "react";

import TextInput from "@material-ui/core/TextField";
import { InputAdornment, IconButton } from "@material-ui/core";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";

const PasswordField = props => {
  return (
    <div className="input">
      <TextInput
        {...props.input}
        className={props.naked ? "naked" : null}
        fullWidth
        variant="filled"
        type={props.showPassword ? "text" : "password"}
        label={props.label}
        onBlur={props.handleBlur}
        helperText={props.valid ? <span className="error">{props.errors[props.label]}</span> : ""}
        InputProps={{
          disableUnderline: true,
          endAdornment: (
            <InputAdornment position="end">
              <IconButton onClick={props.handleShowPassword}>
                {props.showPassword ? <VisibilityOff /> : <Visibility />}
              </IconButton>
            </InputAdornment>
          )
        }}
      />
    </div>
  );
};

export default PasswordField;
