const jwt = require('jsonwebtoken');

const generateToken = (id) => {
    return jwt.sign({ id }, process.env.JWT_SECRET, { 
        expiresIn: "30d",
    });
};


const verifyToken = (token) => {
    if (!token) {
        let error = new Error('token not provided');
        console.error('error: ', error.message);
        return {valid: false, error: error};
    }

    return jwt.verify(token,process.env.JWT_SECRET, (error, payload) => {
        if (error) return {valid: false, error: error};
        
        return {valid: true, payload: payload}
   }) 
}

module.exports = {generateToken , verifyToken};