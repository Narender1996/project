import React from 'react'
import '../App.css';
import Logo from '../images/logo.png'
function Navbar() {
    return(
        <div className="header">   
        <div className="container">
            <div className="navbar"> 
                <div className="logo">
                    <img src={Logo} alt="logoimg" width="200px"></img>
                </div>
              
            </div>          
        </div>
    </div>
    
    )
    
}
 export default Navbar;