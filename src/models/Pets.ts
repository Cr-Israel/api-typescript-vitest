import mongoose from "../db/conn";
import { Schema } from "mongoose";

const Pet = mongoose.model(
  "Pet",
  new Schema(
    {
      name: {
        type: String,
        required: true,
      },
      age: {
        type: String,
        required: true,
      },
      description: {
        type: String,
        required: true,
      },
    },
    { timestamps: true }
  )
);

export default Pet;
