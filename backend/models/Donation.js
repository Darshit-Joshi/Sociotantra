import mongoose from "mongoose";
const donateSchema = new mongoose.Schema(
  {
    amount: { type: Number, required: true },
    currency: {
      type: String,
      default: "INR",
    },

    paymentId: {
      type: String,
      required: true,
      unique: true,
    },

    orderId: {
      type: String,
      required: true,
    },
    status: {
      type: String,
      enum: ["created", "success", "failed"],
      default: "created",
    },

    gateway: {
      type: String,
      default: "razorpay",
    },
  },
  {
    timestamps: true, // creates createdAt & updatedAt automatically
  },
);
module.exports = mongoose.model("Donation", donationSchema);
