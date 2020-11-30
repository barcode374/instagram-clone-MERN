import React from 'react'

export default function Comment(props:any) {
    return (
        <div className="comment"><p className="userName">@{props.userName} </p><p className="text">{props.userComment}</p></div>
    )
}
