import React, { useState } from "react";

import { AiFillHeart } from "react-icons/ai";
import { Spring } from "react-spring/renderprops";
import Comment from "./Comment";
interface Props {
  userName: string;
  postComments: Array<Object>;
  userDP: string;
  image: string;
}
export default function Post(props: Props) {
  const { postComments, userDP, userName, image } = props;
  console.log(typeof image);
  console.log(typeof postComments);
  const [liked, setLike] = useState(0);
  const [scale, setScale] = useState(0);
  const [comments, setComments] = useState(postComments);

  let like = () => {
    liked === 1 ? setLike(0) : setLike(1);

    setScale(1);
    setTimeout(() => {
      setScale(0);
    }, 100);
  };
  let addComment = (e: any) => {
    if (e.which === 13) {
      if (e.target.value.length > 0) {
        setComments(
          comments.concat({ name: "barcode", comment: e.target.value })
        );
        e.target.value = "";
      }
    }
  };

  return (
    <div className="Post d-flex flex-column bd-highlight">
      <div className="username p-2 bd-highlight">
        <img alt="" src={userDP}></img>
        {userName}
      </div>
      <div className="image p-2 bd-highlight">
        <img onDoubleClick={like} alt="" src={image}></img>
      </div>
      <div className="comments p-2 bd-highlight d-flex flex-column bd-highlight mb-3">
        <div className="d-flex bd-highlight">
          <Spring
            from={{
              transform: "scale(1.1,1.1)",
            }}
            to={{
              transform: scale ? "scale(1.7,1.7)" : "scale(1.1,1.1)",
              color: liked ? "#f5182a" : "white",
            }}
            config={{ duration: 0.1 }}
          >
            {(props) => (
              <AiFillHeart
                style={props}
                className={"heart"}
                onClick={like}
              ></AiFillHeart>
            )}
          </Spring>
          <input
            className="d-flex align-items-start"
            onKeyPress={addComment}
            placeholder="Add a comment"
          ></input>{" "}
          <button
            className="d-flex align-items-end"
            onClick={addComment}
            type="submit"
          >
            Post
          </button>
        </div>
        {comments.map((cmnt: any) => {
          return (
            <Comment userName={cmnt.name} userComment={cmnt.comment}></Comment>
          );
        })}
      </div>
    </div>
  );
}
