const jwt = require('jsonwebtoken');
const users = require('./mocks/users.js');

const secret = process.env.JWT_SECRET || 'SECRET TEXT';

const Auth = {
  verifyToken(req, res, next) {
    const token = req.headers.authorization || req.headers['x-access-token'];
    if (!token) {
      res.status(401).send({
          message: 'Authentication required to access this route!'
        });
    }
    const jwtToken = token.split(' ')[1];
    jwt.verify(jwtToken, secret, (err, decoded) => {
      if (err) {
        res.status(401).send({
            message: 'Authentication failed due to invalid token!'
        });
      }
      req.decoded = decoded;
      next();
    });
  },

  verifyManager(req, res, next) {
    const { role } = req.decoded;
    const user = users.find((user) => user.role === role);
    if (user.role === 'manager') {
        next();
    } else {
        res.status(403).send({
            message: 'Access forbidden, you are not a manager!'
        });
    }
  }
};

module.exports = Auth;
