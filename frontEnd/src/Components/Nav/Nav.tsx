import React from 'react';
import './Nav.scss';
import { CgHome } from "react-icons/cg";
import { AiOutlineHeart } from "react-icons/ai";
import { AiFillHeart } from "react-icons/ai";
import { AiTwotoneUpCircle } from "react-icons/ai";
import { HiOutlineHome } from 'react-icons/hi';

import { HiHome } from 'react-icons/hi';

import { Link } from 'react-router-dom';
import SelectPost from '../feed/Post/SelectPost';
interface Props{
    home:boolean,
    likes:boolean,
    profile:boolean
}

export default function Nav(props:Props) {
   let linkClickedColor = "white";
   let notLinkClickedColor = "gray"
   const { home,likes,profile } = props;
    return (
        <div>
            <nav className="navbar navbar-light myNav d-flex justify-content-between">
  <a className="navbar-brand" href="#">!nstagram</a>
  
  <form className="form-inline ">
      <input className="form-control" type="search" placeholder="Search" aria-label="Search" />
  </form>
        <div className="icons">
            
            <Link className="links" to="/">{home ? <HiHome style={home ? { color: linkClickedColor } : { color: notLinkClickedColor }} /> : <HiOutlineHome style={home ? { color: linkClickedColor } : { color: notLinkClickedColor }} />}</Link>
            <Link className="links" to="/likes">{likes?<AiFillHeart style={likes?{color:linkClickedColor}:{ color:notLinkClickedColor }} />:<AiOutlineHeart style={likes?{color:linkClickedColor}:{ color:notLinkClickedColor }} />}</Link>
            <Link className="links" to="/profile"><AiTwotoneUpCircle style={profile ? { color: linkClickedColor } : { color: notLinkClickedColor }} /></Link>
                    
    </div>
</nav>
        </div>
    )
}
