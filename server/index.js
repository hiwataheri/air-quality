const express = require("express");
const server = express();
 server.use(require('cors')(
    {
        origin: 'http://localhost:3000', // only this host is allowed
        credentials: true, // This sets the Access-Control-Allow-Credentials CORS header.
        // Set this to true if we want to pass the header. Otherwise, it’s omitted.
        // => this will allow sending of cookies
        optionsSuccessStatus: 200 // workaround for some browsers having a problem on 204 status-code
    }
));
server.use(require('cookie-parser')());

//importing userRoutes
const userRoutes = require("./routes/userRoutes")
//importing communityRoutes
const communityRoutes = require("./routes/communityRoutes")
//DB connection
const connectDB = require("./config/db");
const { errorHandler, notFound } = require("./middlewares/errorMiddleware");
require("dotenv").config();
connectDB()
server.use(express.json())
const port = process.env.PORT ||5001

//first API`home APi`
server.get("/", (req, res) =>{
    res.send('home api')
})


//end point for userLogReg page
server.use('/user',userRoutes);

//end point route for community
server.use('/community',communityRoutes);

//calling the notFound middleware function from error handler
server.use(notFound);
//calling the errorHandler middleware function from error handler
server.use(errorHandler)

server.listen(port, () => console.log(`server run on port ${port}`));