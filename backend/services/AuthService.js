const {Users} = require('../models')
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');



const createToken = (id) => {
  expiration = 24 * 60 * 60;
  return jwt.sign({ id }, "somesecret", {
    expiresIn: expiration,
  });
};

const signup = async (user) => {
  console.log(user);
  try {
    const salt = await bcrypt.genSalt();
    user.password = await bcrypt.hash(user.password, salt);

    const created = await Users.create(user);

    return user.user_id;
  } catch (err) {
    console.log("err");
    return err;
  }
};

const signin = async (username, password) => {
  try {
    const user = await Users.findOne({ where: { username: username } });
    const success = await bcrypt.compare(password, user.password);
    if (success) {
      const token = createToken(user.user_id);
      return {token: token, username: user.username};
    } else {
      return "Wrong password";
    }
  } catch (err) {
    console.log(err);
    return "Error Finding User";
  }
};

module.exports.signup = signup;
module.exports.signin = signin;
module.exports.createToken = createToken
