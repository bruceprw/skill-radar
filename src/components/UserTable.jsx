import { React, useState, useEffect } from "react";
import Alert from "@mui/material/Alert";
import Skeleton from "@mui/material/Skeleton";
import UserCard from "./UserCard";
import Grid from "@mui/material/Grid";
import LoadingLogo from "../assets/loading-logo";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import { getListUsers, getListAttributes } from "../api";

export default function UserTable() {
  let [userList, setUserList] = useState([]);
  let [attributeList, setAttributeList] = useState([]);
  let [isLoading, setIsLoading] = useState(true);
  let [isError, setIsError] = useState(false);
  let [showTable, setShowTable] = useState(false);
  let [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    getListUsers()
      .then((data) => {
        setUserList(data);
        setTimeout(function () {
          setIsLoading(false);
          setShowTable(true);
        }, 1500);
      })
      .catch((error) => {
        setIsError(true);
        setShowTable(false);
        setIsLoading(false);
      });
  }, []);

  useEffect(() => {
    getListAttributes().then((data) => {
      setAttributeList(data);
      //setIsLoading(false)
    });
  }, []);

  const handleChange = (event, value) => {
    setCurrentPage(value);
  };

  function paginate(array, page_size, page_number) {
    // human-readable page numbers usually start with 1, so we reduce 1 in the first argument
    return array.slice((page_number - 1) * page_size, page_number * page_size);
  }

  const maxCount = userList.length / 6;

  let userListPaged = paginate(userList, 6, currentPage);

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
            {userListPaged.map((user) => (
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
          <Box sx={{display: 'flex', width: '100%', justifyContent: 'center', marginTop: '1em'}}>
            <Stack spacing={2}>
              <Pagination count={maxCount} onChange={handleChange} />
            </Stack>
          </Box>
          <Box sx={{display: 'block', width: '100%', height: '5rem'}}>
            &nbsp;
          </Box>
        </>
      )}
    </>
  );
}
