
import Button from '@mui/material/Button';
import "./CssFiles/hatchback.css"
import * as React from 'react';
import { styled, createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import MuiDrawer from '@mui/material/Drawer';
import Box from '@mui/material/Box';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Badge from '@mui/material/Badge';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Link from '@mui/material/Link';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import NotificationsIcon from '@mui/icons-material/Notifications';
// import { mainListItems, secondaryListItems } from './listItems';
// import Chart from './Chart';
// import Deposits from './Deposits';
import Sidebar from '../UserPanel/sidebar';
import CarCart from '../UserPanel/carCart';
import { useNavigate } from 'react-router-dom'


function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const drawerWidth = 240;

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
    '& .MuiDrawer-paper': {
      position: 'relative',
      whiteSpace: 'nowrap',
      width: drawerWidth,
      transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
      boxSizing: 'border-box',
      ...(!open && {
        overflowX: 'hidden',
        transition: theme.transitions.create('width', {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.leavingScreen,
        }),
        width: theme.spacing(7),
        [theme.breakpoints.up('sm')]: {
          width: theme.spacing(9),
        },
      }),
    },
  }),
);

// TODO remove, this demo shouldn't need to reset the theme.
const defaultTheme = createTheme();

export default function Suv() {

  const navigate = useNavigate()

  const handlebooking = () => {
    navigate('/login')
  }
  const [open, setOpen] = React.useState(true);
  const toggleDrawer = () => {
    setOpen(!open);
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <Box sx={{ display: 'flex' }}>
        <CssBaseline />
        <AppBar position="absolute" open={open} style={{ background: 'white' }}>
          <Toolbar
            sx={{
              pr: '24px', // keep right padding when drawer closed

            }}
          >
            <IconButton
              edge="start"
              color="secondary"
              aria-label="open drawer"
              onClick={toggleDrawer}
              sx={{
                marginRight: '36px',
                ...(open && { display: 'none' }),
              }}
            >
              <MenuIcon />
            </IconButton>
            <Typography
              component="h1"
              variant="h6"
              color="GrayText"
              noWrap
              sx={{ flexGrow: 0 }}
            >
              Cars available for rental 
            </Typography>
            
          </Toolbar>
        </AppBar>
        <Drawer variant="permanent" open={open}>
          <Toolbar
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'flex-end',
              px: [1],
              width: '0%'
            }}
          >
            <IconButton onClick={toggleDrawer}>
              <ChevronLeftIcon />
            </IconButton>
          </Toolbar>
          <Divider />
          <List component="nav" sx={{ flexGrow: 1 }}>
            <Sidebar />
            <Divider sx={{ my: 1 }} />
            {/* {secondaryListItems} */}
          </List>
        </Drawer>
        <Box
          component="main"
          sx={{
            backgroundColor: (theme) =>
              theme.palette.mode === 'light'
                ? theme.palette.grey[100]
                : theme.palette.grey[900],
            flexGrow: 1,
            height: '100vh',
            overflow: 'auto',
          }}
        >
          <Toolbar />
          <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
            <Grid container spacing={3}>
              {/* Chart */}
              <Grid item xs={12}>
                <Paper
                  sx={{
                    p: 3,
                    display: 'flex',
                    flexDirection: 'row',
                    height: 'auto',
                    margin: '10px'
                  }}
                >

                  <div>
                    <div className="container text-center">
                      <h1>SUV Car List</h1>
                      <span>
                        Car Rent With<i className="zmdi zmdi-favorite red"></i><strong>Arjun Singh</strong>
                      </span>
                    </div>

                    <div className="shell">
                      <div className="container">
                        <div className="row">
                          <div className="col-md-3">
                            <div className="wsk-cp-product">
                              <div className="wsk-cp-img">
                                <img src={require('../UserPanel/Assets/SUV/brezza.jpg')} alt="Product" className="img-responsive" />
                              </div>
                              <div className="wsk-cp-text">
                                <div className="category">
                                  <span>Brezza</span>
                                </div>
                                <div className="title-product">
                                  <p>4257 kms | Prices exclude fuel cost</p>
                                </div>
                                <div className="description-prod" style={{ padding: '3px' }}>
                                  <i class="fa-solid fa-oil-can"></i>Diesel
                                  <i class="fa-solid fa-person"></i>4 Person
                                </div>
                                <div className="card-footer">
                                  <div className="wcf-left"><span className="price">Rp500.000</span></div>
                                  <div className="wcf-right"><i><a onClick={handlebooking} class="wsk-btn">Book</a></i></div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col-md-3">
                            <div className="wsk-cp-product">
                              <div className="wsk-cp-img">
                                <img src={require('../UserPanel/Assets/SUV/Creta.jpg')} alt="Product" className="img-responsive" />
                              </div>
                              <div className="wsk-cp-text">
                                <div className="category">
                                  <span>Creta</span>
                                </div>
                                <div className="title-product">
                                  <p>4257 kms | Prices exclude fuel cost</p>
                                </div>
                                <div className="description-prod" style={{ padding: '3px' }}>
                                  <i class="fa-solid fa-gas-pump"></i>Petrol
                                  <i class="fa-solid fa-person"></i>4 Person
                                </div>
                                <div className="card-footer">
                                  <div className="wcf-left"><span className="price">Rp500.000</span></div>
                                  <div className="wcf-right"><i><a onClick={handlebooking} class="wsk-btn">Book</a></i></div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col-md-3">
                            <div className="wsk-cp-product">
                              <div className="wsk-cp-img">
                                <img src={require('../UserPanel/Assets/SUV/ecosport.jpg')} alt="Product" className="img-responsive" />
                              </div>
                              <div className="wsk-cp-text">
                                <div className="category">
                                  <span>Eco Sport</span>
                                </div>
                                <div className="title-product">
                                  <p>4257 kms | Prices exclude fuel cost</p>
                                </div>
                                <div className="description-prod" style={{ padding: '3px' }}>
                                  <i class="fa-solid fa-gas-pump"></i>Petrol
                                  <i class="fa-solid fa-person"></i>4 Person
                                </div>
                                <div className="card-footer">
                                  <div className="wcf-left"><span className="price">Rp500.000</span></div>
                                  <div className="wcf-right"><i><a onClick={handlebooking} class="wsk-btn">Book</a></i></div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col-md-3">
                            <div className="wsk-cp-product">
                              <div className="wsk-cp-img">
                                <img src={require('../UserPanel/Assets/SUV/GrandVitara.jpg')} alt="Product" className="img-responsive" />
                              </div>
                              <div className="wsk-cp-text">
                                <div className="category">
                                  <span>Grand Vitara</span>
                                </div>
                                <div className="title-product">
                                  <p>4257 kms | Prices exclude fuel cost</p>
                                </div>
                                <div className="description-prod" >

                                  <i class="fa-solid fa-gas-pump"></i>Petrol


                                  <i class="fa-solid fa-person"></i>4 Person

                                </div>
                                <div className="card-footer">
                                  <div className="wcf-left"><span className="price">Rp500.000</span></div>
                                  <div className="wcf-right"><i><a onClick={handlebooking} class="wsk-btn">Book</a></i></div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col-md-3">
                            <div className="wsk-cp-product">
                              <div className="wsk-cp-img">
                                <img src={require('../UserPanel/Assets/SUV/hondacity.jpg')} alt="Product" className="img-responsive" />
                              </div>
                              <div className="wsk-cp-text">
                                <div className="category">
                                  <span>Honda City</span>
                                </div>
                                <div className="title-product">
                                  <p>4257 kms | Prices exclude fuel cost</p>
                                </div>
                                <div className="description-prod" >

                                  <i class="fa-solid fa-gas-pump"></i>Petrol


                                  <i class="fa-solid fa-person"></i>4 Person

                                </div>
                                <div className="card-footer">
                                  <div className="wcf-left"><span className="price">Rp500.000</span></div>
                                  <div className="wcf-right"><i><a onClick={handlebooking} class="wsk-btn">Book</a></i></div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col-md-3">
                            <div className="wsk-cp-product">
                              <div className="wsk-cp-img">
                                <img src={require('../UserPanel/Assets/SUV/scorpio.jpg')} alt="Product" className="img-responsive" />
                              </div>
                              <div className="wsk-cp-text">
                                <div className="category">
                                  <span>Scorpio</span>
                                </div>
                                <div className="title-product">
                                  <p>4257 kms | Prices exclude fuel cost</p>
                                </div>
                                <div className="description-prod" >

                                  <i class="fa-solid fa-gas-pump"></i>Petrol


                                  <i class="fa-solid fa-person"></i>4 Person

                                </div>
                                <div className="card-footer">
                                  <div className="wcf-left"><span className="price">Rp500.000</span></div>
                                  <div className="wcf-right"><i><a onClick={handlebooking} class="wsk-btn">Book</a></i></div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </Paper>
              </Grid>
            </Grid>
            <Copyright sx={{ pt: 4 }} />
          </Container>
        </Box>
      </Box>
    </ThemeProvider>
  );
}