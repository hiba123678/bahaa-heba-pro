import React, { useEffect }  from 'react';
import ReactDom from 'react-dom';
import {Container,Row,Col,Card,Button} from 'react-bootstrap';
import '../css/styleweb.css';
import AOS from 'aos';

import "aos/dist/aos.css";
import TitleOfSection from './TitleOfSection.js';
import check from '../image/check.svg';
function About(props){


  
 useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);




return(
<Container className="d-flex flex-column"  fluid style={{height:400}}  id="about">

<Row >
    {/* <Col></Col> */}
    <TitleOfSection name="About Us" />
 </Row>
      {/* <Row className="d-flex flex-column text-center"> */}
          {/* <Col> */}
{/*      
    <h1
  data-aos-offset='0'
   data-aos-delay='900'
 data-aos="zoom-in"
 data-aos-duration='4'
     data-aos-mirror='true'
data-aos-once='true'
 >Example</h1> */}

      {/* </Col> */}

      {/* </Row> */}

      {/* */}
      <Container  className="d-flex">
      <Row className="d-flex" style={{}} >
      <Col>
      <Card className="border border-0 shadow-none d-flex flex-column" style={{width:680,height:250}}>
  
  <Card.Body>




  <Card.Text   data-aos="zoom-in" style={{color:"#444444"}} className="text-start">
  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididuntr
  <br/>ut labore et dolore magna aliqua.
  <br/>  <br/>
 <img src={check} /> Ullamco laboris nisi ut aliquip ex ea commodo consequat <br/>
  <br/> <img src={check} />Duis aute irure dolor in reprehenderit in voluptate velit <br/>
  <br/> <img src={check} />Ullamco laboris nisi ut aliquip ex ea commodo consequat
    </Card.Text>

  </Card.Body>
  </Card>
    {/* </Col>

    <Col className="" style={{marginLeft:-200}} >
    <Card.Text style={{color:"#444444"}}>
    Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in<br/>
    reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint<br/>
    occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est<br/>
    laborum.
    </Card.Text>
    
   <br/>
    <Button  variant="outline-info" size="sm" className="border">Learn More</Button>
    </Col>
    </Row>
 */}

   

   

{/*    
  </Card.Body>
 
</Card> */}
{/* </Col> */}
 </Col>


 <Col>
      <Card className="border border-0 shadow-none d-flex flex-column" style={{width:590,height:250}}>
  
  <Card.Body>




  <Card.Text   data-aos="zoom-in" className="text-start" style={{color:"#444444"}}>
  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididuntr<br/>

  reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint<br/>

  occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est<br/>

  laborum.
    </Card.Text>
    <br/>
    <Button  className="text-lowercase bg-info border border-info" style={{marginRight:420 ,width:150,height:40}}  >Learn More</Button>
  </Card.Body>
  </Card>
  </Col>




</Row>
</Container>
</Container>
);

}
export default About;
