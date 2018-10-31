import React, { Component } from "react";
import Rows from "./Rows.jsx";
// import Columns from "./columns.jsx";
// import { AvForm, AvField } from "availity-reactstrap-validation";

class CreateTable extends Component {
  constructor() {
    super();
  }

  state = {
    headerEditedValue: "",
    setIndex: 0,
    flag: 0,
    irow: 2,
    icol: 3,
    newHeader: "",
    newVal: "",
    empty: [[{ id: "1", value: "2" }]],
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
    const re = /^[0-9\b]+$/;
    let columns = this.state.storeData;

    if (re.test(evt.target.value)) {
      console.log("yes it is integer");
      let a = item.name + 1;
      // console.log(a);
      console.log(this.state.storeData);

      columns[parseInt(item.name)][parseInt(item.id)].value = item.value;
      console.log(item.id + " item id");
      console.log(columns);
      this.setState({ storeData: columns });
    } else {
      return (columns[parseInt(item.name)][parseInt(item.id)].value = "");
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
    //ADD ROW HANDLER
    let reArr = this.state.storeData;
    let reNew = [];

    // console.log("asdsa" + reArr);
    for (let k = 0; k < this.state.icol; k++) {
      let reN = { id: k + "", value: "ol" };

      reNew.push(reN);
    }
    reArr.push(reNew);
    this.setState({ storeData: reArr });

    let irow = this.state.irow;
    irow++;
    this.setState({ irow: irow });
  };
  addColHandler = newVal => {
    console.log(newVal);
    let reArr = this.state.storeData;
    for (let k = 0; k < this.state.irow; k++) {
      let reNew = { id: k + "", value: this.state.newVal };
      reArr[k].push(reNew);
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
    console.log(this.state.storeData);
  }
  addSubmitHandler() {
    // let sub = JSON.stringify(this.state.storeData);
    console.log(JSON.stringify(this.state.storeData));
    // console.log(state)
  }
  crossBtnClickHandler = index => {
    console.log(index);
    let l = 0;
    let dupStoreData = [];
    let array2 = this.state.storeData;

    let dupHeader = [];
    let header = this.state.header;
    for (let k = 0; k < header.length; k++) {
      if (k !== index) {
        dupHeader[l] = header[k];
        l++;
      }
    }
    for (let i = 0; i < this.state.irow; i++) {
      dupStoreData[i] = [];
      for (let j = 0; j < this.state.icol; j++) {
        if (j !== index) {
          dupStoreData[i].push(array2[i][j]);
        }
      }
    }
    let icol = this.state.icol;
    icol--;
    this.setState({ icol: icol });
    this.setState({ header: dupHeader });
    this.setState({ storeData: dupStoreData });
    console.log(dupStoreData);

    // console.log(array);
  };
  // check(evt) {
  //   console.log("herher");
  //   return (evt.value = "");
  // }
  // ****************************{all header working here}*********************

  crossBtnInHeader(header, index) {
    if (index > 0 && index < this.state.header.length - 1) {
      return (
        <div>
          <button
            type="button"
            onClick={() => this.crossBtnClickHandler(index)}
            id={index}
            key={index}
            className="close crossBtn"
          >
            <i className="fa fa-close " />
          </button>
          <button
            type="button"
            onClick={() => this.makeInputFieldEditable(header, index)}
            id={index + 100}
            key={index + 100}
            className="close crossBtn"
          >
            <i className="fa fa-edit " />
          </button>
        </div>
      );
    }
  }
  makeInputFieldEditable(header, index) {
    let flage = 1;
    this.state.flag = 1;
    this.setState({ setIndex: index });
    console.log(this.state.flag);
  }
  handleHeaderValueChange(evt) {
    console.log("handleHeaderValueChange()" + " " + evt.target.value);
    let headerEdited = evt.target.value;
    this.setState({ headerEditedValue: headerEdited });
  }
  saveEditedHeader(evt) {
    let header = this.state.header;
    if (this.state.headerEditedValue === "") {
      this.setState({ header: header });
      this.state.flag = 0;
    } else {
      header[evt.target.id] = this.state.headerEditedValue;
      this.setState({ header: header });
      this.setState({ headerEditedValue: "" });
      this.state.flag = 0;
    }
  }
  inputField(index, header) {
    if (this.state.flag === 1 && index === this.state.setIndex) {
      return (
        <div>
          <input
            id={index}
            onChange={this.handleHeaderValueChange.bind(this)}
            placeholder={header}
            className="cellInput"
          />
          <button
            className="btn btn-danger"
            id={index}
            onClick={this.saveEditedHeader.bind(this)}
          >
            save
          </button>
        </div>
      );
    } else {
      return header;
    }
    // *******************************{End Header working} ********************
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
                            list="hosting-plan2"
                            type="text"
                            placeholder="Value"
                            id="inpColValue"
                            name={this.state.newValue}
                            onChange={this.onUpdateValue}
                          />
                          <datalist id="hosting-plan2">
                            <option value="STRING" />
                            <option value="INT" />
                            <option value="FLOAT" />
                          </datalist>
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
                      {/*%%%%%%%%%%%%%%%%%%%% header DOM working %%%%%%%%%%%%%%*/}
                      <tr className="header">
                        {this.state.header.map((header, index) => (
                          <th key={index}>
                            {this.crossBtnInHeader(header, index)}
                            {this.inputField(index, header)}
                          </th>
                        ))}
                      </tr>
                      {/*%%%%%%%%%%%%%%%%%%%% End header DOM working %%%%%%%%%%%%%%*/}

                      {/*%%%%%%%%%%%%%%%%%%%% Table Rows/columns DOM working %%%%%%%%%%%%%%*/}
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
                </div>
              </div>
            </div>
          </div>
          {/* <!-- END MAIN CONTENT --> */}
        </div>
        {/*%%%%%%%%%%%%%%%%%%%% END Table Rows/columns DOM woring %%%%%%%%%%%%%%*/}
      </React.Fragment>
    );
  }
}

export default CreateTable;
