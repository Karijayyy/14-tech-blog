//requiring the db and connection
const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection.js');

class Comment extends Model { }

Comment.init(
  {
    // comments here 
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    // this is for the comments
    comment: {
      type: DataTypes.STRING,
      allowNull: false
    },
    // this is for their username
    user_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    // post #
    post_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'post',
        key: 'id',
      },
    },
    // this is for the date that it was created 
    date_created: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW,
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'comment',
  }
);

module.exports = Comment;