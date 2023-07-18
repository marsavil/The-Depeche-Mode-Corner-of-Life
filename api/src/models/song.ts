import mongoose from "mongoose";
const Schema = mongoose.Schema;
const SongSchema = new Schema({
  tittle: {
    type: String,
    unique:true,
    required: true
  },
  release: {
    type: Array,
    required: true,
  },
  date: {
    type: String,
    required: true,
  },
  composer :{
    type: Array,
    required: true,
  },
  producer: {
    type: Array,
    required: true,
  },
  engineer: {
    type: Array,
    required: true,
  },
  studio: {
    type: Array,
    required: true
  },
  favourite: {
    type: Number,
    required: true,
    default: 0
  }

});
export const Song = mongoose.model("Song", SongSchema);
