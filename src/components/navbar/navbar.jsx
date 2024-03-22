import React from 'react'
import SearchBar from '../searchBar/searchBar'
import LoginButton from '../loginButton/loginButton'
import CartButton from '../cartButton/cartButton'
import { useLocation, useNavigate } from 'react-router-dom'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import './navbar.scss'

const drawerWidth = 240;

export default function DrawerAppBar(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const location = useLocation();
  const navigate = useNavigate();

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const navigateToPage = (e) => {
    const redirect = e.target.getAttribute('link');
    navigate(redirect);
  }

  const drawer = (
    <Box>
      <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
        <Typography fontWeight="bold" className='logo' variant="h6" sx={{ my: 2 }}>
          ADEPOS
        </Typography>
        <Divider />
        <List>
          <li link='home' onClick={navigateToPage} className={`navigation-links mr-2 mt-4 ${location.pathname.includes('home') ? 'active-navigation' : ''}`}>Home</li>
          <li link='menu' onClick={navigateToPage} className={`navigation-links mr-2 mt-4 ${location.pathname.includes('menu') ? 'active-navigation' : ''}`}>Menu</li>
          <li link='offers' onClick={navigateToPage} className={`navigation-links mr-2 mt-4 ${location.pathname.includes('offers') ? 'active-navigation' : ''}`}>Offers</li>
          <li link='offers' onClick={navigateToPage} className={`navigation-links mr-2 mt-4`}>Cart</li>
          <li link='offers' onClick={navigateToPage} className={`navigation-links mr-2 mt-4`}>Log In</li>
        </List>
      </Box>
    </Box>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar className='navbar-container-main' component="nav">
        <Toolbar>
          <IconButton color="inherit" aria-label="open drawer" edge="start" onClick={handleDrawerToggle} sx={{ display: { sm: 'none' } }} >
            <MenuIcon className='col-black' />
          </IconButton>
          <Typography fontWeight="bold" variant="h4" component="div" className='logo' sx={{ color: 'black', flexGrow: 1, display: { xs: 'none', sm: 'block' } }}>
            ADEPOS
          </Typography>
          <Box sx={{ display: { xs: 'none', sm: 'none', md: 'block' } }}>
            <Button link='home' onClick={navigateToPage} sx={{ color: `${location.pathname.includes('home') ? '#2b8972' : 'black'}` }}>
              {'Home'}
            </Button>
            <Button link='menu' onClick={navigateToPage} sx={{ color: `${location.pathname.includes('menu') ? '#2b8972' : 'black'}` }}>
              {'Menu'}
            </Button>
            <Button link='offers' onClick={navigateToPage} sx={{ color: `${location.pathname.includes('offers') ? '#2b8972' : 'black'}` }}>
              {'Offers'}
            </Button>
          </Box>
          <SearchBar placeholder={'Search'} />
          <Box sx={{ display: { xs: 'none', sm: 'none', md: 'flex' } }}>
            <CartButton />
            <LoginButton />
          </Box>
        </Toolbar>
      </AppBar>
      <Drawer container={container} variant="temporary" open={mobileOpen} onClose={handleDrawerToggle} ModalProps={{ keepMounted: true, }} sx={{ display: { xs: 'block', sm: 'none' }, '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth } }} >
        {drawer}
      </Drawer>
    </Box>
  );
}
