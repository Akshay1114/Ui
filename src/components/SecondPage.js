import React, { Component } from 'react'
import './Ui.css'
import Image from '../image/img2.png'

export class SecondPage extends Component {
    render() {
        return (
            <div className ="SecondPage">
            <div className="content">
                <h1>Do it all with Mailchimp</h1>
                <p>Bring your audience data, marketing channels, and insights together so you can reach<br/>
                 your goals faster—all from a single platform.</p>
            </div>
            <div className="content2" >
                <img className="img2" src={Image} />
            </div>
            </div>
        )
    }
}

export default SecondPage
