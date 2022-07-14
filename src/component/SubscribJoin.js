import React , { useEffect }from 'react';
import ReactDom from 'react-dom';
import {Container,Row,Col,Card,Button,Form,Stack} from 'react-bootstrap';
import '../css/styleweb.css';
import AOS from 'aos';

import "aos/dist/aos.css";
function SubscribJoin (props){

  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);




return(
<Container className="d-flex flex-column p-5"  fluid style={{height:260,backgroundColor:"#f3f5fa"}} data-aos="flip-down">
  
<Card className="mx-auto text-center border-0 shadow-none" style={{width:600, height:200,backgroundColor:"#f3f5fa"}}>
  
  <Card.Body>
    <Card.Title  className="align-content-center" style={{color:"#37517e",fontSize:25,fontWeight:"bold"}}>Join Our Channel</Card.Title>
    <Card.Text style={{color:"#676c78"}}>
    Tamen quem nulla quae legam multos aute sint culpa legam noster magna
    </Card.Text>
    <Form>
    <Stack direction="horizontal" gap={0}>
    <Form.Group className="mb-3" controlId="formBasicEmail" style={{width:500}}>
   
    <Form.Control type="email" placeholder="Enter email"  className=" rounded-pill text-center" style={{marginTop:14,marginLeft:-15,height:45,width:600}} />
   
   </Form.Group>

   <Button type="submit" className=" rounded-pill border-0" style={{marginTop:0,marginLeft:55,backgroundColor:"#47b2e4",width:700,height:45}}>
      Subscrib
  </Button>
  </Stack>
    </Form>
  </Card.Body>
</Card> 

</Container>
);

}
export default SubscribJoin;
