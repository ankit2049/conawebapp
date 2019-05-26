import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';

import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

const useStyles = makeStyles( theme => ({
    root: {
        flexGrow: 1,
    },
    appBar: {
        zIndex: theme.zIndex.drawer + 1,
        backgroundColor: '#ffffff',
    },
    title: {
        color: '#2B44FF',
        fontFamily: 'Metropolis',
        fontWeight: 'bold',
        fontSize: '14px',
        textAlign:'left',
        flexGrow: 1,
    },
    settings: {
        marginRight: '10px',
        height: '28px',
        width: '28px',
        color: '#5A5874',
    },
    username: {
        marginLeft: '10px',
        color: '#5A5874',	
        fontFamily: 'Metropolis',	
        fontSize: '16px',
    }
}));

export function Navbar({ userData }) {
    const classes = useStyles(); 
    return (
        <div className={classes.root}>
            <AppBar position="absolute" className={classes.appBar}>
                <Toolbar>
                    <Typography className={classes.title}>
                        CONA
                    </Typography>
                    <IconButton className={classes.iconbutton}>
                        <img src="./images/settings.svg" className={classes.settings}/>
                    </IconButton >
                    <Avatar alt="Remy Sharp" src="" className={classes.avatar} />
                    <Typography className={classes.username}>
                        Ankit Gupta
                    </Typography>
                </Toolbar>
            </AppBar>
        </div>
    )
}
