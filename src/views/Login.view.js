import React from 'react';
import { Grid, FormControl, InputLabel, Input, InputAdornment, IconButton, Button } from '@mui/material';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { UPDATE_AUTHENTICATION_REQUESTED, GET_AUTHENTICATION_REQUESTED } from '../redux/constants/authentication.constant';
import { useNavigate } from "react-router-dom";
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

function LoginView(props) {
      const navigate = useNavigate();
      const { authenticationRedux, setAuthenticationRedux, getAuthenticationRedux } = props;
      const [values, setValues] = React.useState({
            email: '',
            password: '',
            showPassword: false,
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

      const handleMouseDownPassword = (event) => {
            event.preventDefault();
      };

      const handleClickLogin = () => {
            setAuthenticationRedux(values)

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
                        <Button variant="contained" onClick={handleClickLogin}>Login</Button>
                  </Grid>
            </Grid>
      </div>)
};

LoginView.propTypes = {
      authenticationRedux: PropTypes.object,
      setAuthenticationRedux: PropTypes.func.isRequired,
      getAuthenticationRedux: PropTypes.func.isRequired,

}

const mapStateToProps = (state) => ({
      authenticationRedux: state.authenticationRedux
})

const mapDispatchToProps = (dispatch) => ({
      setAuthenticationRedux: (authentication) => dispatch({ type: UPDATE_AUTHENTICATION_REQUESTED, payload: authentication }),
      getAuthenticationRedux: () => dispatch({ type: GET_AUTHENTICATION_REQUESTED })
})

export default connect(mapStateToProps, mapDispatchToProps)(LoginView);