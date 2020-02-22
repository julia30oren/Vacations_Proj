const express = require("express");
const router = express.Router();
const pool = require('../DB/pool');
require('dotenv').config();
const logger = require("../utils/logger");


router.get('/', async(req, res) => {

    /// CREATE DATABASE
    const if_DB_exists = await pool.execute(`CREATE DATABASE IF NOT EXISTS vacations_project;`);
    const [result_DB] = if_DB_exists;
    //if 1 exist
    //if 0 was created
    if (result_DB.warningStatus === 1) {
        console.log('database "vacations_project" exist');
    } else if (result_DB.warningStatus === 0) {
        console.log('database "vacations_project" was created');
        logger.info('database "vacations_project" was created');
    }
    /// CREATE TABLE users
    try {
        const if_TableUsers_exists = await pool.execute(`SELECT 1 from vacations_project.users `);
        if (if_TableUsers_exists) console.log('table "users" exist');
    } catch (error) {
        console.error("users", error.code);
        if (error.code === 'ER_NO_SUCH_TABLE') {
            const CREATE_Table_Users = await pool.execute(createUsersTable());
            const CREATE_ADMIN = await pool.execute(createAdmin());
            console.log('table "users" was created');
            logger.info('table "users" was created');
        }
    }
    ///CREATE TABLE vacations
    try {
        const if_TableVacations_exists = await pool.execute(`SELECT 1 from vacations_project.vacations `);
        if (if_TableVacations_exists) console.log('table "vacations" exist');
    } catch (error) {
        console.error("vacations", error.code);
        if (error.code === 'ER_NO_SUCH_TABLE') {
            const CREATE_Table_Vacations = await pool.execute(createVacationsTable());
            console.log('table "vacations" was created');
            logger.info('table "vacations" was created');
        }
    }
    ///CREATE TABLE likes_count
    try {
        const if_TableVacations_exists = await pool.execute(`SELECT 1 from vacations_project.likes_count `);
        if (if_TableVacations_exists) console.log('table "likes_count" exist');
    } catch (error) {
        console.error("likes_count", error.code);
        if (error.code === 'ER_NO_SUCH_TABLE') {
            const CREATE_Table_likes_count = await pool.execute(createLikes_countTable());
            console.log('table "likes_count" was created');
            logger.info('table "likes_count" was created');
        }
    }

    res.send(`
    <div>
    <p> Server is listening to port: ${process.env.PORT} </p>
    </div>
    `)
});

function createUsersTable() {
    return `CREATE TABLE vacations_project.users
            (id INT(11) NOT NULL AUTO_INCREMENT,
            users_email VARCHAR(45) NOT NULL,
            users_first_name TINYTEXT NOT NULL,
            users_last_name TINYTEXT NOT NULL,
            cripted_password VARCHAR(200) NULL,
            PRIMARY KEY (id),
            UNIQUE INDEX id_UNIQUE (id ASC) VISIBLE,
            UNIQUE INDEX users_email_UNIQUE (users_email ASC) VISIBLE
            );`
}

function createAdmin() {
    return `INSERT INTO vacations_project.users ( users_email, users_first_name, users_last_name, cripted_password )
            VALUES ( 'admin', '-', '-', 123456789);`
}

function createVacationsTable() {
    return `CREATE TABLE vacations_project.vacations (
            id INT(11) NOT NULL AUTO_INCREMENT,
            vacations_country TINYTEXT NOT NULL,
            vacations_description TEXT NOT NULL,
            vacations_prices INT(6) NOT NULL,
            vacations_start DATE NOT NULL,
            vacations_end DATE NOT NULL,
            vacations_IMG VARCHAR(150) NULL,
            PRIMARY KEY (id));`
}

function createLikes_countTable() {
    return `CREATE TABLE vacations_project.likes_count (
            likes_count_ID INT(11) NOT NULL AUTO_INCREMENT,
            vacation_id INT(11) NOT NULL,
            user_email TINYTEXT NOT NULL,
            user_id INT(11) NOT NULL,
            likes_ INT(1) NOT NULL,
            PRIMARY KEY (likes_count_ID, vacation_id));`
}

module.exports = router;