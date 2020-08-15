const jwt = require('jsonwebtoken');
const {
    SEED
} = require('../config/config');
let verifyToken = (req, res, next) => {
    let token = req.get('Authorization');
    jwt.verify(token, SEED, (err, decoded) => {
        if (err) {
            return res.status(401).json({
                ok: false,
                err: {
                    message: 'Token Invalido'
                }

            });
        }
        req.user = decoded.user;
        next();
    });
}

let verifyRole = (req, res, next) => {
    let user = req.user;
    if(user.role !== 'ADMIN_ROLE'){
        return res.status(401).json({
            ok: false,
            err: {
                message: 'Neec Admin Role'
            }

        });
    }

   next();
}
module.exports = {
    verifyRole,
    verifyToken
}