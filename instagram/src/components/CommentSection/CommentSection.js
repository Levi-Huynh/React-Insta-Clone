import React, { Component } from 'react';

import Comment from './Comment';


class CommentSection extends React.Component {
    constructor(props) {
        super(props)
        this.state ={
        comments: props.comment,
        text: ''
        }
    }

    handleChanges = e => {
        this.setState ({[e.target.name]: e.target.value,
                            }); 
    }

 addNewComment = (event, item) => {
     event.preventDefault();
    const newComment = {
        username: "jack10",
        text: item
    };
    this.setState({
        comments: [...this.state.comments, newComment]
    })
};

 submitItem = e => {
     e.preventDefault();
     this.addNewComment(e, this.state.text);
     this.setState({text:""});
     
 }

render() {
return (
   
<div>

        {this.state.comments.map((c,i) => 
     <Comment key={i} comment={c}/>)}
 
  <form onSubmit ={this.submitItem} add={this.addNewComment}>
            <input 

            type="text"
            value={this.state.text}
            name="text"
            onChange={this.handleChanges}
            placeholder="Add a comment..."
            />

  </form>
    </div>

)

}

}

export default CommentSection;
// const CommentSection = props => {

//     return (
// <div className="CommentSection">

//     {props.commentList.map(item => {
//         return <Comment key={item.username} comment={item}/>
//     })}
//     <p className="timestamp">{props.timestamp}</p>
//     <input className="inputComm" placeholder="Add a comment..."/>
// </div>)
 

// }

// CommentSection.propTypes = {
//     item: PropTypes.arrayOf(
//         PropTypes.shape({
//          username: PropTypes.string.isRequired,
//          text: PropTypes.string.isRequired   
//         })
//     )
// };

