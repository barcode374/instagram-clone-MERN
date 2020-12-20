import React from 'react'
import './sign.scss';
export default function signUp() {
    return (
        <div className="d-flex justify-content-center mainForm ">
            <div>
<form>
  <div className="form-group  ">
      <div className="d-flex flex-row">
        <div className="d-flex flex-column">
    <label >First Name</label>
    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"></input>
</div>
<div className="name d-flex flex-column">
    <label >Last Name</label>
    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"></input>
    </div>
    </div>
    
  </div>
  <div className="form-group">
    <label >Username</label>
    <input type="text" className="form-control" id="exampleInputPassword1" placeholder="Password"></input>
  </div>
  <div className="form-group">
    <label >Password</label>
    <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password"></input>
  </div>
  
  <button type="submit" className="btn btn-primary">Submit</button>
</form>
</div>
        </div>
    )
}
