import { gql } from "apollo-server-express";

 export const typeDefs = gql`
#  scalar Uploaded
  type Query {
    hello: String!
    cats: [Cat!]!
    findCat(name:String!): Cat
    findOneUser(_id:String!):User!
  }

  type Cat {
    id: ID!
    name: String!
  }
  type User {
    id: ID!
    name: String!
    username: String!
    password: String!

  }
  type Post {
    id: ID!
    username:String!
    image:Upload!
    title:String
  }
  type Mutation {
    createUser(name:String!,username:String!,password:String!):User!
    createPost(username:String!,image:Upload!,title:String):Post!
  }
`;
