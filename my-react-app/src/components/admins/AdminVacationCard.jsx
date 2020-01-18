import React, { useState } from 'react';
import heart_green from '../../icons/heart-green.png';
import edit from '../../icons/edit.png';
import delete_i from '../../icons/delete.png';
import axios from 'axios';

const deleteVacationUrl = "http://localhost:5000/vacations/delete";
const changeVacationUrl = "http://localhost:5000/vacations/change";

function AdminVacationCard(props) {
    const [changeVacation, setChangeVacation] = useState(false)

    async function deleteFunction() {
        // console.log(deleteVacationUrl, { id: props.id })
        const deleteVacation = await axios.post(deleteVacationUrl, { id: props.id });
        const { message } = deleteVacation.data;
        window.location.reload();
        if (message) alert(message);
    }

    function ChangeVacation(id, newName, newPrice, newDescriptions, newStart, newEnd, newImg) {
        console.log(id, newName, newPrice, newDescriptions, newStart, newEnd, newImg);
        async function sendChangesToDB() {
            console.log(changeVacationUrl, { id: id, vacation_names: newName, vacation_prices: newPrice, vacation_descriptions: newDescriptions, vacation_start: newStart, vacation_end: newEnd, vacation_pictures: newImg });
            const changeVacationRes = await axios.post(changeVacationUrl, { id: id, vacation_names: newName, vacation_prices: newPrice, vacation_descriptions: newDescriptions, vacation_start: newStart, vacation_end: newEnd, vacation_pictures: newImg });
        }
        sendChangesToDB();
        setChangeVacation(false);
        window.location.reload();
    }

    console.log(changeVacation)
    return (
        <div className="col-sm-4">{(changeVacation === false) ?

            <div className="card">
                <img className="card_img" src={props.img} alt='...' />
                <div className='content' >
                    <h3>{props.vacation_names}</h3>{!(props.likes) ?
                        <p>0 <img className="like_png" src={heart_green} alt="..." /></p> :
                        <p>{props.likes} <img className="like_png" src={heart_green} alt="..." /></p>}
                    <p>{props.vacation_prices} $ / per day</p>
                    <p className="desc">{props.vacation_descriptions}</p>
                    <p>{props.vacation_datas}</p>
                    <div>
                        <button className="cardAdminButtons" id="del" onClick={() => { deleteFunction() }}><img className="rem_png" alt="..." src={delete_i} /></button>
                        <button className="cardAdminButtons" onClick={() => { setChangeVacation(true) }}><img className="rem_png" alt="..." src={edit} /></button>
                    </div>
                </div>
            </div>
            :
            <div className="col-sm-12">
                <div className="card" style={{ backgroundColor: 'grey' }}>
                    <form className="chengeVacation_form" name={props.id} id="this_form_id">

                        <div className="form-group">
                            <input type="text" name="vacation_names" id="vacation_names" className="form-control" placeholder={props.vacation_names} />
                        </div>

                        <div className="form-group">
                            <input type="text" name="vacation_prices" id="vacation_prices" className="form-control" placeholder={props.vacation_prices} />
                        </div>

                        <div className="form-group">
                            <textarea className="form-control" name="vacation_descriptions" id="vacation_descriptions" rows="4" placeholder={props.vacation_descriptions}></textarea>
                        </div>

                        <div className="form-group">
                            <input type="text" name="vacation_start" id="vacation_start" className="form-control" placeholder={props.vacation_start} />
                        </div>

                        <div className="form-group">
                            <input type="text" name="vacation_end" id="vacation_end" className="form-control" placeholder={props.vacation_end} />
                        </div>

                        <div className="form-group">
                            <input type="text" name="vacation_pictures" id="vacation_pictures" className="form-control" placeholder={props.img} />
                        </div>

                        <button type="button" className="btn btn-dark btn-block loginBut" onClick={() => {
                            const vacation_id = document.getElementById("this_form_id").name;
                            const newName = document.getElementById("vacation_names").value || document.getElementById("vacation_names").placeholder;
                            const newPrice = document.getElementById("vacation_prices").value || document.getElementById("vacation_prices").placeholder;
                            const newDescriptions = document.getElementById("vacation_descriptions").value || document.getElementById("vacation_descriptions").placeholder;
                            const newStart = document.getElementById("vacation_start").value || document.getElementById("vacation_start").placeholder;
                            const newEnd = document.getElementById("vacation_end").value || document.getElementById("vacation_end").placeholder;
                            const newImg = document.getElementById("vacation_pictures").value || document.getElementById("vacation_pictures").placeholder;

                            ChangeVacation(vacation_id, newName, newPrice, newDescriptions, newStart, newEnd, newImg)
                        }}>Change Vacation</button>
                    </form>
                </div>
            </div>
        }</div>

    )
}

export default AdminVacationCard;
