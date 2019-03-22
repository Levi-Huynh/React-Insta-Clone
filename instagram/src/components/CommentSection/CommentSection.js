import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Comment from './Comment';


class CommentSection extends React.Component {
    constructor(props) {
        super(props)
        this.state ={
        comments: props.comment,
        text: '',
        timeS: props.time
        }
    }

   

    handleChanges = e => {
        this.setState ({[e.target.name]: e.target.value,
         
                            }); 
                          
                            
    }

 addNewComment = (event, item) => {
     event.preventDefault();
     let username1 = localStorage.getItem('username');
    const newComment = {
        username: `${username1}`,
        text: item
    };

   
    this.setState({
        comments: [...this.state.comments, newComment]
    })
    localStorage.setItem("comments", JSON.stringify(newComment));
};

// updateInput(key, value) {
//     // update react state
//     this.setState({ [key]: value });
  
  
//   }

  // componentWillUnmount() {
  //   window.removeEventListener(
  //     "beforeunload",
  //     this.saveStateToLocalStorage.bind(this)
  //   );

  //   // saves if component has a chance to unmount
  //   this.saveStateToLocalStorage();
  // }

  // hydrateStateWithLocalStorage() {
  //   // for all items in state
  //   for (let key in this.state) {
  //     // if the key exists in localStorage
  //     if (localStorage.hasOwnProperty(key)) {
  //       // get the key's value from localStorage
  //       let value = localStorage.getItem(key);

  //       // parse the localStorage string and setState
  //       try {
  //         value = JSON.parse(value);
  //         this.setState({ [key]: value });
  //       } catch (e) {
  //         // handle empty string
  //         this.setState({ [key]: value });
  //       }
  //     }
  //   }
  // }

  // saveStateToLocalStorage() {
  //   // for every item in React state
  //   for (let key in this.state) {
  //     // save to localStorage
  //     localStorage.setItem(key, JSON.stringify(this.state[key]));
  //   }
  // }

 submitItem = e => {
     e.preventDefault();
     this.addNewComment(e, this.state.text);
     this.setState({text:""});
    localStorage.setItem("text", "");
 }

render() {
return (
   
<div className="commentContainer">
<div className="topCommentSect">
        {this.state.comments.map((c,i) => 
     <Comment key={i} comment={c}/>)}
     <p className="timestamp">{this.state.timeS}</p>
    
  <form onSubmit ={this.submitItem} add={this.addNewComment}>
            <input 
            className="inputComm"
            type="text"
            value={this.state.text}
            name="text"
            onChange={this.handleChanges}
            placeholder="Add a comment..."
            />

  </form>
  </div>
    </div>

)

}


// CommentSection.propTypes = {
//     comments: PropTypes.arrayOf(
//         PropTypes.shape({
//             username: PropTypes.string.isRequired,
//             text: PropTyptes.string.isRequired
//         })
//     )
// };

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

