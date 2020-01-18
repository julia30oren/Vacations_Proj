import React, { useState, useEffect } from 'react';
import axios from 'axios';
import VacationCard from './VacationCard';

const vacationsUrl = "http://localhost:5000/vacations";
const vacationsSortedUrl = "http://localhost:5000/vacations/toSort";

export default function AllOrders() {
    const [vacations, setVacations] = useState('loader');

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

    function sortFunction(toSortBy) {
        setVacations('loader');
        async function getEffect() {
            const sortedResult = await axios.post(vacationsSortedUrl, { by: toSortBy });
            if (sortedResult.data) {
                console.log(sortedResult.data)
                localStorage.setItem("InfoResult", JSON.stringify(sortedResult.data));
                setVacations('result');
            }
        }
        getEffect();
    }

    return (
        <div className="App">
            <div id="sort_by" >
                <form>
                    <div className="form-group" >
                        <select className="form-control" onChange={(e) => { sortFunction(e.target.value) }}>
                            <option>Sort by: </option>
                            <option value="vacation_names">Name</option>
                            <option value="vacation_prices">Price</option>
                            <option value="likes">Likes</option>
                        </select>
                    </div>
                </form>
            </div>
            {vacations === 'loader' ? <div className="loader" > </div> :

                < div className="main row" > {
                    JSON.parse(localStorage.InfoResult).map((vacation, i) => {
                        return (
                            <VacationCard key={i}
                                id={vacation.id}
                                likes={vacation.likes}
                                img={vacation.vacation_pictures}
                                vacation_names={vacation.vacation_names}
                                vacation_prices={vacation.vacation_prices}
                                vacation_descriptions={vacation.vacation_descriptions}
                                vacation_datas={vacation.vacation_start + ' - ' + vacation.vacation_end} />
                        )
                    })
                }
                </div>}
        </div>)
}
