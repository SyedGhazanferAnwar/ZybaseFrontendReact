import React, { Component } from "react";
import Rows from "./Rows.jsx";
// import Columns from "./columns.jsx";
import { AvForm, AvField } from "availity-reactstrap-validation";

class CreateTable extends Component {
  constructor() {
    super();
  }

  state = {
    irow: 1,
    icol: 234,
    newHeader: "",
    header: ["id", "value", "name"],
    columns: [{ id: 1, value: 1, type: "" }],
    row: [{ id: 1, value: 2, type: "" }]
  };
  addHeaderHandler = value => {
    const header = [...this.state.header];
    // console.log(this.state.newHeader);
    header.push(this.state.newHeader);
    this.setState({ header: header });
    this.addColHandler();
    console.log(header.map((header, index) => header));
    return;
    // <CreateTable />;
  };
  printHeader() {}
  addRowHandler = rows => {
    let irow = this.state.irow;
    irow++;
    this.setState({ irow: irow });
    const rowData = [...this.state.row];
    let newRow = [{ id: irow, value: 3 }];
    console.log(newRow[0]);
    rowData.push(newRow);
    this.setState({ row: rowData });
  };
  addColHandler = col => {
    let irow = this.state.irow;
    // this.setState({ irow: irow });
    const colData = [...this.state.columns];
    let newRow = [{ id: irow, value: 302 }];
    colData.push(newRow);
    this.setState({ columns: colData });
  };
  onUpdateHeader = evt => {
    let val = evt.target.value;
    // console.log(val);
    this.setState({ newHeader: val });
  };

  render() {
    return (
      <React.Fragment>
        <div className="main">
          {/* <!-- MAIN CONTENT --> */}
          <div className="main-content">
            <div className="container-fluid">
              {/* <!-- OVERVIEW --> */}
              <div className="panel panel-headline">
                <div className="panel-heading">
                  <h3 className="panel-title">Table Name</h3>
                  <p className="panel-subtitle">
                    Period: Oct 14, 2016 - Oct 21, 2016
                  </p>
                </div>
                <div className="panel-body">
                  <button
                    type="button"
                    className="btn btn-primary"
                    data-toggle="modal"
                    data-target="#exampleModal"
                  >
                    Add Col
                  </button>

                  <div
                    className="modal fade"
                    id="exampleModal"
                    tabIndex="-1"
                    role="dialog"
                    aria-labelledby="exampleModalLabel"
                    aria-hidden="true"
                  >
                    <div className="modal-dialog" role="document">
                      <div className="modal-content">
                        <div className="modal-header">
                          <h5 className="modal-title" id="exampleModalLabel">
                            Modal title
                          </h5>
                          <button
                            type="button"
                            className="close"
                            data-dismiss="modal"
                            aria-label="Close"
                          >
                            <span aria-hidden="true">&times;</span>
                          </button>
                        </div>
                        <div className="modal-body">
                          <label>Enter Column Name</label>
                          <input
                            placeholder="Column Name"
                            id=""
                            name={this.state.newHeader}
                            onChange={this.onUpdateHeader}
                          />
                          <br />
                          <label>Enter Value</label>
                          <input
                            placeholder="Value"
                            id="inpColValue"
                            ref="value"
                          />
                        </div>
                        <div className="modal-footer">
                          <button
                            type="button"
                            className="btn btn-secondary"
                            data-dismiss="modal"
                          >
                            Close
                          </button>
                          <button
                            type="button"
                            className="btn btn-primary"
                            onClick={() => this.addHeaderHandler()}
                            data-dismiss="modal"
                          >
                            Savechanges
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* table body */}

                  <table id="tableId">
                    <tbody>
                      <tr>
                        {this.state.header.map((header, index) => (
                          <th key={index}>{header}</th>
                        ))}
                      </tr>
                      {this.state.row.map(rows => (
                        // key={this.state.irow},
                        <Rows
                          id={Math.floor(Math.random() * 100 + 1)}
                          irow={this.state.irow}
                          key={Math.floor(Math.random() * 100 + 1)}
                          num={this.state.row.length}
                          onAdd={this.addRowHandler}
                          columns={this.state.columns}
                          onAddCol={this.addColHandler}
                        />
                      ))}
                    </tbody>
                  </table>
                  <button
                    id="addBtn"
                    onClick={() => this.addRowHandler(this.state.row)}
                  >
                    ADD
                  </button>
                  <button
                    id="addBtn"
                    onClick={() => this.addColHandler(this.state.columns)}
                  >
                    ADDColumns
                  </button>

                  {/* <table className="table">
                  <thead className="thead-dark">
                    <tr>
                      <th scope="col">#</th>
                      <th scope="col">First</th>
                      <th scope="col">Last</th>
                      <th scope="col">Handle</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th scope="row">1</th>
                      <td>
                        <input />
                      </td>
                      <td>
                        <input />
                      </td>
                      <td>
                        <input />
                      </td>
                    </tr>
                  </tbody>
                </table> */}
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
