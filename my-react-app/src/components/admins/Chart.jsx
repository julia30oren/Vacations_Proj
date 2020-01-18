
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Bar } from 'react-chartjs-2';
import { Redirect } from 'react-router-dom';

const vacationsUrl = "http://localhost:5000/vacations";

export default function Chart() {
    const [vacations, setVacations] = useState('loader');

    useEffect(() => {
        const adminOn = localStorage.getItem('user');
        if (adminOn === 'Admin') {
            setVacations('loader');
            console.log(adminOn);
            async function getEffect() {
                const allVacationsResult = await axios.get(vacationsUrl);
                if (allVacationsResult.data) {
                    localStorage.setItem("InfoResult", JSON.stringify(allVacationsResult.data));
                    setVacations('result');
                }
            }
            getEffect();
        } else {
            alert('Char is only for Admin');
            setVacations('redirect');
            console.log(vacations);
        }
    }, []);

    const names = JSON.parse(localStorage.getItem("InfoResult")).map(vac => vac.vacation_names);
    const likes = JSON.parse(localStorage.getItem("InfoResult")).map(vac => vac.likes);

    return (
        <div className="App">
            <div className="user_welcome">
                {(!localStorage.getItem('user')) ? null : <h1>{localStorage.getItem('user')} Welcome</h1>}
            </div>

            {(vacations === 'redirect') ? <Redirect to="/login" /> :
                <div className="chart">{(vacations === 'loader') ? <div className="loader"></div> :
                    <Bar
                        data={{
                            labels: names,
                            datasets: [{
                                label: 'Vacations',
                                data: likes,
                                backgroundColor: 'rgba(45, 134, 42, 0.5)'
                            }]
                        }}
                        options={{
                            title: {
                                display: true,
                                text: 'Vacation popularity graph',
                                fontSize: 25
                            },
                            legend: {
                                display: true,
                                position: 'right'
                            },
                            scales: {
                                yAxes: [{
                                    ticks: {
                                        beginAtZero: true
                                    }
                                }]
                            }
                        }} />
                }
                </div>}
        </div>
    )
}
