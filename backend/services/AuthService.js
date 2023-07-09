const express = require('express')
const {Users} = require('../models')
const bcrypt = require('bcrypt');

const signup = async (user) => {
    console.log(user);
    try{
        const salt = await bcrypt.genSalt();
        console.log(salt)
        user.password = await bcrypt.hash(user.password, salt);
        const created = await Users.create(user);
        console.log(created);
        return user.username;
    }
    catch(err){
        console.log('err');
        return err;
    }
}


const signin = async(username, password) => {
    try{
        const user = Users.findOne({where: {username: username, password: password}})
        const success = await bcrypt.compare(password, user.password);
        if (success){
            return user.username;
        }
    }
    catch(err){
        return err;
    }
    
}


const signout = async(username) => {
    try{

    }
    catch(err){
        console.log(err);
    }
}

module.exports.signup = signup
module.exports.signin = signin
module.exports.signout = signout