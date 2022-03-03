const mongoose = require('mongoose')

const schema = new mongoose.Schema({
   

    squad:{
        id:Number,
        name:String,
        lessonid:Number,
        cohort:String
    }
});

module.export = mongoose.model("Squad",schema);