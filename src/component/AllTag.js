import React from 'react';
import ReactDom from 'react-dom';
import {Container,Row,Col,Card,Form,Button,Stack} from 'react-bootstrap';
import TitleOfSection from './TitleOfSection.js';
import Services from './Services.js';
import '../css/styleweb.css';
import Post from './Post.js';
import Tag from './Tag.js';
function Alltag(props){
return(
<div>
<p className="fs-5 fw-bolder text-start mt-3">Tags</p>

<Container  className="d-flex " style={{marginLeft:-22}}> 
<Stack direction="horizontal" gap={3}>
<Tag tag="IT" />
    <Tag tag="Nft" />
    <Tag tag="Technology" />
    <Tag tag="Time" />
    
    </Stack> 
       </Container>
       </div>
);

}
export default Alltag;
