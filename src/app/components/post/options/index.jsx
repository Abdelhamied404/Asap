import { Button, Menu, MenuItem } from "@material-ui/core";
import { ExpandMoreRounded } from "@material-ui/icons";

import React, { Component } from "react";
import PostEditForm from "../editForm";

class PostOptions extends Component {
  state = { anchorEl: null };

  handleClick = event => {
    this.setState({ anchorEl: event.currentTarget });
  };
  handleClose = () => {
    this.setState({ anchorEl: null });
  };

  render() {
    const { anchorEl } = this.state;
    return (
      <div className="post-options">
        <Button
          className="rounded"
          aria-owns={anchorEl ? "popup-menu" : undefined}
          aria-haspopup="true"
          onClick={this.handleClick}
        >
          <ExpandMoreRounded />
        </Button>
        {/* menu */}
        <Menu
          id="post_options_menu"
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={this.handleClose}
        >
          <PostEditForm handleClose={this.handleClose} />
          <MenuItem onClick={this.handleClose}>Delete</MenuItem>
        </Menu>
      </div>
    );
  }
}

export default PostOptions;
