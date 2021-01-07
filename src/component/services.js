import React from 'react'
import '../App.css';
import Service1 from '../images/macbook-apple-imac-computer-39284.jpeg';
import Service2 from '../images/pexels-photo-326503.jpeg'
import Service3 from '../images/pexels-photo-1181316.jpeg'
import Service4 from '../images/istockphoto-1252383721-1024x1024.jpg'
import Service5 from '../images/pexels-photo-3862632.jpeg'
import Service6 from '../images/istockphoto-1191609321-1024x1024.jpg'

function Services(){
    return(
        <div className="small-container">
        <h2 className="title">Services</h2>
        <div className="row">
            <div className="col-4">
                <img src={Service1} alt=""></img>
                <h4>App Development</h4>
                <div className="rating">
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star-o"></i>
                </div>
                
            </div>
            <div className="col-4">
                <img src={Service2} alt=""></img>
                <h4>Web Development</h4>
                <div className="rating">
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star-half-o "></i>
                    <i className="fa fa-star-o"></i>
                </div>
                
            </div>
            <div className="col-4">
                <img src={Service3} alt=""></img>
                <h4>Database </h4>
                <div className="rating">
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star-o"></i>
                </div>
                
            </div>
            <div className="col-4">
                <img src={Service4} alt=""></img>
                <h4>Wordpress</h4>
                <div className="rating">
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star-half-o"></i>
                    <i className="fa fa-star-o"></i>
                    <i className="fa fa-star-o"></i>
                </div>
                
            </div>
            <div className="col-4">
                <img src={Service5} alt=""></img>
                <h4>Testing</h4>
                <div className="rating">
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star-half-o"></i>
                    <i className="fa fa-star-o"></i>
                    <i className="fa fa-star-o"></i>
                </div>
                
            </div>
            <div className="col-4">
                <img src={Service6} alt=""></img>
                <h4>Graphic designer</h4>
                <div className="rating">
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star-half-o"></i>
                    <i className="fa fa-star-o"></i>
                    <i className="fa fa-star-o"></i>
                </div>
                
            </div>
        </div>
        </div>
        


    )
}

export default Services