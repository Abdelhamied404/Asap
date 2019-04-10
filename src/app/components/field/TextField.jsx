import React from "react";

import TextInput from "@material-ui/core/TextField";

const TextField = props => {
  return (
    <div className="input">
      <TextInput
        fullWidth
        onBlur={props.handleBlur}
        label={props.name}
        name={props.name}
        variant="filled"
        helperText={<span className="error">{props.errors[props.name]}</span>}
      />
    </div>
  );
};

export default TextField;
