// state = {
// headerEditedValue: "",
// setIndex: 0,
// flag: 0,
// irow: 1,
// icol: 3,
// newHeader: "",
// newVal: "",
// empty: [[{ id: "1", value: "2" }]],
// storeData: [
// [
// {
// id: "0",
// pk: "1",
// defaultValue: "",
// value: "1",
// size: "1",
// autoInc: "1",
// type: "int",
// notNull: "0",
// unique: "1"
// },
// {
// id: "1",
// pk: "0",
// defaultValue: "hello",
// value: "zayan",
// size: "50",
// autoInc: "0",
// type: "VARCHAR",
// notNull: "1",
// unique: "0"
// }
// ]
// ],
// header: ["Id", "Name", "Action"],
// columns: [],
// row: [{ id: 1, value: 2 }]
// };

// Few things to consider:
//Send rowNum starting from 0 as in array.
//Size should only be sent in String Data type
//Varchar should be sent when string data type is selected

//Remaining things:
// 1. Default value

//Function declarations

// console.log(createTable(state, "NewTable"));
// console.log(insertRows(state, "NewTable", 0));
// console.log(deleteRow("NewTable", 0, state));
// console.log(deleteColumn("NewTable", "name", state));
// console.log(dropTable("NewTable"));
// console.log(insertColumn("NewTable", "newColumn", state, 1));
// console.log(alterColumn("NewTable", "newColumn", state, 1));
// console.log(alterColumnName("NewTable", "newColumn", "latestColumn", state, 1));
// console.log(modifyRow("NewTable", 0, state));
export default {
  createTable(state, tableName) {
    var query = `CREATE TABLE ${tableName} (Id int (30) AUTO_INCREMENT PRIMARY KEY, ${state.header[1]} varchar (255);`;

    return query;
  },

  insertRows(state, tableName, rowNum) {
    var data = state.storeData;
    console.log('hhhhhhhhhhhhhhh');

    console.log(state.header);
    var column = state.header;
    var j = rowNum;

    if (column.length > 0) console.log('No column present');
    //else if (column.size == 1) console.log('one colum present');

    //Inserting 2 rows
    var query = `INSERT INTO ${tableName} (`;

    for (var i = 0; i < column.length - 1; i++) {
      if (i === column.length - 2) query = query + column[i];
      else query = query + column[i] + ', ';
    }

    query = query + ') VALUES (';

    for (var i = 0; i < column.length - 1; i++) {
      if (i === column.length - 2) {
        // if (data[j][i] != null) query = query + "'" + data[j][i].value + "'";
        query = query + 'null';
      } else {
        // if (data[j][i] != null) query = query + "'" + data[j][i].value + "', ";
        query = query + 'null,';
      }
    }

    query = query + ');';
    return query;
  },

  //

  deleteRow(tableName, rowNum, state) {
    //Row Id to delete
    var query = 'DELETE FROM ' + tableName + ' WHERE id = ' + state.storeData[rowNum][0].id + ';';

    return query;
  },

  deleteColumn(tableName, cName, state) {
    // console.log(state.header);
    // Deleting the cName from header
    // state.header.splice(state.header.indexOf(cName), 1);

    var query = 'ALTER TABLE ' + tableName + ' DROP COLUMN ' + cName + ';';
    return query;
  },

  dropTable(tableName) {
    var query = 'DROP TABLE ' + tableName + ';';
    return query;
  },

  insertColumn(tableName, columnName, state, columnId, pkColumn) {
    //done
    var data = state.storeData;

    if (data[0][columnId].pk == 1) {
      pkColumn[pkColumn.length] = columnName;
    }

    var query =
      'ALTER TABLE ' +
      tableName +
      ' ADD ' +
      columnName +
      ' ' +
      data[0][columnId].type +
      ' (' +
      data[0][columnId].size +
      ')';

    if (data[0][columnId].defaultValue.length > 0) query = query + " DEFAULT '" + data[0][columnId].defaultValue + "'";

    //Provide 0 or 1 for constraints;

    if (data[0][columnId].notNull == 1) query = query + ' NOT NULL';

    query = query + ';\n';

    // if (data[0][columnId].unique == 1) query = query + " UNIQUE";

    // if (data[0][columnId].autoInc == 1) query = query + " AUTO_INCREMENT";

    if (data[0][columnId].pk == 1) {
      query = query + 'ALTER TABLE ' + tableName + ' \n';
      query = query + 'DROP PRIMARY KEY,';
      query = query + 'ADD PRIMARY KEY(Id, ';
      for (var i = 0; i < pkColumn.length; i++) {
        query = query + pkColumn[i];
        if (i < pkColumn.length - 1) query = query + ',';
        else query = query + ');';
      }
    }

    query = query + ';';

    return query;
  },

  //   alterColumnName(tableName, oldCName, newCName, state, columnId) {
  //     var data = state.storeData;
  //     var query =
  //       "ALTER TABLE " +
  //       tableName +
  //       " CHANGE " +
  //       oldCName +
  //       " " +
  //       newCName +
  //       " " +
  //       data[0][columnId].type +
  //       " (" +
  //       data[0][columnId].size +
  //       ")";

  //     if (data[0][columnId].notNull == 1) query = query + " NOT NULL";

  //     if (data[0][columnId].unique == 1) query = query + " UNIQUE";

  //     if (data[0][columnId].autoInc == 1) query = query + " AUTO_INCREMENT";

  //     if (data[0][columnId].pk == 1) query = query + " PRIMARY KEY";

  //     if (data[0][columnId].defaultValue.length > 0)
  //       query = query + " DEFAULT '" + data[0][columnId].defaultValue + "'";

  //     query = query + ";";

  //     return query;
  // },

  alterColumn(tableName, columnName, state, columnId, pk, pkColumn) {
    var data = state.storeData;
    // console.log(pkColumn[0]);

    var query =
      'ALTER TABLE ' +
      tableName +
      ' MODIFY COLUMN ' +
      columnName +
      ' ' +
      data[0][columnId].type +
      ' (' +
      data[0][columnId].size +
      ') ';

    if (data[0][columnId].defaultValue.length > 0) query = query + " DEFAULT '" + data[0][columnId].defaultValue + "'";

    query = query + ';\n';
    //     ALTER TABLE `emp`
    // DROP PRIMARY KEY,
    //  ADD PRIMARY KEY(
    //    `eno`,
    //    `ename`,
    //    `dno`);

    // if (data[0][columnId].notNull == 1) query = query + " NOT NULL";

    // if (data[0][columnId].unique == 1) query = query + " UNIQUE";

    // if (data[0][columnId].autoInc == 1) query = query + " AUTO_INCREMENT";
    // console.log("coming  " + pkColumn.size);

    // for (var i = 0; i < pkColumn.length; i++) {
    //   // query = query + pkColumn[i];

    //   console.log("com  " + pkColumn[i]);
    // }

    if (pk == 1) {
      query = query + 'ALTER TABLE ' + tableName + ' \n';
      query = query + 'DROP PRIMARY KEY,';
      query = query + 'ADD PRIMARY KEY(Id, ';
      for (var i = 0; i < pkColumn.length; i++) {
        query = query + pkColumn[i];
        if (i < pkColumn.length - 1) query = query + ',';
        else query = query + ');';
      }
    } else if (pk == -1) {
      query = query + 'ALTER TABLE ' + tableName + ' \n';
      query = query + 'DROP PRIMARY KEY,';
      query = query + 'ADD PRIMARY KEY(Id, ';
      for (var i = 0; i < pkColumn.length; i++) {
        query = query + pkColumn[i];
        if (i < pkColumn.length - 1) query = query + ',';
        else query = query + ');';
      }
    }

    return query;
  },

  modifyRow(tableName, rowNum, state) {
    var data = state.storeData;
    // console.log(data[0][0]);
    var column = state.header;
    var j = rowNum;

    var query = 'UPDATE ' + tableName + ' SET ';

    for (var i = 0; i < column.length - 1; i++) {
      if (i === column.length - 2) query = query + column[i] + ' = ' + "'" + data[j][i].value + "' ";
      else query = query + column[i] + ' = ' + "'" + data[j][i].value + "', ";
    }

    query = query + 'WHERE ' + 'id = ' + j + ';';

    return query;
  },
};
