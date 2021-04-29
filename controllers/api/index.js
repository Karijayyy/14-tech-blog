
const router = require('express').Router();
const userRoutes = require('./user-routes');
const postRoutes = require('./post-routes.js'); 
const commRoutes = require('./comment-routes.js')

router.use('/users', userRoutes);
router.use('/posts', postRoutes); 
router.use('/comment', commRoutes)

module.exports = router;