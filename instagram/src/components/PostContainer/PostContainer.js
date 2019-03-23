import React, { Component } from 'react';
import CommentSection from '../CommentSection/CommentSection';
import InstaPostAtt from '../PostContainer/InstaPostAtt';
import PropTypes from 'prop-types';
// import SearchBar from '../SearchBar/SearchBar';
 
const PostContainer = props => {


    return (
<div>


   
 {props.post.map((insta) => {  
        return (
        <div>
   
   <InstaPostAtt attribute={insta}/>
        
         <CommentSection comment={insta.comments} time={insta.timestamp}/>
          </div>)
         
        })}
      
</div>

    )

    PostContainer.propTypes = {
    post: PropTypes.arrayOf(
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
}


export default PostContainer;