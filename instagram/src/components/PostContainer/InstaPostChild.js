import React, { Component } from 'react';

class InstaLikes extends React.Component {
    constructor(props) {
        super(props)
        this.state ={
            post: props.icons,
            likes: props.icons.likes,
            colored: false
        }
        console.log(this.state.likes);
    }

 incrementLike= () => {
        this.setState(prevState => {
            return {
                likes: prevState.likes + 1,
                colored: !this.state.colored
            }
        })
        console.log(this.state.likes);
    }

render () {
return (
<div className="likeWrapper">
    <div className="likeIcons">
<i className= {this.state.colored? " red-c far fa-heart" : "far fa-heart"} onClick={this.incrementLike.bind(this)}></i>
<i className="far fa-comment"></i>    
</div>

<div>
<p className="likesP">{this.state.likes} likes</p>
</div>
</div>
)

} }

export default InstaLikes;