const jwt = require('jsonwebtoken');
require('dotenv').config();

module.exports =(req,res, next) => {
    const token = req.headers.authorization?.split("")[1];
    if(!token) return res.sendStatus(401);
    try {
        const decode = jwt.verify(token, process.env.JWT_SECRET);
        req.user = decoded;
        next();
    } catch (e) {
        res.status(403).json({message: "Token invalide"});
    }
}