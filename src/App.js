import React from "react";
import { render } from "react-dom";
import { Router } from "@reach/router";
import Home from "./pages/home";
import "./style.scss";

class App extends React.Component {
  render() {
    return (
      <div>
        <Router>
          <Home path="/" />
        </Router>
      </div>
    );
  }
}

render(<App />, document.getElementById("root"));
