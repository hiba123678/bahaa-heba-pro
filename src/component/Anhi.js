import React from 'react';
import { MDBRipple } from 'mdb-react-ui-kit';

import { MDBAnimation } from 'mdb-react-ui-kit';
import b from '../image/chek.jpg';
export default function Anhi() {
  return (
      <div>
    <MDBRipple
      className='bg-image hover-overlay shadow-1-strong rounded'
      style={{ maxWidth: '22rem' }}
      rippleTag='div'
      rippleColor='light'
    >
      <img src={b} className='w-100' />
      <a href='#!'>
        <div className='mask' style={{ backgroundColor: 'rgba(251, 251, 251, 0.2)' }}></div>
      </a>
    </MDBRipple>



<br/>


    </div>  
  );






  
}