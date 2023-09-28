import { React, useContext, useState, useEffect } from "react";
import SlideComponent from "../components/Slider";
import Alert from "@mui/material/Alert";
import Box from "@mui/material/Box";
import AuthContext from "../store/auth-context";
import Bar from "../components/BarChart";

import { getCountAttributes, getCountMentorStatus } from "../api";

const CommandDash = () => {
  const ctx = useContext(AuthContext);
  const name = ctx.firstName;
  const userType = ctx.userType;

  let [isError, setIsError] = useState(false);
  let [showTable, setShowTable] = useState(false);
  let [isLoading, setIsLoading] = useState(true);
  let [countAttributes, setCountAttributes] = useState(false);
  //let [countAttributes, setCountAttributes] = useState(false);

  useEffect(() => {
    getCountAttributes()
      .then((data) => {
        setCountAttributes(data);
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

  return (
    <>
    {userType == 3 && (
      <Box sx={{ maxWidth: "100%" }}>
        <h2>Commander Dashboard</h2>
        <Bar data={countAttributes}  isLoading={isLoading} />
      </Box>
    )}
    {userType != 3 && (
      <Alert severity="warning" sx={{ marginBottom: "1em"}}>
        You do not have permission to view this.
      </Alert>
    )}
    </>
  );
};

export default CommandDash;
