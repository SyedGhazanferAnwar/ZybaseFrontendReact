import React, {Component} from 'react';
import {Helmet} from 'react-helmet';
import NavBar from './navBar';
import SideMenu from './sideMenu.jsx';
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
      //console.log(res)
      
    }).catch((err)=>{
      alert("error");
    })
  }
  fullnameChangeHandler = e => {
    this.setState({fullname: e.target.value},()=>{
      console.log(this.state.fullname)
    });
    
  };
  render() {
    return (
      <React.Fragment>
        
          {/* <CreateTable /> */}
          <div className="main">
            <div className="main-content">
              <div className="container-fluid">
                <label style={{color: 'white',display:"block"}}>Full Name</label>
                <input type="text" className="cellInput" autoFocus name="fulname" defaultValue={this.state.fullname}  onChange={this.fullnameChangeHandler}/>
                <br />
                <label style={{color: 'white',display:"block"}}>Email:</label>
                <input type="text" className="cellInput" autoFocus name ="email" defaultValue={this.state.email}/>
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

          
      </React.Fragment>
    );
  }
}
export default SettingPanel;
