import React, {Component} from 'react';
import NavBar from './navBar.jsx';
import SideMenu from './sideMenu.jsx';

class Notifications extends Component {
  
  

  render() {
    return (
      <React.Fragment>
        <div id="wrapper">
          {/* <!-- NAVBAR --> */}
          <NavBar />
          {/* end of navBar */}
          {/* <!-- LEFT SIDEBAR --> */}
          <SideMenu callingComponent="Notifications" />
          {/* <!-- END LEFT SIDEBAR --> */}
          {/* <!-- MAIN --> */}

          {/* <CreateTable /> */}
          <div className="main">
          <div className="main-content">
            <div className="container-fluid">
              {/* custom kaam */}
              <div className="row">
              <div className="col-md-12  ">
              <div className="panel panel-headline login-form">
                    <div className="panel-heading">
                    <h2 style={{marginBottom:"30px"}}>Send Notification</h2>
                    <label style={{ color: "white", display: "block" }}>
                        Notification Title
                      </label>
                      <input
                        type="text"
                        className="cellInput up"
                        autoFocus
                        name="fulname"
                        
                      />
                      <br />
                      <label style={{ color: "white", display: "block" }}>
                        Notification Text
                      </label>
                      <input
                        type="text"
                        className="cellInput up"
                        autoFocus
                        name="fulname"

                      />
                      <br />
                      <button className="btn btn-primary zoomBtn" style={{width:"70px",height:"34px",marginTop:"5px"}}>Send</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          </div>
          {/* <!-- END MAIN --> */}

          <div className="clearfix" />
          <footer>
            <div className="container-fluid" />
          </footer>
        </div>
        {/* <!-- END WRAPPER --> */}
        {/* <!-- Javascript --> */}
      </React.Fragment>
    );
  }
}

export default Notifications;
