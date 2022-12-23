const router = require('express').Router();
const {resolve}=require('path');
const controllers = require('../controllers/controllers2')

router.get('/api/users',(req,res)=>res.end('users'));
// --> /services == /home ==> false
// --> /services == /services ==> true

router.get('/home', controllers.homePage);
router.get('/contact', controllers.contactPage);
router.get('/services', controllers.servicesPage);
router.get('/users', controllers.usersPage);
router.get('*', controllers.page404Page);

module.exports = router;