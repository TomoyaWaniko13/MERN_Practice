import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema(
  {
    userName: {
      type: String,
      required: true,
      min: 3,
      max: 20,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      min: 6,
      max: 50,
    },
    password: {
      type: String,
      min: 6,
      max: 50,
    },
    profilePicture: {
      type: String,
      default: '',
    },
    coverPicture: {
      type: String,
      default: '',
    },
    followersIdArray: {
      type: [],
      default: [],
    },
    followingsIdArray: {
      type: [],
      default: [],
    },
    isAdmin: {
      type: Boolean,
      default: false,
    },
    description: {
      type: String,
      max: 50,
    },
    city: {
      type: String,
      max: 50,
    },
  },
  { timestamps: true },
);

const userModel = mongoose.model('User', UserSchema);
export default userModel;
