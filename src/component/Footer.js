import React from 'react';
import ReactDom from 'react-dom';
import {Container,Row,Col,Card,Button,Form,Stack} from 'react-bootstrap';
import '../css/styleweb.css';
function Footer(props){
return(
<Container fluid  style={{height:80,backgroundColor:"#37517e"}}>
  <Container className="d-flex flex-column py-4" >
<Row>
    <Col style={{marginLeft:-160}}>

<span className="text-light" style={{fontSize:14}}>© Copyright <b> Bahaa</b> Chbani.<span>  All Rights Reserved</span> </span>

    </Col>
   
    <Col className="text-end">


    <span className="text-light"  style={{fontSize:14}}>  Designed by <span style={{color:"#3fa8e0"}}>BahaaChbani</span></span>
</Col>


</Row>
</Container>
</Container>
);

}
export default Footer;
