import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
import Toolbar from '@mui/material/Toolbar';
import { useLocation } from 'react-router-dom';
import Typography from '@mui/material/Typography';
import MenuIcon from '@mui/icons-material/Menu';
import { Logout, PersonAdd, Settings } from '@mui/icons-material';
import { Avatar, Box, IconButton, ListItemIcon, Stack } from '@mui/material';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';

// utilities and components
import useMenu from 'hooks/useMenu';
import AppBar from 'components/styled-components/AppBar';
import { TOPBAR_TITLE } from '../utilities/constants';
import TopBarProfileMenu from './TopBarProfileMenu';

function TopBar({ open, handleDrawerOpen, isSmallScreen }) {
  const location = useLocation();
  const { MenuComponent, handleOpenMenu, handleCloseMenu } = useMenu();
  const title = useMemo(() => TOPBAR_TITLE[location.pathname] || 'No Title Found', [location.pathname]);
  const menuOptions = useMemo(
    () => [
      {
        element: (
          <>
            <Avatar /> Profile
          </>
        ),
        onClick: handleCloseMenu,
      },
      {
        element: (
          <>
            <Avatar /> My account
          </>
        ),
        onClick: handleCloseMenu,
        divider: true,
      },
      {
        element: (
          <>
            <ListItemIcon>
              <PersonAdd fontSize="small" />
            </ListItemIcon>
            Add another account
          </>
        ),
        onClick: handleCloseMenu,
      },
      {
        element: (
          <>
            <ListItemIcon>
              <Settings fontSize="small" />
            </ListItemIcon>
            Settings
          </>
        ),
        onClick: handleCloseMenu,
      },
      {
        element: (
          <>
            <ListItemIcon>
              <Logout fontSize="small" />
            </ListItemIcon>
            Logout
          </>
        ),
        onClick: handleCloseMenu,
      },
    ],
    []
  );
  return (
    <AppBar position="fixed" open={open} screen={`${isSmallScreen}`}>
      <MenuComponent menuOptions={menuOptions} />
      <Toolbar>
        <Box display="flex" width="100%" justifyContent="space-between">
          <Stack direction="row" alignItems="center">
            <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={handleDrawerOpen}
              edge="start"
              sx={{ mr: 2, color: '#000000', display: { md: 'none' } }}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h5" fontWeight="bold" color="#000000" noWrap component="div">
              {title}
            </Typography>
          </Stack>
          <Stack direction="row" justifyContent="center" alignItems="center" spacing={3}>
            <IconButton onClick={handleOpenMenu} sx={{ border: 1, borderRadius: 2 }} size="small">
              <NotificationsNoneIcon sx={{ height: 20, width: 20 }} />
            </IconButton>
            <TopBarProfileMenu />
          </Stack>
        </Box>
      </Toolbar>
    </AppBar>
  );
}

TopBar.propTypes = {
  open: PropTypes.bool.isRequired,
  isSmallScreen: PropTypes.bool.isRequired,
  handleDrawerOpen: PropTypes.func.isRequired,
};

export default TopBar;
