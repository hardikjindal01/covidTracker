import React from 'react';
import './style.css';
import { Card, CardContent, Typography, Grid } from '@material-ui/core';
import CountUp from 'react-countup';

const Cards = ({coronainfo}) => {

    const {
        updated,
        cases,
        todayCases,
        deaths,
        todayDeaths,
      } = coronainfo;

    return (
        <div className="container">
        <Grid container spacing={3} justify="center">
            <Grid item component={Card} xs={10} sm={4} md={2} className="Totalinfected card" >
                <CardContent>
                    <Typography variant="h5" color="error" gutterBottom>Total Infected</Typography>
                    <Typography variant="h5">
                        <CountUp start={0} end={cases} duration={3} separator=","
                        />
                    </Typography>
                    <br />
                    <Typography color="textSecondary" >{new Date(updated).toDateString()}</Typography>
                    <br />
                    <Typography variant="body2">Number of total cases of Covid-19</Typography>
                </CardContent>
            </Grid>
            <Grid item component={Card} xs={10} sm={4} md={2} className="Newinfected card">
                <CardContent>
                    <Typography variant="h5" color="primary" gutterBottom>New Infected</Typography>
                    <Typography variant="h5">
                    <CountUp start={0} end={todayCases} duration={3} separator=","
                        />
                    </Typography>
                    <br />
                    <Typography color="textSecondary" >{new Date(updated).toDateString()}</Typography>
                    <br />
                    <Typography variant="body2">Number of new cases of Covid-19</Typography>
                </CardContent>
            </Grid>
            <Grid item component={Card} xs={10} sm={4} md={2} className="Totaldeaths card">
                <CardContent>
                    <Typography variant="h5" color="secondary" gutterBottom>Total Deaths</Typography>
                    <Typography variant="h5">
                    <CountUp start={0} end={deaths} duration={3} separator=","
                        />
                    </Typography>
                    <br />
                    <Typography color="textSecondary" >{new Date(updated).toDateString()}</Typography>
                    <br />
                    <Typography variant="body2">Number of total deaths of Covid-19</Typography>
                </CardContent>
            </Grid>
            <Grid item component={Card} xs={10} sm={4} md={2} className="Newdeaths card">
                <CardContent>
                    <Typography variant="h5" color="primary" gutterBottom>New Deaths</Typography>
                    <Typography variant="h5">
                    <CountUp start={0} end={todayDeaths} duration={3} separator=","
                        />
                    </Typography>
                    <br />
                    <Typography color="textSecondary" >{new Date(updated).toDateString()}</Typography>
                    <br />
                    <Typography variant="body2">Number of new deaths of Covid-19</Typography>
                </CardContent>
            </Grid>
        </Grid>
            
        </div>
    )
}

export default Cards
