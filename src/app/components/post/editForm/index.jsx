import React, { Component } from "react";
import {
  Button,
  Dialog,
  DialogTitle,
  DialogActions,
  DialogContent,
  MenuItem,
  Chip
} from "@material-ui/core";

import Input from "../../field";
import { Field, reduxForm } from "redux-form";

class PostEditForm extends Component {
  state = {
    open: false,
    new_tags: [],
    current_tag: ""
  };

  onEnterHandle = e => {
    if (
      e.key === "Enter" &&
      e.target.value !== "" &&
      /\S/.test(e.target.value)
    ) {
      const val = e.target.value;
      this.setState({ new_tags: [...this.state.new_tags, val] });
      this.setState({ current_tag: "" });
    }
  };
  handleChange = e => {
    this.setState({ current_tag: e.target.value });
  };
  handleDelete = i => {
    const new_tags = [...this.state.new_tags];
    new_tags.splice(i, 1);
    this.setState({ new_tags: new_tags });
  };

  handleClickOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
    this.props.handleClose();
  };

  render() {
    const { fullScreen } = this.props;
    return (
      <div>
        {/* button */}
        <MenuItem
          onClick={() => {
            this.handleClickOpen();
          }}
        >
          Edit
        </MenuItem>

        {/* dialog */}
        <Dialog
          fullWidth={true}
          fullScreen={fullScreen}
          open={this.state.open}
          onClose={this.handleClose}
          aria-labelledby="responsive-dialog-title"
        >
          <DialogTitle id="responsive-dialog-title">Edit the post</DialogTitle>
          <DialogContent>
            {/* form */}
            <div className="title">
              <Field naked label="title" name="title" component={Input} />
            </div>
            <div className="body">
              <Field
                naked
                label="body"
                name="body"
                type="textarea"
                component={Input}
              />
            </div>
            <div className="tags">
              <div className="tag-input">
                <Field
                  naked
                  label="tags"
                  name="tags"
                  type="text"
                  val={this.state.current_tag}
                  component={Input}
                  onKeyPress={this.onEnterHandle}
                  onChange={this.handleChange}
                />
              </div>
              <div className="chips">
                {this.state.new_tags.map((tag, i) => (
                  <Chip
                    key={i}
                    onDelete={() => this.handleDelete(i)}
                    variant="outlined"
                    label={tag}
                  />
                ))}
              </div>
            </div>
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleClose} color="primary">
              Edit
            </Button>
            <Button onClick={this.handleClose} autoFocus>
              Cancel
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}

export default reduxForm({
  form: "new_post" // a unique identifier for this form
})(PostEditForm);
