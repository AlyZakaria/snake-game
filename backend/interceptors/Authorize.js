const jwt = require('jsonwebtoken');
const {Users} = require('../models')



const checkUser = (req, res, next) => {
  const token = req.headers.cookies;
  if (token) {
    jwt.verify(token, 'somesecret', async (err, decodedToken) => {
      if (err) {
        res.status(401).json("please log in")
      } else {
        res.locals.id = decodedToken.id
        console.log(decodedToken)
        next();
      }
    });
  } else {
      res.status(401).json("please log in")
    }
};

module.exports = { checkUser };