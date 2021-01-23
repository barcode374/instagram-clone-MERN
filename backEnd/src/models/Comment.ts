import mongoose, {Schema, Document} from "mongoose";

export interface myComment extends Document {
    postID: string;
    username: string;
    text: string;
    time: number;
}

export const commentSchema = new Schema({
    postID:String,
    username:String,
    text: String,
    time: Number
})

export const Comment = mongoose.model<myComment>("Comment",commentSchema);