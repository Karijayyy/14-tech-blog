const router = require('express').Router();

// const apiRoutes = require ('./api/')
const userRoutes = require('./user-routes.js');
const postRoutes = require('./post-routes.js'); 
const commRoutes = require('./comment-routes.js')

router.use('/users', userRoutes);
router.use('/posts', postRoutes); 
router.use('/comments', commRoutes)
// router.use('/api', apiRoutes);

module.exports = router;