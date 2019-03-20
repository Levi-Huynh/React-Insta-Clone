import React from "react";
import CommentSection from "../CommentSection/CommentSection";

// incrementScore= () => {
//     this.setState(prevState => {
//         return {
//             likes: prevState.likes + 1
//         }
//     })
// }


const InstaPostAtt = props => {

    return (
<div className="InstaPostAtt">
<div className="logoHeader">
<div className="thumbnail">
<img className="thumbnail1" src={props.attribute.thumbnailUrl} alt={props.attribute.username}></img>
</div>
<h3>{props.attribute.username}</h3>
</div>
<div className="instaImage">
<img className="instaImage1" src={props.attribute.imageUrl} alt={props.attribute.username}></img>
</div>
<div className="likeIcons">
<i className="far fa-heart" onClick={props.incrementLikes}></i>
<i className="far fa-comment"></i>    
</div>
<p className="likesP">{props.likes} likes</p>


        </div>

    )

}

export default InstaPostAtt;