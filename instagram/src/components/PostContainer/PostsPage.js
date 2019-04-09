import React, { Component } from 'react';

import '../../../src/App2.css';
import  dummyData from '../../dummy-data';
import PostContainer from '../PostContainer/PostContainer';
// import '../../components/CommentSection/CommentSection.css';
// import '../src/components/PostContainer/PostContainer.css';
// import '../src/components/SearchBar/SearchBar.css';

import withAuthenticate from '../Authentication/withAuthenticate';

class PostsPage extends React.Component {
  constructor() {
    super();
    this.state ={
       post: dummyData,
       search: '',
       filteredPosts: [],
 
       
    }
   console.log(this.state.post);
  }

  // componentDidMount() {
  //   console.log("In CDM");
  //   this.setState ({post: dummyData});
  
  
  // }

  updateSearch(event) {
    event.preventDefault();
    this.setState({search: event.target.value.substr(0,20)});
  }

componentDidUpdate(){
  console.log(this.state.post);
  console.log ('component did update')
}


filterSearch =(e) => {
   
  e.preventDefault();
  let filteredPosts = this.state.post.filter(
    (post) => {
        return post.username.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1;
})
this.setState({
  filteredPosts,
  search: '',

});
}
  
logout() {
  localStorage.removeItem("username");
  window.location.reload();
}

  render() {

   
return(
  <div>
  <div className="SearchBar">
          <div className="logo">
         <img className="logoImg" src="https://rayabel.com/images/staticimages/instagram-header.png" alt="logo"></img>
         </div>
     <form className="form" onSubmit={this.filterSearch.bind(this)}>
        <input 
        className="SearchInput" 
        placeholder="Search"
        type="text"
        value={this.state.search}
        onChange={this.updateSearch.bind(this)}
        />
      </form>
      <div className="icons">
        <i className="far fa-compass"></i>
        <i className="far fa-heart"></i>
        <i className="far fa-user" onClick={this.logout.bind(this)}>Logout
        </i>
        </div>

      </div>

      {this.state.filteredPosts.length > 0 ? (
       <PostContainer post={this.state.filteredPosts} />
      ) : (
        <PostContainer post={this.state.post} />
      )}
</div>
)

}
}

export default PostsPage;




