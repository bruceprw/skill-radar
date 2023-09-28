import { styled } from '@mui/material/styles';
import Badge from '@mui/material/Badge';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';

let imgUrl = 'https://picsum.photos/200/300?date=' + new Date().getTime();
let imgUrl2 = 'https://picsum.photos/200/300?date=' + new Date().getTime() +1;
let imgUrl3 = 'https://picsum.photos/200/300?date=' + new Date().getTime() +2;
let imgUrl4 = 'https://picsum.photos/200/300?date=' + new Date().getTime() +3;
let imgUrl5= 'https://picsum.photos/200/300?date=' + new Date().getTime() +4;

const StyledBadge = styled(Badge)(({ theme }) => ({
  '& .MuiBadge-badge': {
    backgroundColor: '#44b700',
    color: '#44b700',
    boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
    '&::after': {
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      borderRadius: '50%',
      animation: 'ripple 1.2s infinite ease-in-out',
      border: '1px solid currentColor',
      content: '""',
    },
  },
  '@keyframes ripple': {
    '0%': {
      transform: 'scale(.8)',
      opacity: 1,
    },
    '100%': {
      transform: 'scale(2.4)',
      opacity: 0,
    },
  },
}));

const SmallAvatar = styled(Avatar)(({ theme }) => ({
  width: 22,
  height: 22,
  border: `2px solid ${theme.palette.background.paper}`,
}));

export default function BadgeAvatars() {
  return (
    <Stack direction="row" spacing={2}>
        
      <StyledBadge
        overlap="circular"
        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
        variant="dot"
      >
        <Avatar alt="Jake" src={imgUrl} />
        
      </StyledBadge>
      <StyledBadge
        overlap="circular"
        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
        variant="dot"
      >
        <Avatar alt="Steve" src={imgUrl2} />
        
      </StyledBadge>
      <StyledBadge
        overlap="circular"
        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
        variant="dot"
      >
        
        <Avatar alt="Carl" src={imgUrl3} />
      </StyledBadge>
      
      <Avatar alt="Remy" src={imgUrl4} />
      <Avatar alt="Luke" src={imgUrl5} />
 
    </Stack>
  );
}