import React, { useState, useEffect } from 'react';
import axios from 'axios';
import AdminVacationCard from './AdminVacationCard';
import AdminAddingForm from './AdminAddingForm';
import download from '../../icons/download.png';
import close from '../../icons/cancel.png';
import ChartLinc from '../appRouter/ChartLinc';


const vacationsUrl = "http://localhost:5000/vacations";

export default function AdminPage() {
    const [vacations, setVacations] = useState('loader');
    const [newVacation, setNewVacation] = useState(false);

    useEffect(() => {
        setVacations('loader');
        async function getEffect() {
            const allVacationsResult = await axios.get(vacationsUrl);
            if (allVacationsResult.data) {
                localStorage.setItem("InfoResult", JSON.stringify(allVacationsResult.data));
                setVacations('result');
            }
        }
        getEffect();
    }, []);

    return (
        <div className="">

            <div className="admin_nav">
                <div id="chartLinc"><ChartLinc /></div>
                <div><h1 className="page_tittle"> Admins page</h1></div>
            </div>

            {(newVacation === false) ? <button className="btn btn-dark add_vac" onClick={() => { setNewVacation(true) }}> <img alt="..." className="ic_png" src={download} /> Add New Vacation </button> :
                <div className="newVacation_div">
                    <button className="x_button btn btn-dark" onClick={() => { setNewVacation(false); window.location.reload(); }}><img alt="..." className="ic_png" src={close} /> Close</button>
                    <AdminAddingForm />
                </div>}
            {vacations === 'loader' ? <div className="loader"></div> :
                <div className="admins_component">
                    {JSON.parse(localStorage.InfoResult).map((vacation, i) => {
                        return (
                            <AdminVacationCard key={i}
                                id={vacation.vacation_id}
                                likes={vacation.LIKES}
                                img={vacation.vacations_IMG}
                                vacation_names={vacation.vacations_country}
                                vacation_prices={vacation.vacations_prices}
                                vacation_descriptions={vacation.vacations_description}
                                start={vacation.vacations_start}
                                end={vacation.vacations_end} />
                        )
                    })}
                </div>
            }
        </div>
    )
}
