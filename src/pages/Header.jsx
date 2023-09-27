import { React, useState } from "react";
import ReactDOM from "react-dom";
import LogoFull from "../assets/logo-full.jsx";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import UserIcon from "../components/UserIcon";
import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "react-router-dom";
import Drawer from "@mui/material/Drawer";
import Menu from "../components/Menu";
import MenuDrawer from "../components/MenuDrawer";

const Header = (props) => {
  const [drawerState, setDrawerState] = useState(false);

  const toggleDrawer = (open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setDrawerState(open);
  };



  return (
    <>
      <Grid container spacing={2}>
        <Grid item xs={9} sm={6} md={8}>
          <Box
            sx={{ display: "flex", justifyContent: "start", padding: "1rem" }}
          >
            <Box
              sx={{
                alignSelf: "center",
                marginRight: "0.5em",
                display: { xs: "flex", md: "none" },
              }}
            >
              <MenuIcon
                sx={{ fontSize: "3rem" }}
                onClick={toggleDrawer(true)}
              />
            </Box>
            <Link to={"/"}>
              <LogoFull fontSize={"3rem"} />
            </Link>
          </Box>
        </Grid>
        <Grid
          item
          xs={3}
          sm={6}
          md={4}
          sx={{ display: "flex", justifyContent: "end", paddingRight: "1em" }}
        >
          <Box
            sx={{
              display: "flex",
              justifySelf: "end",
              alignSelf: "center",
              padding: "1rem",
              display: { xs: "none", md: "block" },
            }}
          >
            <UserIcon onLogout={props.onLogout} />
          </Box>
        </Grid>
      </Grid>
      <MenuDrawer onLogout={props.onLogout} drawerState={drawerState} toggleDrawer={toggleDrawer}/>
      {/*<Drawer
        docked={false}
        width={200}
        open={drawerState}
        onClose={toggleDrawer(false)}
      >
        <Box>
          <Menu onLogout={props.onLogout}/>
        </Box>
      </Drawer>*/}
    </>
  );
};

export default Header;
