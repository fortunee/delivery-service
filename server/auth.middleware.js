const jwt = require('jsonwebtoken');
const users = require('./mocks/users.js');

const secret = process.env.JWT_SECRET || 'SECRET TEXT';

const Auth = {
  /**
   * verifyToken - Verifies validity of a supplied token
   *
   * @param  {object} req  Request object
   * @param  {object} res  Response object
   * @param  {object} next
   * @returns {object} Response status
   */
  verifyToken(req, res, next) {
    const token = req.headers.authorization || req.headers['x-access-token'];
    if (!token) {
      res.status(401).send({
          message: 'Authentication required to access this route!'
        });
    }

    jwt.verify(token, secret, (err, decoded) => {
      if (err) {
        res.status(401).send({
            message: 'Authentication failed due to invalid token!'
        });
      }
      req.decoded = decoded;
      next();
    });
  },

  /**
   * verifyManager - Verifies that user is a manager
   *
   * @param  {object} req  Request object
   * @param  {object} res  Response object
   * @param  {object} next
   * @returns {object} Response object
   */
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
