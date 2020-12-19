const mongoose = require('mongoose');
const User = require('./user');
const Message = require('./message');

const connectDb = () => {
  return mongoose.connect(process.env.MONGO_CONNECTION_STRING);
};

const models = { User, Message, connectDb };

module.exports = models;
