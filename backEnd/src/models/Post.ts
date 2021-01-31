import mongoose, {Schema, Document} from "mongoose";
import { myComment, commentSchema} from './Comment';
export interface myPost extends Document {
    username: string;
    image: String;
    comments: [myComment];
}

export const postSchema:Schema = new Schema({
    username: String ,
    image: String,
    comments:[commentSchema] 
})
// const userSchema:Schema = new Schema({
//     firstName:{type:String},
//     lastName:{type:String},
//     password:{type:String}
// })
export const Post = mongoose.model<myPost>("Post",postSchema);
// export const User = mongoose.model<myUser>("User",userSchema);