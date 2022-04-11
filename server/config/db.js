const mongoose = require('mongoose')


const connectDB = async () => {
    try {
        const connect = await mongoose.connect(process.env.MONGO_URI, {
            useUnifiedTopology: true,
            useNewUrlParser: true,
        });
        console.log(`mongoDB connected: ${connect.connection.host}`);
    } catch (err) {
        console.error(`Error: ${err.message}`);
    }
}

module.exports = connectDB