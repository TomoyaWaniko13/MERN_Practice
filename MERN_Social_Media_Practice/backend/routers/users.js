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

// get a user
userRouter.get('/', async (req, res) => {
  console.log(req.query);
  // https://expressjs.com/en/api.html#req.query
  // This property is an object containing a property for each query string parameter in the route.
  const currentUserId = req.query.userId;
  const userName = req.query.userName;

  try {
    // https://mongoosejs.com/docs/api/model.html#Model.findById()
    // https://mongoosejs.com/docs/api/model.html#Model.findOne()
    // Finds a single document by its _id field. findById(id) is almost*
    // equivalent to findOne({ _id: id }). If you want to query by a document's _id, use findById() instead of findOne().
    const currentUser = currentUserId ? await User.findById(currentUserId) : await User.findOne({ userName: userName });
    const { password, updatedAt, ...otherFields } = currentUser._doc;
    res.status(200).json(otherFields);
  } catch (e) {
    console.log(e);
    return res.status(500).json(e);
  }
});

// follow a user
userRouter.put('/:userId/follow', async (req, res) => {
  const currentUserId = req.body.userId;
  const followTargetUserId = req.params.userId;

  // 403 Forbidden
  if (currentUserId === followTargetUserId) return res.status(403).json('you cannot follow your own account...');

  try {
    // https://mongoosejs.com/docs/api/model.html#Model.findById()
    // https://mongoosejs.com/docs/api/model.html#Model.findOne()
    // Finds a single document by its _id field. findById(id) is almost*
    // equivalent to findOne({ _id: id }). If you want to query by a document's _id, use findById() instead of findOne().
    const currentUser = await User.findById(currentUserId);
    const followTargetUser = await User.findById(followTargetUserId);
    console.log(currentUser);
    console.log(followTargetUser);

    // 404 Not Found
    if (!currentUser) return res.status(404).json('we could not find your account...');
    if (!followTargetUser) return res.status(404).json('We could not find the user you are trying to follow...');

    // 403 Forbidden
    if (currentUser.followersIdArray.includes(followTargetUserId))
      return res.status(403).json('you are already following this account.');

    // https://www.mongodb.com/docs/manual/reference/method/db.collection.updateOne/
    await currentUser.updateOne({ $push: { followingsIdArray: followTargetUserId } });
    // https://www.mongodb.com/docs/manual/reference/operator/update/pull/
    await followTargetUser.updateOne({ $push: { followersIdArray: currentUserId } });
    res.status(200).json('You successfully followed the account!');
  } catch (e) {
    console.log(e);
    return res.status(500).json(e);
  }
});

userRouter.put('/:userId/unfollow', async (req, res) => {
  const currentUserId = req.body.userId;
  const unfollowTargetUserId = req.params.userId;
  console.log(unfollowTargetUserId);
  // 403 Forbidden
  if (currentUserId === unfollowTargetUserId) return res.status(403).json('You cannot unfollow your own account...');

  try {
    const currentUser = await User.findById(currentUserId);
    const unfollowTargetUser = await User.findById(unfollowTargetUserId);
    console.log(currentUser);
    console.log(unfollowTargetUser);

    // 404 Not Found
    if (!currentUser) return res.status(404).json('we could not find your account...');
    if (!unfollowTargetUser) return res.status(404).json('We could not find the user you are trying to unfollow...');

    // 400 Bad Request
    if (!currentUser.followersIdArray.includes(unfollowTargetUserId))
      return res.status(400).json('you cannot unfollow the user you are not following.');

    // https://www.mongodb.com/docs/manual/reference/operator/update/pull/
    await currentUser.updateOne({ $pull: { followingsIdArray: unfollowTargetUserId } });
    await unfollowTargetUserId.updateOne({ $pull: { followersIdArray: currentUserId } });

    // 200 OK
    return res.status(200).json('you successfully unfollowed this user!');
  } catch (e) {
    console.log(e);
    return res.status(500).json(e);
  }
});

export default userRouter;
