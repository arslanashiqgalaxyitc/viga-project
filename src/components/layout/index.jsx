import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import { Outlet } from 'react-router-dom';
import { useMediaQuery, useTheme } from '@mui/material';

// utilities and components
import DrawerHeader from 'components/styled-components/DrawerHeader';
import MainComponent from 'components/styled-components/MainComponent';
import { LAYOUT_BREAKPOINT } from 'utilities/constants';
import TopBar from './components/TopBar';
import SideBar from './components/SideBar';

export default function PersistentDrawerLeft() {
  const theme = useTheme();
  const [open, setOpen] = useState(true);
  const isSmallScreen = useMediaQuery(theme.breakpoints.down(LAYOUT_BREAKPOINT));

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    if (!isSmallScreen) {
      setOpen(true);
    }
  }, [isSmallScreen]);

  return (
    <Box sx={{ display: 'flex' }}>
      <TopBar open={open} handleDrawerOpen={handleDrawerOpen} isSmallScreen={isSmallScreen} />
      <SideBar open={open} handleDrawerClose={handleDrawerClose} isSmallScreen={isSmallScreen} />
      <MainComponent open={open} screen={`${isSmallScreen}`}>
        <DrawerHeader />
        <Outlet />
      </MainComponent>
    </Box>
  );
}
