import React from "react";
import FilledInput from "@material-ui/core/FilledInput";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import { FormHelperText } from "@material-ui/core";

class SimpleSelect extends React.Component {
  state = {};

  render() {
    return (
      <div className="input">
        <FormControl fullWidth variant="filled">
          <InputLabel>gender</InputLabel>
          <Select
            disableUnderline
            {...this.props.input}
            onChange={event => {
              this.props.input.onChange(event.target.value);
            }}
            input={<FilledInput fullWidth name="gender" />}
          >
            {this.props.children}
          </Select>
          <FormHelperText>
            {
              <span className="error">
                {this.props.errors[this.props.name]}
              </span>
            }
          </FormHelperText>
        </FormControl>
      </div>
    );
  }
}

export default SimpleSelect;
