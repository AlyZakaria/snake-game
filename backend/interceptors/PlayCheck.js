const jwt = require('jsonwebtoken');
const {getOrder} = require('../services/GameService')


const checkPlayer = async (req, res, next) => {
  try{
    const token = req.headers.cookies;
    if (token) {
    jwt.verify(token, 'somesecret', async (err, decodedToken) => {
      if (err) {
        res.status(401).json("please log in")
      } else {
        const id = decodedToken.id;
        const current_user = await getOrder(req.body.room_id);
        console.log(id, current_user);
        if (current_user && current_user[0] && id === current_user[0].current_user){
            next();
        }
        else{
            res.status(401).json({msg: 'not your turn'});
        }
      }
    });
    } 
    else {
      res.status(401).json("please log in")
    }
  }
  catch(err){
    res.status(401).json('please log in');
  }
    
}

module.exports = checkPlayer