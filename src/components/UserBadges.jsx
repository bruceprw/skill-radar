import AcUnitIcon from '@mui/icons-material/AcUnit';
import CodeIcon from '@mui/icons-material/Code';
import TwoWheelerIcon from '@mui/icons-material/TwoWheeler';
import TerminalIcon from '@mui/icons-material/Terminal';
import FlagIcon from '@mui/icons-material/Flag';
import MedicalServicesIcon from '@mui/icons-material/MedicalServices';
import HealingIcon from '@mui/icons-material/Healing';
import OutdoorGrillIcon from '@mui/icons-material/OutdoorGrill';
import DonutLargeIcon from '@mui/icons-material/DonutLarge';
import ExtensionIcon from '@mui/icons-material/Extension';
import SportsIcon from '@mui/icons-material/Sports';
import SportsMmaIcon from '@mui/icons-material/SportsMma';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';
import CakeIcon from '@mui/icons-material/Cake';
import RestaurantMenuIcon from '@mui/icons-material/RestaurantMenu';
import DownhillSkiingIcon from '@mui/icons-material/DownhillSkiing';
import HikingIcon from '@mui/icons-material/Hiking';
import PrintIcon from '@mui/icons-material/Print';
import DesignServicesIcon from '@mui/icons-material/DesignServices';
import ManageSearchIcon from '@mui/icons-material/ManageSearch';
import ScubaDivingIcon from '@mui/icons-material/ScubaDiving';
import BorderAllIcon from '@mui/icons-material/BorderAll';
import BoltIcon from '@mui/icons-material/Bolt';
import WysiwygIcon from '@mui/icons-material/Wysiwyg';
import BadgeData from "../data/Badges.json";
import Chip from "@mui/joy/Chip";
import Tooltip from "@mui/joy/Tooltip";
import Box from "@mui/material/Box";

import BadgeMap from "./BadgeMap";

const badgeIcon = {
  AcUnitIconUsage : <AcUnitIcon />,
  CodeIconUsage : <CodeIcon />,
  TwoWheelerIconUsage : <TwoWheelerIcon />,
  TerminalIconUsage : <TerminalIcon />,
  FlagIconUsage : <FlagIcon />,
  MedicalServicesIconUsage : <MedicalServicesIcon />,
  HealingIconUsage : <HealingIcon />,
  OutdoorGrillIconUsage : <OutdoorGrillIcon />,
  DonutLargeIconUsage : <DonutLargeIcon />,
  ExtensionIconUsage : <ExtensionIcon />,
  SportsIconUsage : <SportsIcon />,
  SportsMmaIconUsage : <SportsMmaIcon />,
  SportsEsportsIconUsage : <SportsEsportsIcon />,
  CakeIconUsage : <CakeIcon />,
  RestaurantMenuIconUsage : <RestaurantMenuIcon />,
  DownhillSkiingIconUsage : <DownhillSkiingIcon />,
  HikingIconUsage : <HikingIcon />,
  PrintIconUsage : <PrintIcon />,
  DesignServicesIconUsage : <DesignServicesIcon />,
  ManageSearchIconUsage : <ManageSearchIcon />,
  ScubaDivingIconUsage : <ScubaDivingIcon />,
  BorderAllIconUsage : <BorderAllIcon />,
  BoltIconUsage : <BoltIcon />,
  WysiwygIconUsage : <WysiwygIcon />

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
              //startDecorator={badgeIcon[item.userBadge[0].icon]}
              onClick={() =>
                alert(
                  "You clicked the " +
                    item.userBadge[0].title +
                    " badge for more info!"
                )
              }
            >
            </Chip>
          </Tooltip>
        );
      })}
    </Box>
  );

};

export default BadgesPill;
