import React , { useEffect }from 'react';
import ReactDom from 'react-dom';
import {Container,Row,Col,Card,Form,Button} from 'react-bootstrap';
import TitleOfSection from './TitleOfSection.js';
import logo2 from '../image/logo2.png';
import chek from '../image/chek.jpg';
import mony1 from '../image/mony1.jpg';
import Productivity2 from '../image/Productivity2.jpg';
import study from '../image/study.jpg';
import Technology1 from '../image/Technology1.jpg';
import { Link } from "react-router-dom";
import nft from '../image/nft.jpg';
import { MDBRipple } from 'mdb-react-ui-kit';
import '../css/styleweb.css';
import AOS from 'aos';

import "aos/dist/aos.css";
function CategoryVedio (props){

  
    useEffect(() => {
        AOS.init();
        AOS.refresh();
      }, []);
    

return(

<Container className="p-4" fluid style={{height:900}} id="category">
<Container className="d-flex flex-column">
<Row>
    <Col>
    <TitleOfSection name="Category" descriptionOfSection="Our channel specializes in many scientific fields and will help you to be a productive and effective person from the use of time, productivity, learning, travel and digital currencies." />
    
    
    </Col>


</Row>


<Row>
    <Col >
    <MDBRipple rippleTag='div' className='bg-image hover-overlay hover-zoom hover-shadow' style={{ maxWidth: '24rem' }}>
    
    
    <img data-aos="fade-left" src={chek} style={{width:400,height:300}} className=""/>
    <a href="https://www.youtube.com/playlist?list=PL7UQKRd3AWyqqgMUeEVBsAcLLfsHIURPr">
   
    <div className='mask' style={{ backgroundColor: 'rgba(57, 192, 237, 0.2)' }}></div>
    </a>
    </MDBRipple>
    
    </Col> 

    <Col> <MDBRipple rippleTag='div' className='bg-image hover-overlay hover-zoom hover-shadow' style={{ maxWidth: '24rem' }}>
    <img data-aos="fade-left" src={mony1} style={{width:400,height:300}}/>
    <a href='https://www.youtube.com/playlist?list=PL7UQKRd3AWyq6mD7afSbR2OrrGYoCiSFJ'>
    <div className='mask' style={{ backgroundColor: 'rgba(57, 192, 237, 0.2)' }}></div>
    </a>
    </MDBRipple>
    </Col>




   
    <Col> <MDBRipple rippleTag='div' className='bg-image hover-overlay hover-zoom hover-shadow' style={{ maxWidth: '24rem' }}>
    <img  data-aos="fade-left" src={study} style={{width:400,height:300}}/>
    <a href='https://www.youtube.com/playlist?list=PL7UQKRd3AWyq6mD7afSbR2OrrGYoCiSFJ'>
    <div className='mask' style={{ backgroundColor: 'rgba(57, 192, 237, 0.2)' }}></div>
    </a>
    </MDBRipple>
    </Col>






</Row>
<br/>
<Row>
    
<Col> <MDBRipple rippleTag='div' className='bg-image hover-overlay hover-zoom hover-shadow' style={{ maxWidth: '24rem' }}>
    <img  data-aos="fade-right" src={Productivity2} style={{width:400,height:300}}/>
    <a href='https://www.youtube.com/playlist?list=PL7UQKRd3AWyq6mD7afSbR2OrrGYoCiSFJ'>
    <div className='mask' style={{ backgroundColor: 'rgba(57, 192, 237, 0.2)' }}></div>
    </a>
    </MDBRipple>
    </Col>

   
    <Col> <MDBRipple rippleTag='div' className='bg-image hover-overlay hover-zoom hover-shadow' style={{ maxWidth: '24rem' }}>
    <img  data-aos="fade-right"  src={Technology1} style={{width:400,height:300}}/>
    <a href='https://www.youtube.com/playlist?list=PL7UQKRd3AWypRqYwCWyU4e1MTulRfRQPj'>
    <div className='mask' style={{ backgroundColor: 'rgba(57, 192, 237, 0.2)' }}></div>
    </a>
    </MDBRipple>
    </Col>

   
    <Col> <MDBRipple rippleTag='div' className='bg-image hover-overlay hover-zoom hover-shadow' style={{ maxWidth: '24rem' }}>
    <img  data-aos="fade-right" src={nft} style={{width:400,height:300}}/>
    <a href='https://www.youtube.com/playlist?list=PL7UQKRd3AWyqfK2c4lg67nUFQ_StYpr4r'>
    <div className='mask' style={{ backgroundColor: 'rgba(57, 192, 237, 0.2)' }}></div>
    </a>
    </MDBRipple>
    </Col>

</Row>
<br/>

</Container>
</Container>
);

}
export default CategoryVedio;
