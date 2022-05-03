const mongoose = require('mongoose');
const mongooseUtilities = require('../utils/mongooseUtils');

const employeeSchema = new mongoose.Schema({
    first_name: {
        type: String,
        required: true,
        trim: true,
    },
    last_name: {
        type: String,
        required: true,
        trim: true,
    },
    father_name: {
        type: String,
        required: true,
        trim: true,
    },
    emp_number: {
        type: String,
        required: true,
        trim: true,
    },
    dob: {
        type: String,
        required: true
    },
    designation_id: {
        type: Number,
        required: true,
    },
    level_id: {
        type: Number,
        required: true,
    },
    payroll_id: {
        type: Number,
        required: true,
    },
    company_branch_id: {
        type: Number,
        required: true
    },
    personalEmail: {
        type: String,
        required: true,
        trim: true,
        lowercase: true,
        validate: mongooseUtilities.isEmailValidator()
    },

});

const EmployeeModel = mongoose.model('EmployeeModel', employeeSchema);
module.exports = EmployeeModel;