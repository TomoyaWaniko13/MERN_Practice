import express from 'express';
import Post from '../schema_models/Post.js';
import User from '../schema_models/User.js';

const userRouter = express.Router();

userRouter.put('/:userId', async (req, res) => {
  const currentUserId = req.body.userId;
  const editTargetUserId = req.params.userId;

  if (currentUserId === editTargetUserId || req.body.isAdmin) {
    try {
      // https://mongoosejs.com/docs/api/model.html#Model.findByIdAndUpdate()
      // Model.findByIdAndUpdate(id, ...) is equivalent to findOneAndUpdate({ _id: id }, ...).
      const editedUser = await User.findByIdAndUpdate(editTargetUserId, { $set: req.body });
      res.status(200).json('you account was updated.');
      console.log(editedUser);
    } catch (e) {
      console.log(e);
      res.status(500).json(e);
    }
  } else {
    // 403 Forbidden
    return res.status(403).json('you can only update your own account.');
  }
});

// delete a use
userRouter.delete('/:userId', async (req, res) => {
  const currentUserId = req.body.userId;
  const deleteTargetUserId = req.params.userId;

  if (currentUserId === deleteTargetUserId || req.body.isAdmin) {
    try {
      // https://mongoosejs.com/docs/api/model.html#Model.findByIdAndDelete()
      // Model.findByIdAndDelete(id) is a shorthand for findOneAndDelete({ _id: id }).
      const deletedUser = User.findByIdAndUpdate(deleteTargetUserId);
      // 200 OK
      res.status(200).json('your account was deleted.');
      console.log(deletedUser);
    } catch (e) {
      console.log(e);
      // 500 Internal Server Error
      res.status(500).json(e);
    }
  } else {
    // 403 Forbidden
    return res.status(403).json('you can only delete your own account.');
  }
});

userRouter.get('/', async (req, res) => {
  // https://expressjs.com/en/api.html#req.query
  // This property is an object containing a property for each query string parameter in the route.
  const currentUserId = req.query.userId;
  const userName = req.query.userName;

  try {
    // https://mongoosejs.com/docs/api/model.html#Model.findById()
    // Finds a single document by its _id field. findById(id) is almost*
    // equivalent to findOne({ _id: id }). If you want to query by a document's _id, use findById() instead of findOne().
    const currentUser = currentUserId ? await User.findById(currentUserId) : await User.findOne({ userName: userName });
  } catch (e) {
    console.log(e);
    return res.status(500).json(e);
  }
});

export default userRouter;
