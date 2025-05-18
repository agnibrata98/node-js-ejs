const route = require('express').Router();
const appController = require('../controllers/app.controller');


route.get('/', appController.home);
route.get('/about', appController.about);
route.get('/service', appController.service);
route.get('/contact', appController.contact);

module.exports = route;