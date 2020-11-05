import React from "react";
import { render } from "react-dom";
import { ThemeProvider } from "styled-components";

import App from "./components/App";
import './theme/index'

import "./styles.css";

render(
  <ThemeProvider>
    <App />
  </ThemeProvider>,
  document.querySelector("#root")
);
