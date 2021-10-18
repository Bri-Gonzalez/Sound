import './Layout.css'
import Nav from '../Nav/Nav'
import Footer from '../Footer/Footer'
import { NavLink } from 'react-router-dom'
import * as React from 'react'
import { styled, useTheme } from '@mui/material/styles'
import Box from '@mui/material/Box'
import Drawer from '@mui/material/Drawer'
import MuiAppBar from '@mui/material/AppBar'
import CssBaseline from '@mui/material/CssBaseline'
import Divider from '@mui/material/Divider'
import IconButton from '@mui/material/IconButton'
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft'
import ChevronRightIcon from '@mui/icons-material/ChevronRight'
import HeadphonesIcon from '@mui/icons-material/Headphones'
import PersonAddIcon from '@mui/icons-material/PersonAdd'
import PersonIcon from '@mui/icons-material/Person'
import ExitToAppIcon from '@mui/icons-material/ExitToApp'
import SellIcon from '@mui/icons-material/Sell'

const drawerWidth = 240

const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(({ theme, open }) => ({
  flexGrow: 1,
  padding: theme.spacing(0),
  transition: theme.transitions.create('margin', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  marginRight: -drawerWidth,
  ...(open && {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginRight: 0,
  }),
}))

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  transition: theme.transitions.create(['margin', 'width'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginRight: drawerWidth,
  }),
}))

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
  justifyContent: 'flex-start',
}))

const authenticatedOptions = (
  <>
    <NavLink className='link' to='/add-product'>
      <SellIcon style={{ fontSize: 30 }} /> Sell Product
    </NavLink>
    <NavLink className='link' to='/sign-out'>
      <ExitToAppIcon style={{ fontSize: 30 }} /> Sign Out
    </NavLink>
  </>
)

const unauthenticatedOptions = (
  <>
    <NavLink className='link' to='/sign-up'>
      <PersonAddIcon style={{ fontSize: 30 }} /> Sign Up
    </NavLink>
    <NavLink className='link' to='/sign-in'>
      <PersonIcon style={{ fontSize: 30 }} /> Sign In
    </NavLink>
  </>
)

const alwaysOptions = (
  <>
    <NavLink className='link' to='/products'>
      <HeadphonesIcon style={{ fontSize: 30 }} /> Products
    </NavLink>
  </>
)

export default function Layout(props) {
  const theme = useTheme()
  const [open, setOpen] = React.useState(false)

  const handleDrawerOpen = () => {
    setOpen(true)
  }

  const handleDrawerClose = () => {
    setOpen(false)
  }

  return (
    <div className='layout'>
      <Box sx={{ display: 'flex' }}>
        <CssBaseline />
        <AppBar position='fixed' open={open}>
          <Nav user={props.user} handleDrawerOpen={handleDrawerOpen} open={open} />
          <div color='inherit' aria-label='open drawer' edge='end' onClick={handleDrawerOpen} sx={{ ...(open && { display: 'none' }) }}>
            Open
          </div>
        </AppBar>
        <Main open={open}>
          <DrawerHeader />
        </Main>
        <Drawer
          sx={{
            width: drawerWidth,
            flexShrink: 0,
            '& .MuiDrawer-paper': {
              width: drawerWidth,
              background: 'rgba(0, 0, 0, 0.9)',
            },
          }}
          variant='persistent'
          anchor='right'
          open={open}
        >
          <DrawerHeader>
            <IconButton onClick={handleDrawerClose}>{theme.direction === 'rtl' ? <ChevronLeftIcon style={{ color: 'white', fontSize: 30 }} /> : <ChevronRightIcon style={{ color: 'white', fontSize: 30 }} />}</IconButton>
          </DrawerHeader>
          {props.user && (
            <>
              <div className='welcome-layout'>Welcome, {props.user.firstname} </div>
              <div className='solid'></div>
            </>
          )}
          <Divider />
          <div className='links-layout'>
            {alwaysOptions}
            {props.user ? authenticatedOptions : unauthenticatedOptions}
          </div>
        </Drawer>
      </Box>
      <div className='layout-children'>{props.children}</div>
      <Footer user={props.user} />
    </div>
  )
}
