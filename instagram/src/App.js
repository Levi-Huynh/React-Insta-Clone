import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import  dummyData from './dummy-data';
import PostContainer from './components/PostContainer/PostContainer';


class App extends React.Component {
  constructor() {
    super();
    this.state ={
       post: [],
       search: '',
       filteredPosts: [],
       likes: 0
       
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

incrementLikes= () => {
    this.setState(prevState => {
        return {
            likes: prevState.likes + 1
        }
    })
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
       <form onSubmit={this.filterSearch.bind(this)}>
          <input 
          className="SearchInput" 
          placeholder="Search..."
          type="text"
          value={this.state.search}
          onChange={this.updateSearch.bind(this)}
          />
        </form>

        <button onClick={this.filterSearch.bind(this)}>Search Posts</button>

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
