import React from "react";
import Comment from './Comment';

const CommentSection = props => {

    return (
<div>
        
    {props.commentList.map(item => {
        return <Comment comment={item}/>
    })}
    <p>{props.timestamp}</p>
    <input/>
</div>)
 

}

export default CommentSection;