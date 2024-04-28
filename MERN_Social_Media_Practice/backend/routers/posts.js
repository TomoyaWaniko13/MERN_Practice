import express from 'express';
import Post from '../schema_models/Post.js';

const postRouter = express.Router();

// create a new post
postRouter.post('/', async (req, res) => {
  try {
    const newPost = await Post.create(req.body);
    console.log(newPost);
    res.status(200).json(newPost);
  } catch (e) {
    res.json(500).json(e);
  }
});

export default postRouter;
