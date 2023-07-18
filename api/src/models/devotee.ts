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
  favouriteSongs :{
    type: Array,
    required: true,
    default: []
  },
  image: {
    type: String,
    required: true,
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
  }
});
export const Devotee = mongoose.model("Devotee", DevoteeSchema);