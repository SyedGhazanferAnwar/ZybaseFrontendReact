import React, { Component } from "react";

class Rows extends Component {
  state = {};
  // addColHandler = col => {
  //   const ColData = [...this.state.columns];
  //   let newCol = [{ id: 5, value: 3 }];
  //   ColData.push(newCol);
  //   this.setState({ columns: ColData });
  // };
  render() {
    return (
      <React.Fragment>
        <tr key={this.props.id}>
          {this.props.storeData[this.props.index].map((row, index) => {
            return (
              <td key={String(this.props.index) + String(index)}>
                <input
                  className="cellInput"
                  name={this.props.index}
                  // value={row.value}
                  onChange={this.props.handleValueChange}
                  key={String(this.props.index) + String(index)}
                  id={index}
                />
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
          </td>
          <script />
        </tr>
      </React.Fragment>
    );
  }
}

export default Rows;
