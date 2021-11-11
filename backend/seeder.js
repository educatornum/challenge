const fs = require("fs");
const mongoose = require('mongoose');
const colors = require('colors');
const dotenv = require('dotenv');
const AuthModel = require("./models/authModel")
dotenv.config({path: "./config/config.env"})

mongoose.connect(process.env.MONGODB_URL,{
    useNewUrlParser: true, // new parse ashiglana
    useCreateIndex: true, //  index iig create hiij ugch baiga  shine huwilbar ashiglana
    useFindAndModify: false, // update ashiglana
    useUnifiedTopology: true, // atlas deer shine algorithm hereglene
});

const user = JSON.parse(fs.readFileSync(__dirname + "/data/user.json", 'utf-8'));

const importData = async() => {
    try {
        await AuthModel.create(user);
        console.log('Import user DATA'.green.inverse);
    } catch (err) {
        console.log(err);
    }
}

const deleteData = async ()=>{
    try {
        await AuthModel.deleteMany();
        console.log("Deletre user DATA".red.inverse);
    } catch (err) {
        console.log(err);
    }
}

if(process.argv[2] == '-i')  importData(); else if(process.argv[2] == '-d') deleteData();