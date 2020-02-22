const express = require('express');
const router = express.Router();
const JWT = require('jsonwebtoken');
const logger = require("../utils/logger");

router.post("/verification", async(req, res, next) => {
    const { token, users_email } = req.body;
    try {
        if (users_email === 'admin') {
            var dec_admin = JWT.verify(token, process.env.ADMIN_SECRET);
            logger.info('admin in');
            res.json({ message: 'ok' });
        } else {
            let decoded = JWT.verify(token, process.env.SECRET);
            res.json({ message: 'ok' });
        }
    } catch (err) {
        if (err) {
            logger.info(err.message);
            // console.log(err.message);
            res.json({ message: err.message });
        }
    }

})

module.exports = router;