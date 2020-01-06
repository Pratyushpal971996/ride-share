import React from 'react';
import {Link, useHistory} from 'react-router-dom';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Header from './Header';
import './UserCard.css';

const useStyles = makeStyles(theme => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  },
  form: {
    width: '100%',
    marginTop: theme.spacing(0),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
    // width: "200px"
  },
}));

export default function SignIn() {
  const classes = useStyles();
  const history = useHistory();

  const loginCreds = () => {
    var username = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var keyValue = localStorage.getItem(username);
    if(keyValue === password) {
      history.push("/riders");
    }
  }

  return (
    <div>
      <Header heading={window.location.pathname} />
        <Container component="main" maxWidth="xs">
          <CssBaseline />
          <div className="loginform">
            <div className={classes.paper}>
              <form className={classes.form} onSubmit={loginCreds}>
                <TextField
                  style={{fontSize: "120"}}
                  margin="normal"
                  required
                  fullWidth
                  id="email"
                  label="Username"
                  placeholder="10-digit mobile number or email ID"
                  name="email"
                  autoComplete="email"
                  autoFocus
              />
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="current-password"
                />
                <FormControlLabel
                  control={<Checkbox value="remember" color="primary" />}
                  label="Remember me"
                />
                {/* <Link to="/"> */}
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  color="primary"
                  className={classes.submit}
                >
                  Login
                </Button>
                <Grid container>
                  <Grid item xs>
                    Forgot password?
                  </Grid>
                </Grid>
              </form>
            </div>
          </div>
          <Grid item>
            <Link to="/register" variant="body2">
              {"Don't have an account? Sign Up"}
            </Link>
          </Grid>
        </Container>
      </div>
  );
}