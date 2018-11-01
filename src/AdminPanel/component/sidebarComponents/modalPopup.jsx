import React, { Component } from "react";
class ModalPopup extends Component {
  state = {};
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
            <div className="modal-body">
              <label>Enter Column Name</label>
              <input
                placeholder="Column Name"
                id=""
                name={this.props.newHeader}
                onChange={this.props.onUpdateHeader}
              />
              <br />
              <label>Enter Value</label>
              <input
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
                onClick={this.props.addHeaderHandler}
                data-dismiss="modal"
              >
                Savechanges
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ModalPopup;
