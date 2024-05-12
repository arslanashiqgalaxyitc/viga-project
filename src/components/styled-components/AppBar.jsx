import { styled } from '@mui/material';
import MuiAppBar from '@mui/material/AppBar';
import { DRAWER_WIDTH } from 'utilities/constants';

export default styled(MuiAppBar, {
  shouldForwardProp: prop => prop !== 'open',
})(({ theme, open, screen }) => ({
  transition: theme.transitions.create(['margin', 'width'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: screen === 'true' ? '100vw' : `calc(100% - ${DRAWER_WIDTH}px)`,
    marginLeft: `${DRAWER_WIDTH}px`,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));
