import React, { Component } from 'react'
import MiddleSite from './MiddleSite'
import './Ui.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';

export class Ui extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            backgroundChange : false
        }
    }
    

    componentDidMount(){
        document.addEventListener("scroll", ()=>{
            const backgroundcolor = window.scrollY <100 
            this.setState({
                backgroundChange:backgroundcolor
            })
            console.log(backgroundcolor)
            // if(backgroundcolor<100){
            //     console.log(backgroundcolor)
            // }else{
            //     this.setState()
            // }

        })
    }

   

    render() {
        //  this.listener = document.addEventListener("scroll", ()=>{
        //     var scrolled = document.scrollingElement.scrollTop;
        //     if(scrolled<70){
        //         if(this.state.status != "amir"){
        //             this.setState({status :"amir" })
        //         }
        //     } else{
        //         if(this.state.status !="top" ){
        //             this.setState({status:"top"})
        //         }
        //     }
        // })
        return (
            <div className={"container-fluid  sticky" }>
                <div className="row" >
            <div className={this.state.backgroundChange === !true?"navbar white":"navbar"} >
               <div className="links" >
               <a href='#Products' >Products</a>
                <a href='#Products' >Resources</a>
                <a href='#Products' >Inspiration</a>
                <a href='#Products' >Pricing</a>
               </div>
               <div className="btn">
               <Button variant="light">Log In</Button>
                <Button variant="primary" className="ml-3" >Primary</Button>
                </div>
            </div>
            </div>
            </div>
        )
    }
}

export default Ui
