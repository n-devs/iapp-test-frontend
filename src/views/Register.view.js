import React from 'react';
import { Grid, FormControl, InputLabel, Input, InputAdornment, IconButton, Button } from '@mui/material';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { CREATE_AUTHENTICATION_REQUESTED, GET_AUTHENTICATION_REQUESTED } from '../redux/constants/authentication.constant';
import { useNavigate } from "react-router-dom";


function RegisterView(props) {
      const navigate = useNavigate();
      const { authenticationRedux, addAuthenticationRedux, getAuthenticationRedux } = props;
      const [values, setValues] = React.useState({
            firstName: '',
            lastName: '',
            email: '',
            password: '',
            passwordConf: '',
            showPassword: false,
            showPasswordConf: false,
      });

      const handleChange = (prop) => (event) => {
            setValues({ ...values, [prop]: event.target.value });
      };

      const handleClickShowPassword = () => {
            setValues({
                  ...values,
                  showPassword: !values.showPassword,
            });
      };

      const handleClickShowPasswordConf = () => {
            setValues({
                  ...values,
                  showPasswordConf: !values.showPasswordConf,
            });
      };

      const handleMouseDownPassword = (event) => {
            event.preventDefault();
      };
      const handleMouseDownPasswordConf = (event) => {
            event.preventDefault();
      };

      const handleClickRegister = () => {
            addAuthenticationRedux(values)

      };

      React.useEffect(() => {
            getAuthenticationRedux()
            if (authenticationRedux.success) {
                  navigate('/')
            }
      }, [authenticationRedux.success, getAuthenticationRedux, navigate])

      return (<div>
            <Grid
                  container
                  direction="column"
                  justifyContent="center"
                  alignItems="center"
            >
                  <Grid item xs>
                        <FormControl sx={{ m: 1, width: '25ch' }} variant="standard">
                              <InputLabel htmlFor="standard-adornment-firstName">First Name</InputLabel>
                              <Input
                                    id="standard-adornment-firstName"
                                    value={values.firstName}
                                    onChange={handleChange('firstName')}
                              />
                        </FormControl>
                  </Grid>
                  <Grid item xs>
                        <FormControl sx={{ m: 1, width: '25ch' }} variant="standard">
                              <InputLabel htmlFor="standard-adornment-lastName">Last Name</InputLabel>
                              <Input
                                    id="standard-adornment-lastName"
                                    value={values.lastName}
                                    onChange={handleChange('lastName')}
                              />
                        </FormControl>
                  </Grid>
                  <Grid item xs>
                        <FormControl sx={{ m: 1, width: '25ch' }} variant="standard">
                              <InputLabel htmlFor="standard-adornment-email">E-mail</InputLabel>
                              <Input
                                    id="standard-adornment-email"
                                    value={values.email}
                                    onChange={handleChange('email')}
                                    startAdornment={<InputAdornment position="start">@</InputAdornment>}
                              />
                        </FormControl>
                  </Grid>
                  <Grid item xs>
                        <FormControl sx={{ m: 1, width: '25ch' }} variant="standard">
                              <InputLabel htmlFor="standard-adornment-password">Password</InputLabel>
                              <Input
                                    id="standard-adornment-password"
                                    type={values.showPassword ? 'text' : 'password'}
                                    value={values.password}
                                    onChange={handleChange('password')}
                                    endAdornment={
                                          <InputAdornment position="end">
                                                <IconButton
                                                      aria-label="toggle password visibility"
                                                      onClick={handleClickShowPassword}
                                                      onMouseDown={handleMouseDownPassword}
                                                >
                                                      {values.showPassword ? <VisibilityOff /> : <Visibility />}
                                                </IconButton>
                                          </InputAdornment>
                                    }
                              />
                        </FormControl>
                  </Grid>
                  <Grid item xs>
                        <FormControl sx={{ m: 1, width: '25ch' }} variant="standard">
                              <InputLabel htmlFor="standard-adornment-password-confirm">Password Confirm</InputLabel>
                              <Input
                                    id="standard-adornment-password-confirm"
                                    type={values.showPasswordConf ? 'text' : 'password'}
                                    value={values.passwordConf}
                                    onChange={handleChange('passwordConf')}
                                    endAdornment={
                                          <InputAdornment position="end">
                                                <IconButton
                                                      aria-label="toggle password visibility"
                                                      onClick={handleClickShowPasswordConf}
                                                      onMouseDown={handleMouseDownPasswordConf}
                                                >
                                                      {values.showPasswordConf ? <VisibilityOff /> : <Visibility />}
                                                </IconButton>
                                          </InputAdornment>
                                    }
                              />
                        </FormControl>
                  </Grid>
                  <Grid item xs>
                        <Button variant="contained" onClick={handleClickRegister}>Register</Button>
                  </Grid>
            </Grid>
      </div>)
};

RegisterView.propTypes = {
      authenticationRedux: PropTypes.object,
      addAuthenticationRedux: PropTypes.func.isRequired,
      getAuthenticationRedux: PropTypes.func.isRequired,

}

const mapStateToProps = (state) => ({
      authenticationRedux: state.authenticationRedux
})

const mapDispatchToProps = (dispatch) => ({
      addAuthenticationRedux: (authentication) => dispatch({ type: CREATE_AUTHENTICATION_REQUESTED, payload: authentication }),
      getAuthenticationRedux: () => dispatch({ type: GET_AUTHENTICATION_REQUESTED })
})

export default connect(mapStateToProps, mapDispatchToProps)(RegisterView);