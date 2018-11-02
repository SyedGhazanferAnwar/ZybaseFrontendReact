import React, { Component } from "react";
class ModalPopup extends Component {
  state = {};
  call() {
    return this.props.addHeaderHandler;
  }
  render() {
    return (
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
            <form onSubmit={this.props.addHeaderHandler}>
              <div className="modal-body">
                {/* %%%%%%%%%%%%%%%%  column name  %%%%%%%%%%%%%%%% */}
                <label>Enter Column Name</label>
                <input
                  placeholder="Column Name"
                  id="ColumnName"
                  name={this.props.newHeader}
                  onChange={this.props.onUpdateHeader}
                  required
                />
                <br />
                {/* %%%%%%%%%%%%%%%%  Default Value %%%%%%%%%%%%%%%% */}
                <label>Enter Default-Value</label>
                <input
                  placeholder="Optional.."
                  id="Default-Value"
                  onChange={this.props.onUpdateValue}
                />
                <br />
                {/* %%%%%%%%%%%%%%%%  data type  %%%%%%%%%%%%%%%% */}
                <label>Enter Data-type</label>
                <select
                  id="Data-type"
                  defaultValue="STRING"
                  onChange={this.props.onUpdateValue}
                >
                  <option key="1" value="STRING">
                    STRING
                  </option>
                  <option key="2" value="INT">
                    INT
                  </option>
                  <option key="3" value="FLOAT">
                    FLOAT
                  </option>
                  <option key="4" value="DOUBLE">
                    DOUBLE
                  </option>
                </select>
                <br />
                {/* %%%%%%%%%%%%%%%%  length  %%%%%%%%%%%%%%%% */}
                <label>Enter length</label>
                <input
                  id="length"
                  type="number"
                  value={this.value}
                  placeholder="length"
                  onChange={this.props.onUpdateValue}
                  required
                />
                <br />
                {/* %%%%%%%%%%%%%%%%  pk  %%%%%%%%%%%%%%%% */}
                <label>PK </label>
                <input
                  id="pk"
                  style={{ marginLeft: "5px" }}
                  type="checkbox"
                  onChange={this.props.onUpdateValue}
                />
                {/* <input
                list="hosting-plan2"
                type="text"
                placeholder="Value"
                id="inpColValue"
                name={this.props.newValue}
                onChange={this.props.onUpdateValue}
              />
              <datalist id="hosting-plan2">
                <option value="STRING" />
                <option value="INT" />
                <option value="FLOAT" />
              </datalist> */}
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
                  type="submit"
                  className="btn btn-primary"
                  // onClick={this.props.addHeaderHandler}
                  // data-dismiss="modal"
                >
                  Savechanges
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default ModalPopup;
