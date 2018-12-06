import React, {Component} from 'react';
import {Helmet} from 'react-helmet';
import NavBar from './component/navBar';
import SideMenu from './component/sideMenu.jsx';
class SettingPanel extends Component {
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
                <label style={{color: 'white'}}>Enter Table Name</label>
                <input type="text" className="cellInput" autoFocus />
                <br />
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
