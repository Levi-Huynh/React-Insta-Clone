import React from "react";
import CommentSection from "../CommentSection/CommentSection";
import InstPostAtt from '../PostContainer/InstaPostAtt';
import SearchBar from '../SearchBar/searchBar';

const PostContainer = props => {

    return (
<div>

{props.post.map((item) => {
    return (<div>
        <SearchBar/>
        <InstPostAtt attribute={item}/>
        <CommentSection commentList={item.comments} timestamp={item.timestamp} />
        
        </div>)
})}

</div>

    )


}

export default PostContainer;