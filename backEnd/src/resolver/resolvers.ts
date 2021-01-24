
import { myPost, Post } from "../models/Post";
import { myUser, User } from "../models/User";
import {myFile, File} from "../models/File";
import {createWriteStream, mkdir} from "fs";
import * as JWT from "jsonwebtoken";
import {KEY} from "../private/key";
import { request, response } from "express";
const storeUpload = async ({ stream, filename, mimetype }:any) => {
  const id = "69";
  console.log(filename);
  const path = `images/${filename}`;
  // (createWriteStream) writes our file to the images directory
  return new Promise((resolve, reject) =>
    stream
      .pipe(createWriteStream(path))
      .on("finish", () => resolve({ path, filename, mimetype }))
      .on("error", reject)
  );
};

// const processUpload = async (fileUp: any) => {
//   console.log(fileUp);
//   const { createReadStream, filename, mimetype } = await fileUp;
//   let stream = createReadStream();
//   const file = await storeUpload({ stream, filename, mimetype });
  
 
//   return file;
// };

export const resolvers = {
  Query: {
    findOneUser: async (_:any,args:any,{req,res}:any) => {
     let token = req.cookies.authCookie;
     
      let userData:any = await JWT.verify(token,KEY);
     if(userData.username === args.username){
      return User.findOne({username:args.username})
     } 
     else {
       return null;
     }
    },
    authenticateUser: async (_:any,args:any, {res}:any) => {
      
    return User.findOne ({username:args.username,password:args.password}).then(async(user:myUser) =>{
      if(user === null){
       return false;
      }
      else{
        let token = JWT.sign({username:args.username},KEY);
        res.cookie('authCookie',token,{httpOnly:true});
        return true;
      }    
      });
     

    }

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
    },
    uploadFile: async (_:any, {file}:any) => {
      
        console.log(file);
      const { createReadStream, filename, mimetype, encoding } = await file;
      // mkdir("images", { recursive: true }, (err) => {
      //   if (err) throw err;
      // });
      let stream = await createReadStream();
      // // Process upload
      const f = await storeUpload({ stream, filename, mimetype });
      // const upload = await processUpload(file);
       return file;
    },
  }
};
