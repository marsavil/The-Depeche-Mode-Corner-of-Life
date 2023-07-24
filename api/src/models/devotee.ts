import mongoose from "mongoose";
const Schema = mongoose.Schema;
const DevoteeSchema = new Schema({
  Name: {
    type: String,
    required: true
  },
  lastName: {
    type: String,
    required: true,
  },
  userName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true
  },
  favouriteSongs :{
    type: Array,
    required: true,
    default: []
  },
  image: {
    type: String,
    required: true,
  }, 
  password: {
    type: String,
  },
  country: {
    type: String,
    required: true
  },
  verified: {
    type: Boolean,
    required: true,
    default: false
  }, 
  code: {
    type: String,
    required: true,
  },
  test: {
    type: Boolean,
    required: true,
    default: false
  }
});
export const Devotee = mongoose.model("Devotee", DevoteeSchema);