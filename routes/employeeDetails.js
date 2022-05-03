// const router = require('express').Router();
const router = require('express').Router();
const empDetailsController = require('../controllers/employeeDetails');
const { isAuthenticate } = require('../middleware/authentication');


/**
 * A block router method to get Prepare Quote blocks data 
 * @author 
 * @method POST
 * @returns Status code 200 if successful with success message , other error codes if error
 *   occurs
 */
router.post('/employeeBasicDetails', isAuthenticate, empDetailsController.employeeBasicDetails);

module.exports = router;