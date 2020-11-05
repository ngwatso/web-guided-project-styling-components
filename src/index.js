import React from "react";
import { render } from "react-dom";
import { ThemeProvider } from "styled-components";

import App from "./components/App";

import "./styles.css";

render(<App />, document.querySelector("#root"));
