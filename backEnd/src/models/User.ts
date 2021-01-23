import mongoose, {Schema, Document} from "mongoose";
import { myPost, postSchema } from "./Post";

export interface myUser extends Document {
    name:string,
    username:string,
    password: string,
    posts:[myPost]
}

const userSchema:Schema = new Schema({
    name:String,
    username:String,
    password:String,
    posts:[postSchema]
})

export const User = mongoose.model<myUser>("User",userSchema);

// export const User:any = mongoose.model("User", { firstName: String, lastName: String, password: String  });
