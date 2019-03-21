import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
// import  dummyData from './dummy-data';
// import PostContainer from './components/PostContainer/PostContainer';
import PostsPage from './components/PostContainer/PostsPage';
// import '../src/components/CommentSection/CommentSection.css';
// import '../src/components/PostContainer/PostContainer.css';
// import '../src/components/SearchBar/SearchBar.css';
// import './components/Authentication/withAuthenticate';
import withAuthenticate from './components/Authentication/withAuthenticate';
import Login from './components/Login/Login';

const ComponentFromWithAuthenticate = withAuthenticate (PostsPage)(Login);


class App extends React.Component {
  constructor() {
    super();
    this.state ={
      
 
       
    }
    console.log("In the constructor");
  }


//   componentDidMount() {
//     console.log("In CDM");
//     this.setState ({post: dummyData});
   
    
//   }

//   updateSearch(event) {
//     event.preventDefault();
//     this.setState({search: event.target.value.substr(0,20)});
//   }
// componentDidUpdate(){
//   console.log(this.state.post);
// }


//   filterSearch =(e) => {
   
//     e.preventDefault();
//     let filteredPosts = this.state.post.filter(
//       (post) => {
//           return post.username.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1;
//   })
//   this.setState({
//     filteredPosts,
//     search: '',
  
//   });
//   }
  

  render() {

    return (
      
   
      <div className="App">
     <ComponentFromWithAuthenticate/>

 
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

{/* <PostsPage post={this.state.post} filtered={this.state.filteredPosts} search={this.state.search} 
updateSearch={this.updateSearch.bind(this)} filterSearch={this.filterSearch.bind(this)}
/> */}