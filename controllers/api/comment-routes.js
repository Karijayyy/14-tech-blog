// took from week 14 mini project project routes
const router = require('express').Router();
const { Comment } = require('../../models');

router.post('/', async (req, res) => {
    try {
        const newComment = await Comment.create({ ...req.body });
        res.status(200).json(newComment);
    } catch (err) {
        res.status(400).json(err);
    }
})

router.get('/', async (req, res) => {
    try {
        const allComments = await Comment.findAll();
        res.status(200).json(allComments);
    } catch (err) {
        res.status(400).json(err);
    }
})

module.exports = router;