import React, { useState } from 'react';

import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import CircularProgress from '@material-ui/core/CircularProgress';
import { makeStyles } from '@material-ui/core/styles';
import Select from '@material-ui/core/Select'
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import { green } from '@material-ui/core/colors';
import Divider from '@material-ui/core/Divider';
import MenuItem from '@material-ui/core/MenuItem';
import logo from '../../assets/winx.svg';
import ErrorIcon from '@material-ui/icons/Error';

const useStyles = makeStyles(theme => ({
    root: {
      display: 'flex',
      alignItems: 'center',
    },
    wrapper: {
      margin: theme.spacing(1),
      position: 'relative',
    },
    buttonSuccess: {
      backgroundColor: green[500],
      '&:hover': {
        backgroundColor: green[700],
      },
    },
    fabProgress: {
      color: green[500],
      position: 'absolute',
      top: -6,
      left: -6,
      zIndex: 1,
    },
    buttonProgress: {
      color: green[500],
      position: 'absolute',
      top: '50%',
      left: '50%',
      marginTop: -12,
      marginLeft: -12,
    },
    formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
      },
  }));

export default function Login() {
    const classes = useStyles();
    const [loading, setLoading] = useState(false);
    const [host, setHost] = useState('');
    const [hasError, setError] = useState();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    function handleLogin(event) {
        event.preventDefault()


        setError('xd');
    }

    return (
        <div className="container">
            <img src={logo} alt="Winx team" />
            <div className="content">
                <p>
                    Gerencie seu <strong>time</strong> de desenvolvedores e <strong>aumente</strong> a produtividade.
                </p>
                {hasError && (
                <div className="alert-danger">
                    <ErrorIcon fontSize="small"/> <p>{hasError}</p>
                </div>
                )}

                <form onSubmit={handleLogin}>      
                <TextField
        id="outlined-email-input"
        label="E-mail"
        type="email"
        className="inputLogin"
        name="email"
        value={email}
        onChange={event => setEmail(event.target.value)}
        autoComplete="email"
        margin="normal"
        variant="outlined"
      />
                <TextField
        id="outlined-password-input"
        label="Senha"
        onChange={event => setPassword(event.target.value)}
        type="password"
        value={password}
        className="inputLogin"
        autoComplete="current-password"
        margin="normal"
        variant="outlined"
      />
        <Button
          variant="contained"
          color="secondary"
          type="submit"
          className="submit-login"
          disabled={loading}
        >
        {loading ? <CircularProgress size={24} className={classes.buttonProgress} /> : 'ENTRAR'}
        </Button>

                </form>
                
                <Divider variant="middle" />
                <div style={{
  textAlign: 'center',
}}>
                <FormControl className={classes.formControl}>
        <InputLabel shrink htmlFor="hosts">Target server</InputLabel>
        <Select
        value={host}
        onChange={(e) => setHost(e.target.value)}
        displayEmpty
        inputProps={{
            name: 'hosts',
            id: 'hosts',
          }}
        >
          <MenuItem value="">Gitlab 10.0.30.9</MenuItem>
        </Select>
      </FormControl>
                </div>
                
                
            </div>

        </div>
    );
}