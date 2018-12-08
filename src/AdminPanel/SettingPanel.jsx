import React, {Component} from 'react';
import {Helmet} from 'react-helmet';
import NavBar from './component/navBar';
import SideMenu from './component/sideMenu.jsx';
class SettingPanel extends Component {
  state={
    fullname:" ",
    email:" ",
    opass:" ",
    npass:" ",
    rnpass:" "
  }
  componentDidMount(){
    fetch("http://localhost:5000/settings",{
      method:"GET",
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
      },
    }).then((res)=>{
      
      return res.json();
    }).then((res)=>{
      console.log(res)
      
    }).catch((err)=>{
      alert("error");
    })
  }
  render() {
    return (
      <React.Fragment>
        <div id="wrapper">
          {/* <!-- NAVBAR --> */}
          <NavBar />
          {/* end of navBar */}
          {/* <!-- LEFT SIDEBAR --> */}
          {/* <!-- END LEFT SIDEBAR --> */}
          {/* <!-- MAIN --> */}
          <SideMenu callingComponent="settingpanel" />

          {/* <CreateTable /> */}
          <div className="main">
            <div className="main-content">
              <div className="container-fluid">
                <label style={{color: 'white',display:"block"}}>Full Name</label>
                <input type="text" className="cellInput" autoFocus name="fulname" value={this.state.fullname}/>
                <br />
                <label style={{color: 'white',display:"block"}}>Email:</label>
                <input type="text" className="cellInput" autoFocus name ="email" value={this.state.email}/>
                <br />
                <label style={{color: 'white',display:"block"}}>Old Password</label>
                <input type="text" className="cellInput" autoFocus name ="opass" />
                <br />
                <label style={{color: 'white',display:"block"}}>New Password</label>
                <input type="text" className="cellInput" autoFocus name="npass" />
                <br />
                <label style={{color: 'white',display:"block"}}> Re-enter New Password</label>
                <input type="text" className="cellInput" autoFocus name="rnpass" />
                <br />
                
                <button type="submit" className="btn btn-primary zoomBtn">
                  Create
                </button>
              </div>
            </div>
          </div>
          {/* <!-- END MAIN --> */}

          <div className="clearfix" />
          <footer>
            <div className="container-fluid">
              <p className="copyright">
                &copy; 2017{' '}
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
export default SettingPanel;
