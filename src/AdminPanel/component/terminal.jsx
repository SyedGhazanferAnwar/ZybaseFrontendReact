import React, { Component } from "react";
import NavBar from "./navBar.jsx";
import SideMenu from "./sideMenu.jsx";

class Terminal extends Component {
  state = {
    messages: ["helllo,hiii"],
    fname: "Salman@root#",
    prompt: true
  };

  keyPress(e) {
    if (e.key === "Enter") {
      //console.log("enter preesed");
      let message = this.state.messages;
      message.push(e.target.value);
      this.setState({ messages: message });
      this.setState({ prompt: false });
      fetch("http://localhost:3001", {
        method: "GET"
      })
        .then(res => {
          //console.log(res);
          return res.text();
        })
        .then(res => {
          console.log(res);
          message = this.state.messages;
          message.push(res);
          this.setState({ messages: message });
          this.setState({ prompt: true });
        });
      //console.log(e);
      document.getElementById("prompt-input").value = "";
      // e.preventDefault();
      // e.target.reset();
    }
  }
  render() {
    return (
      <React.Fragment>
        <div id="wrapper">
          {/* <!-- NAVBAR --> */}
          <NavBar />
          {/* end of navBar */}
          {/* <!-- LEFT SIDEBAR --> */}
          <SideMenu callingComponent="Terminal" />
          {/* <!-- END LEFT SIDEBAR --> */}
          {/* <!-- MAIN --> */}

          {/* <CreateTable /> */}
          <div className="main">
            <div className="terminal">
              <div className="messages">
                {this.state.messages.map(message => (
                  <span>
                    <p className="input-prompt p-inline ">{this.state.prompt?this.state.fname:""}</p>

                    <p className="p-inline">{message}</p>
                    <br />
                  </span>
                ))}
              </div>
              <div
                className="prompt"
                style={{ display: this.state.prompt ? "inline" : "none" }}
              >
                <p className="input-prompt">{this.state.fname}</p>
                <input
                  id="prompt-input"
                  type="text"
                  onKeyPress={this.keyPress.bind(this)}
                />
              </div>
            </div>
          </div>
          {/* <!-- END MAIN --> */}
          <div className="clearfix" />
          <footer>
            <div className="container-fluid">
              <p className="copyright">
                &copy; 2017{" "}
                <a href="https://www.themeineed.com" target="_blank">
                  Theme I Need
                </a>
                . All Rights Reserved.
              </p>
            </div>
          </footer>
        </div>
        {/* <!-- END WRAPPER --> */}
        {/* <!-- Javascript --> */}
      </React.Fragment>
    );
  }
}

export default Terminal;
