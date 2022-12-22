const {resolve}=require('path');

function getIndex(req,res){
    res.sendFile(resolve('public','index.html'));
}
function getContact(req,res){
    res.sendFile(resolve('public','contact.html'));
}
function getService(req,res){
    res.sendFile(resolve('public','service.html'));
}
function get404(req,res){
    res.sendFile(resolve('public', 'page404.html'));
}
module.exports = {
    getIndex,
    getContact,
    getService,
    get404
};