import React, { useEffect } from 'react';
import ReactDom from 'react-dom';
import * as mdb from 'mdb-ui-kit';
 import 'animate-hover/css/animate-hover.min.css';
 import 'animate-hover/css/animate.css/animate.min.css';
import AOS from 'aos';

import "aos/dist/aos.css";

import 'bootstrap/dist/css/bootstrap.min.css';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import Navbarweb from './component/Navbarweb.js';
import {MDBAnimation}  from 'mdb-ui-kit'; 
import CardHome from './component/CardHome.js';
import Question from './component/Question.js';
import About from './component/About.js';
import TitleOfSection from './component/TitleOfSection.js';
import Contact from './component/Contact.js';
import FormContact from './component/FormContact.js';
import Category from './component/Category.js';
import CardOfCategory from './component/CardOfCategory.js';
import AccordionGeneral from './component/AccordionGeneral.js';
import  AskAndAnswer from './component/AskAndAnswer.js';
import Tool from './component/Tool.js';
import CategoryVedio  from './component/CategoryVedio.js';
import {Container,Navbar,Nav,Form,NavDropdown,FormControl,Button,Row} from 'react-bootstrap';
import AllService from './component/AllService.js';
import  AllTeam from './component/AllTeam.js';
import SubscribJoin from './component/SubscribJoin.js';
import AllWebsit from './component/AllWebsit.js';
import Footer from './component/Footer.js';
import Blog from './component/Blog.js';
import Play from './component/Play.js';
import Mask from './component/Mask.js';

import './style.css';
import './css/styleweb.css';
import './App.css';
import './index.css';
import 'animate.css';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import YourComponent from './component/YourComponent.js';
import Test from './component/Test.js';
import Anhi from './component/Anhi.js';
import { AnimationWrapper } from 'react-animations';
 import  Apptest from './component/Apptest.js';
 import newcss from '../src/css/newcss.css';
 import book from '../src/image/icon/book.svg';
 import { Routes, Route } from "react-router-dom";
function HomeApp() {

 
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);


function addclickset (event){

    const animations = [
      'animate__animated',
      'animate__flipInY'
    ];
var element=document.querySelector('.my-element');
event.target.classList.add(...animations);
setTimeout(()=>event.target.classList.remove(...animations),1000);

};




function  removeclickset (event){

    const animations = [
      'animate__animated',
      'animate__flipInY'
    ];
var element=document.querySelector('.my-element');

event.target.classList.remove(...animations);

};


function changecoloe (event){
addclickset();
setTimeout(removeclickset, 3000);


};

const styles = {
  '&:hover, &:focus': {
     background: '#707070',
     borderColor: '#707070'
   }
}

  return (

    
    <div className="App">
      <Container className="d-flex flex-column"></Container>

  
 <CardHome />
 
<br/>
<About  />
<br/>




 
{/* <Category/> */}
{/* <CardOfCategory /> */}





 <Tool data-aos={"fade-left"} /><br></br>
<CategoryVedio /><br/>
<AllService/>
<Mask/>
< AllTeam/> 

 <Question />
<br/>
<Contact />
<SubscribJoin /> 
<AllWebsit/>
<Footer/>



 
{/* <Blog /> */}


<Container/>

{/* <br/><br/><br/><br/>
<img src={book} />
<h1 className="my-element" onClick={addclickset} >habbbbboshe loves aLOSHEE</h1> */}


{/* <h1
  data-aos-offset='0'
   data-aos-delay='900'
 data-aos="fade-up"
 data-aos-duration='10'
     data-aos-mirror='true'
data-aos-once='true'
 >Example</h1>

<a href="#"  data-anijs="if: click, do: tada animated">gfgggfg</a>
<h1 class="animate__animated animate__bounce bb">An animated element</h1> */}





     

{/* 
<a href="">hinbsddf</a>



 */}

</div>

  );
}

export default HomeApp;
