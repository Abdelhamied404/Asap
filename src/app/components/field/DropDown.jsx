import React from "react";
import FilledInput from "@material-ui/core/FilledInput";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import { FormHelperText } from "@material-ui/core";

class SimpleSelect extends React.Component {
  state = {
    gender: ""
  };

  handleChange = event => {
    this.props.handleBlur(event);
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
    return (
      <div className="input">
        <FormControl fullWidth variant="filled">
          <InputLabel>gender</InputLabel>
          <Select
            value={this.state.gender}
            onChange={this.handleChange}
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
