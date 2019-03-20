import React, { Component } from 'react';
import CommentSection from '../CommentSection/CommentSection';
import InstaPostAtt from '../PostContainer/InstaPostAtt';
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
}


export default PostContainer;