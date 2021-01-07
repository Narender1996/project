import React from 'react'
import '../App.css';
import Team1 from "../images/user-1.png";
import Team2 from "../images/user-2.png";
import Team3 from "../images/user-3.png";

function Team(){
    return(
        <div className="testimonial">
        <div className="small-container">
        <h2 className="title">Team</h2>
            <div className="row">
                <div className="col-3">
                    <i className="fa fa-quote-left"></i>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                         Minus reiciendis illum omnis. Perspiciatis consectetur a, 
                         sequi odit harum facilis voluptatibus incidunt magni hic quasi 
                        voluptatum suscipit corrupti numquam accusantium sit?</p>
                        <div className="rating">
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star-half-o"></i>
                            <i className="fa fa-star-o"></i>
                            <i className="fa fa-star-o"></i>
                        </div>
                        <img src={Team1} alt=""></img>
                        <h3>niki</h3>
                </div>
                <div className="col-3">
                    <i className="fa fa-quote-left"></i>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                         Minus reiciendis illum omnis. Perspiciatis consectetur a, 
                         sequi odit harum facilis voluptatibus incidunt magni hic quasi 
                        voluptatum suscipit corrupti numquam accusantium sit?</p>
                        <div className="rating">
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star-half-o"></i>
                            <i className="fa fa-star-o"></i>
                            <i className="fa fa-star-o"></i>
                        </div>
                        <img src={Team2} alt=""></img>
                        <h3>Ankit</h3>
                </div>
                <div className="col-3">
                    <i className="fa fa-quote-left"></i>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                         Minus reiciendis illum omnis. Perspiciatis consectetur a, 
                         sequi odit harum facilis voluptatibus incidunt magni hic quasi 
                        voluptatum suscipit corrupti numquam accusantium sit?</p>
                        <div className="rating">
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star-half-o"></i>
                            <i className="fa fa-star-o"></i>
                            <i className="fa fa-star-o"></i>
                        </div>
                        <img src={Team3} alt=""></img>
                        <h3>Arav</h3>
                </div>
            </div>
        </div>
    </div>
    )
}

export default Team;