const mongoose = require('mongoose')

const dbconnect =async  ()=>{
    await mongoose.connect(process.env.URL)
    console.log("Connected to MongoDB");
}

module.export=dbconnect;