import React, { Component } from 'react';
import App from '../../App';
import PostsPage from '../PostContainer/PostsPage';

const withAuthenticate = App =>
  class extends React.Component {
    render() {
      return <App/>;
    }
  };


export default withAuthenticate;

