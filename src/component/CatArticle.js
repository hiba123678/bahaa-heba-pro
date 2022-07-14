import React from 'react';
import ReactDom from 'react-dom';
import {Container,Row,Col,Card,Form,Button,Nav } from 'react-bootstrap';
import TitleOfSection from './TitleOfSection.js';
import Services from './Services.js';
import '../css/styleweb.css';
import newcss from '../css/newcss.css';
function CatArticle(props){
  const styles = {
    'p:hover': {
   
      color: '#707070'
     }
  }
return(

<div>
<p className="fs-5 fw-bolder text-start" >Categories</p>
<Nav defaultActiveKey="/home" className="flex-column  ainwebsit text-start" style={{fontSize:19,color:"#1111",fontFamily:"Open Sans"}}>
  <Nav.Link href="/home"  className="tage" style={{color:"#000000"}} >General <span style={{color:"#b4aca8"}}> (26)</span></Nav.Link>
  <Nav.Link eventKey="link-1" className="tage" style={{color:"#000000"}}>Lifestyle<span style={{color:"#b4aca8"}}> (26)</span></Nav.Link>
  <Nav.Link eventKey="link-2" className="tage" style={{color:"#000000"}}>Educaion<span style={{color:"#b4aca8"}}> (7)</span></Nav.Link>
  <Nav.Link eventKey="link-2" className="tage" style={{color:"#000000"}}>Nft<span style={{color:"#b4aca8"}}> (4)</span></Nav.Link>
  <Nav.Link eventKey="link-2" className="tage" style={{color:"#000000"}}>Chez<span style={{color:"#b4aca8"}}> (6)</span></Nav.Link>
  <Nav.Link eventKey="link-2" className="tage" style={{color:"#000000"}}>Technology<span style={{color:"#b4aca8"}}> (2)</span></Nav.Link>
</Nav>


    </div>
);

}
export default CatArticle;
