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

  function randomIntFromInterval(min, max) {
    // min and max included
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  function getRandom(arr, n) {
    var result = new Array(n),
      len = arr.length,
      taken = new Array(len);
    if (n > len)
      throw new RangeError("getRandom: more elements taken than available");
    while (n--) {
      var x = Math.floor(Math.random() * len);
      result[n] = arr[x in taken ? taken[x] : x];
      taken[x] = --len in taken ? taken[len] : len;
    }
    return result;
  }

  const randAmount = randomIntFromInterval(1, 8);

  const userBadges = getRandom(badges, randAmount);

  let count = 0;
  const noOfBadges = userBadges.length;

  const userBadgeArray = [];

  userBadges.forEach((badge, index) => {
    if (count == 3) {
      return;
      //console.log(index, number);
    }

    userBadgeArray.push({ badge });

    count++;
  });

  let amountRemaining = noOfBadges - count;

  return (
    <Box sx={{ display: "flex", justifyContent: "space-around" }}>
      {userBadgeArray.map((item) => {
        return (
          <Tooltip title={item.badge.text} variant="solid">
            <Chip
              variant="outlined"
              color="neutral"
              size="lg"
              className={item.badge.class}
              startDecorator={badgeIcon[item.badge.icon]}
              onClick={() =>
                alert(
                  "You clicked the " + item.badge.text + " badge for more info!"
                )
              }
            ></Chip>
          </Tooltip>
        );
      })}
      {amountRemaining != 0 && (
        <Tooltip title={amountRemaining + " Other Badges"} variant="solid">
          <Chip
            variant="outlined"
            color="neutral"
            size="lg"
            className=""
            onClick={() =>
              alert(
                "You clicked the " + item.badge.text + " badge for more info!"
              )
            }
          >
            + {amountRemaining}
          </Chip>
        </Tooltip>
      )}
    </Box>
  );
};

export default BadgesPill;
