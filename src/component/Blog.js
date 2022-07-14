import React from 'react';
import ReactDom from 'react-dom';
import {Container,Row,Col,Card,Form,Button} from 'react-bootstrap';
import TitleOfSection from './TitleOfSection.js';
import AllWebsit from './AllWebsit.js';
import '../css/styleweb.css';
import Footer from './Footer.js';
import Pagenum from './Pagenum.js';
import BlogSide from './BlogSide.js';
import Article from './Article.js';
import blog1 from '../image/blog/blog-1.jpg';
import blog2 from '../image/blog/blog-2.jpg';
import blog3 from '../image/blog/blog-3.jpg';

function Blog (props){
  
return(

<Container fluid style={{height:500}}>
<Container  className="d-flex flex-column">
<Row>
    <Col>
    <Article articleImg={blog1} articleTitle="Dolorum optio tempore voluptas dignissimos cumque fuga qui quibusdam quia" articleDesc="Similique neque nam consequuntur ad non maxime aliquam quas. Quibusdam animi praesentium. Aliquam et laboriosam eius aut nostrum quidem aliquid dicta. Et eveniet enim. Qui velit est ea dolorem doloremque deleniti aperiam unde soluta. Est cum et quod quos aut ut et sit sunt. Voluptate porro consequatur assumenda perferendis dolore.

"/>
    <Article articleImg={blog2} articleTitle="Nisi magni odit consequatur autem nulla dolorem" articleDesc="Incidunt voluptate sit temporibus aperiam. Quia vitae aut sint ullam quis illum voluptatum et. Quo libero rerum voluptatem pariatur nam. Ad impedit qui officiis est in non aliquid veniam laborum. Id ipsum qui aut. Sit aliquam et quia molestias laboriosam. Tempora nam odit omnis eum corrupti qui aliquid excepturi molestiae. Facilis et sint quos sed voluptas. Maxime sed tempore enim omnis non alias odio quos distinctio."/>
    <Article articleImg={blog3} articleTitle="Possimus soluta ut id suscipit ea ut. In quo quia et soluta libero sit sint." articleDesc="Aut iste neque ut illum qui perspiciatis similique recusandae non. Fugit autem dolorem labore omnis et. Eum temporibus fugiat voluptate enim tenetur sunt omnis. Doloremque est saepe laborum aut. Ipsa cupiditate ex harum at recusandae nesciunt. Ut dolores velit.

"/>
    
    </Col>
    <Col>
  
  <BlogSide />

  </Col>

</Row>
<br/><br/><br/>
<Row>
<Pagenum />
</Row>


</Container>
<AllWebsit/>
<Footer/>
</Container>
);

}
export default Blog;
