const express = require("express")
const Joi = require('@hapi/joi');

const validSchema = Joi.object({
    // validations fo USERS & ADMIN :
    users_email: Joi.string().regex(/^(?=.*[@])[a-zA-Z\0-9\admin\@.]+$/i, 'Your email must containe only letters and  @ .').min(10).max(30),
    users_first_name: Joi.string().regex(/^[a-zA-Z]+$/i).min(2),
    users_last_name: Joi.string().regex(/^[a-zA-Z]+$/i).min(2),
    password: Joi.string().regex(/^[0-9]+$/i).min(4).max(10),
    newpass: Joi.string().regex(/^[0-9]+$/i).min(4).max(10),
    confPass: Joi.string().regex(/^[0-9]+$/i).min(4).max(10),
    name: Joi.any(),
    // validations for custom data :
    id: Joi.number().min(1),
    vacation_id: Joi.number().min(1),
    vacations_country: Joi.string().min(2).max(45),
    vacations_prices: Joi.string().min(1).max(6),
    vacations_description: Joi.string(),
    vacations_start: Joi.string().regex(/^[0-9\-]+$/i).min(4).max(10),
    vacations_end: Joi.any(),
    vacations_IMG: Joi.any(),
})

function passwordValidation(req, res, next) {
    const { error } = validSchema.validate(req.body);
    if (error) {
        console.log(error)
        return res.json({ message: 'Wrong format of email or password.Your email must containe only letters and @. Password 4 leters' });
    }
    next();
}

module.exports = passwordValidation;