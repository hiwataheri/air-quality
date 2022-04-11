const asyncHandler = require('express-async-handler');
const User = require('../models/userModel')
const {generateToken} = require('../utils/generateToken');
const jwt = require("jsonwebtoken");


//i wrapped the register with asyncHandler to handle all the errors that may occur in the app
const registerUser = asyncHandler( async (req, res) => {
    //here are what we requested from a user hwo want to register
    const {firstname, lastname, email, password, pic, gender} = req.body;

    //if the user exists
    const userExists = undefined || await User.findOne({email});

    //1_if there is something inside exist
    if(userExists){
        //1-2_ throw an ERROR
        res.status(400)
        throw new Error("user already exists");
    }

        //if it doesn't exist then
        //create a new one
        const user = await User.create({
            firstname,
            lastname,
            gender,
            email,
            password,
            pic,
        })

        //if it successfully created new one then send response back
        if (user){
            //these are the successfully response
            //we don't send the password as response
            res.status(201).json({
                _id:user._id,
                firstname:user.firstname,
                lastname: user.lastname,
                gender: user.gender,
                email:user.email,
                pic:user.pic,
                token:generateToken(user._id),
            })
        }//else throw an Error
        else{
                res.status(400);
                throw new Error("something going wrong")
        }

    
});
const authUser = asyncHandler( async (req, res) => {
    //here are what we requested from a user hwo want to register
    const {email, password} = req.body;
    //using findeOne method from mongoose to search for our unique email
    const user = await User.findOne({email})
    //if there is something inside user and if password is correct
    //we see if password matches to current password
    if(user && (await user.matchPassword(password))) {
        //if user was found and password is correct then
        //response users data
        const token = generateToken(user._id);
         res.cookie("jwt", token);
       return res.json({
            _id:user._id,
            FirstName:user.FirstName,
            email:user.email,
            token:token,
            pic:user.pic,

            });
            
    }//else throw an Error
    else{
            res.status(400);
            throw new Error("password or email is incorrect");
    }

    
});

module.exports= {registerUser, authUser}