import express from 'express';
import Post from '../schema_models/Post.js';
import User from '../schema_models/User.js';

const postsRouter = express.Router();

// post a new post
postsRouter.post('/', async (req, res) => {
  try {
    // https://mongoosejs.com/docs/models.html
    const newPost = await Post.create(req.body);
    console.log(newPost);
    return res.status(200).json(newPost);
  } catch (e) {
    console.log(e);
    return res.status(500).json(e);
  }
});

// edit a post
postsRouter.put('/:id', async (req, res) => {
  const targetObjectId = req.params.id;
  const currentUserId = req.body.userId;

  try {
    const editTargetPost = await Post.findById(targetObjectId);

    // 400 Bad Request
    if (currentUserId !== editTargetPost.userId) return res.status(400).json("You cannot edit other user's post.");

    const editedPost = await editTargetPost.updateOne({ $set: req.body });
    console.log(editTargetPost);
    return res.status(200).json(editedPost);
  } catch (e) {
    console.log(e);
    return res.status(500).json(e);
  }
});

// delete a post
postsRouter.delete('/:id', async (req, res) => {
  const targetPostObjectId = req.params.id;
  const currentUserId = req.body.userId;

  try {
    const deleteTargetPost = await Post.findById(targetPostObjectId);

    if (currentUserId !== deleteTargetPost.userId) return res.status(400).json("You cannot delete other user's post.");

    // https://www.mongodb.com/docs/manual/reference/method/db.collection.deleteOne/
    const deletedTarget = await deleteTargetPost.deleteOne();
    console.log(deletedTarget);
    return res.status(200).json('You successfully deleted your post.');
  } catch (e) {
    console.log(e);
    return res.status(500).json(e);
  }
});

// like or dislike a post
postsRouter.put('/:id/like', async (req, res) => {
  const targetPostObjectId = req.params.id;
  const currentUserId = req.body.userId;

  try {
    const targetPost = await Post.findById(targetPostObjectId);
    if (!targetPost.postLikersIdArray.includes(currentUserId)) {
      await targetPost.updateOne({ $push: { postLikersIdArray: currentUserId } });
      res.status(200).json('You liked this post.');
    } else {
      await targetPost.updateOne({ $pull: { postLikersIdArray: currentUserId } });
      res.status(200).json('You disliked this post.');
    }
  } catch (e) {
    console.log(e);
    res.status(500).json(e);
  }
});

// get a post
postsRouter.get('/:id', async (req, res) => {
  const targetPostObjectId = req.params.id;
  try {
    const retrievedTargetPost = await Post.findById(targetPostObjectId);
    console.log(retrievedTargetPost);
    res.status(200).json(retrievedTargetPost);
  } catch (e) {
    console.log(e);
    res.status(500).json(e);
  }
});

// get all posts of one specific user
postsRouter.get('/profile/:userName', async (req, res) => {
  const currentUserName = req.params.userName;
  try {
    const currentUser = await User.findOne({ userName: currentUserName });
    const currentUserObjectId = currentUser._id;
    const currentUserPosts = await Post.find({ userId: currentUserObjectId });
    console.log(currentUserPosts);
  } catch (e) {
    console.log(e);
    res.status(500).json(e);
  }
});

postsRouter.get('/timeline/:userId', async (req, res) => {
  const currentUserObjectId = req.params.userId;

  try {
    const currentUser = await User.findById(currentUserObjectId);
    // https://www.mongodb.com/docs/manual/reference/method/db.collection.find/#mongodb-method-db.collection.find
    // Selects documents in a collection or view and returns a cursor to the selected documents.
    // const userPosts = await Post.find({ userId: currentUserObjectId });
    const currentUserPosts = await Post.find({ userId: currentUserObjectId });

    const followingsPosts = await Promise.all(
      currentUser.followingsIdArray.map((followingId) => Post.find({ userId: followingId })),
    );
    const timelinePosts = currentUserPosts.concat(...followingsPosts);
    console.log(timelinePosts);
    return res.status(200).json(timelinePosts);
  } catch (e) {
    console.log(e);
    res.status(500).json(e);
  }
});

export default postsRouter;
