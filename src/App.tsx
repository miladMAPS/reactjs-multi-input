import React from "react";
import Form from "./components/Form/Form";
import { ThemeProvider } from "@material-ui/core/styles";
import { indigoTheme } from "./constants/themes";
import "./App.scss";

function App() {
  return (
    <ThemeProvider theme={indigoTheme}>
      <Form />
    </ThemeProvider>
  );
}

export default App;
