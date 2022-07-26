import { createTheme } from "@mui/material";
import { ThemeProvider } from "@mui/styles";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

const baseTheme = createTheme();

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={baseTheme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
