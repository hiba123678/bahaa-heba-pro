import React from 'react';
import ReactDom from 'react-dom';
import {Container,Row,Col,Card,Form,Button,Pagination} from 'react-bootstrap';


let active = 2;
let items = [];
for (let number = 1; number <= 3; number++) {
  items.push(
    <Pagination.Item key={number} active={number === active}  >
      {number}
    </Pagination.Item>,
  );
}



function Pagenum(props){
    return(
    
        <div>
        <Pagination size="lg" style={{marginLeft:300,color:"red"}} >{items}</Pagination>
        <br />
    
      </div>
    
    
    
    );
    
    }
    export default Pagenum;
    