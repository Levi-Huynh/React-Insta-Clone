import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import  dummyData from './dummy-data';
import PostContainer from './Components/PostContainer/PostContainer';
import './Components/PostContainer/PostContainer.css';

class App extends React.Component {
  constructor() {
    super();
    this.state ={
       post: [],
       search: '',
       filteredPosts:  []
       
    }
    console.log("In the constructor");
  }


  componentDidMount() {
    console.log("In CDM");
    this.setState ({post: dummyData});
   
    
  }

  updateSearch(event) {
    this.setState({search: event.target.value.substr(0,20)});
  }

  filterSearch =(e) => {
   
    e.preventDefault();
    let filteredPosts = this.state.post.filter(
      (post) => {
          return post.username.indexOf(this.state.search) !== -1;
  })
this.setState({
  post: filteredPosts,
  search: ''
});
}

  

  render() {
    console.log("In render");
    return (
      
     
      <div className="App">
       <form>
          <input 
          className="SearchInput" 
          placeholder="Search..."
          type="text"
          value={this.state.search}
          onChange={this.updateSearch.bind(this)}
          />
        </form>

        <button onClick={this.filterSearch.bind(this)}>Search Posts</button>


          {this.state.post.length > 0 ? (
          <PostContainer post={this.state.post} />
        ) : (
          <h2>Loading...</h2>
        )}
      </div>
    );
 
  }
 
}

export default App;
