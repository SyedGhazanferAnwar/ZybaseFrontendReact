import React, { Component } from "react";
import ReactDOM from "react-dom";
class Rows extends Component {
  state = {};
  // addColHandler = col => {
  //   const ColData = [...this.state.columns];
  //   let newCol = [{ id: 5, value: 3 }];
  //   ColData.push(newCol);
  //   this.setState({ columns: ColData });
  // };

  inputField(index) {
    if (
      this.props.inputisEditableFlag === "false" &&
      parseInt(this.props.index) === parseInt(this.props.inputisEditableIndex)
    ) {
      return (
        <input
          placeholder="(value)"
          className="cellInput"
          name={this.props.index}
          // value={row.value}
          onChange={this.props.handleValueChange}
          key={String(this.props.index) + String(index)}
          id={index}
        />
      );
    } else {
      return (
        <input
          readOnly
          placeholder="(value)"
          className="cellInput"
          name={this.props.index}
          // value={row.value}
          onChange={this.props.handleValueChange}
          key={String(this.props.index) + String(index)}
          id={index}
        />
      );
    }
  }
  render() {
    return (
      <React.Fragment>
        <tr key={this.props.id}>
          {this.props.storeData[this.props.index].map((row, index) => {
            return (
              <td key={String(this.props.index) + String(index)}>
                {this.inputField(index)}
              </td>
            );
          })}

          <td>
            <button
              id={this.props.index}
              onClick={this.props.onDelete}
              className="btn btn-danger"
              style={{ margin: 5 }}
            >
              Delete
            </button>
            {this.props.addDltEdtBtn(this.props.index)}
          </td>
          <script />
        </tr>
      </React.Fragment>
    );
  }
}

export default Rows;
