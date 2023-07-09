const jwt = require('jsonwebtoken');
const {Users} = require('../models')



const checkUser = (req, res, next) => {
  const cookies = req.cookies;
  if (cookies){
    const token = req.cookies.jwt;
  console.log(token)
  if (token) {
    jwt.verify(token, 'somesecret', async (err, decodedToken) => {
      if (err) {
        res.locals.user = null;
        next();
      } else {
        let user = await User.findByPk(decodedToken.id);
        res.locals.user = user;
        next();
      }
    });
  } else {
    res.locals.user = null;
    res.status(401).json("please log in")
  }
  }
  else{
    res.locals.user = null;
    res.status(401).json("please log in")
  }
  
};


module.exports = { checkUser };