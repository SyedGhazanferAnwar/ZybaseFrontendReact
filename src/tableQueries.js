state = {
  headerEditedValue: "",
  setIndex: 0,
  flag: 0,
  irow: 1,
  icol: 3,
  newHeader: "",
  newVal: "",
  empty: [[{ id: "1", value: "2" }]],
  storeData: [
    [
      {
        id: "6",
        value: "2",
        length: "",
        autoInc: "",
        type: "",
        notNull: "",
        unique: ""
      },
      {
        id: "1",
        value: "1",
        length: "50",
        autoInc: "1",
        type: "int",
        notNull: "0",
        unique: "1"
      },
      {
        id: "2",
        value: "1",
        length: "",
        autoInc: "",
        type: "",
        notNull: "",
        unique: ""
      }
    ]
  ],
  header: ["id", "value", "name", "action"],
  columns: [],
  row: [{ id: 1, value: 2 }]
};

// Few things to consider:
//Send rowNum starting from 0 as in array.
//Design Table so that First column should always be a PK.

//Remaining things:
// 1. Default value
// 2. PK problem.

//Function declarations

// console.log(createTable(state, "NewTable"));
// console.log(insertRows(state, "NewTable", 0));
// console.log(deleteRow("NewTable", 0, state));
// console.log(deleteColumn("NewTable", "name", state));
// console.log(dropTable("NewTable"));
// console.log(insertColumn("NewTable", "newColumn", state, 1));
// console.log(alterColumn("NewTable", "newColumn", state, 1));
// console.log(alterColumnName("NewTable", "newColumn", "latestColumn", state, 1));
console.log(modifyRow("NewTable", 0, state));

function createTable(state, tableName) {
  var query = `CREATE TABLE ${tableName} (${state.header[0]} int (30), ${
    state.header[1]
  } int (30), ${state.header[2]} varchar2 (255));`;

  return query;
}

function insertRows(state, tableName, rowNum) {
  var data = state.storeData;
  // console.log(data[0][0]);
  var column = state.header;
  var j = rowNum;

  //Inserting 2 rows
  var query = `INSERT INTO ${tableName} (`;

  for (var i = 0; i < column.length - 1; i++) {
    if (i === column.length - 2) query = query + column[i];
    else query = query + column[i] + ", ";
  }

  query = query + ") VALUES (";

  for (var i = 0; i < column.length - 1; i++) {
    if (i === column.length - 2) query = query + "'" + data[j][i].value + "'";
    else query = query + "'" + data[j][i].value + "', ";
    //console.log(data[j][i]);
  }

  query = query + ");";

  return query;
}

//

function deleteRow(tableName, rowNum, state) {
  //Row Id to delete
  var query =
    "DELETE FROM " +
    tableName +
    " WHERE id = " +
    state.storeData[rowNum][0].id +
    ";";

  return query;
}

function deleteColumn(tableName, cName, state) {
  // console.log(state.header);
  // Deleting the cName from header
  // state.header.splice(state.header.indexOf(cName), 1);

  var query = "ALTER TABLE " + tableName + " DROP COLUMN " + cName + ";";
  return query;
}

function dropTable(tableName) {
  var query = "DROP TABLE " + tableName + ";";
  return query;
}

function insertColumn(tableName, columnName, state, columnId) {
  var data = state.storeData;
  var query =
    "ALTER TABLE " +
    tableName +
    " ADD " +
    columnName +
    " " +
    data[0][columnId].type +
    " (" +
    data[0][columnId].length +
    ")";

  //Provide 0 or 1 for constraints;

  if (data[0][columnId].notNull == 1) query = query + " NOT NULL";

  if (data[0][columnId].unique == 1) query = query + " UNIQUE";

  if (data[0][columnId].autoInc == 1) query = query + " AUTO_INCREMENT";

  query = query + ";";

  return query;
}

function alterColumnName(tableName, oldCName, newCName, state, columnId) {
  var data = state.storeData;
  var query =
    "ALTER TABLE " +
    tableName +
    " CHANGE " +
    oldCName +
    " " +
    newCName +
    " " +
    data[0][columnId].type +
    " (" +
    data[0][columnId].length +
    ")";

  if (data[0][columnId].notNull == 1) query = query + " NOT NULL";

  if (data[0][columnId].unique == 1) query = query + " UNIQUE";

  if (data[0][columnId].autoInc == 1) query = query + " AUTO_INCREMENT";

  query = query + ";";

  return query;
}

function alterColumn(tableName, columnName, state, columnId) {
  var data = state.storeData;

  var query =
    "ALTER TABLE " +
    tableName +
    " MODIFY COLUMN " +
    columnName +
    " " +
    data[0][columnId].type +
    " (" +
    data[0][columnId].length +
    ")";

  if (data[0][columnId].notNull == 1) query = query + " NOT NULL";

  if (data[0][columnId].unique == 1) query = query + " UNIQUE";

  if (data[0][columnId].autoInc == 1) query = query + " AUTO_INCREMENT";

  query = query + ";";

  return query;
}

function modifyRow(tableName, rowNum, state) {
  var data = state.storeData;
  // console.log(data[0][0]);
  var column = state.header;
  var j = rowNum;

  var query = "UPDATE " + tableName + " SET ";

  for (var i = 0; i < column.length - 1; i++) {
    if (i === column.length - 2)
      query = query + column[i] + " = " + "'" + data[j][i].value + "' ";
    else query = query + column[i] + " = " + "'" + data[j][i].value + "', ";
  }

  query = query + "WHERE " + "id = " + data[j][0].id + ";";

  return query;
}
