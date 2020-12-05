import React from 'react';
import './Nav.scss';
import { CgHome } from "react-icons/cg";
import { AiOutlineHeart } from "react-icons/ai";
import { AiTwotoneUpCircle } from "react-icons/ai";
export default function Nav() {
    return (
        <div>
            <nav className="navbar navbar-light myNav d-flex justify-content-between">
  <a className="navbar-brand" href="#">!nstagram</a>
  
  <form className="form-inline ">
      <input className="form-control" type="search" placeholder="Search" aria-label="Search" />
      
    </form>
    <div className="icons">
        <a className="navbar-brand" href="#"><CgHome /></a>
        <a className="navbar-brand" href="#"><AiOutlineHeart /></a>
        <a className="navbar-brand" href="#"><AiTwotoneUpCircle /></a>
    </div>
</nav>
        </div>
    )
}
