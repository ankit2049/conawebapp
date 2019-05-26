import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import history from '../history';

const useStyles = makeStyles(theme => ({
    root: {
    },
    cona: {
        marginTop: '32px',
        marginLeft: '68px',
        color: '#2B44FF',
        fontFamily: 'Metropolis',
        fontSize: '14px',
        fontWeight: 'bold',
        letterSpacing: '1px',
        textAlign: 'left',
    },
    title: {
        marginLeft: '68px',
        marginTop: '100px',
        color: '#1F1F1F',
        fontFamily: 'Metropolis',
        fontSize: '56px',
        fontWeight: 'bold',
        textAlign: 'left',
    },
    hero: {
        marginTop: '-150px',
        marginLeft: '600px',
    },
    login: {
        marginTop: '-500px',
        marginRight: '1350px',
    },
    textField: {
        width: '360px',
    },
    loginhead: {
        color: '#1F1F1F',
        fontFamily: 'Metropolis',
        fontSize: '12px',
        fontWeight: 'bold',
        marginRight: '275px',
        marginBottom: '-10px',
    },
    button: {
        borderRadius: '24px',
        width: '200px',
        height: '48px',
        marginRight: '1350px',
        marginTop: '35px',
    }
}));

export function Login({ auth }) {
    const [state, setState] = useState({
        email: '',
        password: ''
    })


    const classes = useStyles();
    return (
        <React.Fragment>
            <div>
                <Typography className={classes.cona}>CONA</Typography>
                <Typography className={classes.title}>A home,</Typography>
                <Typography className={classes.title} style={{ marginTop: '10px' }}>that's your own.</Typography>
                <img src="/images/Hero.svg" className={classes.hero} />
            </div>
            <div className={classes.login}>
                <Typography className={classes.loginhead}>Email Address</Typography>
                <TextField
                    id="outlined-email-input"
                    label=""
                    className={classes.textField}
                    type="email"
                    name="email"
                    autoComplete="email"
                    value={state.email}
                    onChange={event => {
                        setState({email: event.target.value});
                      }}
                    margin="normal"
                    variant="outlined"
                />
                <Typography className={classes.loginhead} style={{ marginLeft: '-25px', marginTop: '20px' }}>Password</Typography>
                <TextField
                    id="outlined-password-input"
                    label=""
                    className={classes.textField}
                    type="password"
                    autoComplete="current-password"
                    value={state.password}
                    margin="normal"
                    variant="outlined"
                />
            </div>
            <div>
            <Button variant="contained" color="primary" className={classes.button} onClick={event => {
                history.push('/gateway');
                
            }}>
                SIGN IN
            </Button>
            <Typography></Typography>
            </div>
        </React.Fragment>
    )
}

