import React, { Component } from "react";
import NavBar from "./navBar.jsx";
import SideMenu from "./sideMenu.jsx";

class Terminal extends Component {
  // state = {
  //   messages: ["helllo,hiii"],
  //   fname: "Salman@root#",
  //   prompt: true
  // };

  state = {
    data: [
      
    ],
    fname: "Salman@root#",
    prompt: true,
    requestCount: 0,
    responseCount: 0
  };

  keyPress(e) {
    if (e.key === "Enter") {
      //console.log("enter preesed");
      let request = this.state.data;
      request.push({ type: true, text: e.target.value });
      //request.push(e.target.value);
      this.setState({ data: request });
      //this.setState({ requestCount: this.state.requestCount + 1 });
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
          let response = this.state.data;
          response.push({ type:false, text: res });
          this.setState({ data: response });
          //this.setState({ responseCount: this.state.responseCount + 1 });
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
                {this.state.data.map(message => (
                  <span>
                    {message.type?<p className="input-prompt  p-inline ">{this.state.fname}</p>:null}&nbsp;
                    {message.type?<p className="p-inline text"input-prompt>{message.text}</p>:null}
                    {message.tyepe?<br />:null}
                    {!message.type?<p>{message.text}</p>:null}
                    
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
                  className="input-prompt"
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
