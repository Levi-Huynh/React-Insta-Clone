import React from "react";

const Comment= props => {

    return (
<div className="commentContainer">


<p className="usernameComm">{props.comment.username}</p> 
<p className="textComm">{props.comment.text}</p>



</div>

    )


}

export default Comment;