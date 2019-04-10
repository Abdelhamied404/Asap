import React from "react";

import TextInput from "@material-ui/core/TextField";
import { InputAdornment, IconButton } from "@material-ui/core";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";

const PasswordField = props => {
  return (
    <div className="input">
      <TextInput
        fullWidth
        variant="filled"
        type={props.showPassword ? "text" : "password"}
        label={props.name}
        name={props.name}
        onBlur={props.handleBlur}
        helperText={<span className="error">{props.errors[props.name]}</span>}
        InputProps={{
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
