import React from 'react';
import ReactDom from 'react-dom';
import {Card,Button,Container} from 'react-bootstrap';
import '../css/styleweb.css';
import hero from '../image/hero.png';
import home2 from '../image/home2.png';
import home3 from '../image/home3.png';
import home4 from '../image/home4.png';
import bbb from '../image/bbb.png';
import 'animate.css';
import play from '../image/play.svg';
function CardHome(props){




return(


<Container fluid   className="d-flex flex-column" style={{height:540,backgroundColor:"#37517e"}}>

<Card className="border border-0 rounded-0 text-white clearfix" style={{backgroundColor:'#37517e',height:540}}>

    <Card.Body className="" style={{ marginTop: 130,
      marginLeft: -740}}>
      <Card.Title className="display-5 fw-3">Welcome To Bahaa Chbani </Card.Title>
      <Card.Title className="display-5 fw-3" style={{ marginLeft: -400}}> Website</Card.Title>
      
      
      
      <Card.Text as='h4' className="text-white-50" style={{marginLeft: 120}}>
       I am software engineer and youtyber, my channel is creative and <br/>
      </Card.Text>
      

      <Card.Text as='h4' className="text-white-50" style={{marginLeft: -120}}>
      speak about nft and mony and technology.
      </Card.Text>


      
      <br/>

      
<span>
      <Button size="lg" className="rounded-pill py-2 text-lowercase" style={{backgroundColor:'#47b2e4',marginLeft:-400,marginTop:30,height:55,width:160}}><p  style={{fontSize:22}} className="fw-bold">Subscribe</p></Button>
   
   <span> <a href="https://www.youtube.com/c/BahaC">  <img src={play}  className="" style={{height:45,width:45,marginLeft:20,marginTop:30}}/> </a>   <p style={{fontSize:20, marginTop:-38,marginLeft:-30}} className="">Go to Chaneel</p></span>
   
   
     </span>
    </Card.Body>
    <Card.Img variant="button" src={bbb} style={{width:600,height:600,marginLeft:900,marginTop:-2000}} className="animate__animated animate__pulse animate__infinite cardImageHome clearfix"/>
  </Card>
  </Container>



  
  
  );
  }


export default CardHome;