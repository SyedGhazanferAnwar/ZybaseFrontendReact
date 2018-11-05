import React, { Component } from "react";
import NavBar from "./navBar.jsx";
import SideMenu from "./sideMenu.jsx";

class Terminal extends Component {
  state = {
    messages: ["helllo,hiii"]
  };

  keyPress(e) {
    if (e.key === "Enter") {
      console.log("enter preesed");
      let message = this.state.messages;
      message.push(e.target.value);
      this.setState({ messages: message });
      console.log(e);
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
          <div className="terminal">
            <div className="messages">
              {this.state.messages.map(message => (
                <p>{message}</p>
              ))}
            </div>
            <div className="prompt">
              >
              <input
                id="prompt-input"
                type="text"
                onKeyPress={this.keyPress.bind(this)}
              />
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
