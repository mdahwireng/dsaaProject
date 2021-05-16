const express = require("express");
const services = require("../services/render")
const controller = require("../controller/controller")

route = express.Router();


/**
 * @description Root Route
 * @method GET/
 */
route.get('/', services.homeRoutes);

/**
 * @description services Route
 * @method GET /services
 */
route.get('/services', services.servicesRoutes);

/**
 * @description gallery Route
 * @method GET /gallery
 */
route.get('/gallery', services.galleryRoutes);

/**
 * @description message Route
 * @method GET /message
 */
route.get('/message', services.messageRoutes);

/**
 * @description master Route for transaction
 * @method GET /master
 */
route.get('/master', services.masterRoutes);

/**
 * @description add transactions Route
 * @method GET /add_transaction
 */
route.get('/add_transaction', services.addTransactionRoutes);

/**
 * @description update transaction Route
 * @method GET /update_transaction
 */
route.get('/update_transaction', services.updateTransactionRoutes);

// API Routes

route.post('/api/users', controller.create);

route.get('/api/users', controller.find);

route.put('/api/users/:id', controller.update);

route.delete('/api/users/:id', controller.delete);


module.exports = route