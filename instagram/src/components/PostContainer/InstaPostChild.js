import React, { Component } from 'react';

class InstaLikes extends React.Component {
    constructor(props) {
        super(props)
        this.state ={
            post: props.icons,
            likes: props.icons.likes
        }
        console.log(this.state.likes);
    }

 incrementLike= () => {
        this.setState(prevState => {
            return {
                likes: prevState.likes + 1
            }
        })
        console.log(this.state.likes);
    }

render () {
return (
<div>
    <div className="likeIcons">
<i className="far fa-heart" onClick={this.incrementLike.bind(this)}></i>
<i className="far fa-comment"></i>    
</div>

<div>
<p className="likesP">{this.state.likes} likes</p>
</div>
</div>
)

} }

export default InstaLikes;