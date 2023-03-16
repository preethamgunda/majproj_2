import mongoose from "mongoose";

const tourSchema = mongoose.Schema({
  first_name: String,
  last_name: String,
  gender: String,
  Age: Number,
  location: String,
  tags: [String],
  imageFile: String,
  createdAt: {
    type: Date,
    default: new Date(),
  },
  likes: {
    type: [String],
    default: [],
  },
});

const TourModal = mongoose.model("Tour", tourSchema);

export default TourModal;
