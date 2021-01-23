import { gql, useMutation, useQuery } from '@apollo/client';
import React, { useState } from 'react'
import client from '../../GQLclient/client';
import './sign.scss';



export default function signUp() {
  const [fName,setFname] = useState("");
  const [lName,setLname] = useState("");
  const [username,setUsername] = useState("");
  const [password,setPassword] = useState("");
  let handleInput = (e) =>{
      switch(e.target.id){
        case 'Fname':{
          setFname(e.target.value);
          break;
        }
        case 'Lname':{
          setLname(e.target.value);
          break;
        }
        case 'username':{
          setUsername(e.target.value);
          break;
        }
        case 'password':{
          setPassword(e.target.value);
          break;
        }
      }
  }
  
  let SIGNUP = gql`
  mutation CREATE_USER($name:String!,$username:String!,$password:String!){
    createUser(name:$name,username:$username,password:$password){
      id
      username
    }
  }
  `
const [addUser, { data }] = useMutation(SIGNUP);

  let processSignUp = async (e) => {
    e.preventDefault();
    let fullName:string = fName + " " + lName;
    let status:any = await addUser({variables:{name:fullName,username:username, password:password}});
    console.log(status);
   const {id,unameretuRned} = status.data.createUser;
    if(id != undefined){
     
      console.log("signup success");
    }
    else {
      console.log(" error");
    }



  }
    return (
        <div className="d-flex justify-content-center mainForm ">
            <div>
<form>
  <div className="form-group  ">
      <div className="d-flex flex-row">
        <div className="d-flex flex-column">
    <label >First Name</label>
    <input type="text" onChange={handleInput} className="form-control" id="Fname" aria-describedby="emailHelp" placeholder="First Name"></input>
</div>
<div className="name d-flex flex-column">
    <label >Last Name</label>
    <input type="text" onChange={handleInput} className="form-control" id="Lname" aria-describedby="emailHelp" placeholder="Last Name"></input>
    </div>
    </div>
    
  </div>
  <div className="form-group">
    <label >Username</label>
    <input type="text" onChange={handleInput} className="form-control" id="username" placeholder="Username"></input>
  </div>
  <div className="form-group">
    <label >Password</label>
    <input type="password" onChange={handleInput} className="form-control" id="password" placeholder="Password"></input>
  </div>
  
  <button onClick={processSignUp} type="button" className="btn btn-primary">Submit</button>
</form>
</div>
        </div>
    )
}
