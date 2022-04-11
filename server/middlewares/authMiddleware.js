const jwt = require ('jsonwebtoken');
const User = require('../models/userModel')
//const asyncHandler = require('express-async-handler');
const {verifyToken} = require('../utils/generateToken');


//user has to pass throw this middleware to can reach the getCommunity api
const protect = async (req, res, next ) => {

    const userToken = req.cookies.jwt;
    const tokenValid = verifyToken(userToken);
    if (tokenValid.valid) {
        //const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = await User.findById(tokenValid.payload.id).select("-password");
        next();
    } else {
        console.error(tokenValid.error); //.message);
        res.status(401).end(); // 401 => unauthorized
    }
    // let token;

    // //if the user is authenticated &&
    // //if authorization has a token beginning with Bearer
    // if(
    //     req.headers.authorization &&
    //     req.headers.authorization.startsWith('Bearer')
    // ){
    //     try{
    //         //removing the bearer and adding the token
    //         token = req.headers.authorization.split(' ')[1];
    //         //decoding token id
    //         const decoded = jwt.verify(token, process.env.JWT_SECRET);
            
    //         //if it works it will find user by id and it will do not get password from user
    //         req.user = await User.findById(decoded.id).select("-password");

    //         //next will send request to the get api
    //         next()
    //     }catch (error) {
    //         res.status(401);
    //         throw new Error('Not authorized, token failed')
    //     }
    // }
    // if (!token) {
    //     res.status(401);
    //     throw new Error('Not authorized, no token')
    // }
};

module.exports = {protect}