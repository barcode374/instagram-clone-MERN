import { ApolloServer, gql } from "apollo-server-express";
import express, { request } from "express";
import { Server } from "http";
import mongoose from "mongoose";
import { resolvers } from "./resolver/resolvers";
import { typeDefs } from "./typeDefs/typeDefs";
import { graphqlUploadExpress } from "graphql-upload";
// var cookieParser = require('cookie-parser')
import cookieParser from "cookie-parser";




const startServer = async () => {
  const app:express.Application = express();

  app.use(cookieParser())
  
  
  const server = new ApolloServer({
    
    typeDefs,
    resolvers,
    context:({req,res})=>({req,res}),
    
    
    
  });
 



  server.applyMiddleware( {app} );

  await mongoose.connect("mongodb://localhost:27017/instaClone-DB", {
    useNewUrlParser: true,
    useUnifiedTopology:true
  });

  app.listen({ port: 5000 }, () =>
    console.log(`🚀 Server ready at http://localhost:5000${server.graphqlPath}`)
  );
};

startServer();
