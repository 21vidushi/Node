const mongoose = require('mongoose');
require("dotenv").config();

console.log(process.env.MONGODB_URL);
console.log("hello");
exports.connect = () =>{
    mongoose.connect(process.env.MONGO_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true

    } )
    .then(()=>{
        console.log("sucessfully connected")

    })
    .catch((error)=>{
        console.log("error connecting")
        console.log(error.message)
        process.exit(1)
    })
 }
 
