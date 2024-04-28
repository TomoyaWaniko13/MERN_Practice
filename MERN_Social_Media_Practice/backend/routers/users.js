import express from 'express';
import Post from '../schema_models/Post.js';
import User from '../schema_models/User.js';

const userRouter = express.Router();

// edit user's data
userRouter.put('/:id', async (req, res) => {
  const loggedInUserId = req.body.userId;
  const editTargetUserId = req.params.id;

  if (loggedInUserId === editTargetUserId || req.body.isAdmin) {
    try {
      //   TODO continue from here.
    } catch (e) {
      // 500 Internal Server Error
      res.status(500).json(e);
    }
  } else {
    // 403 Forbidden
    res.status(403).json('you can only update your own account');
  }
});

export default userRouter;
