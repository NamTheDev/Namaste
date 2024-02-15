const { join } = require("path")

/**
 * 
 * @param {import("express").Request} req 
 * @param {import("express").Response} res 
 */
module.exports = (req, res) => {
    const {file} = req.query
    const data = require(join(process.cwd(), 'json', file))
    res.json(data)
}