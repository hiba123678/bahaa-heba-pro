import React, { useEffect } from 'react';
import ReactDom from 'react-dom';
import {Container,Row,Col,Card,Form,Button} from 'react-bootstrap';
import mask from '../image/mask.jpg';

import { Link } from "react-router-dom";

function Mask (props){
    return(
<Card className="bg-dark text-white border border-0" >
  <Card.Img src={mask} alt="Card image" style={{height:400}}/>
  <div className='mask' style={{ backgroundColor: 'rgba(0, 0, 0, 0.4)' }}></div>
  <Card.ImgOverlay>
    <Container className="d-flex flex-column text-start"  >

    
 
    <Card.Title className="fw-5" style={{fontFamily: "Open Sans",fontSize:50,marginTop:-120,color:"#fff",fontWeight:30,marginTop:100}} >Article</Card.Title>
    <Card.Text style={{fontSize:18,fontFamily: "Open Sans"}}> 
      This is a wider card with supporting text below as a natural lead-in to
      additional content. This content is a little bit longer.<br/>

    
      <Card.Text style={{fontSize:18}}>
      This is a wider card with supporting text below as a natural lead-in to
      additional content. This 
    </Card.Text>

    </Card.Text>
    </Container>
    
    <Button size="lg"  style={{fontFamily:"Open Sans",marginTop:-84,marginLeft:1000,width:250,height:60}} className=" bg-transparent border border-white border-2 rounded-pill" >    
    <Link to="/blog" className="text-white"style={{  textDecoration: "none"}}>Blogs</Link></Button>
  </Card.ImgOverlay>
 
</Card>);
}
export default Mask;