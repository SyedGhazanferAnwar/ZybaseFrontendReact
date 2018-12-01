import React, { Component } from "react";
import Rows from "./Rows.jsx";
import ModalPopup from "./modalPopup.jsx";
import Queries from "../../../tableQueries.js";
import Auth from "../../../Auth.js";
// import { connect } from "r";
import validator from "react-validation";
import { validate, ValidationIn } from "simple-react-validator";
// import Columns from "./columns.jsx";
// import { AvForm, AvField } from "availity-reactstrap-validation";

class CreateTable extends Component {
  constructor(props) {
    super(props);
    // this.crossBtnClickHandler = this.crossBtnClickHandler.bind(this);
  }

  state = {
    newColumnAttr: {
      id: "",
      defaultValue: "",
      size: 0,
      autoInc: "",
      type: "STRING",
      notNull: "",
      unique: "",
      pk: "0"
    },
    pkDecide: "",
    datatarget: "",
    lengthDisableStatus: 0,
    inputisEditableIndex: 0,
    inputisEditableFlag: "true",
    editFlag: 0,
    editRowIndex: -9,
    headerEditedValue: "",
    setIndex: 1,
    num: 0,
    flag: 0,
    irow: 1,
    icol: 2,
    newHeader: "",
    newVal: "",
    checkBhund: 0,
    // empty: [[{ id: "1", value: "2" }]],
    storeData: [
      [
        {
          id: "0",
          colName: "",
          pk: "",
          defaultValue: "",
          value: "",
          size: "",
          autoInc: "",
          type: "",
          notNull: "",
          unique: ""
        },
        {
          id: "1",
          colName: "",
          pk: "",
          defaultValue: "",
          value: "",
          size: "",
          autoInc: "",
          type: "STRING",
          notNull: "",
          unique: ""
        }
      ]
    ],
    header: ["Id  (auto)", "Name", "Action"]
    // columns: [],
    // row: [{ id: 1, value: 2 }]
  };

  saveEditInputHandler(evt) {
    let editFlag = this.state.editFlag;
    editFlag = 0;
    this.setState({ editFlag: editFlag });

    let inputisEditableFlag = this.state.inputisEditableFlag;
    inputisEditableFlag = "true";
    this.setState({ inputisEditableFlag: inputisEditableFlag });
    console.log(Queries.modifyRow("ABC", this.state.editRowIndex, this.state)); //change abc to tablename
  }
  editRow(evt) {
    // console.log("evt " + evt.target.id);
    let editFlag = this.state.editFlag;
    editFlag = 1;
    this.setState({ editFlag: editFlag });
    let editRowIndex = this.state.editRowIndex;
    editRowIndex = evt.target.id;
    this.setState({ editRowIndex: editRowIndex });

    let inputisEditableFlag = this.state.inputisEditableFlag;
    inputisEditableFlag = "false";
    this.setState({ inputisEditableFlag: inputisEditableFlag });

    let inputisEditableIndex = this.state.inputisEditableIndex;
    inputisEditableIndex = evt.target.id;
    this.setState({ inputisEditableIndex: inputisEditableIndex });
  }
  addDltEdtBtn(index) {
    // console.log(this.state.editRowIndex);
    let edit = this.state.editRowIndex;
    if (this.state.editFlag === 1 && parseInt(edit) === parseInt(index)) {
      return (
        <button
          id={this.index}
          className="btn btn-success btn-ripple zoomBtn"
          style={{ margin: 5 }}
          onClick={this.saveEditInputHandler.bind(this)}
        >
          Save
        </button>
      );
    } else {
      return (
        <button
          id={index}
          className="btn btn-primary btn-ripple zoomBtn"
          style={{ margin: 5 }}
          onClick={this.editRow.bind(this)}
        >
          Edit
        </button>
      );
    }
  }
  loopPrint() {
    // console.log("yes");
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
    // const re = /^[0-9\b]+$/;
    let columns = this.state.storeData;
    columns[parseInt(item.name)][parseInt(item.id)].value = item.value;
    this.setState({ storeData: columns });
    // console.log(item.id + "  " + item.rowIndex);
  }
  handleRowDelete(evt) {
    const index = evt.target.id;
    if (index === "0") {
      return alert("cant delete first row");
    }
    let i = 0;
    let dupRows = []; //
    let storeData = [...this.state.storeData];
    // rows.splice(index);
    for (let k = 0; k < this.state.irow; k++) {
      if (k !== parseInt(index)) {
        console.log("asd");
        dupRows[i] = storeData[k];
        console.log(storeData[k]);
        i++;
      }
      // console.log('index come her e  ' + k + '  d ' + index);
    }
    // console.log(dupRows);
    let irow = this.state.irow;
    irow--;
    this.setState({ storeData: dupRows });
    this.setState({ irow, irow });
    console.log(Queries.deleteRow("tableName", parseInt(index), this.state));

    // this.setState();

    // console.log(rows);
    // console.log(rows);
  }
  modifyColumnHandler = evt => {
    evt.preventDefault();
    // this.setState({newHeader: this.state.header[this.state.setIndex]});
    let storeData = [...this.state.storeData];
    let header = [...this.state.header];
    console.log("new header is  " + this.state.newHeader);
    header[this.state.setIndex] = this.state.newHeader;
    this.setState({ header: header });
    let pkPrevious = storeData[0][this.state.setIndex].pk;

    for (let i = 0; i < this.state.irow; i++) {
      // storeData[i][
      //   this.state.setIndex
      // ].value = this.state.newColumnAttr.defaultValue;

      console.log(
        "previous  " + pkPrevious + "  new " + this.state.newColumnAttr.pk
      );
      storeData[i][this.state.setIndex].pk = this.state.newColumnAttr.pk;
      storeData[i][this.state.setIndex].colName = this.state.newHeader;
      storeData[i][this.state.setIndex].size = this.state.newColumnAttr.size;
      storeData[i][this.state.setIndex].type = this.state.newColumnAttr.type;
      storeData[i][
        this.state.setIndex
      ].value = this.state.newColumnAttr.defaultValue;

      storeData[i][
        this.state.setIndex
      ].defaultValue = this.state.newColumnAttr.defaultValue;
    }
    let pkDecide = [],
      k = 0;
    for (let j = 0; j < this.state.icol; j++) {
      if (this.state.storeData[0][j].pk === "1") {
        pkDecide[k] = this.state.storeData[0][j].colName;
        console.log("nafix desice");
        console.log(pkDecide[k]);
        k++;
      }
    }
    if (pkPrevious === "1" && storeData[0][this.state.setIndex].pk === "0") {
      console.log(
        Queries.alterColumn(
          "tableName",
          this.state.newHeader,
          this.state,
          this.state.setIndex,
          "-1",
          pkDecide
        )
      );
    } else if (storeData[0][this.state.setIndex].pk === "1") {
      console.log(
        Queries.alterColumn(
          "tableName",
          this.state.newHeader,
          this.state,
          this.state.setIndex,
          "1",
          pkDecide
        )
      );
    } else {
      console.log(
        Queries.alterColumn(
          "tableName",
          this.state.newHeader,
          this.state,
          this.state.setIndex,
          "0",
          pkDecide
        )
      );
    }

    this.change(storeData);
    this.setState({ setIndex: 0 });

    evt.target.reset();

    // this.setState({ storeData: storeData });
  };
  change = storeData => {
    // this.setState({ header: header });
    this.setState({ storeData: storeData });
  };
  addHeaderHandler(evt) {
    evt.preventDefault();
    evt.target.reset();
    let num = this.state.num;
    num++;
    this.setState({ num: num });
    // evt.target.value = "";
    let header = [...this.state.header];
    header[header.length] = header[header.length - 1];
    header[header.length - 2] = this.state.newHeader;
    this.setState({ header: header });
    let newVal = this.state.newVal;
    // console.log(this.state.newColumnAttr);
    this.addColHandler(newVal);
    this.resetForm();
  }

  printHeader() {}
  addRowHandler = rows => {
    //ADD ROW HANDLER
    let reArr = this.state.storeData;
    let reNew = [];
    let reN = [];
    // console.log("asdsa" + reArr);
    for (let k = 0; k < this.state.icol; k++) {
      if (k === 0) {
        reN = {
          id: this.state.irow + "",
          colName: reArr[0][k].colName,
          pk: reArr[0][k].pk,
          defaultValue: reArr[0][k].defaultValue,
          value: this.state.irow,
          size: reArr[0][k].size,
          autoInc: reArr[0][k].autoInc,
          type: reArr[0][k].type,
          notNull: reArr[0][k].notNull,
          unique: reArr[0][k].unique
        };
      } else {
        reN = {
          id: k + "",
          colName: reArr[0][k].colName,
          pk: reArr[0][k].pk,
          defaultValue: reArr[0][k].defaultValue,
          value: reArr[0][k].defaultValue,
          size: reArr[0][k].size,
          autoInc: reArr[0][k].autoInc,
          type: reArr[0][k].type,
          notNull: reArr[0][k].notNull,
          unique: reArr[0][k].unique
        };
      }

      reNew.push(reN);
    }
    // console.log("here =" + reArr[0][1].value);
    reArr.push(reNew);
    this.setState({ storeData: reArr });
    let irow = this.state.irow;
    irow++;
    this.setState({ irow: irow });
    console.log(Queries.insertRows(this.state, "XYZ", irow - 1));
  };
  addColHandler = newVal => {
    // console.log(newVal);
    let reArr = this.state.storeData;
    for (let k = 0; k < this.state.irow; k++) {
      // console.log("k " + k);
      let reNew = {
        id: k + "",
        colName: this.state.newHeader,
        pk: String(this.state.newColumnAttr.pk),
        defaultValue: this.state.newColumnAttr.defaultValue,
        value: this.state.newColumnAttr.defaultValue,
        size: this.state.newColumnAttr.size,
        autoInc: "",
        type: this.state.newColumnAttr.type,
        notNull: "",
        unique: ""
      };
      reArr[k].push(reNew);
    }
    this.setState({ storeData: reArr });
    let icol = this.state.icol;
    icol++;
    this.setState({ icol: icol });
    console.log(
      Queries.insertColumn(
        "XYZ",
        this.state.newHeader,
        this.state,
        this.state.icol,
      )
    );
  };
  onUpdateValueColumnAttr = evt => {
    let newColumnAttr = this.state.newColumnAttr;
    // let check = evt.target.checked;
    console.log("hit " + evt);
    if (evt.target.name === "pk") {
      if (evt.target.checked === true) {
        console.log(evt.target.checked + " installed ");
        newColumnAttr.pk = "1";
      } else {
        console.log(evt.target.checked + " else installed ");
        newColumnAttr.pk = "0";
      }
    }
    if (evt.target.id === "length") {
      newColumnAttr.size = evt.target.value;
      console.log("length is here   " + newColumnAttr.size);
    }
    if (evt.target.id === "Default-Value") {
      newColumnAttr.defaultValue = evt.target.value;
      console.log("defaultValue is here   " + newColumnAttr.defaultValue);
    }
    if (evt.target.id === "Data-type") {
      newColumnAttr.type = evt.target.value;
      if (newColumnAttr.type !== "STRING") {
        this.setState({ lengthDisableStatus: 1 });
      } else {
        this.setState({ lengthDisableStatus: 0 });
      }
      console.log("Data-type is here   " + newColumnAttr.type);
    }
    if (evt.target.id === "ColumnName") {
      console.log("ColumnName is here   " + evt.target.value);
      let val = evt.target.value;
      this.setState({ newVal: val });
      return;
    }
    this.setState({ newColumnAttr: newColumnAttr });
  };
  resetForm() {
    let newColumnAttr = this.state.newColumnAttr;
    newColumnAttr.pk = "0";
    this.setState({ newColumnAttr: newColumnAttr });
  }
  onUpdateHeader = evt => {
    let val = evt.target.value;
    this.setState({ newHeader: val });
  };

  addSubmitHandler() {
    // let sub = JSON.stringify(this.state.storeData);
    console.log(JSON.stringify(this.state.storeData));
    // console.log(state)
  }
  crossBtnClickHandler = index => {
    // console.log(index);
    let setIndex = this.state.setIndex;
    setIndex = 0;
    this.setState({ setIndex: setIndex });
    let flag = 0;
    this.setState({ flag: flag });
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
    console.log(
      Queries.deleteColumn("tableName", this.state.header[index], this.state)
    );

    this.setState({ icol: icol });
    this.setState({ header: dupHeader });
    this.setState({ storeData: dupStoreData });
    // console.log(dupStoreData);

    // console.log(array);
  };
  myfunc(evt) {
    // console.log("yuhooo" + evt);
    this.state.newColumnAttr.pk = this.state.storeData[0][evt].pk;
    this.setState({ newHeader: this.state.header[evt] });
    this.setState({ setIndex: evt });
  }

  crossEditBtnInHeader(header, index) {
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
            id="btn"
            key={index + 100}
            name={index}
            className="close crossBtn editBtn"
            // onClick={this.editColumnOpen.bind(this)}
            onClick={() => this.myfunc(index)}
            data-toggle="modal"
            data-target="#modifyColumnModal"
          >
            <i className="fa fa-edit " />
          </button>
        </div>
      );
    }
  }
  makeInputFieldEditable(evt) {}

  fetchDataInStoreData(response) {
    let header = [],
      storeData = [[]],
      mainArr = [],
      i = 0;
    let colDetails = {};

    for (i = 0; i < response.column.length; i++) {
      header[i] = response.column[i].name;
    }
    header[i] = "Action";
    let arr = response.data[0];

    let colObject = Object.entries(arr);

    for (let k = 0; k < response.data.length; k++) {
      storeData = [];
      let arr = response.data[k];
      colObject = Object.entries(arr);
      for (let j = 0; j < colObject.length; j++) {
        let defaultValue = colObject[j][1];
        let colName = colObject[j][0];

        colDetails.id = String(k + j);
        colDetails.value = defaultValue;
        colDetails.defaultValue = defaultValue;
        colDetails.colName = colName;
        colDetails.size = response.column[k].length;

        if (response.column[j].type === 3) {
          colDetails.type = "Number";
        }
        if (response.column[j].type === 4) {
          colDetails.type = "Float";
        }
        if (response.column[j].type === 253) {
          colDetails.type = "STRING";
        }
        storeData.push(colDetails);
        colDetails = {};
      }
      mainArr.push(storeData);
    }
    this.setState({ icol: colObject.length });
    this.setState({ irow: response.data.length });
    this.setState({ storeData: mainArr });
    this.setState({ header: header });
  }
  fetchHandler() {
    fetch("http://localhost:5000/getTable", {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        tableName: "users"
      })
    })
      .then(function(res) {
        return res.json();
      })
      // string 253   int 3   float 4
      .then(response => {
        this.fetchDataInStoreData(response); // this funtion to print fetch data in table
      })
      .catch(function(res) {
        console.log(res);
      });
    console.log("request sent");
  }
  inputField(index, header) {
    return header;

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
                    className="btn btn-primary zoomBtn"
                    data-toggle="modal"
                    data-target="#exampleModal"
                  >
                    Add Column
                  </button>
                  <button
                    id="addBtn"
                    className="btn btn-primary addBtn zoomBtn"
                    onClick={() => this.addRowHandler(this.state.row)}
                  >
                    Add Row
                  </button>
                  <ModalPopup
                    resetForm={this.resetForm.bind(this)}
                    modifyColumnHandler={this.modifyColumnHandler.bind(this)}
                    setIndex={this.state.setIndex}
                    storeData={this.state.storeData}
                    newColumnAttr={this.state.newColumnAttr}
                    num={this.state.num}
                    flag={this.state.flag}
                    icol={this.state.icol}
                    header={this.state.header}
                    newHeader={this.state.newHeader}
                    onUpdateHeader={this.onUpdateHeader.bind(this)}
                    newValue={this.state.newVal}
                    onUpdateValueColumnAttr={this.onUpdateValueColumnAttr.bind(
                      this
                    )}
                    addHeaderHandler={this.addHeaderHandler.bind(this)}
                    lengthDisableStatus={this.state.lengthDisableStatus}
                    // addColHandler={this.addColHandler}
                  />

                  {this.state.flag === 1 ? <ModalPopup /> : ""}
                  {/* table body */}

                  <table id="tableId">
                    <tbody>
                      {/*%%%%%%%%%%%%%%%%%%%% header DOM working %%%%%%%%%%%%%%*/}
                      <tr className="header">
                        {this.state.header.map((header, index) => (
                          <th key={index}>
                            {/* {this.setState({ setIndex: index })} */}
                            {this.crossEditBtnInHeader(header, index)}
                            {this.inputField(index, header)}
                            {/* {this.setIndexHandler(index)} */}
                          </th>
                        ))}
                      </tr>
                      {/*%%%%%%%%%%%%%%%%%%%% End header DOM working %%%%%%%%%%%%%%*/}

                      {/*%%%%%%%%%%%%%%%%%%%% Table Rows/columns DOM working %%%%%%%%%%%%%%*/}
                      {this.state.storeData.map((yo, index) => (
                        <Rows
                          key={String(index)}
                          addDltEdtBtn={this.addDltEdtBtn.bind(this)}
                          onDelete={this.handleRowDelete.bind(this)}
                          index={index}
                          id={String(index)}
                          inputisEditableIndex={this.state.inputisEditableIndex}
                          storeData={this.state.storeData}
                          handleValueChange={this.handleValueChange.bind(this)}
                          inputisEditableFlag={this.state.inputisEditableFlag}
                        />
                      ))}
                    </tbody>
                  </table>

                  {/* <button onClick={this.print.bind(this)}>print</button> */}
                  {/* <button
                    id="addBtn"
                    onClick={() => this.addColHandler(this.state.columns)}
                  >
                    ADDColumns
                  </button> */}
                  <button
                    className="btn btn-primary subBtn zoomBtn"
                    id="subBtn"
                    onClick={this.addSubmitHandler.bind(this)}
                  >
                    Submit
                  </button>
                  <button
                    className="btn btn-primary subBtn zoomBtn"
                    id="subBtn"
                    onClick={this.fetchHandler.bind(this)}
                  >
                    fetch
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
