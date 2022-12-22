const express = require('express');
const {resolve}=require('path');
const app = express();
const appRoutes = require('./routing/router');
const apiUsers = require('./routing/apiUsers');

app.use(express.static(resolve('public'),{index : false}));
app.use(apiUsers);
app.use(appRoutes);

module.exports = app;