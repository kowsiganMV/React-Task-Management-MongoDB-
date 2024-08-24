const taskModel=require('../models/TaskModel')
const mongoose=require('mongoose')

//To create a task
const creatTask=async  (req,res)=>{
    const {title,description}=req.body;

    try{
        const task =await taskModel.create({title,description});
        res.status(200).json(task)
    } catch(e){
        res.status(400).json({error:e.message})
    }
}

//to get all tasks 
const getTasks= async (req,res)=>{
    try{
        const tasks= await taskModel.find({});
        res.status(200).json(tasks);
    }
    catch(e){
        res.status(400).json({error:e.message});
    }
}

const getsingleTask= async (req,res)=>{
        const {id}=req.params;
        if(!mongoose.Types.ObjectId.isValid(id)){
            return res.status(400).json({error:'Task Not Found'});
        }
        try{
            const singleTask=await taskModel.findById(id);
            res.status(200).json(singleTask);
            
        }catch(e){
            res.status(400).json({error:e.message});
        }
}

// to Update a task- PATCH
const updateTask=async (req,res)=>{
    const {id}=req.params;
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(400).json({error:'Task Not Found'});
    }
    try{
        const task =await taskModel.findByIdAndUpdate({_id:id},{...req.body});
        res.status(200).json(task);
    }
    catch(e){
        res.status(400).json({error:e.message});
    }
}

// to Update a task- PATCH
const deleteTask=async (req,res)=>{
    const {id}=req.params;
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(400).json({error:'Task Not Found'});
    }
    try{
        const task =await taskModel.findByIdAndDelete(id);
        res.status(200).json(task);
    }
    catch(e){
        res.status(400).json({error:e.message});
    }
}

module.exports = {creatTask, getTasks, getsingleTask, updateTask, deleteTask};