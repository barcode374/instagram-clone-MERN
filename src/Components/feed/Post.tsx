import React,{useState} from 'react'
import testpost from './testpost.jpg';
import { AiFillHeart } from 'react-icons/ai';
import {Spring, config} from 'react-spring/renderprops';
import Comment from './Comment';
export default function Post(props:any) {
  const [liked,setLike] = useState(0);
  const [scale,setScale] = useState(0);
  const [comments,setComments] = useState(props.postComments);
  let like = () =>{
     liked==1?setLike(0):setLike(1);
     
      setScale(1)
        setTimeout(()=>{
        setScale(0);
        },100);
}
let addComment = (e:any) =>{
if(e.which == 13){
 if(e.target.value.length >0){
  setComments(comments.concat({name:'barcode',comment:e.target.value}));
  e.target.value = '';
 }
}
}
    return (
        <div className="Post d-flex flex-column bd-highlight">
    
            <div className="username p-2 bd-highlight"><img src={props.userDP}></img>{props.userName}</div>
  <div className="image p-2 bd-highlight"><img onDoubleClick={like} src={props.image}></img></div>
  <div className="comments p-2 bd-highlight d-flex flex-column bd-highlight mb-3">
    <div className="d-flex bd-highlight">
      <Spring
      from={{
        
       transform: 'scale(1.1,1.1)'
      }}
      to={{
        transform: scale?'scale(1.7,1.7)':'scale(1.1,1.1)',
        color:liked?'#f5182a':'white',
        
        
      }}
      config={{duration:0.1}}
      >
        { props=>(
          <AiFillHeart style={props} className={"heart"} onClick={like} ></AiFillHeart>
        )

        }
      
      </Spring>
       <input className="d-flex align-items-start"
        onKeyPress={addComment} placeholder="Add a comment"></input> <button className="d-flex align-items-end" onClick={addComment} type="submit">Post</button></div>
       {comments.map((cmnt:any)=>{
        return <Comment userName={cmnt.name} userComment={cmnt.comment}></Comment>
       })}
      </div>
            
            
        </div>
    )
}
