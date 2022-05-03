const router = require('express').Router();
const userAuthController = require('../controllers/userAuthentication');
const { isAuthenticate } = require('../middleware/authentication');

/**
 * A block router method to get Prepare Quote blocks data 
 * @author 
 * @method POST
 * @returns Status code 200 if successful with success message , other error codes if error
 *   occurs
 */
router.post('/registration', userAuthController.userRegistration);

router.post('/login', isAuthenticate, userAuthController.userRegistration);

module.exports = router;
