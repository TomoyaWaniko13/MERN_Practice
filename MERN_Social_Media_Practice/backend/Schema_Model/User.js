import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema({
  userName: {
    type: String,
    required: true,
    min: 3,
    max: 20,
    unique: true,
  },
  email: {
    type: String,
    require: true,
    min: 6,
    max: 50,
  },
  profilePicture: {
    type: String,
    default: '',
  },
  coverPicture: {
    type: String,
    default: [],
  },
  followersIdArray: {
    type: [],
    default: [],
  },
  followingsIdArray: {
    type: [],
    default: [],
  },
  description: {},
});
