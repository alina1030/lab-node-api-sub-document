const mongoose = require('mongoose')

const schema = new mongoose.Schema({
    lessons:{
    
    id:Number,
    name:String
    },

    squad:{
        id:Number,
        name:String,
        lessonid:Number,
        cohort:String
    }
});

module.export = mongoose.model("Lesson",schema);