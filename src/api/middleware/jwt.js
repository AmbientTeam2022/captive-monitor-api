const jwt = require('express-jwt');
const SECRET = process.env.JWT_SECRET;

const authenticate = jwt({
  secret: SECRET,
  algorithms: ['HS256']
});

module.exports = authenticate;