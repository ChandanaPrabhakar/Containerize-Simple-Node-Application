import express from 'express';
import { createStudentData,
    getStudentsData,
    getStudentById,
    updateStudentById,
    deleteStudentById
 } from '../controller/studentController.js';

const router = express.Router();

router.post('/students', createStudentData);
router.get('/', getStudentsData);
router.get('/student/:id', getStudentById);
router.put('/student/:id', updateStudentById);
router.delete('/student/:id', deleteStudentById);

export default router;