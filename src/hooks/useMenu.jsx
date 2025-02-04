import React from 'react';
import { v4 as uuid } from 'uuid';
import { Menu, MenuItem } from '@mui/material';
import PropTypes from 'prop-types';

function useMenu() {
  const [menu, setMenu] = React.useState(null);
  const handleOpenMenu = event => {
    setMenu(event.currentTarget);
  };
  const handleCloseMenu = () => {
    setMenu(null);
  };
  function MenuComponent({ menuOptions }) {
    return (
      <Menu
        anchorEl={menu}
        open={Boolean(menu)}
        onClose={handleCloseMenu}
        PaperProps={{
          elevation: 0,
          sx: {
            overflow: 'visible',
            filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
            mt: 1.5,
            '& .MuiAvatar-root': {
              width: 32,
              height: 32,
              ml: -0.5,
              mr: 1,
            },
            '&::before': {
              content: '""',
              display: 'block',
              position: 'absolute',
              top: 0,
              right: 14,
              width: 10,
              height: 10,
              bgcolor: 'background.paper',
              transform: 'translateY(-50%) rotate(45deg)',
              zIndex: 0,
            },
          },
        }}
        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
      >
        {menuOptions.map(option => (
          <MenuItem key={option.id || uuid()} {...option}>
            {option.element}
          </MenuItem>
        ))}
      </Menu>
    );
  }
  MenuComponent.propTypes = {
    menuOptions: PropTypes.arrayOf(PropTypes.object).isRequired,
  };
  return {
    menu,
    handleCloseMenu,
    handleOpenMenu,
    MenuComponent,
  };
}

export default useMenu;
