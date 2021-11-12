const express = require('express');
const dotenv = require("dotenv");
const cors = require('cors');
const apiRoutes = require('./routes/apiRoute');

// CORS config WhiteList
var whitelist = ['http://localhost:8000']
var corsOptions = {
    origin: function (origin, callback) {
        if (whitelist.indexOf(origin) !== -1) {
            callback(null, true)
        } else {
            callback(new Error('Not allowed by CORS'))
        }
    }
}
// EXPRESS RUN
const app = express();
app.use(cors()); // CORS option
app.use(express.json()); // BODY INTO JSON 

dotenv.config({path: './config/config.env'})

app.use('/',apiRoutes);
// app.use(errorHandler);

// app run
const server = app.listen(
    process.env.PORT,
    console.log(`Express server started on ${process.env.PORT} ...`)
)

// unhandledRejection
process.on('unhandledRejection', (err, promise)=>{
    console.log(`Error: ${err.message}`)
    server.close(()=>{
        process.exit(1);
    })
})