import React, { memo } from 'react';
import PropTypes from 'prop-types';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import { Drawer, Typography, useTheme } from '@mui/material';

// utilities and components
import { DRAWER_WIDTH } from 'utilities/constants';
import DrawerHeader from 'components/styled-components/DrawerHeader';
import SideBarListItem from './SideBarListItem';
import { sideBarList } from '../utilities/constants';

function SideBar({ open, handleDrawerClose, isSmallScreen }) {
  const theme = useTheme();
  return (
    <Drawer
      sx={{
        width: DRAWER_WIDTH,
        flexShrink: 0,
        '& .MuiDrawer-paper': {
          width: DRAWER_WIDTH,
          boxSizing: 'border-box',
          backgroundColor: theme.palette.primary.main,
        },
      }}
      variant={isSmallScreen ? 'temporary' : 'persistent'}
      anchor="left"
      open={open}
      onClose={handleDrawerClose}
    >
      <DrawerHeader>
        <Typography variant="h3" color="#ffffff">
          Logo
        </Typography>
      </DrawerHeader>
      <Divider />
      <List>
        <SideBarListItem listItems={sideBarList} nestedLevel={0} />
      </List>
    </Drawer>
  );
}

SideBar.propTypes = {
  open: PropTypes.bool.isRequired,
  isSmallScreen: PropTypes.bool.isRequired,
  handleDrawerClose: PropTypes.func.isRequired,
};

export default memo(SideBar);
