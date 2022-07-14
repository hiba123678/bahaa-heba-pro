import React , { useEffect } from 'react';
import ReactDom from 'react-dom';
import {Container,Row,Col,Card,Button,Form,Stack} from 'react-bootstrap';
import '../css/styleweb.css';

import AOS from 'aos';
import "aos/dist/aos.css";
import newcss  from '../css/newcss.css';
import chevronright from '../image/icon/chevronRight.svg';
import twitter from '../image/icon/twitter.svg';
import youtube from '../image/icon/youtube.svg';
import linkedin from '../image/icon/linkedin.svg';
import instagram from '../image/icon/instagram.svg';
import facebook from '../image/icon/facebook.svg';
function AllWebsit(props){
   useEffect(() => {
      AOS.init();
      AOS.refresh();
    }, []);

    const styles = {
      '&:hover, &:focus': {
         background: '#707070',
         borderColor: '#707070'
       }
    }

return(


<Container data-aos="fade-up" className="d-flex flex-column p-5"  style={{height:300,color:"#37517e"}}>

<Row>
    <Col  className="text-start"  style={{marginLeft:0}}>
 <span className="fw-bolder" style={{color:"#37517e",fontSize:25,marginTop:-100}}><b>BahaaChbani</b></span><br/><br/>
<p className="his"  style={{fontSize:13}}>
A108 Adam Street<br/>
New York, NY 535022<br/>
United States
</p>
<span><b style={{fontSize:13}}>Phone:</b></span><span style={{fontSize:13}}>
   099125576687
</span>
<br/>
<span><b style={{fontSize:13}}>Email:</b></span><span style={{fontSize:13}}>
info@example.com
</span>
    </Col>

    <Col   className="text-start" style={{fontWeight:500,color:"#37517e",fontSize:17}}>
 <span className="fw-bolder text-start"  >   Useful Links</span><br/>
 <div className="text-start"> 
    <br/>
   <img src={chevronright} ></img> <a href="#" className="ainwebsit" style={{textDecoration:"none",fontSize:15}} >Home</a>  <br/>
   <img src={chevronright} ></img> <a href="#" className="ainwebsit"  style={{textDecoration:"none",fontSize:15}} > About Us</a>  <br/>
   <img src={chevronright} ></img> <a href="#" className="ainwebsit" style={{textDecoration:"none",fontSize:15}}> Conntat</a>  <br/>
   <img src={chevronright} ></img> <a href="#" className="ainwebsit" style={{textDecoration:"none",fontSize:15}}> Blogs</a>  <br/>
   <img src={chevronright} ></img> <a href="#" className="ainwebsit" style={{textDecoration:"none",fontSize:15}}>Question</a>  <br/>
   <img src={chevronright} ></img> <a href="#" className="ainwebsit" style={{textDecoration:"none",fontSize:15}}> Vedio</a>  <br/>
 </div>
    </Col>

    <Col className="text-start" style={{fontWeight:500,color:"#37517e",fontSize:17}}>
   <span className="fw-bolder text-start"  >  Our Services</span><br/>
<div className="text-start" >
    <br/>
    <img src={chevronright} ></img>  <a href="#" className="ainwebsit"style={{textDecoration:"none",fontSize:15}}> Home</a>  <br/>
    <img src={chevronright} ></img>  <a href="#"  className="ainwebsit" style={{textDecoration:"none",fontSize:15}}>About Us</a>  <br/>
    <img src={chevronright} ></img> <a href="#"  className="ainwebsit" style={{textDecoration:"none",fontSize:15}}> Conntat</a>  <br/>
    <img src={chevronright} ></img> <a href="#"  className="ainwebsit" style={{textDecoration:"none",fontSize:15}}> Blogs</a>  <br/>
    <img src={chevronright} ></img>  <a href="#" className="ainwebsit"  style={{textDecoration:"none",fontSize:15}}> Question</a>  <br/>
    
    <img src={chevronright} ></img> <a href="#"  className="ainwebsit"  style={{textDecoration:"none",fontSize:15}}> Vedio</a>
      <br/>
      </div>
    </Col>


    <Col className="text-start" style={{fontWeight:500,color:"#37517e",fontSize:17}}>
   <span className="fw-bolder"  >  Our Social Networks</span><br/><br/>
    <p style={{fontSize:15,color:"#676c78"}}>Cras fermentum odio eu feugiat lide par<br/>naso tierra videa magna derita valie</p>
    <Row className="d-flex">
    <span>
      <a  href="#" style={{textDecoration:"none"}}> <img src={twitter} style={{width:30,height:20}} /></a>
      <a  href="#"  style={{textDecoration:"none",marginLeft:2}}>  <img src={youtube} style={{width:30,height:20}}/></a>
      <a  href="#"  style={{textDecoration:"none",marginLeft:2}}>   <img src={linkedin}  style={{width:30,height:20}} /></a>
      <a href="#" style={{textDecoration:"none",marginLeft:2}}>    <img src={instagram} style={{width:30,height:20}}  /></a>
      <a href="#" style={{textDecoration:"none",marginLeft:2}}>    <img src={facebook}  style={{width:30,height:20}} /></a>
     </span>
       </Row>
    </Col>
</Row>

</Container>
);

}
export default AllWebsit;
