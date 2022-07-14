import React from 'react';
import ReactDom from 'react-dom';
import {Container,Row,Col,Card,Form,Button,FormControl} from 'react-bootstrap';
import TitleOfSection from './TitleOfSection.js';
import Services from './Services.js';
import '../css/styleweb.css';
import search from '../image/search.svg';
import BlogSide from './BlogSide.js';
import Article from './Article.js';
import search2 from '../image/search2.svg';
function SearchBlog(props){
return(<div>
<p className="fs-5 fw-bolder text-start" >Search</p>
    <Form className="d-flex">
    
    <FormControl
      type="search"
      placeholder="Search"
      className="me-2 shadow-none border border-info "
      aria-label="Search"
      style={{width:320,height:40,marginTop:-8}}
    />
    <a href=" #" className="border border-secondary bg-info " style={{width:40,height:40,marginTop:-8,marginLeft:-40}}  >
     <img src={search2} className="my-1"   />
     </a>
    
    {/*  <img src={search}  className="border border-secondary bg-primary"/>*/}
    {/* <Button variant="outline-success">Search</Button> */}
  </Form>
  </div>
);

}
export default SearchBlog;
