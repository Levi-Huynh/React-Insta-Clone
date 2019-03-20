import React, { Component } from 'react';

import CommentSection from "../CommentSection/CommentSection";
import InstaLikes from './InstaPostChild';



const InstaPostAtt = props => {
    console.log(props.attribute);

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

<div>
<InstaLikes icons={props.attribute}/>
     
</div>



</div>

    )

}

export default InstaPostAtt;

