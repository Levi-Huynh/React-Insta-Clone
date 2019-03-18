import React, { Component } from 'react';
import CommentSection from '../CommentSection/CommentSection';
import InstaPostAtt from '../PostContainer/InstaPostAtt';
// import SearchBar from '../SearchBar/SearchBar';

class PostContainer extends React.Component {
    constructor(props) {
        super(props)
        this.state={
        post: props.post,
        likes: 0,
      
        }
        
      console.log(this.state.post);
    }

    incrementScore= () => {
        this.setState(prevState => {
            return {
                likes: prevState.likes + 1
            }
        })
    }

 



render() {
    return (
<div>



          {/* <SearchBar insta={this.state.post} /> */}
       
     
 {this.state.post.map((insta) => {  
        return (
        <div>
   
         <InstaPostAtt attribute={insta} incrementScore={this.incrementScore} likes={this.state.likes}/>
         <CommentSection comment={insta.comments}/>
          </div>)
         
        })}
      
</div>

    )
}
}

export default PostContainer;