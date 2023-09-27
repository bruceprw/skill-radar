import { React, useState } from "react";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";
import InboxIcon from "@mui/icons-material/Inbox";
import { useLocation, Link } from "react-router-dom";

export default function Menu() {

  const location = useLocation();
  const menuItems = [
    {
      to: "/",
      text: "Dashboard",
      icon: "InboxIcon",
    },
    {
      to: "/overview",
      text: "Overview",
      icon: "InboxIcon",
    },
    {
      to: "/people",
      text: "People",
      icon: "InboxIcon",
    },
  ];

  return (
    <>
      <Box sx={{ width: "100%" }}>
        <nav aria-label="main mailbox folders">
          <List>
            {menuItems.map((item) => {
              let selected = 0;

              if (location.pathname == item.to) {
                selected = 1;
              }

              return (
                <Link to={item.to} key={item.to}>
                  <ListItem disablePadding>
                    <ListItemButton selected={selected}>
                      <ListItemIcon>ICON</ListItemIcon>
                      <ListItemText primary={item.text} />
                    </ListItemButton>
                  </ListItem>
                </Link>
              );
            })}
          </List>
        </nav>
      </Box>
    </>
  );
}
