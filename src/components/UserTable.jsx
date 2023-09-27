import { React, useState, useEffect } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData("Frozen yoghurt", 159, 6.0, 24, 4.0),
  createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
  createData("Eclair", 262, 16.0, 24, 6.0),
  createData("Cupcake", 305, 3.7, 67, 4.3),
  createData("Gingerbread", 356, 16.0, 49, 3.9),
];

export default function BasicTable() {
  let [userList, setUserList] = useState([]);
  let [attributeList, setAttributeList] = useState([]);

  const apiUrl =
    "https://xgi2osoer8.execute-api.eu-west-2.amazonaws.com/team9test/";

  useEffect(() => {
    fetch(`${apiUrl}listAttributes`, {
      method: "GET",
    })
      .then((response) => response.json())
      .then((data) => setAttributeList(data));
  }, []);

  useEffect(() => {
    fetch(`${apiUrl}listUsers`, {
      method: "GET",
    })
      .then((response) => response.json())
      .then((data) => setUserList(data));
  }, []);

  console.log("Users", userList);

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Service No</TableCell>
            <TableCell align="right">Name</TableCell>
            <TableCell align="right">Meta</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {userList.map((user) => (
            <TableRow
              key={user.id}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {user.sn}
              </TableCell>
              <TableCell align="right">
                {user.FirstName} {user.Surname}
              </TableCell>
              <TableCell align="right">X</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
