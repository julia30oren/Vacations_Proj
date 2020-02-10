
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Bar } from 'react-chartjs-2';
import { Redirect } from 'react-router-dom';

const vacationsUrl = "http://localhost:5000/vacations";

export default function Chart() {
    const [vacations, setVacations] = useState('loader');
    const data = JSON.parse(localStorage.getItem("InfoResult"));
    const names = data.map(vac => vac.vacations_country);
    const likes = data.map(vac => vac.LIKES);
    const colorArray = [];
    const hoverArray = [];

    useEffect(() => {
        const adminOn = localStorage.getItem('user');
        if (adminOn === 'admin') {
            setVacations('loader');
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

    for (let i = 0; i <= data.length; i++) {
        const x = Math.floor(Math.random() * 100)
        const y = Math.floor(Math.random() * 100)
        const z = Math.floor(Math.random() * 100)
        const color = `rgba(${x}, ${y}, ${z}, 0.5)`;
        colorArray.push(color);
        const hovCol = `rgba(${x + 100}, ${y + 100}, ${z + 100}, 0.5)`;
        hoverArray.push(hovCol);
    }

    return (
        <div>
            <div className="user_welcome">
                {(!localStorage.getItem('user')) ? null : <h1>Welcome {localStorage.getItem('user')} </h1>}
            </div>
            <div className="row">
                <div className="col-sm-1 col-md-1 col-lg-1"></div>
                <div className="some col-sm-10 col-md-10 col-lg-10">
                    {(vacations === 'redirect') ? <Redirect to="/login" /> :
                        <div className="chart">{(vacations === 'loader') ? <div className="loader"></div> :
                            <Bar
                                data={{
                                    labels: names,
                                    datasets: [{
                                        label: 'Vacations likes',
                                        data: likes,
                                        backgroundColor: colorArray,
                                        hoverBackgroundColor: hoverArray,
                                    }]
                                }}
                                options={{
                                    title: {
                                        display: true,
                                        text: 'Vacations rating',
                                        fontSize: 25
                                    },
                                    legend: {
                                        display: true,
                                        position: 'right',
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
            </div>
            <div className="col-sm-1 col-md-1 col-lg-1"></div>
        </div>
    )
}
