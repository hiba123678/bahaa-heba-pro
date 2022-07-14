import React , { useEffect } from 'react';
import ReactDom from 'react-dom';
import {Container,Row,Col,Card,Form,Button} from 'react-bootstrap';
import TitleOfSection from './TitleOfSection.js';
import '../css/styleweb.css';
import AOS from 'aos';

import "aos/dist/aos.css";
function FormContact(props){


  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

return(
<Container className="d-flex flex-column p-4 containerForm " data-aos="fade-up">
{/* <hr  style={{height:3,width:700,color:"#0773a5"}}></hr> */}

    <Form className="shadow-lg py-4 px-3 mb-5 bg-body border-end-0 border-start-0 border border-info  border-3">
    
    <Row>

     <Col>
    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
    <Form.Label style={{marginLeft:-230,color:"black"}}> Your Name</Form.Label>
    <Form.Control type="text" placeholder="name" style={{width:300,height:50}}/>
   </Form.Group>
    </Col>

    <Col className="">
    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
    <Form.Label style={{marginLeft:-230,color:"black"}}> Your Email</Form.Label>
    <Form.Control type="email" placeholder="name@example.com" style={{width:300,height:50}}/>
    </Form.Group>
   </Col>
   </Row>

    <Row>
    <Col>
    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
    <Form.Label style={{marginLeft:-590,color:"black"}}> Subject</Form.Label>
    <Form.Control type="text" placeholder="name" style={{width:650,height:50}}/>
    </Form.Group>
    </Col>
   </Row>

   <Row>
    <Col>
  <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1" style={{width:650}}>
    <Form.Label style={{marginLeft:-570,color:"black"}}>Message</Form.Label>
    <Form.Control as="textarea" rows={8} />
  </Form.Group>
  </Col>
   </Row>



   <Button type="submit" className="rounded-pill px-4 py-2 text-center mx-auto fw-bolder border border-0" style={{backgroundColor:'#47b2e4',marginLeft:200}}>Send Message</Button>


</Form>




















</Container>
);

}
export default FormContact;
