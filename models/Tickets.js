import mongoose from "mongoose";

const Schema = mongoose.Schema;

const ticketSchema = new Schema({
  user_id: {
    type: Schema.Types.ObjectId,
  },
  full_name: {
    type: String,
    required: true,
  },
  destination: {
    type: String,
    required: true,
  },
  tickets: {
    type: Number,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  total_price: {
    type: Number,
    required: true,
  },
  travel: {
    type: String,
    required: true,
  },
  distance: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  paymentMethod: {
    type: String,
    required: true,
  },
  cardNo: {
    type: String,
  },
  upiId:{
    type:String,
  }
});

export default mongoose.model("Tickets", ticketSchema);
