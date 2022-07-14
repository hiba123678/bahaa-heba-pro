import React from 'react';
import ReactDom from 'react-dom';
import {Container,Row,Col,Card,Form,Button} from 'react-bootstrap';
import TitleOfSection from './TitleOfSection.js';
import Services from './Services.js';
import '../css/styleweb.css';
import blogauthor from '../image/blog/blog-2.jpg';
import '../css/newcss.css';
function Post(props){
return(
    <div className="d-flex">
     <img src={blogauthor} style={{width:90,height:60}} /> 
 <a href=""  style={{textDecoration:"none",color:"black"}}> <p className="ms-3 fw-bolder" >Nihil blanditiis at in nihil autem
  
     <br/>
     <p style={{color:"gray"}} className="fst-italic fw-light text-start">Jan 1, 2020</p>
     
     </p>
     </a> 
 
        </div>



);

}
export default Post;
