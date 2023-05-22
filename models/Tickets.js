import mongoose from "mongoose";

const Schema = mongoose.Schema;

const ticketSchema = new Schema({
  user_id: {
    type: Schema.Types.ObjectId,
  },
  ticket: {
    type: Number,
    required: true,
  },
  destination: {
    type: String,
    required: true,
  },
  est_time: {
    type: String,
    required: true,
  },
  distance: {
    type: String,
    required: true,
  },
  total_price: {
    type: Number,
    required: true,
  },
});

export default mongoose.model("Tickets", ticketSchema);
