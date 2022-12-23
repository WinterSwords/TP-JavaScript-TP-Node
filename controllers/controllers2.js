const { resolve } = require('path');

exports.homePage = (req, res) => {
    res.render('pages/home.pug');//render automatique dans views par default
}
exports.servicesPage = (req, res) => {
    res.render('pages/services.pug');
}
exports.contactPage = (req, res) => {
    res.render('pages/contact.pug');
}
exports.usersPage = (req, res) => {
    const {users}=require('../database/data.json')
    res.render('pages/users.pug',{users});
}
exports.page404Page = (req, res) => {
    res.render('pages/page404.pug');
}