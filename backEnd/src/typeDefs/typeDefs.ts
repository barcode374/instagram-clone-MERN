import { gql } from "apollo-server-express";

 export const typeDefs = gql`
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
    firstName: String!
    lastName: String!
    password: String!
  }
  type Mutation {
    createCat(name: String!): Cat!
    createUser(firstName:String!,lastName:String!,password:String!):User!
    
  }
`;
