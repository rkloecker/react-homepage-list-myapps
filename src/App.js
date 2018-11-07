import React, { Component } from "react";
import Main from "./components/Main";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="container">
        <Navbar />
        <Main />
        <Footer />
      </div>
    );
  }
}

export default App;
