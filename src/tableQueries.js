state = {
  headerEditedValue: "",
  setIndex: 0,
  flag: 0,
  irow: 2,
  icol: 3,
  newHeader: "",
  newVal: "",
  empty: [[{ id: "1", value: "2" }]],
  storeData: [
    [{ id: "1", value: "2" }, { id: "1", value: "1" }, { id: "1", value: "1" }],
    [
      { id: "11", value: "2" },
      { id: "12", value: "2" },
      { id: "13", value: "2" }
    ]
  ],
  header: ["id", "value", "name", "action"],
  columns: [],
  row: [{ id: 1, value: 2 }]
};

//Function declarations

// console.log(createTable(state, "NewTable"));
// console.log(insertRows(state, "NewTable", 0));
// console.log(deleteRow("NewTable", 3));
// console.log(deleteColumn("NewTable", "name", state));
console.log(dropTable("NewTable"));

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

function deleteRow(tableName, rowId) {
  //Row Id to delete
  var query = "DELETE FROM " + tableName + " WHERE id = " + rowId + ";";

  return query;
}

function deleteColumn(tableName, cName, state) {
  // console.log(state.header);
  // Deleting the cName from header
  state.header.splice(state.header.indexOf(cName), 1);

  var query = "ALTER TABLE " + tableName + " DROP COLUMN " + cName + ";";
  return query;
}

function dropTable(tableName) {
  var query = "DROP TABLE " + tableName + ";";
  return query;
}
