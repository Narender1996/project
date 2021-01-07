import React from 'react'
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Aboutpic from '../images/exclusive.png'

function About() {
    return(
        <div className='aboutus'>
        <h2 className="title">About us</h2>
        <div className="offer">
        <div className="small-container">
            <div className="row">
                <div className="col-2">
                    <img src={Aboutpic}  className="offer-img" alt=""></img>
                </div>
                <div className="col-2">
                    <p><strong></strong></p>
                    <h1>IDM </h1>
                    <strong>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Minus reiciendis illum omnis. Perspiciatis  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Minus reiciendis illum omnis. Perspiciatis consectetur a, 
                    sequi odit harum facilis voluptatibus incidunt magni hic quasi 
                   voluptatum suscipit corrupti numquam accusantium sit?
                    
               
                    </strong>
                    <a href="" className="btn btn-danger">know more</a>
                </div>
            </div>
        </div>
    </div>
        </div>
       

    )
    
}
export default About