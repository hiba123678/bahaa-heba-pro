import React from 'react';
import ReactDom from 'react-dom';
import {Container,Row,Col,Card} from 'react-bootstrap';
import TitleOfSection from './TitleOfSection.js';
import  FormContact from './FormContact.js';
import InformationCall from './InformationCall.js';
import '../css/styleweb.css';
import map from '../image/call/map.svg';
import phone from '../image/call/phone.svg';
import mail from '../image/call/mail.svg';
function Contact(props){
return(
<Container className="d-flex flex-column p-4" id="contact">

<Row>
    <Col>
     <TitleOfSection name="CONTACT" />
     </Col>
 </Row>


 <Row> 
<Col>

 <p>
 Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo 
 <br/>
 </p>
 <p className="text-center">qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.  
 </p>

</Col>
</Row>


<Row>

 <Col>
 <div className="py-3   shadow-lg bg-body border-end-0 border-start-0 border border-info  border-3" style={{height:540,marginTop:23}}>


<InformationCall  url={map} name="Location:" descriptionOfSection="A108 Adam Street, New York, NY 535022"/>
<InformationCall  url={mail} name="Email:" descriptionOfSection="info@example.com" style={{marginTop:-500}}/>

<InformationCall  url={phone} name="Call:" descriptionOfSection="+1 5589 55488 55s"/>
 </div>

 
 </Col>


 <Col>
 <FormContact/>
 </Col>
</Row>



















</Container>
);

}
export default Contact;
