import mongoose from 'mongoose';

const ReviewSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'Please provide client name'],
      trim: true,
      maxlength: 60,
    },
    role: {
      type: String,
      trim: true,
      default: 'Verified Client',
    },
    location: {
      type: String,
      trim: true,
      default: 'Global Client',
    },
    serviceScope: {
      type: String,
      default: 'Next.js & MERN Architecture',
    },
    rating: {
      type: Number,
      required: true,
      min: 1,
      max: 5,
      default: 5,
    },
    metric: {
      type: String,
      default: 'Project Delivered Successfully',
    },
    metricSub: {
      type: String,
      default: 'Verified Client Review',
    },
    text: {
      type: String,
      required: [true, 'Please provide review content'],
      trim: true,
      maxlength: 1000,
    },
    isApproved: {
      type: Boolean,
      default: true,
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.models.Review || mongoose.model('Review', ReviewSchema);