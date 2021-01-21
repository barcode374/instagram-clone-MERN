import mongoose, {Schema, Document} from "mongoose";

export interface myUser extends Document {
    firstName: string;
    lastName: string;
    password: string;
}

const userSchema:Schema = new Schema({
    firstName:{type:String},
    lastName:{type:String},
    password:{type:String}
})

export const User = mongoose.model<myUser>("User",userSchema);

// export const User:any = mongoose.model("User", { firstName: String, lastName: String, password: String  });
