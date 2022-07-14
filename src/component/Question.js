import React , { useEffect } from 'react';
import ReactDom from 'react-dom';
import {Container,Accordion,Row,Col} from 'react-bootstrap';
import  AccordionGeneral from './AccordionGeneral';
import AcoordionQues  from './AcoordionQues.js';
import '../css/styleweb.css';
import TitleOfSection from './TitleOfSection.js';
import hero from '../image/hero.png';
import '../css/styleweb.css';
import AOS from 'aos';
function Question(props){


  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);


return(
<Container className="d-flex flex-column p-4"  fluid style={{height:700,backgroundColor:" #f3f5fa"}}>
    
<TitleOfSection name="FREQUENTLY ASKED QUESTIONS"  descriptionOfSection="Our channel specializes in many scientific fields and will help you to be a productive and effective person from the use of time, productivity, learning, travel and digital currencies." />
<Row>

    <Col>
    {/* <div  style={{marginLeft:62}}>
    <p className="fw-bolder fs-1" style={{color:"#37517e"}}>Tool</p>
    <p>all tool that we used it in my vedioes and tech using it </p></div> */}


   
    
    <AcoordionQues head="Camera" answerbody="Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non "/>
<br/>
<AcoordionQues head="Camera" answerbody="Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non "/>
<br/>
<AcoordionQues head="Camera" answerbody="Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non "/>
<br/>
<AcoordionQues head="Camera" answerbody="Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non "/>
<br/>
<AcoordionQues head="Camera" answerbody="Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non "/>
<br/>
    
    </Col>

  </Row>

</Container>
);

}
export default Question;
