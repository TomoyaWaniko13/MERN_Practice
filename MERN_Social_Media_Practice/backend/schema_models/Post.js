import mongoose from 'mongoose';

const PostSchema = new mongoose.Schema(
  {
    userId: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      max: 500,
    },
    img: {
      type: String,
    },
    postLikersIdsArray: {
      type: Array,
      default: [],
    },
  },
  { timestamps: true },
);

const postModel = mongoose.model('Post', PostSchema);
export default postModel;
