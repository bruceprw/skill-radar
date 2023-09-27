import { React, useState } from "react";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import Chip from "@mui/material/Chip";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";
import DashboardIcon from "@mui/icons-material/Dashboard";
import InboxIcon from "@mui/icons-material/Inbox";
import LeaderboardIcon from "@mui/icons-material/Leaderboard";
import ForumIcon from "@mui/icons-material/Forum";
import GroupsIcon from "@mui/icons-material/Groups";
import { useLocation, Link } from "react-router-dom";
import MenuData from '../data/Menu.json'

export default function Menu() {
  const location = useLocation();
  const menuItems = MenuData.Menu;

  const statusIcon = {
    GroupsIcon: <GroupsIcon />,
    InboxIcon: <InboxIcon />,
    ForumIcon: <ForumIcon />,
    DashboardIcon: <DashboardIcon />,
    // other icons based on your status
  };

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
                      <ListItemIcon>
                        <Chip
                          icon={statusIcon[item.icon]}
                          variant="outlined"
                          sx={{
                            backgroundColor: "#ccc",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            paddingLeft: "0",
                          }}
                        />
                      </ListItemIcon>
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
