import Students from '../models/studentModel.js';

//Create a student data.

export const createStudentData = async (req, res) =>{
    try{
        const student = await Students.create(req.body);
        res.status(200).json(student);
    }catch(error){
        res.status(500).json({error: error.message});
    }
};

//Get all the student data.

export const getStudentsData = async (req, res) =>{
    try{
        const students =  await Students.find();
        res.status(200).json(students);
    }catch(error){
        res.status(500).json({error: error.message});
    }
};

//Get student by id.

export const getStudentById = async (req, res) =>{
    try{
        const student = await Students.findById(req.params.id);
        if (!student) return res.status(404).json({ message: 'User not found' });
        res.status(200).json(student);
    }catch(error){
        res.status(500).json({error: error.message});
    }
};

//Update student by id.

export const updateStudentById = async (req, res) =>{
    try{

        const student = await Students.findByIdAndUpdate(req.params.id, req.body, {new: true});
        if(!student) return res.status(404).json({message: 'Student not found'});
        res.status(200).json(student);
    }catch(error){
        res.status(500).json({error: error.message});
    }
};

// Delete student data

export const deleteStudentById = async (req, res) =>{
    try{
        const student = await Students.findByIdAndDelete(req.params.id);
        if(!student) return res.status(404).json({message: 'Student not found'});
        res.status(204).send();
    }catch(error){
        res.status(500).json({error: error.message});
    }
};