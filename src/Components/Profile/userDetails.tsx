import { profile } from 'console'
import React from 'react'
import './profile.scss';
import image from '../feed/testpost.jpg';
import PhotoGrid from './photoGrid';
interface Props {}

function UserDetails(props: Props) {
    const {} = props

    return (
        <div className="d-flex justify-content-center">
            <div className="d-flex flex-column">
        <div className="main flex-row bd-highlight mb-3 d-flex ">
            <div className="profilepic p-2 bd-highligh">
                <img src={image} alt=""/>
            </div>
            <div className="p-2 d-flex flex-column bd-highlight userDetails">
            <div className="p-2 bd-highlight username">hizqeel.nef</div>
  <div className="p-2 bd-highlight info">
  <span style={{marginLeft:"0px !important"}}>  <b>10</b> posts</span> <span><b>10</b> followers</span><span><b>157</b> following</span>
</div>
  <div className="p-2 bd-highlight"><b>حزقیل جاوید</b></div>
            </div>
        </div>


        <PhotoGrid />
       
        </div>
        </div>
    )
}

export default UserDetails
