import React, { Component } from 'react'
import './Ui.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';
import image from '../image/img.png'


export class MiddleSite extends Component {
    render() {
        return (
       
            <div className="centerdiv">
                <div className="text">
                <h1>Marketing smarts<br/> for big ideas</h1>
                <p>Mailchimp helps small businesses do big <br />
                 things, with the right tools and guidance<br />
                  every step of the way.</p>
                  <Button variant="primary">Primary</Button>
                  </div>
                  <div className="image" >
                  <img src={image} style={{width:"50%"}} />
                  </div>
            </div>
        )
    }
}

export default MiddleSite
