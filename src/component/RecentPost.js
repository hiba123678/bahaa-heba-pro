import React from 'react';
import ReactDom from 'react-dom';
import {Container,Row,Col,Card,Form,Button} from 'react-bootstrap';
import TitleOfSection from './TitleOfSection.js';
import Services from './Services.js';
import '../css/styleweb.css';
import Post from './Post.js';
function RecentPost(props){
return(

    <div>
<p className="fs-5 fw-bolder text-start mt-3" >Recent Post</p>
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
       
        </div>
);

}
export default RecentPost;
