import { ApolloServer, gql } from "apollo-server-express";
import express from "express";
import { Server } from "http";
import mongoose from "mongoose";
import { resolvers } from "./resolver/resolvers";
import { typeDefs } from "./typeDefs/typeDefs";


const startServer = async () => {
  const app:express.Application = express();

  const server = new ApolloServer({
    typeDefs,
    resolvers
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
