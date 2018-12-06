import React, {Component} from 'react';
import Queries from '../../../tableQueries.js';

class CreateTable extends Component {
  state = {
    tableName: '',
    header: ['Id  (auto)', 'Name', 'Action'],
  };
  tableNameChangeHandler = evt => {
    this.setState({tableName: evt.target.value});
  };
  createTableQueryHandler() {
    console.log(Queries.createTable(this.state, this.state.tableName));
    this.setState({tableName: ''});
  }
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
                  <input
                    placeholder="Table Name"
                    onChange={this.tableNameChangeHandler}
                    type="text"
                    value={this.state.tableName}
                    className="cellInput"
                    autoFocus
                  />
                  <br />
                  <br />
                  <button
                    onClick={this.createTableQueryHandler.bind(this)}
                    type="submit"
                    className="btn btn-primary zoomBtn"
                  >
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
