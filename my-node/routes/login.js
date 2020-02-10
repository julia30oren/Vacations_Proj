const express = require("express");
const router = express.Router();
const JWT = require('jsonwebtoken');
const pool = require("../DB/pool");
const bcrypt = require('bcryptjs');

////encoding password:
// const password = "0000";
// const salt = bcrypt.genSaltSync(10)
// var hash = bcrypt.hashSync(password, salt);
// console.log(hash)
// const cryptoPass = bcrypt.hashSync(password, salt);
// console.log(" === ", cryptoPass);
// console.log(hash)
// const cryptoPassChek = bcrypt.compareSync(password, hash)
// console.log(hash)
// console.log(" ++ ", cryptoPassChek);

////token :
// const email = 'julia@gmail.com';
// const token = JWT.sign({ email }, process.env.SECRET, { expiresIn: '1h' });
// console.log("token --", token);
// var decoded = JWT.verify(token, process.env.SECRET);
// console.log(decoded.email, decoded.exp);

router.post("/login", async(req, res, next) => {
    const { users_email, password } = req.body;
    const if_userExist_result = await pool.execute(ifUserExist(), [users_email]);

    if (if_userExist_result[0][0]) {

        const hush = if_userExist_result[0][0].cripted_password;
        const cryptoPassChek = bcrypt.compareSync(password, hush);
        const fullName = if_userExist_result[0][0].users_first_name + ' ' + if_userExist_result[0][0].users_last_name;

        if (cryptoPassChek === true) {
            const token = JWT.sign({ users_email }, process.env.SECRET, { expiresIn: '1h' });
            const getUsersLikes_res = await pool.execute(getLikes(), [users_email]);
            res.json({
                message: 'user loged in',
                user: fullName,
                email: users_email,
                likes: getUsersLikes_res[0][0].users_favorites,
                token: token,
                cookie_token: process.env.SECRET,
                redirect: true
            });
        } else {
            res.json({ message: 'password do not match !!!!' });
        }
    } else {
        res.json({ message: 'user do not exist !!!!' });
    }
})

router.post("/login/admin", async(req, res, next) => {
    const { name, password } = req.body;
    console.log(name, password)
    const if_adminExist_result = await pool.execute(ifAdminExist(), [name, password]);
    if (if_adminExist_result[0][0]) {
        const token = JWT.sign({ name }, process.env.ADMIN_SECRET, { expiresIn: '1h' });
        res.json({ message: 'user loged as ADMIN', redirect: true, user: name, token: token, cookie_token: process.env.ADMIN_SECRET });
    } else {
        res.json({ message: 'password did not match !!!!' });
    }
})

router.post("/login/password-chenge", async(req, res, next) => {
    const { users_email, password, newpass } = req.body;
    const userExist_result = await pool.execute(ifUserExist(), [users_email]);
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
    return `SELECT * FROM vacations_project.admins
            WHERE admins_name = ? 
            AND admins_password = ? `
}

function cangePasswordQuery() {
    return `UPDATE vacations_project.users
            SET cripted_password = ?
            WHERE users_email = ? `
}

module.exports = router;