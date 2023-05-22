import mongoose from "mongoose";
const Schema = mongoose.Schema;

const userSchema = new Schema({
  first_name: {
    type: String,
    required: true,
  },
  last_name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
    minLength:6,
  },
  is_logged_in: {
    type: Boolean,
    default: false,
  },
});

export default mongoose.model("User", userSchema)
