import React, { Component } from "react";

class SideMenu extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <div id="sidebar-nav" className="sidebar">
          <div className="sidebar-scroll">
            <nav>
              <ul className="nav">
                <li>
                  <a href="" className="active">
                    <i className="lnr lnr-home" /> <span>Dashboard</span>
                  </a>
                </li>
                <li>
                  <a
                    href="#subPages"
                    data-toggle="collapse"
                    className="collapsed"
                  >
                    <i className="lnr lnr-file-empty" />
                    <span>Desk</span>{" "}
                    <i className="icon-submenu lnr lnr-chevron-left" />
                  </a>
                  <div id="subPages" className="collapse ">
                    <ul className="nav">
                      <li>
                        <a href="page-profile.html" className="">
                          Create Table
                        </a>
                      </li>
                      <li>
                        <a href="page-login.html" className="">
                          View Table
                        </a>
                      </li>
                    </ul>
                  </div>
                </li>
                <li>
                  <a href="charts.html" className="">
                    <i className="lnr lnr-chart-bars" /> <span>Analytics</span>
                  </a>
                </li>
                <li>
                  <a href="panels.html" className="">
                    <i className="lnr lnr-cog" /> <span> Settings Panel</span>
                  </a>
                </li>

                {/* Start of push Notificcation */}
                {/* <li>
                  <a href="notifications.html" className="">
                    <i className="lnr lnr-alarm" /> <span>Push Notifications</span>
                  </a>
                </li> */}
                {/* End of  Push Notification */}
              </ul>
            </nav>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default SideMenu;
