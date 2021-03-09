const router = require('express').Router();

const userRoutes = require('./api/user-routes.js');
//collects endpoints and prefixes
router.use('/users', userRoutes);

module.exports = router;

