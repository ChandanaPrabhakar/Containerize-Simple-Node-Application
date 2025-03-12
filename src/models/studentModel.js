import mongoose from 'mongoose';

const studentSchema = new mongoose.Schema({
    StudentName: {
        type: String,
        required: true,
    },
    Branch: {
        type: String,
        required: true,
    },
    Branch: {
        type: String,
        required: true,
    },
    Month: {
        type: String,
        required: true,
    },
    AmountPaid: {
        type: String,
        required: true,
    },
    Status: {
        type: String,
        required: true,
    }
}, {timestamps: true});

const Students = mongoose.model('Students', studentSchema);

export default Students;