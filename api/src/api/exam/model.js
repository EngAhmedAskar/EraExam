import mongoose, { Schema } from "mongoose";
const random = require("mongoose-simple-random");
import { uid } from "rand-token";

const statuses = ["SENT", "OPEND", "ANSWERED", "SUSPENDED"];
const resultes = ["PASS", "FAIL"];

const examSchema = new Schema(
  {
    email: {
      type: String,
      match: /^\S+@\S+\.\S+$/,
      required: true,
      unique: true,
      trim: true,
      lowercase: true
    },
    status: {
      type: String,
      enum: statuses,
      default: "SENT",
      index: true
    },
    result: {
      type: String,
      enum: resultes,
      default: "FAIL"
    },
    start_time: {
      type: Date
    },
    end_time: {
      type: Date
    },
    spent_time: {
      type: Number,
      default: 120
    },
    questions: [
      {
        _question_id: {
          type: Schema.Types.ObjectId,
          ref: "question"
        },
        description: {
          type: String,
          ref: "question"
        },
        answer: String,
        //I can calculate it based on last saved snapshot time
        spent_time: Number,
        snap_shots: [String]
      }
    ],
    token: {
      type: String,
      unique: true,
      index: true,
      default: () => uid(32)
    }
  },
  {
    timestamps: true
  }
);

examSchema.plugin(random);

examSchema.methods = {
  view(full) {
    let view = {};
    let fields = [
      "_id",
      "email",
      "status",
      "result",
      "start_time",
      "end_time",
      "spent_time",
      "questions"
    ];

    if (full) {
      fields = [
        "_id",
        "email",
        "statu",
        "result",
        "start_time",
        "end_time",
        "spent_time",
        "questions"
      ];
    }

    fields.forEach(field => {
      view[field] = this[field];
    });

    return view;
  }
};
const model = mongoose.model("exam", examSchema);

export const schema = model.schema;
export default model;
