import React from "react";
import { MDBAnimation } from "mdbreact";
import ReactDom from 'react-dom';
import blog from '../image/blog/blog-1.jpg'
const AnimationPage = () => {
    return (
        <MDBAnimation type="bounce" infinite>
            <img className="img-fluid" alt="" src={blog} />
        </MDBAnimation>
    );
};

export default AnimationPage;