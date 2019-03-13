import React from "react";

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
<i className="far fa-heart"></i>
<i className="far fa-comment"></i>    
</div>
<p className="likesP">{props.attribute.likes} likes</p>

        </div>

    )

}

export default InstaPostAtt;