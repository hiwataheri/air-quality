//this middleware is handling the errors when the route doesn't exsist
//2- it will handle the error and move on to the next middleware
const notFound = (req, res, next) => {
    //res.originalUrl gives back the user the wrong route he tipped
    const error = new Error(`NOT Found - ${req.originalUrl}`);
    res.status(404);
    next(error);
};

//general error handling
//converting the error to a structuring Form/ to a better format
const errorHandler = (err, req, res, next) => {
    const statusCode = res.statusCode === 200 ? 500 : res.statusCode;
    res.status(statusCode);
    res.json({ 
        message: err.message,
        stack: process.env.NODE_ENV !== 'production' ? null : err.stack,
    })
}

module.exports = {notFound, errorHandler};