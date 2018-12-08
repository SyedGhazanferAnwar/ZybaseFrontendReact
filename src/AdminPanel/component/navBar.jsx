import React, {Component} from 'react';

class NavBar extends Component {
  logout() {
    fetch('http://localhost:5000/logout', {
      method: 'GET',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then(function(res) {
        return res.json();
      })
      .then(response => {
        console.log(response);
      })
      .catch(function(res) {
        console.log(res);
      });
    console.log('request sent');
  }
  render() {
    return (
      <React.Fragment>
        <nav className="navbar navbar-default navbar-fixed-top" style={{background: 'none'}}>
          <div className="brand" style={{background: 'none'}}>
            <a href="">
              {/* <img src="assets/img/logo-dark.png" alt="Klorofil Logo" className="img-responsive logo" /> */}
              <h2 style={{marginBottom: -11}}>ZYBASE</h2>
            </a>
          </div>
          <div className="container-fluid" style={{background: '#00000080'}}>
            {/* <div className="navbar-btn navbar-btn-right">
              <a
                className="btn btn-success update-pro"
                href="https://www.themeineed.com/downloads/klorofil-pro-bootstrap-admin-dashboard-template/?utm_source=klorofil&utm_medium=template&utm_campaign=KlorofilPro"
                title="Upgrade to Pro"
                target="_blank"
              >
                <i className="fa fa-rocket" /> <span>UPGRADE eTO PRO</span>
              </a>
            </div> */}
            <div id="navbar-menu">
              <ul className="nav navbar-nav navbar-right">
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    <span> Home</span>
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    <span>Contact us</span>
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    <span> Home</span>
                  </a>
                  <ul className="dropdown-menu notifications">
                    <li>
                      <a href="#" className="notification-item">
                        <span className="dot bg-warning" />
                        System space is almost full
                      </a>
                    </li>
                    <li>
                      <a href="#" className="notification-item">
                        <span className="dot bg-danger" />
                        You have 9 unfinished tasks
                      </a>
                    </li>
                    <li>
                      <a href="#" className="notification-item">
                        <span className="dot bg-success" />
                        Monthly report is available
                      </a>
                    </li>
                    <li>
                      <a href="#" className="notification-item">
                        <span className="dot bg-warning" />
                        Weekly meeting in 1 hour
                      </a>
                    </li>
                    <li>
                      <a href="#" className="notification-item">
                        <span className="dot bg-success" />
                        Your request has been approved
                      </a>
                    </li>
                    <li>
                      <a href="#" className="more">
                        See all notifications
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    <span> Home</span>
                  </a>
                  <ul className="dropdown-menu">
                    <li>
                      <a href="#">Basic Use</a>
                    </li>
                    <li>
                      <a href="#">Working With Data</a>
                    </li>
                    <li>
                      <a href="#">Security</a>
                    </li>
                    <li>
                      <a href="#">Troubleshooting</a>
                    </li>
                  </ul>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    <button onClick={this.logout} style={{marginBottom: -9}} className="btn btn-primary">
                      Logout
                    </button>
                  </a>
                  <ul className="dropdown-menu">
                    <li>
                      <a href="#">
                        <i className="lnr lnr-user" /> <span>My Profile</span>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="lnr lnr-envelope" /> <span>Message</span>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="lnr lnr-cog" /> <span>Settings</span>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="lnr lnr-exit" /> <span>Logout</span>
                      </a>
                    </li>
                  </ul>
                </li>
                {/* <li>
                  <a
                    className="update-pro"
                    href="https://www.themeineed.com/downloads/klorofil-pro-bootstrap-admin-dashboard-template/?utm_source=klorofil&utm_medium=template&utm_campaign=KlorofilPro"
                    title="Upgrade to Pro"
                    target="_blank"
                  >
                    <i className="fa fa-rocket" /> <span>UPGRADE TO PRO</span>
                  </a>
                </li>{" "} */}
              </ul>
            </div>
          </div>
        </nav>
        {/* <!-- END NAVBAR --> */}
      </React.Fragment>
    );
  }
}

export default NavBar;
