import React from 'react';
import ReactDom from 'react-dom';
import {Container,Row,Col,Card,Form,Button} from 'react-bootstrap';

import '../css/styleweb.css';
import blog1 from '../image/blog/blog-1.jpg'
function Article (props){
return(



<Row>
    <Col>
  
    <Card style={{ width: '53rem',marginTop:50 }} className="shadow-lg bg-body">
  <Card.Img variant="top" style={{ height: '30rem' }} src={props.articleImg}/>
  <Card.Body>
    <Card.Title className="fs-3 fw-5 fw-bolder text-start "  style={{fontFamily:"Open Sans"}} >{props.articleTitle}</Card.Title>
    <Card.Text className="text-start" style={{color:"#4d4643",fontFamily:"Open Sans"}}>
   {props.articleDesc}
    </Card.Text>
    <Button variant="info" className="float-end text-capitalize" style={{color:"white",fontSize:15}}>Read More</Button>
  </Card.Body>
</Card>

    </Col>
 
</Row>



);

}
export default Article;
