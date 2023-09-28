
import * as Muicon from "@mui/icons-material";
import BadgeMap from "./BadgeMap";

export const getBadgeIcon = (resourceId) => {
  const badgeMap = BadgeMap();

  let userBadge = badgeMap.filter((p) => p.id == resourceId);

  console.log('resource', resourceId, userBadge);

  const Icon = Muicon[userBadge[0].icon];

  return (
    
    <Icon fontSize="medium" sx={{ p: "0.2em"}} />

  )

  /*userBadgeList.forEach((badge, index) => {
    if (count == 3) {
      return;
    }

    if (badge.id) {
      let userBadge = badgeMap.filter((p) => p.id == badge.id);
      userBadgeArray.push({ userBadge });
    }

  });*/
};
