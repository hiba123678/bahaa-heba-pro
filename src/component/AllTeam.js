import React from 'react';
import ReactDom from 'react-dom';
import {Container,Row,Col,Card,Form,Button} from 'react-bootstrap';
import TitleOfSection from './TitleOfSection.js';
import OneTeme from './OneTeme.js';
import '../css/styleweb.css';

function AllTeam (props){
return(

<Container className="d-flex flex-column p-4" fluid style={{height:500}}>
<Row>
    <Col>
    <TitleOfSection name="Team" descriptionOfSection="Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo." />
    

    </Col>

</Row>

<Row className="mx-auto">
    <Col>
 
    <OneTeme name="Bhaa Chbani" work="Software Engineer" descwork="Make and editing vedio and write article"/>

    </Col>
   
</Row>


</Container>
);

}
export default AllTeam;
