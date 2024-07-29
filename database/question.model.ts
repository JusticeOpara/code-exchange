import { Document, model, models, Schema } from "mongoose";

export interface IQuestion extends Document {
  title: string;
  content: string;
  view: number;
  upVotes: Schema.Types.ObjectId[];
  tags: Schema.Types.ObjectId[];
  dowVotes: Schema.Types.ObjectId[];
  author: Schema.Types.ObjectId;
  answers: Schema.Types.ObjectId[];
  createdAt: Date;
}

const questionSchema = new Schema({
  title: { type: String, required: true },
  views: {type:Number, default:0},
  content: { type: String, required: true },
  upVotes: [{ type: Schema.Types.ObjectId, ref: "User" }],
  downVotes: [{ type: Schema.Types.ObjectId, ref: "User" }],
  tags: [{ type: Schema.Types.ObjectId, ref: "Tag" }] ,
  author: { type: Schema.Types.ObjectId, ref: "User" },
  answers: [{ type: Schema.Types.ObjectId, ref: "User" }],
  createdAt: { type: Date, default: Date.now },
});
export default models.Question || model<IQuestion>("Question", questionSchema);
