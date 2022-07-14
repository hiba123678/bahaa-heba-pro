import React , { useEffect }  from 'react';
import ReactDom from 'react-dom';
import {Container,Accordion,} from 'react-bootstrap';
import AOS from 'aos';

import "aos/dist/aos.css";
import newcss  from '../css/newcss.css';
import '../css/styleweb.css';

import help from '../image/help.svg';
function AcoordionQues (props){


  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

return(
<Container className="d-flex flex-column">

<Accordion className=" border border-0 mx-auto" style={{width:1000,backgroundColor:"#f3f5fa",border:0}}>
  <Accordion.Item className="border border-0" eventKey="0" data-aos="fade-up">
    <Accordion.Header className="border border-0 ainwebsit"> <span className="text-info"><img src={help}/> </span><span className="ainwebsit"   style={{marginLeft:7}}>   {props.head}</span></Accordion.Header>
    
    <Accordion.Body className="border border-0 text-start">
{props.answerbody}
    </Accordion.Body>
  </Accordion.Item>
 
</Accordion>

</Container>
);

}
export default AcoordionQues;
