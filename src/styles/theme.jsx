import { createMuiTheme } from "@material-ui/core/styles";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#42c2c2"
    },
    secondary: {
      main: "#56eef2"
    }
  },
  overrides: {
    MuiPaper: {
      elevation8: {
        boxShadow: "0px 12px 20px #00000014"
      }
    },
    MuiFilledInput: {
      adornedEnd: {
        paddingRight: 0
      }
    },
    MuiFormHelperText: {
      root: {
        margin: 0,
        minHeight: 0,
        "span.error": {
          display: "block",
          margin: "5px",
          color: "red"
        }
      }
    },
    MuiPrivateTextarea: {
      root: {
        minHeight: "150px",
        overflow: "auto",
        "& textarea": {
          height: "100%"
        }
      }
    },

    MuiBackdrop: {
      invisible: {
        backgroundColor: "#0000001a"
      }
    }
  },
  typography: { useNextVariants: true }
});

export default theme;
