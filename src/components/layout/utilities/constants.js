import DashboardIcon from '@mui/icons-material/Dashboard';
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';

export const sideBarList = [
  {
    name: 'Dashboard',
    link: '/',
    Icon: DashboardIcon,
    // children: [],
  },

  {
    name: 'Fleet Managment',
    Icon: DirectionsCarIcon,
    children: [
      {
        name: 'Fleet Dashboard',
        link: 'fleet-dashboard',
      },
    ],
  },
];
export const TOPBAR_TITLE = {
  '/': 'Dashboard',
  '/fleet-dashboard': 'Fleet Dashboard',
};
