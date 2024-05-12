import React from 'react';
import { Box, useTheme } from '@mui/material';
import ListItem from '@mui/material/ListItem';
import { useNavigate } from 'react-router-dom';
import ListItemText from '@mui/material/ListItemText';
import ListItemButton from '@mui/material/ListItemButton';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

// utilities and constants
import { DRAWER_WIDTH } from 'utilities/constants';

function SideBarListItem({ listItems, nestedLevel }) {
  const navigate = useNavigate();
  const theme = useTheme();

  const handleItemClick = (e, item) => {
    if (item.link) {
      navigate(item.link);
    }
    if (item.children) {
      const arrowIcon = e.currentTarget.querySelector('.arrow-icon');
      if (arrowIcon) {
        arrowIcon.classList.toggle('rotate-icon');
      }
      e.currentTarget.nextSibling.classList.toggle('d-none');
    }
  };
  return listItems?.map(item => (
    <Box className={`w-100 ${nestedLevel > 0 ? 'd-none' : ''}`} key={item.name}>
      <ListItem
        onClick={e => {
          handleItemClick(e, item);
        }}
        sx={{
          width: DRAWER_WIDTH - 1,
          color: '#ffffff',
          '& :hover': {
            '&.MuiListItemButton-root': {
              backgroundImage: `linear-gradient(to right, #5CABFF , ${theme.palette.primary.main})`,
            },
          },
        }}
        disablePadding
      >
        <ListItemButton>
          {item.Icon && (
            <item.Icon
              sx={{
                marginRight: 2,
              }}
            />
          )}
          <ListItemText
            sx={{
              paddingLeft: nestedLevel * 2,
            }}
            primary={item.name}
          />
          {item.children && <ChevronRightIcon className="arrow-icon" />}
        </ListItemButton>
      </ListItem>
      {item.children && (
        <SideBarListItem key={`${item.name}-child`} listItems={item.children} nestedLevel={nestedLevel + 1} />
      )}
    </Box>
  ));
}

export default SideBarListItem;
