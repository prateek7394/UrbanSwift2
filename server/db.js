const mongoose = require("mongoose");
require('dotenv').config()

const username = process.env.DB_USERNAME;
const password = process.env.DB_PASSWORD;


function connectDB(){

    mongoose.connect(`mongodb+srv://${username}:${password}@cluster0.dknblug.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0` , {useUnifiedTopology: true , useNewUrlParser: true})

    const connection = mongoose.connection

    connection.on('connected' , ()=>{
        console.log('Mongo DB Connection Successful!')
    })

    connection.on('error' , ()=>{
        console.log('Mongo DB Connection Error')
    })


}

connectDB()

module.exports = mongoose