const jwt = require('jsonwebtoken');

/* FETCH USER DATA, AND ASSIGN THEM WITH JWT TOKEN*/
const fetchuser = (req, res, next) => {
    const token = req.header('auth-token');
    if (token) {
        try {
            const str = jwt.verify(token, process.env.JWT_SECRECT);
            req.user = str.user;
            next();
        } catch (error) {
            res.status(401).json({ error: 'Please authenticate using a valid token' });
        }
    } else {
        res.status(401).json({ error: 'Please authenticate using a valid token' });
    }
};

module.exports = fetchuser;