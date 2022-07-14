import React from 'react';
import ReactDom from 'react-dom';
import {Container,Row,Col,Card,Form,Button} from 'react-bootstrap';
import TitleOfSection from './TitleOfSection.js';
import logo2 from '../image/logo2.png';
import '../css/styleweb.css';
function CardOfCategory (props){
return(
<Container className="d-flex flex-column">

<Card className="bg-dark text-white">
  <Card.Img src={props.imagCard} alt="Card image" />
  <Card.ImgOverlay>
    
   <div className="opacity-50" style={{width:500,height:100,backgroundColor:"red"}}>
       </div>
  </Card.ImgOverlay>
</Card>

</Container>
);

}
export default CardOfCategory;
