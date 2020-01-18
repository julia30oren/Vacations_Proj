const express = require('express');
const router = express.Router();
const pool = require("../DB/pool");

router.get("/vacations", async(req, res, next) => {
    const result = await pool.execute(getVacationsQuery());
    res.json(result[0]);
})

router.post("/vacations/toSort", async(req, res, next) => {
    const { by, vacations } = req.body
    if (by === 'likes') {
        const result = await pool.execute(`SELECT * FROM vacation_project.vacations ORDER BY likes ;`);
        res.json(result[0]);
    }
    if (by === 'vacation_prices') {
        const result = await pool.execute(`SELECT * FROM vacation_project.vacations ORDER BY vacation_prices ;`);
        res.json(result[0]);
    }
    if (by === 'vacation_names') {
        const result = await pool.execute(`SELECT * FROM vacation_project.vacations ORDER BY vacation_names ;`);
        res.json(result[0]);
    }
    if (!by && vacations) {
        console.log(vacations)
    } else {
        const result = await pool.execute(getVacationsQuery());
        res.json(result[0]);
    }
})

router.post("/vacations/likes", async(req, res, next) => {
    const { vacation_id, vacation_likes, user_email, user_favorits } = req.body;
    console.log(vacation_id, vacation_likes, user_email, `[${user_favorits}]`)
    const saveNewLike_inVacations = await pool.execute(saveNewVacationLikeQuery(), [vacation_likes, vacation_id]);
    const updateUsersLikes = await pool.execute(updateUsersLikesQuery(), [`[${user_favorits}]`, user_email]);
})

router.post("/vacations/add_new", async(req, res, next) => {
    const { vacation_names, vacation_descriptions, vacation_prices, vacation_start, vacation_end, vacation_pictures } = req.body;
    if (vacation_names, vacation_descriptions, vacation_prices, vacation_start, vacation_end, vacation_pictures) {
        const saveVacationRes = await pool.execute(saveNewVacationQuery(), [vacation_names, vacation_descriptions, vacation_prices, vacation_start, vacation_end, vacation_pictures]);
        res.json({ message: 'vacation is added successfully' });
    } else {
        res.json({ message: 'something is missing!!!!' });
    }
})

router.post("/vacations/change", async(req, res, next) => {
    const { id, vacation_names, vacation_descriptions, vacation_prices, vacation_start, vacation_end, vacation_pictures } = req.body;
    const changeVacation = await pool.execute(changeVacationQuery(), [vacation_names, vacation_descriptions, (vacation_prices), vacation_start, vacation_end, vacation_pictures, id]);
})

router.post("/vacations/delete", async(req, res, next) => {
    const { id } = req.body;
    const deleteVacation = await pool.execute(deleteVacationQuery(), [id]);
    res.json({ message: 'vacation was deleted' });
})

function getVacationsQuery() {
    return `SELECT * FROM vacation_project.vacations ;`
}

function updateUsersLikesQuery() {
    return `UPDATE vacation_project.users SET likes = ? 
            WHERE email = ? ;`
}

function saveNewVacationLikeQuery() {
    return `UPDATE vacation_project.vacations SET likes = ? 
            WHERE id = ?;`
}

function saveNewVacationQuery() {
    return `INSERT INTO vacation_project.vacations ( vacation_names, vacation_descriptions, vacation_prices, vacation_start, vacation_end, vacation_pictures )
            VALUES (?, ?, ?, ?, ?, ?);`
}

function changeVacationQuery() {
    return `UPDATE vacation_project.vacations 
            SET vacation_names = ?, vacation_descriptions = ?, vacation_prices = ?, vacation_start = ?, vacation_end = ?, vacation_pictures = ?
            WHERE id = ? ;`
}

function deleteVacationQuery() {
    return `DELETE FROM vacation_project.vacations 
            WHERE id = ?;`
}

module.exports = router;