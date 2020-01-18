const express = require('express');
const router = express.Router();
const pool = require("../DB/pool");
const passwordValidation = require('./validSchema');
const bcrypt = require('bcryptjs');

router.use(passwordValidation);

router.post("/registration", async(req, res, next) => {
    const { email, password, F_name, L_name } = req.body;
    console.log(email, password, F_name, L_name);
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(password, salt);

    const user = await pool.execute(ifUserExist(), [email]);
    if (user[0][0]) {
        return res.json({ message: 'user allready exist' });
    } else {
        const result = await pool.execute(addUserInsert(), [email, F_name, L_name, hash]);
        res.json({ message: 'user is added !!!!', redirect: true });
    }
})

function ifUserExist() {
    return `SELECT * FROM vacation_project.users where email = ? ;`
}

function addUserInsert() {
    return `INSERT INTO vacation_project.users ( email, first_name, last_name, password, likes)
            VALUES (?, ?, ?, ?, '[]');`
}

module.exports = router;