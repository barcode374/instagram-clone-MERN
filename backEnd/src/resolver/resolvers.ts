
import { myPost, Post } from "../models/Post";
import { myUser, User } from "../models/User";
export const resolvers = {
  Query: {
    findOneUser: async (_:any,_id:String) => {return User.findOne(_id)}
  },
  Mutation: {
   
    createUser: async (_:any,{name,username,password}:myUser)=>{
        const newUser = new User({name,username,password});
      await newUser.save();
      return newUser;
    },
    createPost: async (_:any,{username,image}:myPost)=>{
      const newPost = new Post({username,image});
      
      // findMU.posts.push(newPost);
      // findMU.save();
    await User.updateOne(
       {username},
       {$push: {posts:newPost}},
       
     ).exec();
   
     return newPost;
      // User.findOne({username}).push(newPost).save();
      // x.posts.push(newPost);
      // x.save();
    }
  }
};
