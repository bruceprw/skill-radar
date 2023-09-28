import { React, useState, useContext } from "react";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import Chip from "@mui/material/Chip";
import ListItemText from "@mui/material/ListItemText";
import { useLocation, Link } from "react-router-dom";
import MenuData from "../data/Menu.json";
import PersonIcon from "@mui/icons-material/Person";
import AuthContext from "../store/auth-context";
import CrisisAlertIcon from "@mui/icons-material/CrisisAlert";
import MilitaryTechIcon from "@mui/icons-material/MilitaryTech";

import * as Muicon from "@mui/icons-material";

export default function Menu(props) {
  const ctx = useContext(AuthContext);

  const location = useLocation();
  const menuItems = MenuData.Menu;
  const userType = ctx.userType;

  return (
    <>
      <Box sx={{ width: "100%" }}>
        <nav aria-label="main mailbox folders">
          <List>
            {userType == 3 && (
              <Link to={"/commander-dashboard"}>
                <ListItem disablePadding>
                  <ListItemButton>
                    <ListItemIcon>
                      <CrisisAlertIcon fontSize="medium" sx={{ p: "0.2em" }} />
                    </ListItemIcon>
                    <ListItemText primary="Command Dash" />
                  </ListItemButton>
                </ListItem>
              </Link>
            )}
            {userType != 1 && (
              <Link to={"/skill-search"}>
                <ListItem disablePadding>
                  <ListItemButton>
                    <ListItemIcon>
                      <MilitaryTechIcon fontSize="medium" sx={{ p: "0.2em" }} />
                    </ListItemIcon>
                    <ListItemText primary="Skills Search" />
                  </ListItemButton>
                </ListItem>
              </Link>
            )}
            {menuItems.map((item) => {
              let selected = false;

              if (location.pathname == item.to) {
                selected = true;
              }

              const Icon = Muicon[item.icon];

              return (
                <Link to={item.to} key={item.to}>
                  <ListItem disablePadding>
                    <ListItemButton selected={selected}>
                      <ListItemIcon>
                        <Icon fontSize="medium" sx={{ p: "0.2em" }} />
                      </ListItemIcon>
                      <ListItemText primary={item.text} />
                    </ListItemButton>
                  </ListItem>
                </Link>
              );
            })}
          </List>
        </nav>
        <Box
          sx={{
            display: { xs: "block", md: "none" },
          }}
        >
          <Link to={"/profile"}>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <Chip
                    icon={<PersonIcon />}
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
                <ListItemText primary="Profile" />
              </ListItemButton>
            </ListItem>
          </Link>
          <ListItem disablePadding onClick={props.onLogout}>
            <ListItemButton>
              <ListItemText primary="Logout" />
            </ListItemButton>
          </ListItem>
        </Box>
      </Box>
    </>
  );
}
