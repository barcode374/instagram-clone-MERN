import React from "react";
import "./sign.scss";
export default function signIn() {
  return (
    <div className="d-flex justify-content-center mainForm ">
      <div>
        <form>
          <div className="d-flex flex-row">
            <div className="form-group" style={{ marginRight: "20px" }}>
              <label>Username</label>
              <input
                type="text"
                className="form-control"
                id="exampleInputPassword1"
                placeholder="Username"
              ></input>
            </div>
            <div className="form-group">
              <label>Password</label>
              <input
                type="password"
                className="form-control"
                id="exampleInputPassword1"
                placeholder="Password"
              ></input>
            </div>
          </div>
          <button type="submit" className="btn btn-primary">
            Login
          </button>
        </form>
      </div>
    </div>
  );
}
