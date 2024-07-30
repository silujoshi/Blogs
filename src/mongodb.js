const mongoose = require('mongoose');



mongoose.connect('mongodb+srv://silujoshi2:FqJRPyqjtmue2HGm@cluster0.calmujn.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')
.then(()=>{
    console.log("Database is connected")
})
.catch(()=>{
    console.log("You are not connected")
})


const loginSchema =({
    name:{
        type: String,
        required:true
    },
    password:{
        type: String,
        required:true
    }
})


//collection
const loginCollection = mongoose.model('loginCollection', loginSchema)

module.exports= loginCollection;