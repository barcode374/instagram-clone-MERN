import mongoose,{ Schema, Document } from "mongoose";
export interface myFile extends Document {
    filename: string;
    mimetype: string;
    path: string;
}

const fileSchema = new Schema({
  filename: String,
  mimetype: String,
  path: String,
});
export const File = mongoose.model<myFile>("File", fileSchema);