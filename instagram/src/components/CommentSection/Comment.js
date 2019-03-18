import React, {Component} from 'react';

const Comment = props => {

    return (
        <div>
            <p>{props.comment.username}</p>
            <p>{props.comment.text}</p>
            </div>

    )

}

export default Comment;