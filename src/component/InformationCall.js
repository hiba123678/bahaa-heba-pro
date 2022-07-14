
import React , { useEffect }from 'react';
import ReactDom from 'react-dom';
import {Container,Row,Col,Card} from 'react-bootstrap';
import '../css/styleweb.css';
import AOS from 'aos';

import "aos/dist/aos.css";
import map from '../image/call/map.svg';
import phone from '../image/call/phone.svg';
import mail from '../image/call/mail.svg';
function InformationCall(props){

  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);


return(
<Container className="d-flex flex-column "  data-aos="fade-up">

    {/* <Row>
     <Col>
  
        <Card.Title className=" font-weight-bold px-4" style={{fontWeight:"bold",fontSize:25,color:"#37517e",marginLeft:-250}} >{props.name}
        
        <br/>gfgf
        
        
        </Card.Title>

      </Col>

      </Row>
  
    <Row >
    <Col>
    <p>{props.descriptionOfSection}</p>

    </Col>
    </Row>   */}

<Card style={{ width: '24rem',height:100 }} className="border-0 ms-5 shadow-none" >

    <Card.Body>
    
      <Card.Title className="fw-bolder  text-start"  style={{fontSize:22,color:"#37517e"}}>{props.name}</Card.Title>
      <Card.Text className="text-start" style={{fontSize:14,color:"rgb(97, 130, 186)"}}>
      {props.descriptionOfSection}
      </Card.Text>
      <img src={props.url} style={{marginTop:-130,marginLeft:-420,height:40,width:40,backgroundColor:"rgb(231, 245, 251)"}} className=" p-2 border border-white rounded-circle"/>
    </Card.Body>
  </Card>






</Container>
);

}
export default InformationCall;
