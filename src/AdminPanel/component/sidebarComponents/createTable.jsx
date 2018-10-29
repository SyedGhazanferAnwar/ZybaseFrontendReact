import React, { Component } from "react";
import Rows from "./Rows.jsx";
// import Columns from "./columns.jsx";
// import { AvForm, AvField } from "availity-reactstrap-validation";

class CreateTable extends Component {
  constructor() {
    super();
  }

  state = {
    irow: 2,
    icol: 3,
    newHeader: "",
    newVal: "",
    storeData: [
      [
        { id: "1", value: "2" },
        { id: "1", value: "1" },
        { id: "1", value: "1" }
      ],
      [
        { id: "11", value: "2" },
        { id: "12", value: "2" },
        { id: "13", value: "2" }
      ]
    ],
    header: ["Id", "Value", "Name", "Action"],
    columns: [],
    row: [{ id: 1, value: 2 }]
  };
  loopPrint() {
    console.log("yes");
    for (let i = 0; i < this.state.storeData.length; i++) {
      // console.log(this.state.storeData);
      for (let j = 0; j <= this.state.storeData.length; j++) {
        console.log(this.state.storeData[i][j]);
      }
    }
  }
  handleValueChange(evt) {
    var item = {
      id: evt.target.id,
      name: evt.target.name,
      value: evt.target.value,
      rowIndex: evt.target.name
    };
    let a = item.name + 1;
    // console.log(a);
    let columns = [...this.state.storeData];
    for (let i = 0; i < this.state.storeData.length; i++) {
      // console.log(this.state.storeData);
      for (let j = 0; j < this.state.storeData[i].length; j++) {
        if (i === parseInt(item.name) && j == parseInt(item.id)) {
          columns[i][j].value = item.value;
        }
      }
    }

    // console.log(item.id + "  " + item.rowIndex);
  }
  handleRowDelete(evt) {
    const index = evt.target.id;
    if (index === "0") {
      return alert("cant delete first row");
    }
    let rows = [...this.state.storeData];
    rows.splice(index, index);
    this.setState({ storeData: rows });
    let irow = this.state.irow;
    irow--;
    this.setState({ irow: irow });
    console.log(rows);
  }
  addHeaderHandler = value => {
    let header = [...this.state.header];
    header[header.length] = header[header.length - 1];
    header[header.length - 2] = this.state.newHeader;
    this.setState({ header: header });
    this.addColHandler();
    return;
    // <CreateTable />;
  };

  printHeader() {}
  addRowHandler = rows => {
    let reArr = this.state.storeData;
    let reNew = [{ id: "", value: "" }];
    // console.log("asdsa" + reArr);
    reArr.push(reNew);
    this.setState({ storeData: reArr });
    for (let k = 0; k < this.state.icol - 1; k++) {
      reArr[this.state.irow].push(reArr);
    }
    let irow = this.state.irow;
    irow++;
    this.setState({ irow: irow });
    this.setState({ storeData: reArr });
  };
  addColHandler = newVal => {
    console.log(newVal);
    let reArr = this.state.storeData;
    let reNew = { id: "", value: this.state.newVal };
    for (let k = 0; k < this.state.irow; k++) {
      reArr[k].push(reArr);
    }
    this.setState({ storeData: reArr });
    let icol = this.state.icol;
    icol++;
    this.setState({ icol: icol });
  };
  onUpdateValue = evt => {
    let val = evt.target.value;
    console.log(val);
    this.setState({ newVal: val });
  };
  onUpdateHeader = evt => {
    let val = evt.target.value;
    this.setState({ newHeader: val });
  };
  print() {
    // this.state.columns.map(columns => console.log(columns));
    // this.state.storeData.map((set, index) => {
    //   console.log(set);
    // });

    // let here = JSON.stringify(this.state.storeData);
    console.log(JSON.stringify(this.state.storeData));
  }
  addSubmitHandler() {
    // let sub = JSON.stringify(this.state.storeData);
    console.log(JSON.stringify(this.state.storeData));
    // console.log(state)
  }

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
                    Add Column
                  </button>
                  <button
                    id="addBtn"
                    className="btn btn-primary addBtn"
                    onClick={() => this.addRowHandler(this.state.row)}
                  >
                    Add Row
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
                            name={this.state.newValue}
                            onChange={this.onUpdateValue}
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
                      <tr className="header">
                        {this.state.header.map((header, index) => (
                          <th key={index}>{header}</th>
                        ))}
                      </tr>
                      {this.state.storeData.map((yo, index) => (
                        <Rows
                          key={String(index)}
                          onDelete={this.handleRowDelete.bind(this)}
                          index={index}
                          id={String(index)}
                          storeData={this.state.storeData}
                          handleValueChange={this.handleValueChange.bind(this)}
                        />
                      ))}
                      {/* {this.state.row.map((row, index) => {
                        <Row />;
                      })} */}
                      {/* {this.state.row.map((row, index) => (
                        
                        // <Rows
                        //   id={String(index)}
                        //   row={row}
                        //   key={String(index)}
                        //   rowIndex={index}
                        //   onAdd={this.addRowHandler}
                        //   columns={this.state.columns}
                        //   onAddCol={this.addColHandler}
                        // />
                      ))} */}
                    </tbody>
                  </table>

                  <button onClick={this.print.bind(this)}>print</button>
                  <button
                    id="addBtn"
                    onClick={() => this.addColHandler(this.state.columns)}
                  >
                    ADDColumns
                  </button>
                  <button
                    className="btn btn-primary subBtn"
                    id="subBtn"
                    onClick={this.addSubmitHandler.bind(this)}
                  >
                    Submit
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
