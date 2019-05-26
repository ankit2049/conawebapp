import React from 'react';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    title: {
        marginTop: '40px',
        paddingTop:'50px',
        color: '#1F1F1F',
        fontFamily: 'Metropolis',
        fontSize: '48px',
        fontWeight: 600,
    },
    bottomText: {
        margin: '40px',
        color: '#5A5874',
        fontFamily: 'Metropolis',
        fontSize: '28px',
    },
    textField: {
        width: '365px',
        backgroundColor: '#E4E4ED',
        borderRadius: '4px',
        marginLeft: '200px',
    },
    flexContainer: {
        display: 'flex',
        flexDirection: 'row',
        width: '100%',
    },
    button: {
        height: '48px',	
        width: '160px',
        borderRadius: '24px',
        marginTop: '18px',
        marginLeft: '30px',
    }
}));

export function EmptyState({ userData }) {
    const classes = useStyles();
    return (
        <div>
            <Container maxWidth="md">
                <Typography className={classes.title}>
                    Anybody home?
                </Typography>
                <img src='/images/Empty_State.svg' />
                <Typography variant='h4' className={classes.bottomText}>
                    Looks like you haven't set up the CONA device yet. Please enter this key while setting up the device.
                </Typography>
                <div className={classes.flexContainer}>
                    <TextField
                        disabled
                        id="outlined-disabled"
                        label=""
                        defaultValue="dee54-35tyu-12wdf-67889-8io90-987ce954ce"
                        className={classes.textField}
                        margin="normal"
                        variant="outlined"
                    />
                    <Button variant="contained" color="primary" className={classes.button}>
                        Copy
                    </Button>
                </div>
            </Container>
        </div>
    )
}
