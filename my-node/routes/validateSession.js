const logger = require("../utils/logger");

module.exports = (req, res, next) => {
    const { key } = req.query;
    console.log(req.query, '---')

    if (key === process.env.API_KEY)
    // console.log(key, '---')
        return next()
    logger.error(`key: ${key} is not valid ${req.ip} `);
    logger.error(`__error with PORT: ${err}`);
    return res.status(401).send("key is not valid")
}