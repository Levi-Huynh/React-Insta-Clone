import React, { Component } from 'react';

class Login extends React.Component {
    constructor() {
        super();
        this.state ={
            user:"",
            password: "",
          
          
        }
    }

    onChange(event) {
        
this.setState({ [event.target.name]: event.target.value });
      
    }

    login(event) {
        localStorage.setItem("username", `${this.state.user}`);
        this.setState({
            user: '',
            password:''

        })
        window.location.reload();
      

    }

render() {

    return (
        <div className="loginWrap">
            <form className="loginForm">
            <div className="logoLogin">
  <img className="logoImg" src="https://rayabel.com/images/staticimages/instagram-header.png" alt="logo"></img> 
         </div>

            <input 
            className="loginIn"
            name="user"
            placeholder="Username"
            type="text" 
            value={this.state.user}
            onChange={this.onChange.bind(this)}/>
        
            <input
            className="loginInP"
            name="password"
            value={this.state.password}
            placeholder="Password"
            type="password" 
            onChange={this.onChange.bind(this)}/>

            <button className="logB" onClick={this.login.bind(this)}>Log In</button>

                </form>
                </div>
    )
}


}

export default Login;