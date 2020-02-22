import React, { useState, useEffect } from 'react';
import axios from 'axios';
import heart from '../../icons/heart.png';
import heart_green from '../../icons/heart-green.png';
import Moment from 'moment';
import { serverURL } from '../../config';

const saveLikeUrl = `${serverURL}/vacations/save_like`;
const removeLikeUrl = `${serverURL}/vacations/remove_like`;

function VacationCard(props) {

    const userEmail = localStorage.getItem('email');
    const [count, setCount] = useState(0);
    const [preLike, setpreLike] = useState([]);

    useEffect(() => {
        setCount(JSON.parse(props.likes));
        setpreLike(JSON.parse(localStorage.getItem('I_Like')));
    }, []);

    function addNewLike(id) {
        setCount(count + 1);
        const likes_from_LS = JSON.parse(localStorage.getItem("I_Like"));
        likes_from_LS.push(id);
        localStorage.setItem("I_Like", `[${likes_from_LS}]`);
        const newLikes = localStorage.getItem("I_Like");
        setpreLike(newLikes);
        // save to DB :
        saveNewLikeTo_DB(id, userEmail);
    }
    async function saveNewLikeTo_DB(id, userEmail) {
        const newLikeTo_DB = await axios.post(saveLikeUrl, { vacation_id: id, users_email: userEmail });
    }

    function deleteLike(id) {
        setCount(count - 1);
        const likes_from_LS = JSON.parse(localStorage.getItem("I_Like"));
        likes_from_LS.splice(likes_from_LS.indexOf(id), 1);
        localStorage.setItem("I_Like", `[${likes_from_LS}]`);
        const newLikes = localStorage.getItem("I_Like");
        setpreLike(newLikes);
        // remove from DB :
        removeLikeFrom_DB(id, userEmail);
    }
    async function removeLikeFrom_DB(id, userEmail) {
        const removeLikefrom_DB = await axios.post(removeLikeUrl, { vacation_id: id, users_email: userEmail });
    }

    return (
        <div className="inner_card">
            <img src={props.img} className="card_img" />
            <div className='content' >
                <button className="cardLikeButton" onClick={() => { if (!preLike.includes(props.id)) { addNewLike(props.id) } else { deleteLike(props.id) } }} >
                    <img className="like_png" src={(!preLike.includes(props.id)) ? heart : heart_green} alt="..." />
                </button>
                <p>{count || 'no'} likes</p>
                <h1>{props.vacation_names}</h1>
                <p>{props.vacation_prices} $ / per day</p>
                <p>{props.customer_id}</p>
                <p className="desc">{props.vacation_descriptions}</p>
                <p>Start: {Moment(props.start).format('YYYY.MM.DD')} End: {Moment(props.end).format('YYYY.MM.DD')}</p>
            </div>
        </div>

    )
}

export default VacationCard;