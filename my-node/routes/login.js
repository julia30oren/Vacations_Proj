const express = require("express");
const router = express.Router();
const JWT = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const pool = require('../DB/pool')


router.post("/login", async(req, res, next) => {
    const { users_email, password } = req.body;

    if (users_email === 'admin') {
        const if_adminExist_result = await pool.execute(ifAdminExist(), [users_email, password]);
        const adminExist = if_adminExist_result[0][0];
        // console.log(adminExist);
        if (adminExist) {
            const token = JWT.sign({ users_email }, process.env.ADMIN_SECRET, { expiresIn: '1h' });
            res.json({ message: 'user loged as ADMIN', redirect: true, user: users_email, token: token });
        } else {
            res.json({ message: 'password did not match !!!!' });
        }
    }
    if (users_email !== 'admin') {
        const if_userExist_result = await pool.execute(ifUserExist(), [users_email]);
        const userExist = if_userExist_result[0][0];
        // console.log(userExist);
        if (userExist) {

            const hush = userExist.cripted_password;
            const cryptoPassChek = bcrypt.compareSync(password, hush);
            const fullName = userExist.users_first_name + ' ' + userExist.users_last_name;

            if (cryptoPassChek === true) {
                const token = JWT.sign({ users_email }, process.env.SECRET, { expiresIn: '1h' });
                const getUsersLikes_res = await pool.execute(getLikes(), [users_email]);
                res.json({
                    message: 'user loged in',
                    user: fullName,
                    email: users_email,
                    likes: getUsersLikes_res[0][0].users_favorites,
                    token: token,
                    redirect: true
                });
            } else {
                res.json({ message: 'password do not match !!!!' });
            }
        } else {
            res.json({ message: 'user do not exist !!!!' });
        }
    }
})

router.post("/login/password-chenge", async(req, res, next) => {
    const { users_email, password, newpass } = req.body;
    console.log(users_email, password, newpass);
    const userExist_result = await pool.execute(ifUserExist(), [users_email]);
    console.log(userExist_result);
    const hush = userExist_result[0][0].cripted_password;
    const cryptoPassChek = bcrypt.compareSync(password, hush);

    if (cryptoPassChek === true) {
        const salt = bcrypt.genSaltSync(10);
        const newhash = bcrypt.hashSync(newpass, salt);
        const cangePassword_result = await pool.execute(cangePasswordQuery(), [newhash, users_email]);
        res.json({ message: 'password chenged', user: users_email, redirect: true })
    } else {
        res.json({ message: 'password NOT chenged', redirect: false });
    }
})

function ifUserExist() {
    return `SELECT * FROM vacations_project.users 
            WHERE users_email = ? ;`
}

function getLikes() {
    return `SELECT user_email, GROUP_CONCAT(DISTINCT vacation_id SEPARATOR ', ')  AS users_favorites
            FROM vacations_project.likes_count 
            WHERE user_email = ? ;`
}

function ifAdminExist() {
    return `SELECT * FROM vacations_project.users
            WHERE users_email = ? 
            AND cripted_password = ? `
}

function cangePasswordQuery() {
    return `UPDATE vacations_project.users
            SET cripted_password = ?
            WHERE users_email = ? `
}

module.exports = router;