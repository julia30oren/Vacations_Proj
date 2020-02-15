import React, { useState, useEffect } from 'react';
import axios from 'axios';
import VacationCard from './VacationCard';

const vacationsUrl = "http://localhost:5000/vacations";

export default function AllOrders() {
    const [vacations, setVacations] = useState('loader');

    useEffect(() => {
        setVacations('loader');
        async function getEffect() {
            const allVacationsResult = await axios.get(vacationsUrl);
            console.log(allVacationsResult.data)
            if (allVacationsResult.data) {
                const dataArr = [];
                const usersFavorites = JSON.parse(localStorage.I_Like);

                allVacationsResult.data.forEach(element => {
                    if (usersFavorites.includes(element.vacation_id)) { dataArr.push(element) }
                })
                allVacationsResult.data.forEach(element => {
                    if (!usersFavorites.includes(element.vacation_id)) { dataArr.push(element) }
                })
                localStorage.setItem("InfoResult", JSON.stringify(dataArr));
                setVacations('result');
            }
        }
        getEffect();
    }, []);

    return (
        <div className="ad_h row">
            <div className="col-1 col-sm-1 col-md-1 col-lg-1"></div>

            <div className="col-10 col-sm-10 col-md-10 col-lg-10">
                {vacations === 'loader' ? <div className="loader" > </div> :
                    <div className="row"> {
                        JSON.parse(localStorage.InfoResult).map((vacation, i) => {
                            return (
                                <VacationCard key={i}
                                    id={vacation.vacation_id}
                                    likes={vacation.LIKES}
                                    img={vacation.vacations_IMG}
                                    vacation_names={vacation.vacations_country}
                                    vacation_prices={vacation.vacations_prices}
                                    vacation_descriptions={vacation.vacations_description}
                                    start={vacation.vacations_start}
                                    end={vacation.vacations_end} />
                            )
                        })
                    }
                    </div>}
            </div>
            <div className="col-1 col-sm-1 col-md-1 col-lg-1"></div>
        </div>)
}
