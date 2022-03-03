const Lesson = require('../models/Squad');

exports.findSquads = async(req,res)=>{
    const squads = await Squad.find();
    res.send({data:squads});
};

exports.createSquad = async (req,res) =>{
    const squad = new Squad(req.body);
    await squad.save();
    res.send({data:squad});
}

exports.findSquad = async (req,res)=>{
    try{
        const squad = await Squad.findById(req.params.id);
        res.send({data:Squad})
    } catch{
        res.status(404).send({error:"Squad not found"});
    }   
    
}

exports.updateSquad = async(req,res)=>{

    try{
        const squad = await Squad.findById(req.params.id);
        Object.assign(squad,req.body);
        squad.save()
        res.send({data:'squad'})
    } catch{
        res.status(404).send({error:"Squad not found"});
    }  
};

exports.deleteSquad = async(req,res)=>{
    try{
        const squad = await Squad.findById(req.params.id);
        await squad.remove();
        res.send({data:true})
    } catch{
        res.status(404).send({error:"Squad failed to delete"});
    } 
};