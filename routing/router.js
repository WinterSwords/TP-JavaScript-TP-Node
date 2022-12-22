const router = require('express').Router();
const {resolve}=require('path');
const controllers = require('../controllers/controllers2')

router.get('/api/users',(req,res)=>res.end('users'));
// --> /services == /home ==> false
// --> /services == /services ==> true

router.get('/home', controllers.getIndex);
router.get('/contact', controllers.getContact);
router.get('/service', controllers.getService);
router.get('*', controllers.get404);

module.exports = router;