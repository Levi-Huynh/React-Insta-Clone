import React, { Component } from 'react';

const SearchBar = props =>{

    return (
        <div className="SearchBar">
            <div className="logo">
           <img className="logoImg" src="https://rayabel.com/images/staticimages/instagram-header.png" alt="logo"></img>
           </div>
          <input className="SearchInput" placeholder="Search"/>

          <div className="icons">
          <i className="far fa-compass"></i>
          <i className="far fa-heart"></i>
          <i className="far fa-user"></i>
          </div>
        
         </div>
    )
}

export default SearchBar;