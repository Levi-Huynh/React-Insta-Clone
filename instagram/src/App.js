import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import '../src/components/SearchBar/SearchBar.css';
import '../src/components/PostContainer/PostContainer.css';
import '../src/components/CommentSection/CommentSection.css';
import dummyData from './dummy-data';
import PostContainer from './components/PostContainer/PostContainer';
import CommentSection from './components/CommentSection/CommentSection';
import Comment from './components/CommentSection/Comment';
import SearchBar from './components/SearchBar/searchBar';

class App extends Component {
    constructor() {
      super();
      this.state = {
       dummyData : dummyData
      }
    }


  render() {
    return (
      <div className="App">
     
       <PostContainer post={this.state.dummyData}/>
  
      </div>
    )
  }
}

export default App;
