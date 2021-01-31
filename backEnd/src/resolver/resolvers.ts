
import { myPost, Post } from "../models/Post";
import { myUser, User } from "../models/User";
import {myFile, File} from "../models/File";
import {createWriteStream, mkdir} from "fs";
import * as JWT from "jsonwebtoken";
import {BUCKET_NAME, KEY} from "../private/key";
import {myS3} from "../private/AWS_S3";
import { request, response } from "express";
import aws from "aws-sdk";


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
      try {
        let token = req.cookies.authCookie;
     
        let userData:any = await JWT.verify(token,KEY);
        if(userData.username === args.username){
          return User.findOne({username:args.username})
         } 
      }catch{
        return null
      }
    //  let token = req.cookies.authCookie;
     
      // let userData:any = await JWT.verify(token,KEY);
    
    //  else {
      //  return null;
    //  }
    },
    authenticateUser: async (_:any,args:any, {res}:any) => {
      
    return User.findOne ({username:args.username,password:args.password}).then(async (user:any) =>{
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
      
        // console.log(file);
      const { createReadStream, filename, mimetype, encoding } = await file;
      // mkdir("images", { recursive: true }, (err) => {
      //   if (err) throw err;
      // });
      let stream =await createReadStream();
      console.log(stream._writeSteam);
 const uri = await myS3.upload({
      Body:stream,
      Bucket:BUCKET_NAME,
      Key:Math.random()+'-'+filename,
      ContentType:mimetype,
      
    }).promise();
    console.log(uri.Location);
      // let stream = await createReadStream();
      // // Process upload
      // const f = await storeUpload({ stream, filename, mimetype });
      // const upload = await processUpload(file);
       return {filename, mimetype, encoding, uri:uri.Location};
    },
  }
};
