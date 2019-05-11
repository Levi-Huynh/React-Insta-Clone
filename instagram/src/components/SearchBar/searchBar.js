import React, { Component } from 'react';
import styled from "styled-components";

const ContainerDiv = styled.div`
display: flex;
flex-direction: row;
justify-content: space-between;
align-items: center;
align-content: center;
border: 1px solid blue;
height: 80px;
max-width: 900px;
width: 100%; ;`


const SearchBar = props =>{

    return (
        <div>
        <ContainerDiv/>
            <div className="logo">
           {/* <img className="logoImg" src="https://rayabel.com/images/staticimages/instagram-header.png" alt="logo"></img> */}
           <i class="fab fa-instagram fa-2x"></i>
           </div>
          <input className="SearchInput" placeholder="Search"/>

          <div className="icons">
          <i className="far fa-compass"></i>
          <i className="far fa-heart"></i>
          <i className="far fa-user"></i>
          </div>
        
         <ContainerDiv/>
         </div>
    )
}

export default SearchBar;