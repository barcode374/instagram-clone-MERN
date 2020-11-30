import React from 'react'

import Post from './Post';

import './feed.scss';
import testimage from './testpost.jpg';
export default function Feed() {
    

    return (
        <div className="d-flex align-items justify-content-center bd-highlight">
        {/* <div className="one p-2 flex-fill justify-content-start bd-highlight"></div> */}
        <div className="one p-2 align-items justify-content-center bd-highlight">
       <Post postComments={
         [
       {
       name:'hizqeel',
       comment:'this is shit'
        
       },
       {
        name:'javed',
        comment:'this is not shit'
         
      }
    ]
       } 
       image={testimage}
       userName="hizqeel.nef"
       userDP={testimage}
       name="barcode"></Post>

<Post postComments={
         [
       {
       name:'hizqeel',
       comment:'this is shit'
        
       },
       {
        name:'javed',
        comment:'this is not shit'
         
      }
    ]
       } 
       image={testimage}
       userName="barcode"
       userDP={testimage}
       name="barcode"></Post>

        </div>
        
        {/* <div className="three p-2 flex-fill  justify-content-end bd-highlight"></div> */}
      </div>
    )
}


