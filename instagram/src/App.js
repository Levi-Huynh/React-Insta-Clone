import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import  dummyData from './dummy-data';
import PostContainer from './components/PostContainer/PostContainer';
import '../src/components/CommentSection/CommentSection.css';
import '../src/components/PostContainer/PostContainer.css';
import '../src/components/SearchBar/SearchBar.css';

class App extends React.Component {
  constructor() {
    super();
    this.state ={
       post: [],
       search: '',
       filteredPosts: [],
 
       
    }
    console.log("In the constructor");
  }


  componentDidMount() {
    console.log("In CDM");
    this.setState ({post: dummyData});
   
    
  }

  updateSearch(event) {
    event.preventDefault();
    this.setState({search: event.target.value.substr(0,20)});
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
  

  render() {

    return (
      
   
      <div className="App">
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
          <i className="far fa-user"></i>
          </div>

        {/* <button onClick={this.filterSearch.bind(this)}>Search Posts</button> */}
        </div>

        {this.state.filteredPosts.length > 0 ? (
         <PostContainer post={this.state.filteredPosts} likes={this.state.likes} incrementLikes={this.incrementLikes}/>
        ) : (
          <PostContainer post={this.state.post} likes={this.state.likes} incrementLikes={this.incrementLikes}/>
        )}


      </div>
    );
 
  }
 
}

export default App;

// {this.state.post.length > 0 ? (
//   <PostContainer post={this.state.post} />
// ) : (
//   <h2>Loading...</h2>
// )}
