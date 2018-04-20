const User = require('../models/userModels');
const bcrypt = require('bcrypt');

const createUser = (req, res) => {
  const { username, password } = req.body;
  // create user takes in the username and password and saves a user.
  // our pre save hook should kick in here saving this user to the DB with an encrypted password.
  const newUser = new User({ username, password });

  newUser.save((err, savedUser) => {
    if (err) return res.status(500).json({ message: 'add failed' });

    res.status(200).json(savedUser);
  });
};

module.exports = {
  createUser
};
