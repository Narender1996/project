import React from "react";
import '../App.css';
import playstore from "../images/play-store.png"
import appstore from "../images/app-store.png"
import logo from "../images/logo-white.png"

function Footer()
{
    return(
        <div className="footer">
        <div className="container">
            <div className="row">
                <div className="footer-col-1">
                    <h3>Download our App</h3>
                    <p>Download App for Android and ios mobile phone</p>
                    <div className="app-logo">
                        <img src={playstore} alt=""></img>
                        <img src={appstore} alt=""></img>
                    </div>
                </div>
                <div className="footer-col-2">
                    <img src={logo} alt=""></img>
                    <p>Our Purpose is to Sustainably Make the Pleasure and
                        Benefits of Sports Accessible to the Many
                    </p>
                </div>
                <div className="footer-col-3">
                    <h3>Useful Linkd</h3>
                    <ul>
                        <li>coupons</li>
                        <li>Blog Post </li>
                        <li>Return Policy</li>
                        <li>Join Affiliate</li>
                    </ul>
                </div>
                <div className="footer-col-4">
                    <h3>Follow Us</h3>
                    <ul>
                        <li>Facebook</li>
                        <li>Instagram </li>
                        <li>Twitter</li>
                        <li>Youtube</li>
                    </ul>
                </div>
            </div>
            <hr></hr>
            <p className="copyright"> Copyright 2020-Ecommerce website</p>
        </div>

        
    </div>

    )
}

export default Footer