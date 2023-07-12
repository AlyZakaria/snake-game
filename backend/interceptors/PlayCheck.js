const jwt = require("jsonwebtoken");
const { getOrder } = require("../services/GameService");

const checkPlayer = async (req, res, next) => {
  const token = req.headers.cookies;
  if (token) {
    jwt.verify(token, "somesecret", async (err, decodedToken) => {
      if (err) {
        res.status(401).json("please log in");
      } else {
        const id = decodedToken.id;
        console.log("in check player");
        console.log(id);
        const current_user = await getOrder(req.body.room_id);
        console.log(current_user[0].current_user);
        if (id === current_user[0].current_user) {
          next();
        } else {
          res.status(401).json({ msg: "not  turn" });
        }
      }
    });
  } else {
    res.status(401).json("please log");
  }
};

module.exports = checkPlayer;
