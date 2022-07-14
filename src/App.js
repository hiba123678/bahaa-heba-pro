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
 import HomeApp from './HomeApp.js';
function App() {

 
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

  <Navbarweb />   

  <Routes>

<Route exact path="/" element={ <HomeApp/> } />
<Route exact path="about" element={ <About/> } />
<Route exact path="/blog" element={ <Blog/> } />
</Routes>
</div>

  );
}

export default App;
