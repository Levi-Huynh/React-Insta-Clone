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
        <div>
            <form className="loginForm">
            <input 
            name="user"
            placeholder="Username"
            type="text" 
            value={this.state.user}
            onChange={this.onChange.bind(this)}/>
        
            <input
            name="password"
            value={this.state.password}
            placeholder="Password"
            type="text" 
            onChange={this.onChange.bind(this)}/>

            <button onClick={this.login.bind(this)}>Log in</button>

                </form>
                </div>
    )
}


}

export default Login;