import React from 'react';
import ReactDom from 'react-dom';
import {Container,Accordion,} from 'react-bootstrap';
import  AccordionGeneral from './AccordionGeneral';

import '../css/styleweb.css';
function AskAndAnswer (props){
return(
<Container className="d-flex flex-column">

<AccordionGeneral numb="01" head="Camera" answerbody="Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non "/>
<br/>
<AccordionGeneral numb="02" head="Mecrofone" answerbody="Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non "/>
<br/>
<AccordionGeneral numb="03" head="sound" answerbody="Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non "/>
</Container>
);

}
export default  AskAndAnswer ;
