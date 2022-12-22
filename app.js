const express = require('express');
const {resolve}=require('path');
const app = express();

app.use(express.static(resolve('public')));
/**
 * app
 */
// --> /services == /home ==> false
// --> /services == /services ==> true

app.get('/home', (req,res)=>{
  res.sendFile(resolve('public','index.html'));
})
app.get('/contact', (req,res)=>{
  res.sendFile(resolve('public','contact.html'));
})
app.get('/service', (req,res)=>{
  res.sendFile(resolve('public','service.html'));
})
app.get('*', (req,res)=>{
  res.sendFile(resolve('public','404.html'));
})

module.exports = app;