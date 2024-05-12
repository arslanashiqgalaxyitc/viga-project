import styled from '@emotion/styled';

export default styled('main', { shouldForwardProp: prop => prop !== 'open' })(({ theme, open, screen }) => ({
  flexGrow: 1,
  paddingLeft: theme.spacing(3),
  transition: theme.transitions.create('margin', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open &&
    screen && {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  }),
}));
