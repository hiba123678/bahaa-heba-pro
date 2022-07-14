import React, { useEffect } from 'react';
import ReactDom from 'react-dom';
import {Container,Row,Col,Card,Form,Button} from 'react-bootstrap';
import 'animate.css';

import '../css/styleweb.css';
import AOS from 'aos';

import "aos/dist/aos.css";
import layers from '../image/services/layers.svg';
import clock from '../image/services/clock.svg';
import dribbble from '../image/services/dribbble.svg';
function Services (props){

  function mouseOver(event) {



  
    event.target.classList.add('animate__animated', 'animate__rubberBand','animate__slow');
    setTimeout(()=>event.target.classList.remove('animate__animated', 'animate__rubberBand','animate__slow'),1000)
  }
 
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);


return(
  
 
<Container className="d-flex flex-column" >

    <Card onMouseOver={mouseOver} style={{ width: '20rem',height:'14rem' }} className="d-flex flex-column shadow-lg px-3 pt-4" >
   
    <Card.Body className="pt-5 "  data-aos="flip-down"  >
 
      <Card.Title className="text-start" style={{fontSize:35,color:"#37517e"}}>{props.titleOfService}</Card.Title>
      <Card.Text className="text-start"> 
        {props.descOfService}
      </Card.Text>
      <img src={props.url} className="" style={{width:40,height:35,marginLeft:-240,marginTop:-255}} />
    </Card.Body>
  </Card>
 
  </Container>
 
);

}
export default Services;
