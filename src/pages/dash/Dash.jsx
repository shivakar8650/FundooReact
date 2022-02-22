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
import MenuIcon from '@mui/icons-material/Menu';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';

import LightbulbOutlinedIcon from '@mui/icons-material/LightbulbOutlined';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import ArchiveOutlinedIcon from '@mui/icons-material/ArchiveOutlined';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import SearchIcon from '@mui/icons-material/Search';
import InputBase from '@mui/material/InputBase';
import { alpha } from "@mui/material";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import Popover from "@mui/material/Popover";
import Button from '@mui/material/Button';
import PersonAddAltOutlinedIcon from "@mui/icons-material/PersonAddAltOutlined";
import { AccountCircleOutlined, AppsOutlined, RefreshOutlined, SettingsOutlined, ViewStreamOutlined } from "@mui/icons-material";
// import { Routes, Link , Route} from "react-router-dom";
import { BrowserRout, Routes, Link, Route ,  Outlet } from "react-router-dom";
import { useNavigate } from "react-router-dom";
// import { useHistory } from 'react-router-dom';

//component
import { Navigate } from "react-router-dom";
import Notes from '../Notes/Note';
import './dashbord.scss'
import Archive from '../Archive/Archive';
import Trash from '../Trash/Trash';

const drawerWidth = 240;

const menuList = [
  {
    id: 1,
    text: "Notes",
    icon: <LightbulbOutlinedIcon />
  },
  {
    id: 2,
    text: "Reminders",
    icon: <NotificationsNoneOutlinedIcon />
  },
  {
    id: 3,
    text: "Edit labels",
    icon: <EditOutlinedIcon />
  },
  {
    id: 4,
    text: "Archive",
    icon: <ArchiveOutlinedIcon />
  },
  {
    id: 5,
    text: "Trash",
    icon: <DeleteOutlineOutlinedIcon />
  }
]

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen
  }),
  overflowX: "hidden"
});


const closedMixin = (theme) => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(9)} + 1px)`
  }
});


const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar
}));



const AppBar = styled(MuiAppBar)`
 z-index:1201;
 background:#fff;
 height:70px;
 box-shedow: inset 0 -1px 0 0 #dadce0;  

`

const ListDrawer = styled(List)`
display: flex;
flex-direction: column;

`

const ListItemBox = styled(ListItem)`
padding-left: 12px;
align-items: center;
border: 1px solid transparent;
border-radius: 0 25px 25px 0;
color: #202124;
display: flex;
font-family: 'Google Sans',Roboto,Arial,sans-serif;
font-weight: 500;
line-height: 1.25rem;
height: 48px;
min-width: 35px;
width: 100%;
`

const DrawerIcon = styled(ListItemIcon)`
border-radius: 50%;
margin-left: 5px;
padding: 0 12px;
padding-left: 12px;
width: 30px;
min-width: 35px;
`

const ListText = styled(ListItemText)`
letter-spacing: .01785714em;
font-family: 'Google Sans',Roboto,Arial,sans-serif;
font-size: .875rem;
font-weight: 500;
padding-left: 12px;
line-height: 1.25rem;
height: 48px;
color: #202124;
padding-top: 26px;
`
const Icon = styled(IconButton)`
width: 48px;
height: 48px;
align-items: center;
display: flex;
justify-content: center;
`

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open"
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme)
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme)
  })
}));

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: '8px',
  backgroundColor: alpha(theme.palette.common.black, 0.05),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.black, 0.05),
  },
  width: '100%',
  height: '50px',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(0),
  },
  // display:'flex',
  // flexDirection:'row',
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
    paddingTop: '13px',
    fontFamily: 'DM Sans',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
    paddingLeft: '20px',
  },
}));






export default function MiniDrawer() {
  const [open, setOpen] = React.useState(false);
  const navigate = useNavigate();
  const [email, setemail] = React.useState(false);
  const [username, setusername] = React.useState(false);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [userlogo, setuserlogo] = React.useState(false);
 
    React.useEffect(() => {
    if (!localStorage.getItem("token")) {
      console.log("localstorage clear")
      navigate("/login");

    }
    else {
      getuserdetails();
    }
  },[open,anchorEl]);

   const getuserdetails = () => {
    let username = localStorage.getItem("username")
    let useremail = localStorage.getItem("useremail")
    console.log(username)
    console.log(useremail)
    setusername(username);
    setemail(useremail);
    let namelogo = username.substring(0, 1);
    setuserlogo(namelogo.toUpperCase());
    console.log(namelogo.toUpperCase());
  };
 

  

  const handleOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  const opens = Boolean(anchorEl);
  const id1 = opens ? "simple-popover" : undefined;

  const handleDrawer = () => {
    setOpen(prevState => !prevState);
  };

  const changeRoute = (text) => {
   


    console.log(text);
switch (text) {
      case 'Archive':
        navigate('archive')
        break;
      case 'Notes':
        navigate('')
        break;
      case 'Trash':
        navigate('trash')
        break;
      default:
        navigate('')
        break;
    }
  
  }
  const signout = () => {
    localStorage.clear();
    console.log("in signout");
  };


  return (
    <Box sx={{ display: 'flex' }}>
      {/* <CssBaseline /> */}
      <AppBar open={open} color="inherit">
        <Toolbar padding={"3px 6px 5px 6px"}  >
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawer}
            edge="start" >
            <MenuIcon style={{ padding: "12px" }} />
          </IconButton>
          <img className="img" src="https://www.gstatic.com/images/branding/product/1x/keep_2020q4_48dp.png" />
          <Typography className="typography" fontSize={"x-large"} >
            Keep
          </Typography>
          <div className="search">
            <Search>
              <SearchIconWrapper>
                <SearchIcon />
                <StyledInputBase
                  placeholder="Search"
                  inputProps={{ 'aria-label': 'search' }}
                />
              </SearchIconWrapper>
            </Search>
          </div>
          <div className="d-icons">
            <Icon><RefreshOutlined /></Icon>
            <Icon><ViewStreamOutlined /></Icon>
            <Icon><SettingsOutlined /></Icon>
          </div>
          <div className="profile">
            <Icon>
              <AppsOutlined />
            </Icon>
            <Icon>
              <AccountCircleOutlinedIcon
                onClick={handleOpen}
                variant="contained"
                aria-describedby={id1}
              /></Icon>
            <Popover
              id={id1}
              open={opens}
              anchorEl={anchorEl}
              onClose={handleClose}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
            >
              <Typography sx={{ p: 2 }}>
                <div className="accountpop">
                  <div className="detail">
                    <div className="imagedetails" >
                      <div className="acc-logo" style={{ backgroundColor: "#2962ff" }}>
                        {userlogo}
                      </div>
                    </div>
                    <div className="username"> <h4>{username}</h4></div>
                    <div className="email"> {email}</div>
                    <div className="signout">
                      <Button variant="outlined" onClick={signout}>Sign out</Button>
                    </div>
                  </div>
                </div>
              </Typography>
            </Popover>
          </div>
        </Toolbar>
      </AppBar>

      <Drawer variant="permanent" open={open}>
        <DrawerHeader></DrawerHeader>
        <ListDrawer >
          {menuList.map((item) => (
            <ListItemBox button key={item.text} onClick={() => changeRoute(item.text)}>
              <DrawerIcon >{item.icon}</DrawerIcon>
              <ListText primary={item.text} />
            </ListItemBox >
          ))}
        </ListDrawer>

      </Drawer>
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <DrawerHeader />
        <Typography >

            <Routes>
          <Route path="" element={<Notes />} />
          <Route path="archive" element={<Archive />} />
          <Route path="trash" element={<Trash />} />
        </Routes>
        
        </Typography>

      </Box>
    </Box>
  );
}