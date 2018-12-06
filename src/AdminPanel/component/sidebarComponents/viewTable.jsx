import React, {Component} from 'react';
import Rows from './Rows.jsx';
import ComboBox from './comboBox.jsx';
import Auth from '../../../Auth.js';
import $ from 'jquery';

class ViewTable extends Component {
  state = {
    icol: 0,
    irow: 0,
    header: ['Id  (auto)', 'Name'],
    defaultComboTable: '',
    storeData: [
      [
        {
          id: '0',
          colName: '',
          pk: '',
          defaultValue: '0',
          value: '',
          size: '',
          autoInc: '',
          type: '',
          notNull: '',
          unique: '',
        },
        {
          id: '1',
          colName: '',
          pk: '0',
          defaultValue: 'NoTables',
          value: '',
          size: '',
          autoInc: '',
          type: 'STRING',
          notNull: '',
          unique: '',
        },
      ],
    ],
  };

  fetchDataInStoreData(response) {
    let header = [],
      storeData = [[]],
      mainArr = [],
      i = 0;
    let colDetails = {};

    for (i = 0; i < response.column.length; i++) {
      header[i] = response.column[i].name;
    }
    this.setState({header: header});
    console.log(header);
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
          colDetails.type = 'Number';
        }
        if (response.column[j].type === 4) {
          colDetails.type = 'Float';
        }
        if (response.column[j].type === 253) {
          colDetails.type = 'STRING';
        }
        storeData.push(colDetails);
        colDetails = {};
      }
      mainArr.push(storeData);
    }
    this.setState({icol: colObject.length});
    this.setState({irow: response.data.length});
    this.setState({storeData: mainArr});
  }
  fetchHandler(selectedTable) {
    fetch('http://localhost:5000/getTable', {
      method: 'POST',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        tableName: selectedTable,
      }),
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
    console.log('request sent');
  }

  comboBoxValueHandler = evt => {
    console.log(evt.target.value);

    let selectedTable = evt.target.value;
    let storeData = [];
    let header = [];
    this.setState({header: header});
    this.setState({storeData: storeData});
    this.fetchHandler(selectedTable);
  };
  render() {
    return (
      <React.Fragment>
        <div className="main">
          {/* <!-- MAIN CONTENT --> */}
          <div className="main-content">
            <div className="container-fluid">
              {/* {/* <!-- OVERVIEW --> */}
              <div className="panel panel-headline">
                <div className="panel-heading">
                  <div className="panel-title">
                    <h3>
                      Select Table
                      <ComboBox
                        defaultComboTable={this.state.defaultComboTable}
                        comboBoxValueHandler={this.comboBoxValueHandler}
                        fetchHandler={this.fetchHandler.bind(this)}
                      />
                    </h3>
                  </div>

                  {/* <p className="panel-subtitle">Period: Oct 14, 2016 - Oct 21, 2016</p> */}
                </div>
                <div className="panel-body">
                  {/* <ComboBox /> */}

                  {/* table body */}

                  <table id="tableId">
                    <tbody>
                      {/*%%%%%%%%%%%%%%%%%%%% header DOM working %%%%%%%%%%%%%%*/}
                      <tr className="header">
                        {this.state.header.map((header, index) => (
                          <th key={index}>
                            {/* {this.setState({ setIndex: index })} */}
                            {header}
                            {/* {this.setIndexHandler(index)} */}
                          </th>
                        ))}
                      </tr>
                      {/* {this.fetchHandler()} */}
                      {/*%%%%%%%%%%%%%%%%%%%% End header DOM working %%%%%%%%%%%%%%*/}

                      {/*%%%%%%%%%%%%%%%%%%%% Table Rows/columns DOM working %%%%%%%%%%%%%%*/}
                      {this.state.storeData.map((yo, index) => (
                        <Rows key={String(index)} index={index} id={String(index)} storeData={this.state.storeData} />
                      ))}
                    </tbody>
                  </table>
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

export default ViewTable;
