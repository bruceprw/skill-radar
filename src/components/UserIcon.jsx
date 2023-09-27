import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import PersonIcon from "@mui/icons-material/Person";
import { Link } from "react-router-dom";

export default function IconAvatars(props) {
  return (
    <Stack direction="row" spacing={2}>
      <Link to={"/profile"}>
        <Avatar>
          <PersonIcon />
        </Avatar>
      </Link>
      <button onClick={props.onLogout}>Logout</button>
    </Stack>
  );
}
