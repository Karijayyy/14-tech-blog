// took from week 14 mini project seed.js

const sequelize = require('../config/connection');
const { User, Post, Comment } = require('../models');

const userData = require('./userdata.json');
const postData = require('./postdata.json'); 
const commentData = require('./commentData.json')

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  const users = await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });

  for (const post of postData) {
    await Post.create({ 
      ...post, 
      user_id: users[Math.floor(Math.random() * users.length)].id,
    });
  }

  const comm = await Comment.bulkCreate(commentData);


  process.exit(0);
};

seedDatabase();