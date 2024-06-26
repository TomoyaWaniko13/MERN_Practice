import Post from '../schema_models/Post.js';
import express from 'express';
import User from '../schema_models/User.js';

const authRouter = express.Router();

// register a new user
authRouter.post('/register', async (req, res) => {
  try {
    // https://mongoosejs.com/docs/models.html
    const newUser = await User.create(req.body);
    console.log(newUser);
    return res.status(200).json(newUser);
  } catch (e) {
    res.status(500).json(e);
  }
});

// login ->
// 1.retrieve a specified user by an email
// 2. check if the password of the retrieved user is the same as the specified password
authRouter.post('/login', async (req, res) => {
  try {
    // db.collection.findOne()
    // https://www.mongodb.com/docs/manual/reference/method/db.collection.findOne/
    const retrievedUser = await User.findOne({ email: req.body.email });
    if (!retrievedUser) return res.status(404).send('user not found...');

    const isCorrectPassword = retrievedUser.password === req.body.password;
    if (!isCorrectPassword) return res.status(400).json('incorrect password.');

    return res.status(200).json(retrievedUser);
  } catch (e) {
    // 500 Internal Server Error
    res.status(500).json(e);
  }
});

export default authRouter;
