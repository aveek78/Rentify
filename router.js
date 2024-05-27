const express = require('express');
const { register, login } = require('../controllers/userController');

const router = express.Router();

router.post('/register', register);
router.post('/login', login);

module.exports = router;

routes/propertyRoutes.js
const express = require('express');
const { createProperty, getProperties } = require('../controllers/propertyController');

const router = express.Router();

router.post('/', createProperty);
router.get('/', getProperties);

module.exports = router;