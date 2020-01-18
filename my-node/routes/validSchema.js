const express = require("express")
const Joi = require('@hapi/joi');

const validSchema = Joi.object({
    email: Joi.string().regex(/^(?=.*[@])[a-zA-Z\0-9\admin\@.]+$/i, 'Your email must containe only letters and  @ .').min(10).max(30),
    password: Joi.string().regex(/^[0-9]+$/i).min(4).max(10),
    F_name: Joi.string().regex(/^[a-zA-Z]+$/i).min(2),
    L_name: Joi.string().regex(/^[a-zA-Z]+$/i).min(2),

    vacation_names: Joi.string().min(2).max(45),
    vacation_descriptions: Joi.string().min(2).max(500),
    vacation_prices: Joi.string().min(1).max(6),
    vacation_start: Joi.any(),
    vacation_end: Joi.any(),
    vacation_pictures: Joi.any(),
    vacation_id: Joi.number().min(1),

    name: Joi.any(),
    vacations: Joi.any(),
    ship_city: Joi.any(),
    payment_type: Joi.any(),
    likes: Joi.any(),
    id: Joi.number().min(1),
    by: Joi.any(),
    vacation_likes: Joi.any(),
    user_email: Joi.string().min(10).max(30),
    user_favorits: Joi.any(),
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