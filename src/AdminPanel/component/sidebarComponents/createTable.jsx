import React, {Component} from 'react';
class CreateTable extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <div className="main">
          {/* <!-- MAIN CONTENT --> */}
          <div className="main-content">
            <div className="container-fluid">
              {/* {/* <!-- OVERVIEW --> */}
              <div className="panel panel-headline">
                <div className="panel-heading">
                  <div className="panel-title">
                    <h3>Create Table</h3>
                  </div>
                  {/* <p className="panel-subtitle">Period: Oct 14, 2016 - Oct 21, 2016</p> */}
                </div>
                <div className="panel-body">
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
          </div>
          {/* <!-- END MAIN CONTENT --> */}
        </div>
      </React.Fragment>
    );
  }
}

export default CreateTable;
