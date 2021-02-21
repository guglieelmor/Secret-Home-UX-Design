const express = require('express');
const multer = require('multer');
const uploadConfig = require('./Config/upload');
const SessionController = require('./controllers/SessionController');
const ProductController = require('./controllers/ProductController');

const routes = express.Router();
const upload = multer(uploadConfig);

routes.post('/sessions', SessionController.store);
routes.get('/products', ProductController.index);
routes.post('/products', upload.single('thumbnail'),  ProductController.store);

module.exports = routes;