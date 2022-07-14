import React, { useEffect } from 'react';
import ReactDom from 'react-dom';
import {Container,Row,Col,Card,Form,Button} from 'react-bootstrap';
import bahaa from '../image/bahaa.jpg';
import AOS from 'aos';

import "aos/dist/aos.css";
import '../css/styleweb.css';
import twitter from '../image/iconTeam/twitter.svg';
import linkedin from '../image/iconTeam/linkedin.svg';
import instagram from '../image/iconTeam/instagram.svg';
import facebook from '../image/iconTeam/facebook.svg';

function OneTeme (props){

  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);


return(
    <Card data-aos="zoom-in-up" className="pt-3 d-inline-block shadow-lg" style={{ width: '43rem',height:'15rem' }}>
   
    <Card.Body>
   
      <Card.Img src={bahaa} className="rounded-circle mb-5 hover-shadow" style={{width:'12rem',marginLeft:-170,marginTop:-50}}/>
      <div className="ps-3 d-inline-block">
      <Card.Title style={{color:"#37517e",fontWeight:"bold",fontSize:25,marginLeft:-150}}> {props.name}</Card.Title>
      <Card.Text style={{marginLeft:-150}}>
      {props.work}
      </Card.Text>
      <hr style={{width:50,marginLeft:5,backgroundColor:"blue",marginTop:-10}}/>
      <p>{props.descwork}</p> 
       <span style={{marginTop:100,marginLeft:-90}}>
     
     
      <a href="#" className="border border-white rounded-circle p-2 mx-auto" style={{textDecoration:"none",marginLeft:-20}}>    <img src={twitter} className="border border-white rounded-circle p-2" style={{width:40,height:40,backgroundColor:"#adb5bd"}}  /></a>
      <a href="#" className="border border-white rounded-circle p-2 mx-auto" style={{textDecoration:"none",marginLeft:20}}>    <img src={linkedin} className="border border-white rounded-circle p-2" style={{width:40,height:40,backgroundColor:"#adb5bd"}} /></a>

     
     
     
      
     
      <a href="#" className="border border-white rounded-circle p-2 mx-auto" style={{textDecoration:"none",marginLeft:40}}>    <img src={instagram} className="border border-white rounded-circle p-2" style={{width:40,height:40,backgroundColor:"#adb5bd"}}  /></a>
      <a href="#" className="border border-white rounded-circle p-2 mx-auto" style={{textDecoration:"none",marginLeft:4}}>    <img src={facebook} className="border border-white rounded-circle p-2" style={{width:40,height:40,backgroundColor:"#adb5bd"}} /></a>
     </span>
      </div>
      <br/>

    </Card.Body>
   
  </Card>

);

}
export default OneTeme;
