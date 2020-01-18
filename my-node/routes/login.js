const express = require("express");
const router = express.Router();
const JWT = require('jsonwebtoken');
const pool = require("../DB/pool");
const bcrypt = require('bcryptjs');

////encoding password:
// const password = "123456789";
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
    const { email, password } = req.body;
    console.log(email, password)
    const user = await pool.execute(ifUserExist(), [email]);
    console.log(user[0][0])
    if (user[0][0]) {
        const hush = user[0][0].password;
        const cryptoPassChek = bcrypt.compareSync(password, hush);
        const fullName = user[0][0].first_name + ' ' + user[0][0].last_name;

        if (cryptoPassChek === true) {
            const token = JWT.sign({ email }, process.env.SECRET, { expiresIn: '1h' });
            const getUsersLikes = await pool.execute(getLikes(), [email]);
            res.json({ message: 'user loged in', user: fullName, email: email, likes: `[${getUsersLikes[0][0].likes}]`, token: token, cookie_token: process.env.SECRET, redirect: true });
        } else {
            res.json({ message: 'password do not match !!!!' });
        }
    } else {
        res.json({ message: 'user do not exist !!!!' });
    }
})

router.post("/login/admin", async(req, res, next) => {
    const { name, password } = req.body;
    const admin = await pool.execute(ifAdminExist(), [name, password]);
    if (admin[0][0]) {
        const token = JWT.sign({ name }, process.env.ADMIN_SECRET, { expiresIn: '1h' });
        res.json({ message: 'user loged in as ADMIN', redirect: true, user: admin[0][0].name, token: token, cookie_token: process.env.ADMIN_SECRET });
    } else {
        res.json({ message: 'password did not match !!!!' });
    }
})

router.post("/login/PasswordChenge", async(req, res, next) => {
    const { email, password, newpass } = req.body;

    const result = await pool.execute(ifUserExist(), [email]);
    const hush = result[0][0].password;
    const cryptoPassChek = bcrypt.compareSync(password, hush);
    console.log(cryptoPassChek);

    if (cryptoPassChek === true) {
        const salt = bcrypt.genSaltSync(10);
        const newhash = bcrypt.hashSync(newpass, salt);
        const cangePassword = await pool.execute(cangePasswordQuery(), [newhash, email]);
        res.json({ message: 'password chenged', user: email, redirect: true })
    } else {
        res.json({ message: 'password NOT chenged', redirect: false });
    }
})

function ifUserExist() {
    return `SELECT * FROM vacation_project.users where email = ? ;`
}

function getLikes() {
    return `SELECT likes FROM vacation_project.users where email = ? ;`
}

function ifAdminExist() {
    return `SELECT * FROM vacation_project.admin where name = ? AND password = ? ;`
}

function cangePasswordQuery() {
    return `UPDATE vacation_project.users SET password = ? WHERE email = ? ;`
}

module.exports = router;