import React from 'react'
import { Doughnut, Bar } from 'react-chartjs-2';
import './chart.css';

const Chart = ({ dailydata, country }) => {
    const {
        cases,
        todayCases,
        deaths,
        todayDeaths,
    } = dailydata;


    const doughnutchart = (
        <div className="doughnut">
            {cases ? (
                <Doughnut
                    data={{
                        labels: ['TotalInfected', 'NewInfected', 'TotalDeaths', 'NewDeaths'],
                        datasets: [{
                            data: [cases, todayCases, deaths, todayDeaths],
                            backgroundColor: [
                                'red',
                                'green',
                                'black',
                                'blue',

                            ],
                        }]
                    }}
                    
                />) : ''
            }
        </div>
    );

    const barchart = (
        <div className="bar">
            {cases ? (
                <Bar
                    data={{
                        labels: ['Total Infected', 'New Infected', 'Total Deaths', 'New Deaths'],
                        datasets: [{
                            backgroundColor: [
                                'blue',
                                'green',
                                'red',
                                'rgba(37, 3, 3, 0.5)',
                            ],
                            data: [cases, todayCases, deaths, todayDeaths],
                        }],
                    }}
                    options={{
                        plugins:{
                        legend: { display: false },
                        title: { display: true, text: `current state in ${country}` },
                        }
                    }}
                        />) : ''
            }
        </div>
    );
    return (
        <div>
            {country ? barchart : doughnutchart}
        </div>
    );
};

export default Chart
