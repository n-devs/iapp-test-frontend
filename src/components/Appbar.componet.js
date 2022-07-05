import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
// import MenuIcon from '@mui/icons-material/Menu';
import AccountCircle from '@mui/icons-material/AccountCircle';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import Button from '@mui/material/Button';
import { useNavigate } from "react-router-dom";
import Badge from '@mui/material/Badge';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { GET_AUTHENTICATION_REQUESTED, DELETE_AUTHENTICATION_REQUESTED } from '../redux/constants/authentication.constant';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

function AppbarComponent(props) {
      const { authenticationRedux, getAuthenticationRedux, deleteAuthenticationRedux } = props;
      const [anchorEl, setAnchorEl] = React.useState(null);
      const navigate = useNavigate();



      const handleMenu = (event) => {
            setAnchorEl(event.currentTarget);
      };

      const handleClose = () => {
            setAnchorEl(null);
      };

      const toLocation = (path) => (event) => {
            navigate(path)
            setAnchorEl(null);
      }

      function onLogout() {
            deleteAuthenticationRedux()
      }

      React.useEffect(() => {
            getAuthenticationRedux()
      }, [getAuthenticationRedux])

      return (
            <Box sx={{ flexGrow: 1 }}>
                  <AppBar position="fixed"
                  // color="primary"
                  >
                        <Toolbar>
                              <Typography variant="h6" component="div" sx={{ flexGrow: 1 }} onClick={() => navigate('/')}>
                                    Home
                              </Typography>

                              {authenticationRedux.success ? (
                                    <div>
                                          <IconButton
                                                size="large"
                                                aria-label="account of current user"
                                                aria-controls="menu-appbar"
                                                aria-haspopup="true"
                                                onClick={() => navigate('/cart')}
                                                color="inherit"
                                          >
                                                <Badge badgeContent={17} color="error">
                                                      <ShoppingCartIcon />
                                                </Badge>
                                          </IconButton>
                                          <IconButton
                                                size="large"
                                                aria-label="account of current user"
                                                aria-controls="menu-appbar"
                                                aria-haspopup="true"
                                                onClick={handleMenu}
                                                color="inherit"
                                          >
                                                <AccountCircle />
                                          </IconButton>

                                          <Menu
                                                id="menu-appbar"
                                                anchorEl={anchorEl}
                                                anchorOrigin={{
                                                      vertical: 'top',
                                                      horizontal: 'right',
                                                }}
                                                keepMounted
                                                transformOrigin={{
                                                      vertical: 'top',
                                                      horizontal: 'right',
                                                }}
                                                open={Boolean(anchorEl)}
                                                onClose={handleClose}
                                          >
                                                <MenuItem onClick={toLocation('/add-store')}>Create Store</MenuItem>
                                                <MenuItem onClick={toLocation('/stores')}>Store All</MenuItem>
                                                <MenuItem onClick={onLogout}>Logout</MenuItem>
                                          </Menu>
                                    </div>
                              ) : (<div>
                                    <Button color="inherit" onClick={() => navigate('/login')}>Login</Button>
                                    <Button color="inherit" onClick={() => navigate('/register')}>Register</Button>
                              </div>)}
                        </Toolbar>
                  </AppBar>
            </Box>
      );
}


AppbarComponent.propTypes = {
      authenticationRedux: PropTypes.object,
      deleteAuthenticationRedux: PropTypes.func.isRequired,
      getAuthenticationRedux: PropTypes.func.isRequired,

}

const mapStateToProps = (state) => ({
      authenticationRedux: state.authenticationRedux
})

const mapDispatchToProps = (dispatch) => ({
      getAuthenticationRedux: () => dispatch({ type: GET_AUTHENTICATION_REQUESTED }),
      deleteAuthenticationRedux: () => dispatch({ type: DELETE_AUTHENTICATION_REQUESTED })
})

export default connect(mapStateToProps, mapDispatchToProps)(AppbarComponent);