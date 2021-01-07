import React from 'react'
import '../App.css'
import 'bootstrap/dist/css/bootstrap.min.css';

function Contact(){
    return(
        <div className='contact-container'>
        <h2 className="title">Contact us</h2>
        <div className='contactform'>     
       <form>
       <div className="form-row">
         <div className="form-group col-md-4">
           <label for="inputEmail4">Email</label>
           <input type="email" className="form-control" id="inputEmail4" placeholder="Email"></input>
         </div>
         <div className="form-group col-md-4">
           <label for="inputName">Name</label>
           <input type="text" className="form-control" id="inputname" placeholder="name"></input>
         </div>
       </div>
       <div className="form-group col-md-6">
         <label for="inputAddress">Address</label>
         <input type="text" className="form-control" id="inputAddress" placeholder="1234 Main St"></input>
       </div>
       <div className="form-group col-md-6">
         <label for="inputAddress2">Address 2</label>
         <input type="text" className="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor"></input>
       </div>
       <div className="form-row">
         <div className="form-group col-md-6">
           <label for="inputCity">City</label>
           <input type="text" className="form-control" id="inputCity"></input>
         </div>
         <div className="form-group col-md-4">
           <label for="inputState">State</label>
           <input type="text" className="form-control" id="inputState"></input>
               
         </div>
         
       </div>
       <div className="form-group">
         <div className="form-check">
           <input className="form-check-input" type="checkbox" id="gridCheck"></input>
           <label className="form-check-label" for="gridCheck">
             Check me out
           </label>
         </div>
       </div>
       <button type="submit" className="btn btn-primary">Sign in</button>
     </form>
           
       </div>
        </div>
       

    )
}

export default Contact;