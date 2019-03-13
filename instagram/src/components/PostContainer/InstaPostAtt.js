import React from "react";

const InstaPostAtt = props => {

    return (
<div>
<img src={props.attribute.thumbnailUrl} alt={props.attribute.username}></img>
<h3>{props.attribute.username}</h3>
<img src={props.attribute.imageUrl} alt={props.attribute.username}></img>
<p>{props.attribute.likes}</p>

        </div>

    )

}

export default InstaPostAtt;