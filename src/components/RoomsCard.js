import React from 'react';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Whatshot from '@material-ui/icons/Whatshot';
import WbSunny from '@material-ui/icons/WbSunny';
import Equalizer from '@material-ui/icons/Equalizer';  
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    card: {
        marginTop: '26px',
        marginLeft: '17px',
        minWidth: 240,
        minheight: 160,
    },
    cardtitle: {
        color: '#1F1F1F',
        fontFamily: 'Metropolis',
        fontSize: '16px',
        fontWeight: 500,
        textAlign: 'left',   
    },
    typoflex: {
        display: 'flex',
        alignItems: 'center',
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
    allroomscardbody: {
        color: '#5A5874',	
        fontFamily: 'Metropolis',	
        fontSize: '14px',
        flex: 1,
    }
}));

export function RoomsCard({ cardTitle, temp, humidity, airquality }) {
    const classes = useStyles();
    return (
        <div>
            <Card className={classes.card}>
                <CardContent>
                    <Typography className={classes.cardtitle} gutterBottom>
                        {cardTitle}
                    </Typography>
                    <br></br>
                    <div className={classes.typoflex}>
                        <Whatshot style={{ color: '#FFB400' }} />
                        <Typography className={classes.allroomscardbody}>
                            TEMP
                                </Typography>
                        <Typography variant='body1'>
                            {temp}C
                                </Typography>
                    </div>
                    <div className={classes.typoflex}>
                        <WbSunny style={{ color: '#00B8D8', marginBottom: '8px' }} />
                        <Typography className={classes.allroomscardbody}>
                            HUMIDITY
                                </Typography>
                        <Typography variant='body1'>
                            {humidity}%
                                </Typography>
                    </div>
                    <div className={classes.typoflex}>
                        <Equalizer style={{ color: '#17C671', marginBottom: '8px' }} />
                        <Typography className={classes.allroomscardbody}>
                            AIR QUALITY
                                </Typography>
                        <Typography variant='body1'>
                            {airquality}
                                </Typography>
                    </div>
                </CardContent>
            </Card>
        </div>
    )
}
