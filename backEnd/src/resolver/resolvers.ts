
import { myUser, User } from "../models/User";
export const resolvers = {
  Query: {
    findOneUser: async (_:any,_id:String) => {return User.findOne(_id)}
  },
  Mutation: {
   
    createUser: async (_:any,{firstName,lastName,password}:myUser)=>{
        const newUser = new User({firstName,lastName,password});
      await newUser.save();
      return newUser;
    }
  }
};
