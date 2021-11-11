const mongoose = require("mongoose")

const connectMongoDB = async () => { 
    const conn = await mongoose.connect(process.env.MONGODB_URL,{
        useNewUrlParser: true, // new parse ashiglana
        useCreateIndex: true, //  index iig create hiij ugch baiga  shine huwilbar ashiglana
        useFindAndModify: false, // update ashiglana
        useUnifiedTopology: true, // atlas deer shine algorithm hereglene
    });
    console.log(`MongoDB холбогдлоо: ${conn.connection.host}`.cyan.underline.bold);
};

module.exports = connectMongoDB;