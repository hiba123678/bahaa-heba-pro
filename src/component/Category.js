import React from 'react';
import ReactDom from 'react-dom';
import {Container,Row,Col,Card,Form,Button} from 'react-bootstrap';
import CardOfCategory from './CardOfCategory.js';
import logo2 from '../image/logo2.png';
import '../css/styleweb.css';
import { width } from 'dom-helpers';
function Category(props){
return(
<Container className="d-flex flex-column">


<CardOfCategory imagCard={logo2} />
</Container>
);

}
export default Category;
