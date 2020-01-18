import React, { useState, useEffect } from 'react';
import axios from 'axios';
import AdminVacationCard from './AdminVacationCard';
import AdminAddingForm from './AdminAddingForm';
import download from '../../icons/download.png';
import close from '../../icons/cancel.png';

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
        <div className="App">
            {vacations === 'loader' ? <div className="loader"></div> :
                <div className="main row">{JSON.parse(localStorage.InfoResult).map((vacation, i) => {
                    return (
                        <AdminVacationCard key={i}
                            id={vacation.id}
                            likes={vacation.likes}
                            img={vacation.vacation_pictures}
                            vacation_names={vacation.vacation_names}
                            vacation_prices={vacation.vacation_prices}
                            vacation_descriptions={vacation.vacation_descriptions}
                            vacation_datas={vacation.vacation_start + ' - ' + vacation.vacation_end}
                            vacation_start={vacation.vacation_start}
                            vacation_end={vacation.vacation_end} />
                    )
                })}
                </div>
            }
            {(newVacation === false) ? <button className="cardButton btn btn-dark" onClick={() => { setNewVacation(true) }}> <img alt="..." className="ic_png" src={download} /> Add New Vacation </button> :
                <div className="newVacation_div">
                    <button className="cl cardButton btn btn-dark" onClick={() => { setNewVacation(false) }}><img alt="..." className="ic_png" src={close} /> Close</button>
                    <AdminAddingForm />
                </div>}
        </div>
    )
}
