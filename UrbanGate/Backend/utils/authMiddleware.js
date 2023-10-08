const { Response, Request, NextFunction } = require("express");

function authMiddleware(req, res, next) {
    const token = req.body.password || req.query.password;
    
    if (token === process.env.Secret_Auth_Token) {
        next(); 
    } else {
        res.status(403).json({ error: 'Forbidden: Invalid token' });
    }
}

module.exports = authMiddleware;
