import React , { useEffect } from 'react';
import ReactDom from 'react-dom';
import {Container,Accordion,Row,Col} from 'react-bootstrap';
import  AccordionGeneral from './AccordionGeneral';
import AskAndAnswer  from './AskAndAnswer.js';
import '../css/styleweb.css';
import TitleOfSection from './TitleOfSection.js';
import hero from '../image/hero.png';
import '../css/styleweb.css';
import AOS from 'aos';
function Tool (props){


  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);


return(
<Container className="d-flex flex-column p-4"  fluid style={{height:700,backgroundColor:" #f3f5fa"}} id="tool">
    
<TitleOfSection name="Tools"  descriptionOfSection="Our channel specializes in many scientific fields and will help you to be a productive and effective person from the use of time, productivity, learning, travel and digital currencies." />
<Row>

    <Col>
    {/* <div  style={{marginLeft:62}}>
    <p className="fw-bolder fs-1" style={{color:"#37517e"}}>Tool</p>
    <p>all tool that we used it in my vedioes and tech using it </p></div> */}


    <AskAndAnswer/></Col>
    <Col><img   data-aos="fade-up" src={hero} style={{width:500,height:500}}/></Col>
  </Row>

</Container>
);

}
export default Tool;
