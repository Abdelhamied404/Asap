import React from "react";
import { Checkbox, FormControlLabel } from "@material-ui/core";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";

const theme = createMuiTheme({
  palette: {
    primary: { main: "#56ccf2" }
  },
  typography: {
    useNextVariants: true
  }
});

const CheckBox = props => {
  return (
    <div className="input">
      <MuiThemeProvider theme={theme}>
        <FormControlLabel
          control={
            <Checkbox
              checked={props.checked}
              onBlur={props.handleBlur}
              value={props.remember}
              name={props.name}
              color="primary"
            />
          }
          label="remember me"
        />
      </MuiThemeProvider>
    </div>
  );
};

export default CheckBox;
