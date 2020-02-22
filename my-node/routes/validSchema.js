const Joi = require('@hapi/joi');

const validSchema = Joi.object({
    // validations fo USERS & ADMIN :
    users_email: Joi.string().regex(/^(?=.*[@])[a-zA-Z\0-9\admin\@.]+$/i, 'EMAIL is not valid. Email must containe only letters and "@", "."').min(10).max(30),
    users_first_name: Joi.string().regex(/^[a-zA-Z]+$/i, 'USERS FIRST NAME is not valid. Name must contain only letters and not less than 2').min(2),
    users_last_name: Joi.string().regex(/^[a-zA-Z]+$/i, 'USERS LAST NAME is not valid. Name must contain only letters and not less than 2').min(2),
    password: Joi.string().regex(/^[a-zA-Z\0-9]+$/i, 'PASSWORD is not valid. Password must contain from 4 to 10 letters or numbers').min(4).max(10),
    newpass: Joi.string().regex(/^[a-zA-Z\0-9]+$/i, 'PASSWORD is not valid. Password must contain from 4 to 10 letters or numbers').min(4).max(10),
    confPass: Joi.string().regex(/^[a-zA-Z\0-9]+$/i, 'PASSWORD is not valid. Password must contain from 4 to 10 letters or numbers').min(4).max(10),
    name: Joi.string().min(1),
    // validations for custom data :
    id: Joi.number().min(1),
    vacation_id: Joi.number().min(1),
    vacations_country: Joi.string().min(2).max(45),
    vacations_prices: Joi.string().min(1).max(6),
    vacations_description: Joi.string().min(10).max(500),
    vacations_start: Joi.string().min(8).max(10),
    vacations_end: Joi.string().min(8).max(10),
    vacations_IMG: Joi.string().regex(/((([A-Za-z]{3,9}:(?:\/\/)?)(?:[\-;:&=\+\$,\w]+@)?[A-Za-z0-9\.\-]+|(?:www\.|[\-;:&=\+\$,\w]+@)[A-Za-z0-9\.\-]+)((?:\/[\+~%\/\.\w\-_]*)?\??(?:[\-\+=&;%@\.\w_]*)#?(?:[\.\!\/\\\w]*))?)/, 'URL is not valid').min(10),
})

function passwordValidation(req, res, next) {
    const { error } = validSchema.validate(req.body);
    if (error) {
        // console.log(error);
        const error_message = error.details[0].context.name;
        if (error_message) {
            return res.json({ message: `Wrong format : ${error_message}` });
        } else {
            return res.json({ message: `Wrong format : ${error.details[0].message}` });
        }
    }
    next();
}

module.exports = passwordValidation;