import React, { Component } from "react";
import { Helmet } from "react-helmet";
import NavBar from "./navBar";
import SideMenu from "./sideMenu.jsx";
class SettingPanel extends Component {
  state = {
    fullname: " ",
    email: " ",
    opass: "",
    npass: "",
    rnpass: "",
    flag: true
  };
  componentDidMount() {
    fetch("http://localhost:5000/settings", {
      method: "GET",
      credentials: "include",
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then(res => {
        return res.json();
      })
      .then(res => {
        this.setState({ fullname: res.fullname });
        this.setState({ email: res.email });
      });
  }
  fullnameChangeHandler = e => {
    this.setState({ fullname: e.target.value });
    this.setState({ flag: false });
    console.log(this.state.fullname);
  };
  opassChangeHandler = e => {
    this.setState({ opass: e.target.value });
    this.setState({ flag: false });
    console.log(this.state.opass);
  };
  npassChangeHandler = e => {
    this.setState({ npass: e.target.value });
    this.setState({ flag: false });
    console.log(this.state.npass);
  };

  rnpassChangeHandler = e => {
    this.setState({ rnpass: e.target.value });
    this.setState({ flag: false });
    console.log(this.state.rnpass);
  };
  handleSubmit() {
    let fullname = this.state.fullname;
    let email = this.state.email;
    let opass = this.state.opass;
    let npass = this.state.npass;
    let rnpass = this.state.rnpass;
    if (opass != "" || npass != "" || rnpass != "") {
      if (npass == rnpass) {
        fetch("http://localhost:5000/settings", {
          method: "POST",
          credentials: "include",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            fullname: fullname,
            opass: opass,
            npass: npass,
            rnpass: rnpass
          })
        }).then(res => {
          return res.json();
        }).then((res)=>{
          if(res.error==true){
            this.setState({eMessage:res.eMessage});
          }
        })
      }
    }
  }
  render() {
    return (
      <React.Fragment>
        {/* <CreateTable /> */}
        <div className="main">
          <div className="main-content">
            <div className="container-fluid">
              <label style={{ color: "white", display: "block" }}>
                Full Name
              </label>
              <input
                type="text"
                className="cellInput"
                autoFocus
                name="fulname"
                value={this.state.fullname}
                onChange={this.fullnameChangeHandler}
              />
              <br />
              <label style={{ color: "white", display: "block" }}>Email:</label>
              <input
                type="text"
                className="cellInput"
                autoFocus
                name="email"
                style={{ color: "#a9a9a9" }}
                value={this.state.email}
                readOnly
              />
              <br />
              <label style={{ color: "white", display: "block" }}>
                Old Password
              </label>
              <input
                type="text"
                className="cellInput"
                autoFocus
                name="opass"
                onChange={this.opassChangeHandler}
              />
              <br />
              <label style={{ color: "white", display: "block" }}>
                New Password
              </label>
              <input
                type="text"
                className="cellInput"
                autoFocus
                name="npass"
                onChange={this.npassChangeHandler}
              />
              <br />
              <label style={{ color: "white", display: "block" }}>
                {" "}
                Re-enter New Password
              </label>
              <input
                type="text"
                className="cellInput"
                autoFocus
                name="rnpass"
                onChange={this.rnpassChangeHandler}
              />
              <br />

              <button
                type="button"
                className="btn btn-primary zoomBtn"
                disabled={this.state.flag}
                onClick={this.handleSubmit}
              >
                save
              </button>
            </div>
          </div>
        </div>
        {/* <!-- END MAIN --> */}
      </React.Fragment>
    );
  }
}
export default SettingPanel;
