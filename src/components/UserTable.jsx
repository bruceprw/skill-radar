import { React, useState, useEffect } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Skeleton from "@mui/material/Skeleton";
import UserCard from "./UserCard";
import { getListUsers, getListAttributes } from "../api";

export default function UserTable() {
  let [userList, setUserList] = useState([]);
  let [attributeList, setAttributeList] = useState([]);
  let [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getListUsers().then((data) => {
      setUserList(data);
      setIsLoading(false)
    });
  }, []);

  useEffect(() => {
    getListAttributes().then((data) => {
      setAttributeList(data);
      //setIsLoading(false)
    });
  }, []);

  console.log(attributeList);

  return (
    <>
      {isLoading && (
        <>
          <Skeleton
            variant="rounded"
            width={"98%"}
            sx={{ marginRight: "1em", marginTop: "1em" }}
            height={20}
          />
          <Skeleton
            variant="rounded"
            width={"98%"}
            sx={{ marginRight: "1em", marginTop: "1em" }}
            height={20}
          />
          <Skeleton
            variant="rounded"
            width={"98%"}
            sx={{ marginRight: "1em", marginTop: "1em" }}
            height={20}
          />
        </>
      )}
      {!isLoading && (
        <>
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
                  key={user.sn}
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
        {userList.map((user) => (

          <UserCard key={user.sn} userId={user.sn} title={`${user.FirstName} ${user.Surname}`} content="XX"/>

        ))}
        </>
      )}
    </>
  );
}
