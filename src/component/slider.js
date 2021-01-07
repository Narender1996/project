import React from 'react'
import Carousel from 'react-bootstrap/Carousel'
import Slider1 from '../images/pexels-photo-3810792.jpeg'
import Slider2 from '../images/pexels-photo-1367272.jpeg'
import Slider3 from '../images/pexels-photo-1181304.jpeg'
import 'bootstrap/dist/css/bootstrap.min.css';


function Slider() {
    return(
        <div className='slider'>
        <Carousel>
        <Carousel.Item interval={1000}>
          <img className="d-block w-100"src={Slider1} alt="First slide"/> 
        </Carousel.Item>

        <Carousel.Item interval={500}>
          <img  className="d-block w-100" src={Slider2} alt="Second slide"/>      
        </Carousel.Item>
        <Carousel.Item>
          <img  className="d-block w-100" src={Slider3} alt="Third slide" />  
        </Carousel.Item>
      </Carousel>
        </div>
        
    )
    
}

export default Slider;