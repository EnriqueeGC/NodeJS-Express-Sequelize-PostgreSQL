
let express = require('express');
let router = express.Router();
 
const customers = require('../controllers/controller.js');
const orders = require('../controllers/order.controller.js');
const products = require('../controllers/product.controller.js')
const categories = require('../controllers/categorie.controller.js')

// API Customers
router.post('/api/customers/create', customers.create);
router.get('/api/customers/all', customers.retrieveAllCustomers);
router.get('/api/customers/onebyid/:id', customers.getCustomerById);
router.get('/api/customers/filteringbyage', customers.filteringByAge);
router.get('/api/customers/pagination', customers.pagination);
router.get('/api/customers/pagefiltersort', customers.pagingfilteringsorting);
router.put('/api/customers/update/:id', customers.updateById);
router.delete('/api/customers/delete/:id', customers.deleteById);

// CRUD Orders
router.post('/api/orders/create', orders.creates);
router.get('/api/orders/all', orders.retrieveAllOrders);
router.get('/api/orders/onebyid/:id', orders.getOrderById);
router.put('/api/orders/update/:id', orders.updateOrderById);
router.delete('/api/orders/delete/:id', orders.deleteOrderById);

// CRUD Products
router.post('/api/products/create', products.create);
router.get('/api/products/all', products.retrieveAllProducts);
router.get('/api/products/onebyid/:id', products.getProductById);
router.put('/api/products/update/:id',products.updateProductById);
router.delete('/api/products/delete/:id', products.deleteProductById);

// CRUD Categories
router.post('/api/categorie/create', categories.create);
router.get('/api/categorie/all', categories.retrieveAllProducts);
router.get('/api/categorie/onebyid/:id', categories.getCategorieById);
router.put('/api/categorie/update/:id', categories.updateProductById);
router.delete('/api/categorie/detele/:id', categories.deleteProductById);

module.exports = router;