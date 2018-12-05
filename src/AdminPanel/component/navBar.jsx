import React, { Component } from "react";

class NavBar extends Component {
  render() {
    return (
      <React.Fragment>
        <nav
          className="navbar navbar-default navbar-fixed-top"
          style={{ background: "none" }}
        >
          <div className="brand" style={{ background: "none" }}>
            <a href="">
              <img
                src="assets/img/logo-dark.png"
                alt="Klorofil Logo"
                className="img-responsive logo"
              />
            </a>
          </div>
          <div className="container-fluid" style={{ background: "#00000080" }}>
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
                <li class="nav-item">
                  <a class="nav-link" href="#">
                    <span> Home</span>
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">
                    <span>Contact us</span>
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">
                    <span> Home</span>
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">
                    <span> Home</span>
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">
                    <button style={{marginBottom:-9}} className="btn btn-primary">Login/Join</button>
                  </a>
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
