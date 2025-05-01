const jwt = require('jsonwebtoken');
require('dotenv').config();

module.exports =(req,res, next) => {
    const autHeader = req.headers.authorization;
    const token = autHeader?.split("")[1];

    if(!authHeader || !authHeader.startsWith('Bearer')){
        return res.status(401).json({message: 'Token manquant ou invalide'});
    }

    if(!token) return res.sendStatus(401);
    try {
        const decode = jwt.verify(token, process.env.JWT_SECRET);
        req.user = decoded;
        next();
    } catch (e) {
        res.status(403).json({message: "Token invalide"});
    }
}