import React from 'react';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import Weekend from '@material-ui/icons/Weekend';
import Looks from '@material-ui/icons/Looks';
import Paper from '@material-ui/core/Paper';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Link from '@material-ui/core/Link';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Brightness7 from '@material-ui/icons/Brightness7';
import ChildCare from '@material-ui/icons/ChildCare';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';

import { makeStyles } from '@material-ui/core/styles';
import { RoomsCard } from './RoomsCard';

const drawerWidth = 120;

const useStyles = makeStyles(theme => ({
    root: {
        paddingTop: '90px',
        paddingLeft: '130px',
    },
    paper: {
        padding: theme.spacing(1, 2),
    },
    toolbar: theme.mixins.toolbar,
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
    },
    drawerPaper: {
        width: drawerWidth,
    },
    listitem: {
        display: 'inline-block',
        height: '96px',
        width: '120px',
        color: '#2B44FF',
        fontFamily: 'Metropolis',
        fontSize: '14px',
        fontWeight: 600,
        textAlign: 'center',
    },
    breadcrumbs: {
        fontSize: '16px',
        fontWeight: 500,
    },
    statistics: {
        color: '#1F1F1F',
        fontFamily: 'Metropolis',
        fontSize: '20px',
        fontWeight: 'bold',
        textAlign: 'left',
        paddingTop: '20px',
        paddingLeft: '17px',
    },
    card: {
        marginTop: '26px',
        marginLeft: '17px',
        minWidth: 240,
        minheight: 160,
    },
    flexContainer: {
        display: 'flex',
        height: '160px',
        alignItems: 'baseline',
    },
    cardtitle: {
        color: '#1F1F1F',
        fontFamily: 'Metropolis',
        fontSize: '16px',
        fontWeight: 500,
        textAlign: 'left',
    },
    cardbody: {
        color: '#5A5874',
        fontFamily: 'Metropolis',
        fontSize: '48px',
        fontWeight: 600,
        textAlign: 'center',
    },
    typoflex: {
        display: 'flex',
        alignItems: 'baseline',
        justifyContent: 'center',
    },
    allrooms: {
        color: '#1F1F1F',
        fontFamily: 'Metropolis',
        fontSize: '20px',
        fontWeight: 'bold',
        textAlign: 'left',
        paddingTop: '50px',
        paddingLeft: '17px',
    },
    quickactions: {
        color: '#1F1F1F',
        fontFamily: 'Metropolis',
        fontSize: '20px',
        fontWeight: 'bold',
        textAlign: 'left',
        marginTop: '30px',
        paddingTop: '50px',
        paddingLeft: '17px',
    },
    scenario: {
        color: '#1F1F1F',
        fontFamily: 'Metropolis',
        fontSize: '12px',
        textAlign: 'left',
        fontWeight: 500,
        paddingBottom: '15px',
        flexGrow: 1,
    },
    quickactionflex: {
        display: 'flex',
        justifyContent: 'left',
        alignItems: 'center',
    },
    quickactionbody: {
        color: '#1F1F1F',
        fontFamily: 'Metropolis',
        fontSize: '16px',
        fontWeight: 500,
        textAlign: 'left',
        flexGrow: 1,
    },
}));

export function Gateway({ userData }) {
    const classes = useStyles();
    return (
        <div>
            <Drawer
                className={classes.drawer}
                variant="permanent"
                classes={{
                    paper: classes.drawerPaper,
                }}
                anchor="left"
            >
                <div className={classes.toolbar} />
                <List>
                    <ListItem button key={'Spaces'} disableGutters className={classes.listitem}>
                        <Weekend />
                        <ListItemText primary={'Spaces'} />
                    </ListItem>
                    <ListItem button key={'Modes'} disableGutters className={classes.listitem} >
                        <Looks style={{ color: "#010101"}}/>
                        <ListItemText primary={'Modes'} style={{color: '#010101'}}/>
                    </ListItem>
                </List>
                <Divider />
            </Drawer>

            <div className={classes.root}>
                <Paper elevation={0} className={classes.paper}>
                    <Breadcrumbs aria-label="Breadcrumb" className={classes.breadcrumbs}>
                        <Typography color="Primary">HOME</Typography>
                        <Link color="inherit" href="/">
                            PUNE APARTMENT
                        </Link>
                    </Breadcrumbs>
                </Paper>
                <Typography className={classes.statistics}>Statistics</Typography>
                <div className={classes.flexContainer}>
                    <Card className={classes.card}>
                        <CardContent>
                            <Typography className={classes.cardtitle} gutterBottom>
                                SYSTEM UPTIME
                            </Typography>
                            <div className={classes.typoflex}>
                                <Typography className={classes.cardbody}>
                                    21
                                </Typography>
                                <Typography variant='body1'>
                                    days
                                </Typography>
                            </div>
                        </CardContent>
                    </Card>
                    <Card className={classes.card}>
                        <CardContent>
                            <Typography className={classes.cardtitle} gutterBottom>
                                CPU UTILIZATION
                            </Typography>
                            <div className={classes.typoflex}>
                                <Typography className={classes.cardbody}>
                                    3.2
                                </Typography>
                                <Typography variant='body1'>
                                    %
                                </Typography>
                            </div>
                        </CardContent>
                    </Card>
                    <Card className={classes.card}>
                        <CardContent>
                            <Typography className={classes.cardtitle} gutterBottom>
                                MEMORY USAGE
                            </Typography>
                            <div className={classes.typoflex}>
                                <Typography className={classes.cardbody}>
                                    20
                                </Typography>
                                <Typography variant='body1'>
                                    %
                                </Typography>
                            </div>
                        </CardContent>
                    </Card>
                </div>
                <Typography className={classes.allrooms}>All Rooms</Typography>
                <div className={classes.flexContainer}>
                    <RoomsCard cardTitle="LIVING ROOM" temp="34" humidity="42" airquality="GOOD"/>
                    <RoomsCard cardTitle="BEDROOM" temp="25" humidity="36" airquality="GOOD"/>
                    <RoomsCard cardTitle="KITCHEN" temp="38" humidity="17" airquality="BAD"/>
                    <RoomsCard cardTitle="DINING ROOM" temp="29" humidity="27" airquality="GOOD"/>
                </div>
                <Typography className={classes.quickactions}>Quick Actions</Typography>
                <div className={classes.flexContainer}>
                    <Card className={classes.card}>
                        <CardContent>
                            <div className={classes.quickactionflex}>
                                <Typography className={classes.scenario}>
                                    SCENARIO
                                </Typography>
                                <Brightness7 style={{ paddingBottom: '15px' }} />
                            </div>
                            <div className={classes.quickactionflex}>
                                <Typography className={classes.quickactionbody}>
                                    Going Out
                                </Typography>
                                <Switch
                                    value="checkedB"
                                    color="primary"
                                />
                            </div>
                        </CardContent>
                    </Card>
                    <Card className={classes.card}>
                        <CardContent>
                            <div className={classes.quickactionflex}>
                                <Typography className={classes.scenario}>
                                    SCENARIO
                                </Typography>
                                <ChildCare style={{ color: '#2B44FF', paddingBottom: '15px' }} />
                            </div>
                            <div className={classes.quickactionflex}>
                                <Typography className={classes.quickactionbody}>
                                    Child Safety
                                </Typography>
                                <Switch
                                    value="checkedB"
                                    color="primary"
                                />
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </div>
    )
}
