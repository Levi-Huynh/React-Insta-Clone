import React, { Component } from 'react';
import App from '../../App';
import PostsPage from '../PostContainer/PostsPage';
import Login from '../Login/Login';

const withAuthenticate = PostsPage=> Login => {

  return class extends React.Component {
    constructor(props){
      super(props);
      this.state ={
        user: true
      }
    }

    componentDidMount(){
      let currentIndex= localStorage.getItem("username");
      if (currentIndex=== null) {
        this.setState({user: !true})
      } else {
        this.setState({user: true})
      }
    }

    render() {
      return (
        <div>
          {this.state.user === true ? <PostsPage/>: <Login/>}
        </div>
      )
    }
  };
}

export default withAuthenticate;

