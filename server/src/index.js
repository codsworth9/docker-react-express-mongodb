'use strict';

const express = require('express');
const path = require('path');
const { connectDb } = require('./models');
const models = require('./models');
const routes = require('./routes');

// Constants
const PORT = process.env.PORT || 8080;

const CLIENT_BUILD_PATH = path.join(__dirname, '../../client/build');

// App
const app = express();

// Static files
app.use(express.static(CLIENT_BUILD_PATH));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(async (req, res, next) => {
  req.context = {
    models,
    me: await models.User.findByLogin('user1'),
  };
  next();
});

app.use('/session', routes.session);
app.use('/users', routes.user);
app.use('/messages', routes.message);

// All remaining requests return the React app, so it can handle routing.
app.get('*', function (request, response) {
  response.sendFile(path.join(CLIENT_BUILD_PATH, 'index.html'));
});

const eraseDatabaseOnSync = true;

connectDb().then(async () => {
  if (eraseDatabaseOnSync) {
    await Promise.all([
      models.User.deleteMany({}),
      models.Message.deleteMany({}),
    ]);

    createUsersWithMessages();
  }

  app.listen(PORT, () =>
    console.log(`Example app listening on port ${PORT}!`)
  );
});

const createUsersWithMessages = async () => {
  const user1 = new models.User({
    username: 'user1',
  });

  const message1 = new models.Message({
    text: 'This is a text',
    user: user1.id,
    username: user1.username,
  });

  const message2 = new models.Message({
    text: 'This is also a text',
    user: user1.id,
    username: user1.username,
  });

  const message3 = new models.Message({
    text: 'Yet another text',
    user: user1.id,
    username: user1.username,
  });

  await message1.save();
  await message2.save();
  await message3.save();

  await user1.save();
};
