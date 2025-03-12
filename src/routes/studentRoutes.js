import express from 'express';
import { createStudentData,
    getStudentsData,
    getStudentById,
    updateStudentById,
    deleteStudentById
 } from '../controller/studentController';

const router = express.Router();

router.post('/students', createStudentData);
router.get('/', getStudentsData);
router.get('/:id', getStudentById);
router.put('/:id', updateStudentById);
router.delete('/:id', deleteStudentById);

export default router;