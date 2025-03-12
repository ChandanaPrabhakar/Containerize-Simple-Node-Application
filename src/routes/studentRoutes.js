import express from 'express';
import Students from '../model/studentModel';

const router = express.Router();

//Create a student data.

router.post('/students', async (req, res) =>{
    try{
        const student = await Students.create(req.body);
        res.status(200).json(student);
    }catch(error){
        res.status(500).json({error: error.message});
    }
});

//Get all the student data.

router.get('/', async (req, res) =>{
    try{
        const students =  await Students.find();
        res.status(200).json(students);
    }catch(error){
        res.status(500).json({error: error.message});
    }
});

//Get student by id.

router.get('/:id', async(req, res) =>{
    try{
        const student = await Students.findById(req.params.id);
        if (!student) return res.status(404).json({ message: 'User not found' });
        res.status(200).json(student);
    }catch(error){
        res.status(500).json({error: error.message});
    }
});

//Update student by id.

router.put('/:id', async(req, res) =>{
    try{
        const student = await Students.findByIdAndUpdate(req.params, req.body, {new: true});
        if(!student) return res.status(404).json({message: 'Student not found'});
        res.status(200).json(student);
    }catch(error){
        res.status(500).json({error: error.message});
    }
});

// Delete student data

router.delete('/:id', async(req, res) =>{
    try{
        const student = await Students.findByIdAndDelete(req.params.id);
        if(!student) return res.status(404).json({message: 'Student not found'});
        res.status(204).send();
    }catch(error){
        res.status(500).json({error: error.message});
    }
});

export default router;