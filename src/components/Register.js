import React, { Component } from 'react'
import './Login.css'


export class Register extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            name : '',
            email : '',
            password : ''
             
        }
    }
    handleName = (e)=>{
        this.setState({name:e.target.value})
    }
    handleEmail = (e) =>{
        this.setState({email:e.target.value})
    }
    handle
    
    render() {
        return (
            <div>
                <form className='form' >
                    <input value={this.state.name} onChange = {this.handleName} placeholder='Full Name' type='text' />
                <input onChange={this.handleEmail} placeholder = 'Enter Email' type='text' />
                <input onChange = {this.handlePassword} placeholder='Password' type='password' />
                <button onClick >Register</button>
                </form>
            </div>
        )
    }
}

export default Register
