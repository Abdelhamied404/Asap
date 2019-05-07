import React, { Component } from "react";
import { BrowserRouter } from "react-router-dom";
import Layout from "./app/layout";

import { MuiThemeProvider } from "@material-ui/core/styles";
import theme from "./styles/theme";

class App extends Component {
  render() {
    return (
      <MuiThemeProvider theme={theme}>
        <BrowserRouter>
          <div className="App">
            <Layout />
          </div>
        </BrowserRouter>
      </MuiThemeProvider>
    );
  }
}

export default App;
