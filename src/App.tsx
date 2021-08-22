import React from "react";
import Routes from "./routes/Routes";
import { ThemeProvider } from "styled-components";
import { theme } from "./utils/styles/theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Routes />
    </ThemeProvider>
  );
}

export default App;
