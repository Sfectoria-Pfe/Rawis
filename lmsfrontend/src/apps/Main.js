import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { TfiMenuAlt } from "react-icons/tfi";
import { MdDashboard, MdViewModule } from "react-icons/md";
import { HiUserGroup } from "react-icons/hi2";
import { FaUserGroup } from "react-icons/fa6";
import { useNavigate, Outlet, useLocation } from 'react-router-dom';
import { MDBContainer, MDBNavbar, MDBBtn, MDBInputGroup } from 'mdb-react-ui-kit';
import { Avatar, Menu, MenuItem, Tooltip } from '@mui/material';
import { MyContext } from '../router/Router';
import { Link } from 'react-router-dom';
import LogoIcon from "../assets/svg/Logo";

const drawerWidth = 240;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
    boxSizing: 'border-box',
    ...(open && {
      ...openedMixin(theme),
      '& .MuiDrawer-paper': openedMixin(theme),
    }),
    ...(!open && {
      ...closedMixin(theme),
      '& .MuiDrawer-paper': closedMixin(theme),
    }),
  }),
);

const Main = () => {

  const handelLogOut = () => {
    localStorage.removeItem("token");
    window.location.href = "/"
  };

  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const user = React.useContext(MyContext)

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const navigate = useNavigate()
  const location = useLocation()
  console.log(location.pathname, "location");
  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar style={{ backgroundColor: 'white' }} position="fixed" open={open}>

        <Toolbar className='justify-content-between'>
        {user.role !== 'Etudiant' && (location.pathname !== '/' && location.pathname !== '/semester') && <IconButton
            // color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{
              marginRight: 5,
              ...(open && { display: 'none' }),
            }}
          >
            <TfiMenuAlt />
          </IconButton>}
          <Link className="pointer flexNullCenter" to="/" smooth={true}>
            <LogoIcon />
            <h1 style={{ marginLeft: "15px" }} className="font20 extraBold">
              Elite
            </h1>
          </Link>
          {/* <Typography variant="h6" noWrap component="div">
            <MDBNavbar>
              <MDBContainer fluid>
                <MDBInputGroup tag="form" className='d-flex w-auto mb-3'>
                  <input className='form-control' placeholder="Type query" aria-label="Search" type='Search' />
                  <MDBBtn outline>Search</MDBBtn>
                </MDBInputGroup>
              </MDBContainer>
            </MDBNavbar>
          </Typography> */}
          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" src={user?.imgUrl} />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {[{ name: 'Profil', to: '/profil' }, { name: 'Se déconnecter', onClick: handelLogOut }].map((e) => (
                <MenuItem key={e.name} onClick={e.onClick || handleCloseUserMenu}>
                  {e.to ? <Link to={e.to}><Typography textAlign="center">{e.name}</Typography></Link> : <Typography textAlign="center">{e.name}</Typography>}
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </AppBar>
      {user.role !== 'Etudiant' && (location.pathname !== '/' && location.pathname !== '/semester') &&
        <Drawer variant="permanent" open={open}>
          <DrawerHeader>
            <IconButton onClick={handleDrawerClose}>
              {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
            </IconButton>
          </DrawerHeader>
          <Divider />
          <List>
            {[
              { name: 'Dashboard', path: 'dashboard', icon: <MdDashboard />, roles: ['Admin', 'Enseignant'] },
              { name: 'Enseignants', path: '/enseignant', icon: <FaUserGroup />, roles: ['Admin'] },
              { name: 'Etudiants', path: '/etudiant', icon: <HiUserGroup />, roles: ['Admin', 'Enseignant'] },
              { name: 'Cours', path: '/cours', icon: <MdViewModule />, roles: ['Admin', 'Enseignant', 'Etudiant'] }].map((e, index) => {
                if (e.roles.includes(user.role)) {
                  return (
                    <ListItem key={e.name} disablePadding sx={{ display: 'block' }}>
                      <ListItemButton onClick={() => navigate(e.path)}
                        sx={{
                          minHeight: 48,
                          justifyContent: open ? 'initial' : 'center',
                          px: 2.5,
                        }}
                      >
                        <ListItemIcon
                          sx={{
                            minWidth: 0,
                            mr: open ? 3 : 'auto',
                            justifyContent: 'center',
                          }}
                        >
                          {e.icon}
                        </ListItemIcon>
                        <ListItemText primary={e.name} sx={{ opacity: open ? 1 : 0 }} />
                      </ListItemButton>
                    </ListItem>
                  )
                }

              })}
          </List>
        </Drawer>}
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <DrawerHeader />
        <Outlet />
      </Box>
    </Box>
  );
}
export default Main
