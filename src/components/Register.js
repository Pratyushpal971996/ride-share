import React from 'react';
import {Link, useHistory} from 'react-router-dom';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
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
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
    // width: "200px"
  },
}));

export default function SignIn() {
  const classes = useStyles();
  const history = useHistory();

  const registerSuccess = () => {
    var email = document.getElementById("email").value;
    var number = document.getElementById("number").value;
    var password = document.getElementById("password").value;
    localStorage.setItem(email, password);
    localStorage.setItem(number, password);
    history.push("/login");
  }

  return (
    <div>
      <Header heading={window.location.pathname} />
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className="registerform">
      <div className={classes.paper}>
        <form className={classes.form} onSubmit={registerSuccess}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="name"
            label="Full name"
            placeholder="enter your firstname & lastname"
            name="name"
            autoComplete="name"
            autoFocus
          />
          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email ID"
            placeholder="enter your email ID"
            name="email"
            autoComplete="email"
            autoFocus
          />
          <TextField
            margin="normal"
            required
            fullWidth
            id="number"
            label="Mobile Number"
            placeholder="enter your 10-digit mobile number"
            name="number"
            autoComplete="number"
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
            placeholder="set your password"
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            label="Re-enter your Password"
            type="password"
            id="password"
            placeholder="re-enter your password"
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="Car Model"
            label="Car Model"
            type="car"
            id="car"
            autoComplete="car"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Register
          </Button>
          <Grid container>
          </Grid>
        </form>
      </div>
      </div>
      <Grid item>
        <Link to="/login" variant="body2">
        <div className="login-register-link">{"Already have an account? LOGIN NOW"}</div>
        </Link>
      </Grid>
    </Container>
    </div>
  );
}