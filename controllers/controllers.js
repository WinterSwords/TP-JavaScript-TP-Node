const {resolve}=require('path');

const controllers = {
    users : (req, res) => {res.json({name:"coco"})},
    home :  (req, res) => {res.sendFile(resolve('public','index.html'))},
    contact :  (req, res) => {res.sendFile(resolve('public','contact.html'))},
    service :  (req, res) => {res.sendFile(resolve('public','sevice.html'))},
    _default : '*'
}
module.export = {
    controllers
};