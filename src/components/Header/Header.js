import * as React from 'react';
import "./Header.css";
import { styled, alpha } from '@mui/material/styles';
import { AppBar, Box, Toolbar, IconButton, Typography, InputBase, Avatar } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import LogoutButton from '../Logout/LogoutButton';
import AddProductButton from '../Products/AddProductButton';
import logo from './assets/logo.png';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import avatar from "./assets/avatar.png";
import { useNavigate } from 'react-router';

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}));

export default function SearchAppBar() {
  let navigate = useNavigate();

  const profileHandler = () => {
    navigate("/home/profile", { replace: true})
  }

  const homeHandler = () => {
    navigate("/home", { replace: true})
  }


  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar className="appBar" position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <img className="logo" alt="logo" src={logo} onClick={homeHandler}/>
          <Typography
            className='blueBee'
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
            onClick={homeHandler}
          >
            Blue bee
          </Typography>
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
            />
          </Search>
          <AddProductButton />
          <LogoutButton />
          <ShoppingCartIcon />
          <NotificationsNoneIcon />
          <Typography sx={{ m: 2 }}>
            Hi! Swati
          </Typography>
          <Avatar className="avatar" alt="Remy Sharp" src={avatar} onClick={profileHandler}/>
        </Toolbar>
      </AppBar>
    </Box>
  );
}