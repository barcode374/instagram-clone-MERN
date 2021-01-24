import { gql } from "apollo-server-express";

 export const typeDefs = gql`
#  scalar Uploaded
type File {
    filename:String!
    mimetype:String!
    encoding:String!
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
  type AuthenticationToken {
    username:String!
    token: String!
  }
  type Query {

   

    authenticateUser(username:String!,password:String!):Boolean!
    findOneUser(username:String!):User
    files: [File!]
  }

  type Mutation {
    createUser(name:String!,username:String!,password:String!):User!
    createPost(username:String!,image:Upload!,title:String):Post!
    uploadFile(file: Upload!):File!
  }
`;
