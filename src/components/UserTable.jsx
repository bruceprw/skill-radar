import { React, useState, useEffect } from "react";
import Alert from "@mui/material/Alert";
import Skeleton from "@mui/material/Skeleton";
import UserCard from "./UserCard";
import Grid from "@mui/material/Grid";
import LoadingLogo from "../assets/loading-logo";
import { getListUsers, getListAttributes } from "../api";

export default function UserTable() {
  let [userList, setUserList] = useState([]);
  let [attributeList, setAttributeList] = useState([]);
  let [isLoading, setIsLoading] = useState(true);
  let [isError, setIsError] = useState(false);
  let [showTable, setShowTable] = useState(false);

  useEffect(() => {
    getListUsers()
      .then((data) => {
        setUserList(data);
        setTimeout(function () {
          setIsLoading(false);
          setShowTable(true)
        }, 1500);
      })
      .catch((error) => {
        setIsError(true);
        setShowTable(false)
        setIsLoading(false);
      });
  }, []);

  useEffect(() => {
    getListAttributes().then((data) => {
      setAttributeList(data);
      //setIsLoading(false)
    });
  }, []);

  //console.log(attributeList);

  return (
    <>
      {isLoading && (
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            height: "50vh",
          }}
        >
          <LoadingLogo colour={"#cccccc"} />
        </div>
      )}
      {isError && (
      <Alert severity="warning" sx={{ marginBottom: "1em" }}>
        Data cannot be fetched!
      </Alert>
      )}
      {showTable && (
        <>
          <Alert severity="info" sx={{ marginBottom: "1em" }}>
            The following people share similar interests. Connect now!
          </Alert>
          <Grid container spacing={2}>
            {userList.map((user) => (
              <Grid item xs={12} sm={6} md={4}>
                <UserCard
                  key={user.sn}
                  userId={user.sn}
                  title={`${user.FirstName} ${user.Surname}`}
                  badges={user.attributes}
                  content=""
                />
              </Grid>
            ))}
          </Grid>
        </>
      )}
    </>
  );
}
