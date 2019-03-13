import React from "react";
import CommentSection from "../CommentSection/CommentSection";
import InstPostAtt from '../PostContainer/InstaPostAtt';
import SearchBar from '../SearchBar/searchBar';
import PropTypes from "prop-types";

const PostContainer = props => {

    return (
<div>

{props.post.map((item) => {
    return (<div>
        
        <SearchBar key={item.timestamp}/>
 

        <InstPostAtt key={item.likes} attribute={item}/>
      

        <CommentSection key={item.username} commentList={item.comments} timestamp={item.timestamp} />
     
        </div>)
})}

</div>

    )


}

PostContainer.propTypes = {
    item: PropTypes.arrayOf(
        PropTypes.shape({
        timestamp: PropTypes.string.isRequired,
        
        comments: PropTypes.arrayOf(
            PropTypes.shape({
                username: PropTypes.string,
                text: PropTypes.string
            })
        )

        })
    )
}

export default PostContainer;