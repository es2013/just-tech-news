const router = require('express').Router();

const userRoutes = require('./api/user-routes.js');
const postRoutes = require('./api/post-routes');
//collects endpoints and prefixes
router.use('/users', userRoutes);
router.use('/posts', postRoutes);

module.exports = router;

