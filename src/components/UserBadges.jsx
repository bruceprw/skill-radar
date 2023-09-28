import Chip from "@mui/joy/Chip";
import Tooltip from "@mui/joy/Tooltip";
import Box from "@mui/material/Box";
import IconButton from "@mui/joy/IconButton";

import * as Muicon from "@mui/icons-material";

import BadgeMap from "./BadgeMap";

const BadgesPill = (props) => {
  const badgeMap = BadgeMap();
  const userBadgeList = props.badges;
  const userBadgeArray = [];

  let count = 0;

 


  userBadgeList.forEach((badge, index) => {
    if (count == 3) {
      return;
    }

    if (badge.id) {
      let userBadge = badgeMap.filter((p) => p.id == badge.id);
      userBadgeArray.push({ userBadge });
    }

    count++;
  });

  return (
    <Box sx={{ display: "flex", justifyContent: "center" }}>
      {userBadgeArray.map((item) => {
        const Icon = Muicon[item.userBadge[0].icon];

        return (
          <Tooltip title={item.userBadge[0].title} variant="solid">
            <IconButton
              sx={{mx: "3px" }}
              variant="solid"
              className={`cat-${item.userBadge[0].cat}`}
              onClick={() =>
                alert(
                  "You clicked the " +
                    item.userBadge[0].title +
                    " badge for more info!" 
                )
              }
            >
              <Icon fontSize="medium" sx={{ p: "0.2em"}} />
            </IconButton>
          </Tooltip>
        );
      })}
    </Box>
    
  );
};

export default BadgesPill;
