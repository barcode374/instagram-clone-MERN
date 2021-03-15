import React,{useContext} from "react";

import Post from "./Post";

import "./feed.scss";
import testimage from "./testpost.jpg";
import UploadFile from "./UploadFile";
import SelectPost from "./Post/SelectPost";
import { dimContext } from "../../Contexts/dimContext";


export default function Feed() {

  let toDim = useContext(dimContext);
  // toDim['setDim'](true)
  console.log(toDim);

  return (
    <div className="d-flex align-items justify-content-center bd-highlight" >
      
      {/* <div className="one p-2 flex-fill justify-content-start bd-highlight"></div> */}
      <div className="one p-2 align-items justify-content-center bd-highlight">
      {/* <UploadFile></UploadFile> */}
      <div style={{}}>
          <SelectPost click={true}></SelectPost>
         
        </div>
<Post 
          postComments={[
            {
              name: "hizqeel",
              comment: "this is shit",
            },
            {
              name: "javed",
              comment: "this is not shit",
            },
          ]}
          image={testimage}
          userName="hizqeel.nef"
          userDP={testimage}
        ></Post>
      </div>
      {/* <div className="three p-2 flex-fill  justify-content-end bd-highlight"></div> */}
    </div>
  );
}
