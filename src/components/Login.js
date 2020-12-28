import React, { Component } from 'react'
import './Login.css'
import { withRouter } from 'react-router-dom'

export class Login extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            name : '',
            email : '',
            password : ''
        }
    }
    handleEmail = (e)=>{
        this.setState({email:e.target.value})
    }
    handlePassword = (e)=>{
        this.setState({password:e.target.value})
    }

    handleSbubmit = (e)=>{
        e.preventDefault()
        this.props.history.push("/register")
    }
    
    render() {
        return (
            <div>
                <form className='form' >
                    <input value={this.state.email} onChange={this.handleEmail} placeholder = 'Enter Email' type='text' />
                    <input value={this.state.password} onChange = {this.handlePassword} placeholder='Password' type='password' />
                    <button onClick={this.handleSbubmit} >Login</button>
                </form>
            </div>
        )
    }
}

export default withRouter (Login)