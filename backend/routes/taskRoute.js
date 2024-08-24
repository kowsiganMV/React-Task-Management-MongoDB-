const express=require('express');

const router=express.Router();

const {creatTask,getTasks, getsingleTask, updateTask, deleteTask}=require('../controllers/taskController');

router.post('/',creatTask);
router.get("/",getTasks);
router.get('/:id',getsingleTask);
router.patch('/:id',updateTask);
router.delete('/:id',deleteTask);

module.exports=router;