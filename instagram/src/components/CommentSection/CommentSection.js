import React from "react";
import Comment from './Comment';
import PropTypes from "prop-types";

const CommentSection = props => {

    return (
<div className="CommentSection">

    {props.commentList.map(item => {
        return <Comment key={item.username} comment={item}/>
    })}
    <p className="timestamp">{props.timestamp}</p>
    <input className="inputComm" placeholder="Add a comment..."/>
</div>)
 

}

CommentSection.propTypes = {
    item: PropTypes.arrayOf(
        PropTypes.shape({
         username: PropTypes.string.isRequired,
         text: PropTypes.string.isRequired   
        })
    )
};

export default CommentSection;