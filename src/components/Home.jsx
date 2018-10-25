import React, { Component } from "react";
import logo from "../logo.svg";
import "../App.css";
import { Link } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <div style={{ textAlign: "center", marginTop: 15 }}>
            <p>Please Login To Continue</p>
            <button className="btn btn-primary">
              <Link to="/login">Login</Link>
            </button>
            <img
              src={logo}
              className="center App-logo"
              alt="logo"
              style={{
                width: 500,
                height: 500,
                display: "block",
                marginLeft: "auto",
                marginRight: "auto",
                width: "50%"
              }}
            />
            <p>
              Edit <code>src/App.js</code> and save to reload.
            </p>
          </div>
        </header>
      </div>
    );
  }
}

export default App;
