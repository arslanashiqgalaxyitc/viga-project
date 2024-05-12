import React, { useMemo } from 'react';
import Avatar from '@mui/material/Avatar';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { Logout, PersonAdd, Settings } from '@mui/icons-material';
import { ListItemIcon, Stack, Typography } from '@mui/material';
// utilities and components
import useMenu from 'hooks/useMenu';

export default function TopBarProfileMenu() {
  const { handleOpenMenu, handleCloseMenu, MenuComponent } = useMenu();
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
    <>
      <Stack
        onClick={handleOpenMenu}
        sx={{ cursor: 'pointer' }}
        direction="row"
        spacing={1}
        justifyContent="center"
      >
        <Avatar alt="Remy Sharp" />
        <Stack>
          <Typography
            noWrap
            variant="caption"
            fontWeight="bold"
            style={{ color: '#000000', maxWidth: 200, paddingBottom: 0 }}
          >
            Jasmine Rose
          </Typography>
          <Typography noWrap variant="caption" style={{ color: '#000000' }}>
            admin
          </Typography>
        </Stack>
        <ArrowDropDownIcon sx={{ color: '#000000' }} />
      </Stack>
      <MenuComponent menuOptions={menuOptions} />
    </>
  );
}
