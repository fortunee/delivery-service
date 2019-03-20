import jwt from 'jsonwebtoken';

const secret = process.env.JWT_SECRET || 'SECRET TEXT';

const Auth = {

  /**
   * verifyToken - Verifies validity of a supplied token
   *
   * @param  {Object} req  Request Object
   * @param  {Object} res  Response Object
   * @param  {Object} next
   * @returns {Object} Response status
   */
  verifyToken(req, res, next) {
    const token = req.headers.authorization || req.headers['x-access-token'];
    if (!token) {
      res.status(401).send({ message: 'Authentication required to access this route!' });
    }

    jwt.verify(token, secret, (err, decoded) => {
      if (err) {
        res.status(401).send({ message: 'Authentication failed due to invalid token!' });
      }
      req.decoded = decoded;
      next();
    });
  }
};

export default Auth;
