import React, { useState, useEffect } from 'react';
import axios from 'axios';
import heart from '../../icons/heart.png';
import heart_green from '../../icons/heart-green.png'

const saveLikesUrl = "http://localhost:5000/vacations/likes";

function VacationCard(props) {
    const [count, setCount] = useState(0);
    const [preLike, setpreLike] = useState([]);

    const userEmail = localStorage.getItem('email');


    useEffect(() => {
        setCount(props.likes);
        setpreLike(JSON.parse(localStorage.getItem('I_Like')));
    }, []);

    function addNewLike(id) {
        setCount(count + 1);
        const likes_from_LS = JSON.parse(localStorage.getItem("I_Like"));
        likes_from_LS.push(id);

        localStorage.setItem("I_Like", `[${likes_from_LS}]`);
        const newLikes = localStorage.getItem("I_Like");
        setpreLike(newLikes);
        console.log(newLikes)
        saveNewLikeTo_DB(id, newLikes);
    }
    async function saveNewLikeTo_DB(vacationID, newLikes_forUser) {
        console.log('add', newLikes_forUser);
        const newLikesTo_DB_result = await axios.post(saveLikesUrl, { vacation_id: vacationID, vacation_likes: count + 1, user_email: userEmail, user_favorits: JSON.parse(newLikes_forUser) });
    }



    function deleteLike(id) {
        setCount(count - 1);
        const likes_from_LS = JSON.parse(localStorage.getItem("I_Like"));
        likes_from_LS.splice(likes_from_LS.indexOf(id), 1);

        localStorage.setItem("I_Like", `[${likes_from_LS}]`);
        const newLikes = localStorage.getItem("I_Like");
        setpreLike(newLikes);

        removeLikeFrom_DB(id, newLikes);
    }
    async function removeLikeFrom_DB(vacationID, newLikes_forUser) {
        console.log('del', newLikes_forUser);
        const newLikesTo_DB_result = await axios.post(saveLikesUrl, { vacation_id: vacationID, vacation_likes: count - 1, user_email: userEmail, user_favorits: JSON.parse(newLikes_forUser) });
    }

    return (

        <div className="col-sm-4">
            <div className="card">
                <img src={props.img} alt='...' style={{ height: '500px' }} />

                <button className="cardLikeButton" onClick={() => { if (!preLike.includes(props.id)) { addNewLike(props.id) } else { deleteLike(props.id) } }} >
                    <img className="like_png" src={(!preLike.includes(props.id)) ? heart : heart_green} alt="..." />
                </button>

                <div className='content' >
                    <p>{count || 0} likes</p>
                    <h1>{props.vacation_names}</h1>
                    <p>{props.vacation_prices} / per day</p>
                    <p>{props.customer_id}</p>
                    <p className="desc">{props.vacation_descriptions}</p>
                    <p>{props.vacation_datas}</p>
                </div>
            </div>
        </div>
    )
}

export default VacationCard;
