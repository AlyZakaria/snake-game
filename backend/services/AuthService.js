const express = require('express')
const {Users} = require('../models')
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

expiration = 24 * 60 * 60
const createToken = (id) => {
    return jwt.sign({ id }, 'somesecret', {
      expiresIn: expiration
    });
  };

const signup = async (user) => {
    console.log(user);
    try{
        const salt = await bcrypt.genSalt();
        user.password = await bcrypt.hash(user.password, salt);
        const created = await Users.create(user);
        return user.username;
    }
    catch(err){
        console.log(err);
        return err;
    }
}


const signin = async(username, password) => {
    try{
        const user = await Users.findOne({where: {username: username}})
        const success = await bcrypt.compare(password, user.password);
        if (success){
            const token = createToken(user.user_id);
            return token;
        }
        else{
            return 'Wrong password';
        }
    }
    catch(err){
        console.log(err)
        return 'Error Finding User';
    }
}




module.exports.signup = signup
module.exports.signin = signin
