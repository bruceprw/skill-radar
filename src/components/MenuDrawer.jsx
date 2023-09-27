import { React, useState } from "react";
import ReactDOM from "react-dom";
import Drawer from "@mui/material/Drawer";
import Box from "@mui/material/Box";
import Menu from "../components/Menu";

const DataDrawer = (props) => {

  return (
    <Drawer
      docked={false}
      width={200}
      open={props.drawerState}
      onClose={props.toggleDrawer(false)}
    >
      <Box>
        <Menu onLogout={props.onLogout} />
      </Box>
    </Drawer>
  );
};

const MenuDrawer = (props) => {
  return (
    <>
      {ReactDOM.createPortal(
        <DataDrawer onLogout={props.onLogout} drawerState={props.drawerState} toggleDrawer={props.toggleDrawer}/>,
        document.getElementById("menu-slider")
      )}
    </>
  );
};

export default MenuDrawer;
