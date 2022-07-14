import React from 'react';
import ReactDom from 'react-dom';
import {Container,Row,Col,Card,Form,Button} from 'react-bootstrap';
import TitleOfSection from './TitleOfSection.js';
import Services from './Services.js';
import '../css/styleweb.css';
import 'animate.css';
import layers from '../image/services/layers.svg';
import clock from '../image/services/clock.svg';
import dribbble from '../image/services/dribbble.svg';
function AllService (props){


    function MouseOver(event) {
        event.target.classList.add("animate__animated");
        event.target.classList.add("animate__bounce");
      }
    
    
return(

<Container fluid style={{height:500,backgroundColor:"#f3f5fa"}}>
<Container  className="d-flex flex-column">
<Row>
    <Col>
    <TitleOfSection name="Service" descriptionOfSection="Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum  quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste>" className="animate zoom-in shadow-5" />
    

    </Col>

</Row>

<Row style={{marginLeft:100}}>
    <Col >
    <Services url={layers} className="ms-5 " titleOfService="vedio" descOfService="we publish vedio education and nft"  class="d-inline-flex" onMouseOver={MouseOver}/>
    
    
    </Col>
    <Col>
    <Services url={clock}  titleOfService="Tech" descOfService="we explain all tool that use it"  class="d-inline-flex hover-zoom " onMouseOver={MouseOver}/>
    
    
    </Col>
    <Col>
    <Services url={dribbble} titleOfService="reserve" descOfService="you cane reserve port in website"  class="d-inline-flex" onMouseOver={MouseOver}/>
    
    
    </Col>
  

</Row>

</Container>
</Container>
);

}
export default AllService;
