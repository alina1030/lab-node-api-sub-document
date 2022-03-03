const Lesson = require('../models/Lesson');

exports.findLessons = async(req,res)=>{
    const lessons = await Lesson.find();
    res.send({data:lessons});
};

exports.createLesson = async (req,res) =>{
    const lesson = new Lesson(req.body);
    await lesson.save();
    res.send({data:lesson});
}

exports.findLesson = async (req,res)=>{
    try{
        const lesson = await Lesson.findById(req.params.id);
        res.send({data:lesson})
    } catch{
        res.status(404).send({error:"Lesson not found"});
    }   
    
}

exports.updateLesson = async(req,res)=>{

    try{
        const lesson = await Lesson.findById(req.params.id);
        Object.assign(lesson,req.body);
        lesson.save()
        res.send({data:'lesson'})
    } catch{
        res.status(404).send({error:"Lesson not found"});
    }  
};

exports.deleteLesson = async(req,res)=>{
    try{
        const lesson = await Lesson.findById(req.params.id);
        await lesson.remove();
        res.send({data:true})
    } catch{
        res.status(404).send({error:"Lesson failed to delete"});
    } 
};