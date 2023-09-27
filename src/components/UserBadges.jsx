import FlightIcon from "@mui/icons-material/Flight";
import ParaglidingIcon from "@mui/icons-material/Paragliding";
import PhpIcon from "@mui/icons-material/Php";
import JavascriptIcon from "@mui/icons-material/Javascript";
import DirectionsRunIcon from "@mui/icons-material/DirectionsRun";
import DirectionsBikeIcon from "@mui/icons-material/DirectionsBike";
import GolfCourseIcon from "@mui/icons-material/GolfCourse";
import LocalSeeIcon from "@mui/icons-material/LocalSee";
import SailingIcon from "@mui/icons-material/Sailing";
import SnowboardingIcon from "@mui/icons-material/Snowboarding";
import BadgeData from "../data/Badges.json";
import Chip from "@mui/joy/Chip";
import Tooltip from "@mui/joy/Tooltip";
import Box from "@mui/material/Box";

import BadgeMap from "./BadgeMap";

const badgeIcon = {
  FlightIcon: <FlightIcon />,
  ParaglidingIcon: <ParaglidingIcon />,
  PhpIcon: <PhpIcon />,
  JavascriptIcon: <JavascriptIcon />,
  DirectionsRunIcon: <DirectionsRunIcon />,
  DirectionsBikeIcon: <DirectionsBikeIcon />,
  GolfCourseIcon: <GolfCourseIcon />,
  LocalSeeIcon: <LocalSeeIcon />,
  SailingIcon: <SailingIcon />,
  SnowboardingIcon: <SnowboardingIcon />,

  // other icons based on your status
};

const BadgesPill = (props) => {
  const badges = BadgeData.Badges;
  const numberOfBadges = props.number;

  const badgeMap = BadgeMap();
  const userBadgeList = props.badges;

  const userBadgeArray = [];
  let count = 0;

  userBadgeList.forEach((badge, index) => {
    if (count == 3) {
      return;
      //console.log(index, number);
    }

    if (badge.id) {
      let userBadge = badgeMap.filter((p) => p.id == badge.id);

      userBadgeArray.push({ userBadge });
    }

    count++;
  });

  return (
    <Box sx={{ display: "block", justifyContent: "space-around" }}>
      {userBadgeArray.map((item) => {
        return (
          <Tooltip title={item.userBadge[0].title} variant="solid">
            <Chip
              variant="outlined"
              color="neutral"
              size="lg"
              className={`cat-${item.userBadge[0].cat}`}
              //startDecorator={badgeIcon[item.badge.icon]}
              onClick={() =>
                alert(
                  "You clicked the " +
                    item.userBadge[0].title +
                    " badge for more info!"
                )
              }
            >
              {item.userBadge[0].title}
            </Chip>
          </Tooltip>
        );
      })}
    </Box>
  );

};

export default BadgesPill;
