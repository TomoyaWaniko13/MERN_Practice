import express from 'express';
import Post from '../schema_models/Post.js';
import User from '../schema_models/User.js';

const userRouter = express.Router();

userRouter.put('/:userId', async (req, res) => {
  const currentUserId = req.body.userId;
  const editTargetUserId = req.params.userId;

  try {
    const editedUser = await User.findByIdAndUpdate(editTargetUserId, { $set: req.body });
  } catch (e) {}
});

export default userRouter;
