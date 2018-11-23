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
    data: [],
    inputWidth :90,
    connnection :false,
    fname: "Salman@root#",
    prompt: true,
    requestCount: 0,
    responseCount: 0,
  };
  // componentWillMount(){
  //   let data = this.state.data;
  //   data.push({type:false,text:"connecting to server..."})
  //   fetch("http://localhost:5000/terminal", {
  //       method: "GET",
  //       credentials: "include",
  //       headers: {
  //        "Content-Type": "application/json"
  //     },
  //     })
  //       .then(res => {
  //         console.log(res);
  //         return res.text();
  //       })
  //       .then(res => {
  //         console.log(res);
  //         if(res==="connected");
  //         this.setState({data:[]});
  //         this.setState({prompt:true});
  //       });
  // }


  keyPress(e) {
    this.setState({inputWidth:this.state.inputWidth+15});
    if (e.key === "Enter") {
      this.setState({inputWidth:60})
      //console.log("enter preesed");
      let request = this.state.data;
      request.push({ type: true, text: e.target.value });
      //request.push(e.target.value);
      this.setState({ data: request });
      //this.setState({ requestCount: this.state.requestCount + 1 });
      this.setState({ prompt: false });
      fetch("http://localhost:5000/terminal", {
        method: "POST",
        credentials: "include",
        headers: {
         "Content-Type": "application/json"
      },
        body:JSON.stringify({
        query:e.target.value
        })
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
        }).catch((error)=>{
          let data = this.state.data;
          data.push({type:false,text:"Request timeout.",error:true});
          this.setState({data:data});
          this.setState({prompt:true});
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
                    {message.type?<p className="input-prompt  p-inline ea">{this.state.fname}</p>:null}&nbsp;
                    {message.type?<p className="p-inline text"input-prompt>{message.text}</p>:null}
                    {/* {message.tyepe?<br />:null} */}
                    {!message.type?<p className={message.error?"error":"success"}>{message.text}</p>:null}
                    {!message.type?<br/>:null}
                    
                  </span>
                ))}
              </div>
              <div
                className="prompt"
                style={{ display: this.state.prompt ? "inline" : "none" }}
              >
                <p className="input-prompt">{this.state.fname}</p>
                <input
                style={{width:this.state.inputWidth+'px'}}
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
