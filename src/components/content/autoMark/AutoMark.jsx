import React from 'react';
import './styleAutoMark.scss'
import mark from '../../../sorce/icons/mark/avto.png'

function AutoMark() {
   return (
      <section className='mark'>
         <img src={mark} className='mark-img' alt="" />
      </section>
   );
}

export default AutoMark;