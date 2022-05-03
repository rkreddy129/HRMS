const { generateErrorMessage } = require('../utils/utilities');
const EmployeeModel = require('../models/employee.model')

const employeeDetailsController = {

    employeeBasicDetails: async (req, res) => {
        console.log('emp daata')
        try {

            let empModel = new EmployeeModel({
                first_name: req.body.first_name,
                last_name: req.body.last_name,
                father_name: req.body.father_name,
                emp_number: req.body.emp_number,
                dob: req.body.dob,
                designation_id: req.body.designation_id,
                level_id: req.body.level_id,
                payroll_id: req.body.payroll_id,
                company_branch_id: req.body.company_branch_id,
                personalEmail: req.body.personalEmail
            })

            await empModel.save()
                .then(doc => {
                    console.log(doc)
                    res.status(200).json({ message: 'Successfully stored data', status: 'true' });
                })
                .catch(err => {
                    console.error(err)
                    return res.status(500).json({ Message: generateErrorMessage(err), status: 'false' });
                })

        } catch (e) {
            return res.status(500).json({ Message: generateErrorMessage(e), status: 'false' });

        }
    },

};

module.exports = employeeDetailsController;