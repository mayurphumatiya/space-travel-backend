import mongoose from "mongoose";

const Schema = mongoose.Schema;

const destinationSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  distance: {
    type: String,
    required: true,
  },
  travel_time: {
    type: String,
    required: true,
  },
});

export default mongoose.model("Destination", destinationSchema);
