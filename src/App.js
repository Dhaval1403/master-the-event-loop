import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

import CallbackQueue from "./components/CallbackQueue/CallbackQueue";
import queue from "./components/CallbackQueue/queue";

class App extends Component {
  render() {
    return <CallbackQueue queue={queue} />;
  }
}

export default App;
