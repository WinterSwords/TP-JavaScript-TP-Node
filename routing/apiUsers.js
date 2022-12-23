const router = require('express').Router();
const {resolve}=require('path');
const getUsers=require('../controllers/apiControllers')

router.get('/api/users', getUsers.usersController);
module.exports = router;