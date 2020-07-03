import { createMuiTheme } from "@material-ui/core/styles";
import { indigo } from "@material-ui/core/colors";

export const indigoTheme = createMuiTheme({
  palette: {
    primary: {
      main: indigo[400],
    },
  },
});
