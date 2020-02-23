const express = require('express');
const router = express.Router();
const pool = require('../DB/pool')

router.get("/vacations", async(req, res, next) => {
    const result = await pool.execute(getVacations_Query());
    res.json(result[0]);
})

router.post("/vacations/save_like", async(req, res, next) => {
    const { vacation_id, users_email } = req.body;
    const getUsersID_res = await pool.execute(getUsersID_Query(), [users_email]);
    const users_id = getUsersID_res[0][0].id;
    const saveNewLike_res = await pool.execute(saveNewLike_Query(), [vacation_id, users_email, users_id]);
})

router.post("/vacations/remove_like", async(req, res, next) => {
    const { vacation_id, users_email } = req.body;
    const removeLike_res = await pool.execute(removeLike_Query(), [vacation_id, users_email]);
})

router.post("/vacations/add_new", async(req, res, next) => {
    const { vacations_country, vacations_prices, vacations_description, vacations_start, vacations_end, vacations_IMG } = req.body;
    if (vacations_country, vacations_prices, vacations_description, vacations_start, vacations_end, vacations_IMG) {
        // console.log(vacations_country, vacations_prices, vacations_description, vacations_start, vacations_end, vacations_IMG)
        const saveVacationRes = await pool.execute(saveNewVacation_Query(), [vacations_country, vacations_description, vacations_prices, vacations_start, vacations_end, vacations_IMG]);
        res.json({ message: 'vacation is added successfully' });
    } else {
        res.json({ message: 'something is missing!!!!' });
    }
})

router.post("/vacations/change", async(req, res, next) => {
    const { id, vacations_country, vacations_prices, vacations_description, vacations_start, vacations_end, vacations_IMG } = req.body;
    const changeVacation = await pool.execute(changeVacation_Query(), [vacations_country, vacations_description, vacations_prices, vacations_start, vacations_end, vacations_IMG, id]);
})

router.post("/vacations/delete", async(req, res, next) => {
    const { id } = req.body;
    const deleteVacation = await pool.execute(deleteVacation_Query(), [id]);
    const deleteVac_fromLikes = await pool.execute(deleteVacation_fromLikes(), [id]);
    res.json({ message: 'vacation was deleted' });
})

function getVacations_Query() {
    return `SELECT vacations.id AS vacation_id, vacations.vacations_country, vacations_description, vacations_prices, vacations_start, vacations_end, vacations_IMG, sum(likes_) AS LIKES
            FROM vacations_project.vacations
            LEFT JOIN vacations_project.likes_count
            ON vacations.id = likes_count.vacation_id
            GROUP BY vacations.vacation_id;`
}

function getUsersID_Query() {
    return `SELECT id FROM vacations_project.users
            WHERE users_email = ? ;`
}

function saveNewLike_Query() {
    return `INSERT INTO vacations_project.likes_count ( vacation_id, user_email, user_id, likes_)
            VALUES ( ?, ?, ?, 1) ;`
}

function removeLike_Query() {
    return `DELETE FROM vacations_project.likes_count
            WHERE vacation_id = ?  AND user_email = ? ;`
}

function saveNewVacation_Query() {
    return `INSERT INTO vacations_project.vacations ( vacations_country, vacations_description, vacations_prices, vacations_start, vacations_end, vacations_IMG )
            VALUES ( ?, ?, ?, ?, ?, ?);`
}

function changeVacation_Query() {
    return `UPDATE vacations_project.vacations
            SET vacations_country= ? , vacations_description= ? ,vacations_prices= ? , vacations_start= ? , vacations_end= ? , vacations_IMG= ? 
            WHERE id = ?;`
}

function deleteVacation_Query() {
    return `DELETE FROM vacations_project.vacations 
            WHERE id = ? ;`
}

function deleteVacation_fromLikes() {
    return `DELETE FROM vacations_project.likes_count 
            WHERE vacation_id = ? ;`
}

module.exports = router;