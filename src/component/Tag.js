import React from 'react';
import ReactDom from 'react-dom';
import {Container,Row,Col,Card,Form,Button} from 'react-bootstrap';
import TitleOfSection from './TitleOfSection.js';
import Services from './Services.js';
import '../css/styleweb.css';
import '../css/newcss.css'
import Post from './Post.js';
function Tag(props){
return(
<a href=""  className="tage px-3 py-2 " style={{textDecoration:"none",color:"#515151",border:"solid 1px #c4c4c4",fontSize:17}} >
    


{props.tag}


    
           </a>
);

}
export default Tag;
