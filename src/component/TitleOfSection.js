import React from 'react';
import ReactDom from 'react-dom';
import {Container,Row,Col,Card} from 'react-bootstrap';
import '../css/styleweb.css';
function TitleOfSection(props){
return(
<Container className="d-flex flex-column p-4" >
  
    <Row className="d-flex flex-column text-center">
     <Col>
        <Card.Title className="text-center aboutTitle font-weight-bold" style={{fontWeight:"bold",fontSize:45}} >{props.name}</Card.Title>
   
   
   
   
   <span>  
   
 
  <div className="mx-auto" style={{width:40,height:4,color:"#47b2e4",backgroundColor:"#47b2e4", marginTop:10}}  ></div>
   
  <hr className="mx-auto" style={{width:100,height:2, marginTop:-3, marginLeft:585}}></hr>
   </span> </Col>

      </Row>
  
    <Row className="d-flex flex-column">
    <Col>
    <p>{props.descriptionOfSection}</p>

    </Col>
    </Row>  

</Container>
);

}
export default TitleOfSection;
