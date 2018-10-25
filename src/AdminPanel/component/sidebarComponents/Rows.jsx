import React, { Component } from "react";
import Columns from "./columns";
class Rows extends Component {
  state = {};
  addColHandler = col => {
    const ColData = [...this.state.columns];
    let newCol = [{ id: 5, value: 3 }];
    ColData.push(newCol);
    this.setState({ columns: ColData });
  };
  render() {
    return (
      <React.Fragment>
        {/* <table className="table"> */}
        {/* <tbody> */}
        <tr key={this.props.id}>
          {/* <th scope="row">{console.log(this.props.num)}</th> */}
          <td>
            <input key={this.props.id} id={this.props.id} />
          </td>

          <Columns
            key={this.props.irow}
            id={this.props.irow}
            columns={this.props.columns}
            onAddCol={this.props.onAddCol}
          />
        </tr>
        {/* </tbody> */}
        {/* </table> */}
      </React.Fragment>
    );
  }
}

export default Rows;
