const mongoose = require('mongoose');

const mongoURI = "mongodb+srv://rishabh:Rishabhptl567481@newapp.u26hqy9.mongodb.net/"

const connectToMongo = ()=>{
    mongoose.connect(mongoURI)
    console.log("Connected to Mongo Successfully");
}

module.exports = connectToMongo;