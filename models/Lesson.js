const mongoose = require('mongoose')

const schema = new mongoose.Schema({
    lessons:{
    
    id:Number,
    name:String
    },

    
});

module.export = mongoose.model("Lesson",schema);