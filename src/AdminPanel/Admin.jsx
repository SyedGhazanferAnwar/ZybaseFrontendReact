import React, {Component} from 'react';
import NavBar from './component/navBar.jsx';
import SideMenu from './component/sideMenu.jsx';
import Main from './component/main.jsx';
import ModifyTable from './component/sidebarComponents/ModifyTable';

class Admin extends Component {
  constructor() {
    super();
    let ss = this.state.row;
  }
  state = {
    row: ['row', 'row2'],
  };

  render() {
    return (
      <React.Fragment>
        <div id="wrapper">
          {/* <!-- NAVBAR --> */}
          <NavBar />
          {/* end of navBar */}
          {/* <!-- LEFT SIDEBAR --> */}
          <SideMenu callingComponent="dashboard" />
          {/* <!-- END LEFT SIDEBAR --> */}
          {/* <!-- MAIN --> */}
          {/* <CreateTable /> */}
          <Main />
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

export default Admin;
