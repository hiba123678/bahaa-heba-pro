import React from 'react';
import ReactDom from 'react-dom';
import {Container,Row,Col,Card,Form,Button} from 'react-bootstrap';
import TitleOfSection from './TitleOfSection.js';
import Services from './Services.js';
import '../css/styleweb.css';
import { Search } from 'react-bootstrap-icons';
import SearchBlog from './SearchBlog.js';
import CatArticle from './CatArticle.js';
import RecentPost from './RecentPost.js';
import AllTag from './AllTag.js';
function BlogSide(props){
return(


<Container style={{height:1500}}  className="d-flex flex-column pt-4 shadow-lg" style={{marginTop:52}}>
<Row>
    <Col>

    <SearchBlog /><br/>
<CatArticle/>
<RecentPost/>
<AllTag/>
    </Col>

    </Row>
</Container>

);

}
export default BlogSide;
