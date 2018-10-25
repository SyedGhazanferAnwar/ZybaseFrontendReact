import React, { Component } from "react";
class Columns extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        {/* <thead className="thead-dark"> */}
        {this.props.columns.map(columns => (
          <td key={this.props.id}>
            <input id={this.props.id} key={this.props.id} />
          </td>
        ))}

        {/* <tr>
              <th scope="col">#</th>
              <th scope="col">First</th>
              <th scope="col">Last</th>
              <th scope="col">Handle</th>
            </tr> */}
      </React.Fragment>
    );
  }
}

export default Columns;
